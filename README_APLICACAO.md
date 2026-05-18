# Pacote de atualização da Home EQUATEC

Este pacote contém a nova Home institucional premium do EQUATEC, conforme a missão enviada.

## Arquivos incluídos

- `app/page.tsx`
- `public/home/` com imagens e logos renomeados

## Como aplicar no seu projeto local

1. Extraia este ZIP.
2. Copie a pasta `app` para a raiz do seu projeto, substituindo `app/page.tsx`.
3. Copie a pasta `public/home` para a raiz do seu projeto.
4. Rode:

```powershell
npm run build
```

5. Se o build passar:

```powershell
git add .
git commit -m "Nova Home premium EQUATEC"
git push origin main
```

6. Na VPS:

```bash
cd /opt/equatec/apps/equatec-control-hub
git pull origin main
cd /opt/equatec
docker compose up -d --build
```

## Observações

- Não altera banco de dados.
- Não altera Prisma.
- Não altera autenticação.
- Não altera Docker.
- Não altera backend.
- Apenas substitui a Home e adiciona assets visuais em `public/home`.
