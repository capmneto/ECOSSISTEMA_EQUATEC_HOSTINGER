import { Brain, Building2, GraduationCap, LayoutDashboard, Lock, ShieldCheck, Store, Wrench } from "lucide-react";

const modules = [
  { title: "Gestão de Obras", description: "Controle físico-financeiro, etapas, documentos, medições, fotos, cotações e evolução da obra.", icon: Building2 },
  { title: "FACILMART", description: "Gestão empresarial, sócios, financeiro, mobilização, ativos, ocorrências, garantias e manutenção.", icon: Store },
  { title: "HUB de Agentes de IA", description: "Agente Matriz e agentes especializados para documentos, obras, ativos, gestão e treinamentos.", icon: Brain },
  { title: "Cursos e Treinamentos", description: "Trilhas, aulas, provas, certificados, controle de acesso e gestão de aprendizagem.", icon: GraduationCap },
  { title: "Ferramentas de Gestão", description: "Checklists, planos de ação, relatórios gerenciais, análises técnicas e dashboards.", icon: Wrench },
  { title: "Administração Segura", description: "Login, aprovação de usuários, permissões por módulo, auditoria e controle de acesso.", icon: ShieldCheck },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070A12] text-white">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8">
        <header className="flex items-center justify-between border-b border-white/10 pb-6">
          <div>
            <p className="text-sm font-semibold tracking-[0.35em] text-cyan-300">EQUATEC</p>
            <h1 className="mt-2 text-2xl font-bold">Control Hub</h1>
          </div>
          <div className="flex items-center gap-3">
            <a href="/cadastro" className="hidden rounded-full border border-white/15 px-5 py-2 text-sm font-medium text-white/80 transition hover:border-cyan-300 hover:text-cyan-300 sm:block">Solicitar acesso</a>
            <a href="/login" className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-bold text-slate-950 transition hover:bg-cyan-300">Entrar</a>
          </div>
        </header>
        <div className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <section>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200">
              <Lock className="h-4 w-4" /> Ecossistema modular com segurança, IA e auditoria
            </div>
            <h2 className="max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">Plataforma integrada para gestão, obras, ativos, cursos e agentes de IA.</h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">O EQUATEC Control Hub nasce como a base central de um ecossistema de ferramentas profissionais, com login aprovado por administrador, permissões granulares, banco de dados estruturado, IA integrada e arquitetura preparada para expansão segura.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="/login" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-6 py-4 font-bold text-slate-950 transition hover:bg-cyan-300"><LayoutDashboard className="h-5 w-5" /> Acessar plataforma</a>
              <a href="/cadastro" className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-6 py-4 font-bold text-white transition hover:border-cyan-300 hover:text-cyan-300">Solicitar cadastro</a>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"><p className="text-3xl font-black text-cyan-300">RBAC</p><p className="mt-2 text-sm text-slate-400">Perfis e permissões por módulo.</p></div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"><p className="text-3xl font-black text-purple-300">ABAC</p><p className="mt-2 text-sm text-slate-400">Acesso por contexto, item e escopo.</p></div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"><p className="text-3xl font-black text-emerald-300">IA</p><p className="mt-2 text-sm text-slate-400">Agente Matriz e agentes especializados.</p></div>
            </div>
          </section>
          <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-cyan-950/30 backdrop-blur">
            <div className="rounded-[1.5rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/10 via-purple-400/10 to-transparent p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Release 0</p>
              <h3 className="mt-3 text-2xl font-black">Fundação do Ecossistema</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">Banco, módulos, usuário administrador, permissões, auditoria e agentes iniciais já preparados para evolução por releases.</p>
              <div className="mt-6 space-y-3">
                {["Login e cadastro com aprovação", "Permissões RBAC + ABAC", "Módulos plugáveis", "Auditoria de ações críticas", "Base para Gemini, WhatsApp, Telegram e n8n"].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-200"><span className="h-2 w-2 rounded-full bg-cyan-300" />{item}</div>
                ))}
              </div>
            </div>
          </section>
        </div>
        <section className="grid gap-4 pb-10 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => { const Icon = module.icon; return (
            <article key={module.title} className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.06]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300"><Icon className="h-6 w-6" /></div>
              <h3 className="text-lg font-bold">{module.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{module.description}</p>
            </article>
          );})}
        </section>
      </section>
    </main>
  );
}
