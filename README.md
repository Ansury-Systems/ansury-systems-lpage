# Ansury Systems

Premium landing page for Ansury Systems, an AI automation agency.

## Local development

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

## Checks

```bash
pnpm check
pnpm build
```

## Production

The project is configured for Vercel in `vercel.json`. Set `VITE_SUPABASE_LEAD_INTAKE_URL` in the Vercel project environment, then deploy with the Vercel CLI or a connected Git repository. Full deployment and DNS instructions are in [`DEPLOYMENT.md`](./DEPLOYMENT.md).

## Lead capture

Form submissions are sent to the Supabase Edge Function `ansury-lead-intake` and stored in Supabase. The public form only uses the Edge Function URL; private Supabase credentials remain server-side.
