import { ArrowLeft, LockKeyhole, Mail, ShieldCheck } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#070A12] text-white">
      <section className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 py-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <a href="/" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-300 hover:text-cyan-300"><ArrowLeft className="h-4 w-4" /> Voltar</a>
          <div className="mt-12">
            <p className="text-sm font-semibold tracking-[0.35em] text-cyan-300">EQUATEC</p>
            <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Acesso seguro ao Control Hub</h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">Entre com seu e-mail e senha para acessar os módulos liberados pelo administrador. Cada ação crítica será registrada para garantir segurança, rastreabilidade e governança.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6"><ShieldCheck className="h-8 w-8 text-cyan-300" /><h2 className="mt-4 font-bold">Acesso aprovado</h2><p className="mt-2 text-sm leading-6 text-slate-400">Apenas usuários liberados pelo administrador conseguem acessar o ecossistema.</p></div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6"><LockKeyhole className="h-8 w-8 text-purple-300" /><h2 className="mt-4 font-bold">Permissão por módulo</h2><p className="mt-2 text-sm leading-6 text-slate-400">Cada usuário visualiza apenas os módulos, dados e ações autorizados.</p></div>
          </div>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-cyan-950/30">
          <div className="rounded-[1.5rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/10 via-purple-400/10 to-transparent p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Login</p>
            <h2 className="mt-3 text-2xl font-black">Entrar na plataforma</h2>
            <p className="mt-2 text-sm text-slate-400">Use as credenciais aprovadas pelo administrador.</p>
            <form className="mt-8 space-y-5">
              <div><label className="mb-2 block text-sm font-semibold text-slate-200">E-mail</label><div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-4"><Mail className="h-5 w-5 text-cyan-300" /><input type="email" placeholder="seuemail@dominio.com" className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500" /></div></div>
              <div><label className="mb-2 block text-sm font-semibold text-slate-200">Senha</label><div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-4"><LockKeyhole className="h-5 w-5 text-cyan-300" /><input type="password" placeholder="Digite sua senha" className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500" /></div></div>
              <button type="button" className="w-full rounded-2xl bg-cyan-400 px-6 py-4 font-black text-slate-950 transition hover:bg-cyan-300">Acessar sistema</button>
            </form>
            <div className="mt-6 flex flex-col gap-3 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between"><a href="/cadastro" className="hover:text-cyan-300">Solicitar novo cadastro</a><a href="/" className="hover:text-cyan-300">Voltar ao início</a></div>
            <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-4 text-xs leading-6 text-slate-400"><strong className="text-slate-200">Ambiente local:</strong> o administrador inicial criado no banco é <span className="text-cyan-300">capmneto@gmail.com</span>. A senha inicial do seed é <span className="text-cyan-300">Admin@123456</span>.</div>
          </div>
        </div>
      </section>
    </main>
  );
}
