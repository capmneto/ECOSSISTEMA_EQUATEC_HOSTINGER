import "dotenv/config";
import { PrismaClient, AccessLevel, AiAgentStatus, ModuleStatus, UserStatus } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import bcrypt from "bcryptjs";

const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_URL ?? "file:./dev.db" });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Iniciando seed do EQUATEC Control Hub...");
  const passwordHash = await bcrypt.hash("Admin@123456", 12);

  const organization = await prisma.organization.upsert({
    where: { id: "org_equatec_root" },
    update: {},
    create: { id: "org_equatec_root", name: "EQUATEC Control Hub", tradeName: "EQUATEC", type: "ECOSSISTEMA", isActive: true },
  });

  const superAdmin = await prisma.user.upsert({
    where: { email: "capmneto@gmail.com" },
    update: { status: UserStatus.APPROVED, name: "Carlos Machado", mustChangePass: true },
    create: { name: "Carlos Machado", email: "capmneto@gmail.com", phone: "+55 22 99857-8981", passwordHash, status: UserStatus.APPROVED, mustChangePass: true, approvedAt: new Date() },
  });

  await prisma.organizationUser.upsert({
    where: { organizationId_userId: { organizationId: organization.id, userId: superAdmin.id } },
    update: { isActive: true, title: "Super Administrador" },
    create: { organizationId: organization.id, userId: superAdmin.id, title: "Super Administrador", isActive: true },
  });

  const roles = [
    { name: "SUPER_ADMIN", description: "Acesso total ao ecossistema.", isSystem: true },
    { name: "ADMIN", description: "Administrador geral com permissões elevadas.", isSystem: true },
    { name: "MODULE_MANAGER", description: "Gestor de módulo específico.", isSystem: true },
    { name: "USER", description: "Usuário operacional aprovado.", isSystem: true },
    { name: "VIEWER", description: "Usuário com acesso somente leitura.", isSystem: true },
    { name: "GUEST", description: "Acesso temporário e restrito.", isSystem: true },
    { name: "STUDENT", description: "Aluno do módulo de cursos e treinamentos.", isSystem: true },
    { name: "INSTRUCTOR", description: "Instrutor de cursos e treinamentos.", isSystem: true },
  ];
  for (const role of roles) await prisma.role.upsert({ where: { name: role.name }, update: role, create: role });

  const modules = [
    { key: "DASHBOARD", name: "Dashboard Geral", description: "Visão geral do ecossistema.", route: "/dashboard", icon: "LayoutDashboard", status: ModuleStatus.ACTIVE, order: 1, isCore: true },
    { key: "ADMIN", name: "Administração", description: "Usuários, permissões, módulos e configurações.", route: "/admin", icon: "Shield", status: ModuleStatus.ACTIVE, order: 2, isCore: true },
    { key: "GESTAO_FAMILIAR", name: "Gestão Familiar", description: "Finanças, documentos, agenda e tarefas familiares.", route: "/gestao-familiar", icon: "Home", status: ModuleStatus.DEVELOPMENT, order: 3, isCore: false },
    { key: "OBRAS", name: "Gerenciamento de Obras", description: "Controle físico-financeiro, etapas, documentos, medições e cotações.", route: "/obras", icon: "Building2", status: ModuleStatus.DEVELOPMENT, order: 4, isCore: false },
    { key: "FACILMART", name: "FACILMART", description: "Gestão empresarial, sócios, financeiro, mobilização e operação.", route: "/facilmart", icon: "Store", status: ModuleStatus.DEVELOPMENT, order: 5, isCore: false },
    { key: "FACILMART_ATIVOS", name: "FACILMART Ativos", description: "Gestão de ativos, TAGs, garantia, manutenção, ocorrências e localização.", route: "/facilmart/ativos", icon: "PackageSearch", status: ModuleStatus.DEVELOPMENT, order: 6, isCore: false },
    { key: "DOCUMENTOS", name: "Documentos Inteligentes", description: "Upload, classificação, análise por IA e organização documental.", route: "/documentos", icon: "Files", status: ModuleStatus.DEVELOPMENT, order: 7, isCore: false },
    { key: "IA_ASSISTENTE", name: "IA Assistente", description: "Análise de dados, documentos, imagens, PDFs e consultas inteligentes.", route: "/ia", icon: "Bot", status: ModuleStatus.DEVELOPMENT, order: 8, isCore: false },
    { key: "HUB_AGENTES", name: "HUB de Agentes", description: "Agente Matriz e agentes especializados por módulo.", route: "/agentes", icon: "Network", status: ModuleStatus.DEVELOPMENT, order: 9, isCore: false },
    { key: "CURSOS_TREINAMENTOS", name: "Cursos e Treinamentos", description: "Trilhas, aulas, provas, certificados e controle de acesso.", route: "/cursos", icon: "GraduationCap", status: ModuleStatus.DEVELOPMENT, order: 10, isCore: false },
    { key: "FERRAMENTAS_GESTAO", name: "Ferramentas de Gestão", description: "Checklists, planos de ação, relatórios, análises e dashboards.", route: "/ferramentas", icon: "Wrench", status: ModuleStatus.DEVELOPMENT, order: 11, isCore: false },
    { key: "CONFIGURACOES", name: "Configurações", description: "Configurações globais do sistema.", route: "/configuracoes", icon: "Settings", status: ModuleStatus.ACTIVE, order: 12, isCore: true },
  ];

  const createdModules = [];
  for (const moduleData of modules) {
    createdModules.push(await prisma.module.upsert({ where: { key: moduleData.key }, update: moduleData, create: moduleData }));
  }

  const permissionActions = ["CREATE", "READ", "UPDATE", "DELETE", "APPROVE", "MANAGE", "EXPORT", "UPLOAD", "AI_ANALYSIS"];
  for (const moduleData of modules) {
    for (const action of permissionActions) {
      const code = `${moduleData.key}.${action}`;
      await prisma.permission.upsert({
        where: { code },
        update: { name: `${moduleData.name} - ${action}`, moduleKey: moduleData.key, action, resource: moduleData.key },
        create: { code, name: `${moduleData.name} - ${action}`, description: `Permissão ${action} para o módulo ${moduleData.name}.`, moduleKey: moduleData.key, action, resource: moduleData.key },
      });
    }
  }

  const superAdminRole = await prisma.role.findUniqueOrThrow({ where: { name: "SUPER_ADMIN" } });
  await prisma.userRole.upsert({ where: { userId_roleId: { userId: superAdmin.id, roleId: superAdminRole.id } }, update: {}, create: { userId: superAdmin.id, roleId: superAdminRole.id } });

  const allPermissions = await prisma.permission.findMany();
  for (const permission of allPermissions) {
    await prisma.rolePermission.upsert({ where: { roleId_permissionId: { roleId: superAdminRole.id, permissionId: permission.id } }, update: {}, create: { roleId: superAdminRole.id, permissionId: permission.id } });
  }

  for (const moduleData of createdModules) {
    await prisma.userModuleAccess.upsert({
      where: { userId_moduleId_scopeType_scopeId: { userId: superAdmin.id, moduleId: moduleData.id, scopeType: "GLOBAL", scopeId: "ALL" } },
      update: { accessLevel: AccessLevel.FULL, canCreate: true, canRead: true, canUpdate: true, canDelete: true, canApprove: true, canManage: true },
      create: { userId: superAdmin.id, moduleId: moduleData.id, accessLevel: AccessLevel.FULL, canCreate: true, canRead: true, canUpdate: true, canDelete: true, canApprove: true, canManage: true, scopeType: "GLOBAL", scopeId: "ALL" },
    });
  }

  const agents = [
    { key: "AGENTE_MATRIZ", name: "Agente Matriz", description: "Orquestrador central do ecossistema. Interpreta solicitações, verifica permissões e direciona ações aos módulos corretos.", moduleKey: "HUB_AGENTES", status: AiAgentStatus.ACTIVE, modelName: "gemini", basePrompt: "Você é o Agente Matriz do EQUATEC Control Hub. Antes de executar qualquer ação, verifique usuário, status, módulo, permissão, escopo e necessidade de aprovação." },
    { key: "AGENTE_OBRAS", name: "Agente de Obras", description: "Apoia análise de orçamento, etapas, medições, documentos e evolução física-financeira de obras.", moduleKey: "OBRAS", status: AiAgentStatus.DEVELOPMENT, modelName: "gemini", basePrompt: "Você é um agente especializado em gerenciamento de obras." },
    { key: "AGENTE_FACILMART", name: "Agente FACILMART", description: "Apoia gestão empresarial, sócios, mobilização, ativos, estoque, financeiro e operação FACILMART.", moduleKey: "FACILMART", status: AiAgentStatus.DEVELOPMENT, modelName: "gemini", basePrompt: "Você é um agente especializado na gestão da FACILMART." },
    { key: "AGENTE_ATIVOS", name: "Agente de Ativos", description: "Apoia cadastro, TAG, garantia, manutenção, ocorrências e histórico dos ativos empresariais.", moduleKey: "FACILMART_ATIVOS", status: AiAgentStatus.DEVELOPMENT, modelName: "gemini", basePrompt: "Você é um agente especializado em gestão de ativos." },
    { key: "AGENTE_CURSOS", name: "Agente de Cursos e Treinamentos", description: "Apoia criação de trilhas, aulas, provas, certificados e controle de aprendizagem.", moduleKey: "CURSOS_TREINAMENTOS", status: AiAgentStatus.DEVELOPMENT, modelName: "gemini", basePrompt: "Você é um agente especializado em cursos e treinamentos." },
  ];
  for (const agent of agents) await prisma.aiAgent.upsert({ where: { key: agent.key }, update: agent, create: agent });

  await prisma.systemSetting.upsert({ where: { key: "PLATFORM_NAME" }, update: { value: "EQUATEC Control Hub" }, create: { key: "PLATFORM_NAME", value: "EQUATEC Control Hub", description: "Nome oficial da plataforma.", isPublic: true } });
  await prisma.systemSetting.upsert({ where: { key: "SECURITY_MODEL" }, update: { value: { rbac: true, abac: true, adminApprovalRequired: true, auditLogEnabled: true } }, create: { key: "SECURITY_MODEL", value: { rbac: true, abac: true, adminApprovalRequired: true, auditLogEnabled: true }, description: "Modelo de segurança da plataforma.", isPublic: false } });
  await prisma.auditLog.create({ data: { userId: superAdmin.id, action: "SYSTEM", moduleKey: "ADMIN", resource: "SEED", resourceId: "release_0_foundation", description: "Seed inicial do EQUATEC Control Hub executado com sucesso.", metadata: { release: "0", environment: "development" } } });

  console.log("Seed concluído com sucesso.");
  console.log("Usuário administrador criado:");
  console.log("E-mail: capmneto@gmail.com");
  console.log("Senha inicial: Admin@123456");
}

main().catch((error) => { console.error("Erro ao executar seed:", error); process.exit(1); }).finally(async () => { await prisma.$disconnect(); });
