import { ArrowLeft, BriefcaseBusiness, Mail, Phone, ShieldCheck, User } from "lucide-react";

export default function CadastroPage() {
  return (
    <main className="min-h-screen bg-[#070A12] text-white">
      <section className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 py-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <a href="/" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-300 hover:text-cyan-300"><ArrowLeft className="h-4 w-4" /> Voltar</a>
          <div className="mt-12"><p className="text-sm font-semibold tracking-[0.35em] text-cyan-300">EQUATEC</p><h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Solicitação de acesso ao ecossistema</h1><p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">O cadastro não libera acesso automaticamente. Toda solicitação será analisada pelo administrador, que definirá os módulos, permissões e escopos de acesso do usuário.</p></div>
          <div className="mt-10 rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-6"><ShieldCheck className="h-8 w-8 text-cyan-300" /><h2 className="mt-4 font-bold">Governança desde o cadastro</h2><p className="mt-2 text-sm leading-6 text-slate-300">Usuários entram como pendentes. Somente após aprovação poderão acessar módulos como Obras, FACILMART, Ativos, Cursos, Documentos ou Agentes de IA.</p></div>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-cyan-950/30"><div className="rounded-[1.5rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/10 via-purple-400/10 to-transparent p-8"><p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Cadastro</p><h2 className="mt-3 text-2xl font-black">Solicitar novo acesso</h2><p className="mt-2 text-sm text-slate-400">Preencha seus dados para análise do administrador.</p>
          <form className="mt-8 space-y-5">
            <div><label className="mb-2 block text-sm font-semibold text-slate-200">Nome completo</label><div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-4"><User className="h-5 w-5 text-cyan-300" /><input type="text" placeholder="Digite seu nome completo" className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500" /></div></div>
            <div><label className="mb-2 block text-sm font-semibold text-slate-200">E-mail</label><div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-4"><Mail className="h-5 w-5 text-cyan-300" /><input type="email" placeholder="seuemail@dominio.com" className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500" /></div></div>
            <div><label className="mb-2 block text-sm font-semibold text-slate-200">WhatsApp / Telefone</label><div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-4"><Phone className="h-5 w-5 text-cyan-300" /><input type="text" placeholder="+55 (00) 00000-0000" className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500" /></div></div>
            <div><label className="mb-2 block text-sm font-semibold text-slate-200">Módulo desejado</label><div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-4"><BriefcaseBusiness className="h-5 w-5 text-cyan-300" /><select className="w-full bg-transparent text-sm text-white outline-none"><option className="bg-slate-950">Gestão Familiar</option><option className="bg-slate-950">Gerenciamento de Obras</option><option className="bg-slate-950">FACILMART</option><option className="bg-slate-950">FACILMART Ativos</option><option className="bg-slate-950">Cursos e Treinamentos</option><option className="bg-slate-950">HUB de Agentes de IA</option></select></div></div>
            <div><label className="mb-2 block text-sm font-semibold text-slate-200">Justificativa do acesso</label><textarea placeholder="Explique por que precisa acessar este módulo." className="min-h-28 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-sm text-white outline-none placeholder:text-slate-500" /></div>
            <button type="button" className="w-full rounded-2xl bg-cyan-400 px-6 py-4 font-black text-slate-950 transition hover:bg-cyan-300">Enviar solicitação</button>
          </form>
          <div className="mt-6 flex flex-col gap-3 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between"><a href="/login" className="hover:text-cyan-300">Já tenho acesso</a><a href="/" className="hover:text-cyan-300">Voltar ao início</a></div>
          <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-4 text-xs leading-6 text-slate-400"><strong className="text-slate-200">Importante:</strong> esta tela ainda é visual. Na próxima etapa, conectaremos o formulário ao banco para criar usuários com status <span className="text-cyan-300">PENDING</span>.</div>
        </div></div>
      </section>
    </main>
  );
}
