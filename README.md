# EQUATEC Control Hub

Ecossistema modular de gestão, obras, ativos, cursos e agentes de IA.

## Como rodar localmente

1. Instale o Node.js LTS.
2. Extraia o ZIP.
3. Abra a pasta no VS Code.
4. Copie `.env.example` para `.env`.
5. Rode:

```powershell
npm install
npx prisma validate
npx prisma migrate dev --name release_0_foundation
npx prisma db seed
npm run dev
```

Acesse:

- `http://localhost:3000`
- `http://localhost:3000/login`
- `http://localhost:3000/cadastro`

## Acesso inicial

- E-mail: `capmneto@gmail.com`
- Senha inicial: `Admin@123456`

## Observações

- O desenvolvimento local usa SQLite para evitar travas com MySQL no Windows.
- A produção futura na Hostinger/VPS poderá usar MySQL.
- A estrutura já está preparada para módulos, permissões, auditoria e agentes de IA.
