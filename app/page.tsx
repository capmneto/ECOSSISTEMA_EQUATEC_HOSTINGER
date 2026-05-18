import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Brain,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Cpu,
  Database,
  FileText,
  GraduationCap,
  HardHat,
  Layers3,
  LinkIcon,
  LockKeyhole,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Workflow,
  Wrench,
} from "lucide-react";

const whatsappUrl = "https://wa.me/5522998578981";
const linkedinUrl = "https://www.LinkIcon.com/in/carlos-machado-95917433/";

const navItems = [
  { label: "InÃ­cio", href: "#inicio" },
  { label: "Ecossistema", href: "#ecossistema" },
  { label: "MÃ³dulos", href: "#modulos" },
  { label: "Tarefas", href: "#tarefas" },
  { label: "Sobre Carlos", href: "#carlos" },
  { label: "Empresas", href: "#empresas" },
  { label: "Contato", href: whatsappUrl },
];

const ecosystemCards = [
  {
    title: "GestÃ£o Integrada",
    description:
      "Centralize obras, rotinas, documentos, tarefas e decisÃµes em uma base Ãºnica.",
    icon: Layers3,
  },
  {
    title: "Tecnologia Aplicada",
    description:
      "Use mÃ³dulos digitais para reduzir controles paralelos e aumentar produtividade.",
    icon: Cpu,
  },
  {
    title: "Engenharia e Processos",
    description:
      "Apoio tÃ©cnico para manutenÃ§Ã£o, obras, ativos, HVAC, PMOC e relatÃ³rios.",
    icon: Wrench,
  },
  {
    title: "IA Corporativa",
    description:
      "Agentes e recursos de IA para anÃ¡lise, padronizaÃ§Ã£o e apoio Ã  decisÃ£o.",
    icon: Brain,
  },
  {
    title: "AutomaÃ§Ã£o Operacional",
    description:
      "Fluxos via n8n para notificaÃ§Ãµes, aprovaÃ§Ãµes, formulÃ¡rios e rotinas.",
    icon: Workflow,
  },
  {
    title: "Dashboards Executivos",
    description:
      "VisÃ£o gerencial para indicadores, tarefas, obras, financeiro e performance.",
    icon: BarChart3,
  },
];

const modules = [
  {
    id: "obras",
    title: "GestÃ£o de Obras",
    description:
      "Controle fÃ­sico-financeiro, etapas, documentos, mediÃ§Ãµes, fotos, cotaÃ§Ãµes, pendÃªncias, evoluÃ§Ã£o da obra e histÃ³rico das decisÃµes.",
    button: "Acessar GestÃ£o de Obras",
    href: "/login",
    icon: HardHat,
  },
  {
    id: "facilmart",
    title: "FACILMART",
    description:
      "Ambiente de gestÃ£o empresarial para controle de sÃ³cios, financeiro, mobilizaÃ§Ã£o, ativos, ocorrÃªncias, garantias, manutenÃ§Ã£o e informaÃ§Ãµes operacionais.",
    button: "Conhecer FACILMART",
    href: whatsappUrl,
    icon: Building2,
  },
  {
    id: "ia",
    title: "IA Corporativa",
    description:
      "Agentes e recursos de inteligÃªncia artificial para apoiar documentos, decisÃµes, diagnÃ³sticos, anÃ¡lise de dados, produtividade e padronizaÃ§Ã£o.",
    button: "Conhecer IA Corporativa",
    href: whatsappUrl,
    icon: Brain,
  },
  {
    id: "ead",
    title: "Cursos EAD",
    description:
      "Ãrea de capacitaÃ§Ã£o com trilhas, aulas, conteÃºdos tÃ©cnicos, treinamentos corporativos e gestÃ£o de aprendizagem.",
    button: "Ver Cursos EAD",
    href: whatsappUrl,
    icon: GraduationCap,
  },
  {
    id: "ferramentas",
    title: "Ferramentas de Engenharia",
    description:
      "Checklists, modelos, cÃ¡lculos, planos de aÃ§Ã£o, relatÃ³rios, templates e ferramentas tÃ©cnicas para engenharia, manutenÃ§Ã£o, obras e gestÃ£o.",
    button: "Acessar Ferramentas",
    href: "/login",
    icon: Wrench,
  },
  {
    id: "automacao",
    title: "AutomaÃ§Ã£o via n8n",
    description:
      "Fluxos automatizados para integrar sistemas, formulÃ¡rios, notificaÃ§Ãµes, aprovaÃ§Ãµes, alertas, documentos, dados e rotinas operacionais.",
    button: "Ver AutomaÃ§Ãµes",
    href: whatsappUrl,
    icon: Workflow,
  },
  {
    id: "dashboards",
    title: "Dashboards Executivos",
    description:
      "PainÃ©is gerenciais para acompanhamento de indicadores, obras, tarefas, financeiro, treinamentos, produtividade e visÃ£o executiva da operaÃ§Ã£o.",
    button: "Ver Dashboards",
    href: "/login",
    icon: BarChart3,
  },
];

const taskHighlights = [
  "Cadastrar tarefas",
  "Definir responsÃ¡veis",
  "Controlar prazos",
  "Classificar prioridades",
  "Anexar documentos",
  "Acompanhar status",
  "Registrar evidÃªncias",
  "Centralizar informaÃ§Ãµes",
  "Reduzir retrabalho",
  "Gerar histÃ³rico de decisÃµes",
];

const expertise = [
  "GestÃ£o da ManutenÃ§Ã£o Industrial",
  "GestÃ£o de Obras",
  "HVAC e PMOC",
  "Integridade MecÃ¢nica",
  "GestÃ£o de Ativos",
  "SeguranÃ§a do Trabalho",
  "Indicadores e BI",
  "InteligÃªncia Artificial Aplicada",
];

const creas = ["CREA-AL", "CREA-ES", "CREA-RJ", "CREA-SP", "CREA-MG", "CREA-PB", "CREA-PE", "CREA-RN"];

const biographyBlocks = [
  "Engenharia MecÃ¢nica",
  "Engenharia de SeguranÃ§a do Trabalho",
  "Engenharia e Gerenciamento de ManutenÃ§Ã£o",
  "MBA em GestÃ£o de Projetos",
  "HVAC e Engenharia do Ar-Condicionado",
  "IA com Ãªnfase em negÃ³cios",
  "GestÃ£o de equipes multidisciplinares",
  "ProduÃ§Ã£o tÃ©cnica FIPEM / ABRAMAN",
];

const companyLogos = [
  { name: "Braskem", file: "logo-empresa-01.jpg" },
  { name: "Banco do Brasil", file: "logo-banco-do-brasil.jpg" },
  { name: "Caixa", file: "logo-caixa.jpg" },
  { name: "Fiocruz", file: "logo-empresa-02.png" },
  { name: "TechnipFMC", file: "logo-technipfmc.jpg" },
  { name: "MHWirth", file: "logo-mhwirth.jpg" },
  { name: "OceÃ¢nica", file: "logo-oceanica.jpg" },
  { name: "Indra", file: "logo-indra.png" },
  { name: "Stellantis", file: "logo-stellantis.avif" },
  { name: "In-Haus Industrial", file: "logo-empresa-03.jpg" },
  { name: "Enclimar", file: "logo-empresa-04.png" },
  { name: "Wechsel", file: "logo-empresa-05.png" },
  { name: "Schahin", file: "logo-empresa-06.jpg" },
  { name: "Vicel", file: "logo-empresa-07.jpg" },
  { name: "Prumo LogÃ­stica", file: "logo-dome.png" },
];

const audiences = [
  "Gestores de obras",
  "Engenheiros",
  "Gestores de manutenÃ§Ã£o",
  "Empresas de facilities",
  "Empresas de HVAC",
  "Equipes administrativas",
  "Consultores",
  "Prestadores de serviÃ§o",
  "Gestores financeiros",
  "Empresas orientadas a dados",
];

const problems = [
  "InformaÃ§Ãµes espalhadas em WhatsApp, e-mails e planilhas",
  "Dificuldade para acompanhar tarefas e pendÃªncias",
  "Perda de documentos e evidÃªncias",
  "Falta de histÃ³rico e rastreabilidade",
  "Retrabalho e baixa padronizaÃ§Ã£o",
  "AusÃªncia de dashboards executivos",
  "Processos manuais e repetitivos",
  "Demora na tomada de decisÃ£o",
];

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-4xl text-center">
      {eyebrow ? (
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-cyan-300">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function PrimaryButton({
  href,
  children,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-6 py-4 text-sm font-black text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:bg-cyan-300"
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}

function SecondaryButton({
  href,
  children,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/[0.03] px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-200"
    >
      {children}
    </Link>
  );
}

export default function HomePage() {
  return (
    <main id="inicio" className="min-h-screen bg-[#050814] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050814]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Link href="#inicio" className="group">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-cyan-300">
              EQUATEC
            </p>
            <p className="mt-1 hidden text-xs text-slate-400 sm:block">
              Tecnologia â€¢ Engenharia â€¢ IA
            </p>
          </Link>

          <nav className="hidden items-center gap-5 text-xs font-semibold text-slate-300 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target={item.href.startsWith("https") ? "_blank" : undefined}
                className="transition hover:text-cyan-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/login"
            className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-black text-slate-950 transition hover:bg-cyan-300"
          >
            Entrar
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.16),transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:46px_46px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:py-24 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200">
              <Sparkles className="h-4 w-4" />
              EQUATEC â€” Ecossistema de Tecnologia e GestÃ£o Integrada
            </div>

            <h1 className="max-w-5xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Ecossistema de Tecnologia e GestÃ£o Integrada para obras, empresas,
              engenharia, IA e decisÃµes executivas.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              A EQUATEC integra gestÃ£o de obras, FACILMART, IA corporativa,
              cursos EAD, ferramentas de engenharia, automaÃ§Ãµes via n8n e
              dashboards executivos em uma plataforma modular criada para
              transformar informaÃ§Ãµes dispersas em controle, produtividade e
              tomada de decisÃ£o.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryButton href="/login">Acessar plataforma</PrimaryButton>
              <SecondaryButton href={whatsappUrl} external>
                Solicitar acesso
              </SecondaryButton>
              <SecondaryButton href="#modulos">Conhecer mÃ³dulos</SecondaryButton>
              <SecondaryButton href={whatsappUrl} external>
                <MessageCircle className="h-4 w-4" />
                Falar no WhatsApp
              </SecondaryButton>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ["7+", "mÃ³dulos integrados"],
                ["IA", "base para agentes"],
                ["360Â°", "visÃ£o executiva"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-3xl border border-white/10 bg-white/[0.035] p-5"
                >
                  <p className="text-3xl font-black text-cyan-300">{value}</p>
                  <p className="mt-1 text-sm text-slate-400">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-cyan-400/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 shadow-2xl shadow-cyan-950/30">
              <img
                src="/home/hero-carlos.png"
                alt="Carlos Machado e Ecossistema EQUATEC"
                className="h-auto w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="ecossistema" className="mx-auto max-w-7xl px-5 py-20">
        <SectionTitle
          eyebrow="O que o ecossistema entrega"
          title="Da gestÃ£o fragmentada para um ambiente digital estruturado."
          description="O Ecossistema EQUATEC foi criado para apoiar profissionais e empresas que precisam sair da gestÃ£o por planilhas, mensagens, arquivos soltos e controles manuais, migrando para um ambiente digital rastreÃ¡vel e orientado a dados."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {ecosystemCards.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.title}
                className="group rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.06]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-black">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {card.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="modulos" className="border-y border-white/10 bg-white/[0.025] py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle
            eyebrow="MÃ³dulos"
            title="Uma plataforma modular para crescer por etapas, sem perder controle."
            description="Cada mÃ³dulo foi pensado para resolver uma frente real da operaÃ§Ã£o, mantendo acesso seguro, rastreabilidade, contexto e integraÃ§Ã£o."
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {modules.map((module) => {
              const Icon = module.icon;
              return (
                <article
                  id={module.id}
                  key={module.title}
                  className="flex min-h-[290px] flex-col rounded-3xl border border-white/10 bg-[#080D1C] p-6 transition hover:-translate-y-1 hover:border-cyan-300/40"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-black">{module.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">
                    {module.description}
                  </p>
                  <Link
                    href={module.href}
                    target={module.href.startsWith("https") ? "_blank" : undefined}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-cyan-300 hover:text-cyan-200"
                  >
                    {module.button}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="tarefas" className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
              <ClipboardCheck className="h-7 w-7" />
            </div>
            <h2 className="text-3xl font-black md:text-5xl">
              GestÃ£o de tarefas e rotinas com rastreabilidade.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Mais do que uma vitrine de mÃ³dulos, o Ecossistema EQUATEC apoia a
              rotina real do usuÃ¡rio: registrar demandas, organizar tarefas,
              controlar prazos, acompanhar pendÃªncias, anexar evidÃªncias,
              consultar histÃ³rico e transformar processos soltos em fluxos
              rastreÃ¡veis.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {taskHighlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-sm text-slate-200"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-300" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="carlos" className="border-y border-white/10 bg-white/[0.025] py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-3">
            <img
              src="/home/carlos-machado.jpg"
              alt="Carlos Machado"
              className="h-auto w-full rounded-[1.5rem] object-cover"
            />
          </div>

          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-cyan-300">
              Desenvolvido por Carlos Machado
            </p>
            <h2 className="text-3xl font-black md:text-5xl">
              Desenvolvido por quem vive a gestÃ£o tÃ©cnica na prÃ¡tica.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Carlos Machado Ã© Engenheiro MecÃ¢nico, Engenheiro de SeguranÃ§a do
              Trabalho e executivo tÃ©cnico com mais de 12 anos de experiÃªncia na
              lideranÃ§a de operaÃ§Ãµes de manutenÃ§Ã£o industrial, facilities e
              projetos de engenharia em ambientes de alta criticidade
              operacional.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-400">
              Atua na integraÃ§Ã£o entre engenharia, manutenÃ§Ã£o, gestÃ£o e
              tecnologia, desenvolvendo soluÃ§Ãµes para transformar processos
              tÃ©cnicos complexos em sistemas prÃ¡ticos de controle, decisÃ£o e
              melhoria contÃ­nua.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {expertise.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-[#080D1C] px-4 py-3 text-sm text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-7">
              <p className="mb-3 text-sm font-bold text-slate-300">
                Registros CREA vinculados
              </p>
              <div className="flex flex-wrap gap-2">
                {creas.map((crea) => (
                  <span
                    key={crea}
                    className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-200"
                  >
                    {crea}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryButton href={linkedinUrl} external>
                <LinkIcon className="h-4 w-4" />
                Ver LinkIcon
              </PrimaryButton>
              <SecondaryButton href={whatsappUrl} external>
                <MessageCircle className="h-4 w-4" />
                Falar com Carlos Machado
              </SecondaryButton>
              <SecondaryButton href="#biografia">Conhecer biografia</SecondaryButton>
              <SecondaryButton href={whatsappUrl} external>
                Solicitar acesso
              </SecondaryButton>
            </div>
          </div>
        </div>
      </section>

      <section id="biografia" className="mx-auto max-w-7xl px-5 py-20">
        <SectionTitle
          eyebrow="Biografia e autoridade"
          title="Engenharia, manutenÃ§Ã£o, gestÃ£o e tecnologia em uma mesma trajetÃ³ria."
          description="Carlos Machado integra experiÃªncia em campo, lideranÃ§a de equipes multidisciplinares, contratos industriais, ambientes de alta criticidade, indicadores, ferramentas digitais e inteligÃªncia artificial aplicada Ã  rotina operacional."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {biographyBlocks.map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 text-sm font-semibold text-slate-200"
            >
              <FileText className="mb-4 h-6 w-6 text-cyan-300" />
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="empresas" className="border-y border-white/10 bg-white/[0.025] py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle
            eyebrow="HistÃ³rico e autoridade"
            title="Empresas e organizaÃ§Ãµes com atuaÃ§Ã£o ao longo da carreira."
            description="Uma trajetÃ³ria construÃ­da em ambientes industriais, corporativos, facilities, engenharia, infraestrutura, manutenÃ§Ã£o e operaÃ§Ãµes de alta criticidade."
          />

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {companyLogos.map((company) => (
              <div
                key={company.name}
                className="flex min-h-[110px] items-center justify-center rounded-3xl border border-white/10 bg-white p-4"
                title={company.name}
              >
                <img
                  src={`/home/${company.file}`}
                  alt={company.name}
                  className="max-h-20 max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <SectionTitle
          eyebrow="Reconhecimentos"
          title="Reconhecimentos e validaÃ§Ãµes profissionais."
          description="A credibilidade do Ecossistema EQUATEC estÃ¡ conectada Ã  trajetÃ³ria profissional de Carlos Machado, Ã s recomendaÃ§Ãµes recebidas, Ã  rede tÃ©cnica construÃ­da e Ã  confianÃ§a gerada em projetos de engenharia, manutenÃ§Ã£o, gestÃ£o e ambientes crÃ­ticos."
        />

        <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 text-center">
          <ShieldCheck className="mx-auto mb-5 h-12 w-12 text-cyan-300" />
          <h3 className="text-2xl font-black">
            RecomendaÃ§Ãµes oficiais serÃ£o exibidas a partir de fontes reais.
          </h3>
          <p className="mt-4 text-slate-400">
            A seÃ§Ã£o estÃ¡ preparada para receber cards com nome, cargo, empresa,
            depoimento e link de origem, sem inventar recomendaÃ§Ãµes.
          </p>
          <div className="mt-7">
            <PrimaryButton href={linkedinUrl} external>
              Ver recomendaÃ§Ãµes no LinkIcon
            </PrimaryButton>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle
            eyebrow="Para quem Ã©"
            title="Para profissionais e empresas que precisam de controle, dados e produtividade."
            description="O ecossistema foi pensado para quem precisa controlar tarefas, documentos, prazos, ativos, obras, treinamentos, indicadores e decisÃµes em um ambiente Ãºnico."
          />

          <div className="flex flex-wrap justify-center gap-3">
            {audiences.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.035] px-5 py-3 text-sm text-slate-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2">
        <div>
          <SectionTitle
            eyebrow="Problemas resolvidos"
            title="Menos dispersÃ£o, mais rastreabilidade."
            description="A EQUATEC foi pensada para reduzir gargalos comuns em operaÃ§Ãµes tÃ©cnicas, obras, manutenÃ§Ã£o, gestÃ£o empresarial e rotinas administrativas."
          />
        </div>

        <div className="space-y-3">
          {problems.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-sm text-slate-300"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/10 via-blue-500/10 to-transparent p-8 md:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-[0.75fr_1.25fr]">
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-cyan-300/10 text-cyan-300">
                <Database className="h-10 w-10" />
              </div>
              <div>
                <h2 className="text-3xl font-black md:text-5xl">
                  Tecnologia, IA e automaÃ§Ã£o para evoluÃ§Ã£o contÃ­nua.
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-300">
                  A plataforma foi estruturada para evoluir com recursos de IA,
                  automaÃ§Ãµes, integraÃ§Ãµes e painÃ©is gerenciais, permitindo que
                  processos operacionais e administrativos sejam cada vez mais
                  conectados, inteligentes e orientados por dados.
                </p>
                <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    "IA Corporativa",
                    "n8n",
                    "Dashboards",
                    "PermissÃµes",
                    "MÃ³dulos plugÃ¡veis",
                    "Estrutura escalÃ¡vel",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-200"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-24 text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-cyan-300">
          PrÃ³ximo passo
        </p>
        <h2 className="text-4xl font-black md:text-6xl">
          Pronto para transformar sua gestÃ£o em um ecossistema integrado,
          inteligente e rastreÃ¡vel?
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Solicite acesso, conheÃ§a os mÃ³dulos disponÃ­veis ou fale diretamente
          com Carlos Machado para entender como o Ecossistema EQUATEC pode
          apoiar sua operaÃ§Ã£o.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <PrimaryButton href={whatsappUrl} external>
            Solicitar acesso
          </PrimaryButton>
          <SecondaryButton href={whatsappUrl} external>
            <MessageCircle className="h-4 w-4" />
            Falar no WhatsApp
          </SecondaryButton>
          <SecondaryButton href="/login">Entrar na plataforma</SecondaryButton>
          <SecondaryButton href={linkedinUrl} external>
            <LinkIcon className="h-4 w-4" />
            Ver LinkIcon
          </SecondaryButton>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black/20 px-5 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-bold text-white">EQUATEC â€” Consultoria e ServiÃ§os Especializados</p>
            <p>GestÃ£o da ManutenÃ§Ã£o Industrial â€¢ Engenharia Especializada â€¢ SoluÃ§Ãµes com IA</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href={linkedinUrl} target="_blank" className="hover:text-cyan-300">
              LinkIcon
            </Link>
            <Link href={whatsappUrl} target="_blank" className="hover:text-cyan-300">
              WhatsApp
            </Link>
            <Link href="/login" className="hover:text-cyan-300">
              Entrar
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}


