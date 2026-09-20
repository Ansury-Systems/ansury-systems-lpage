# Ansury Systems deployment

## Architecture

The site is a Vite + React static landing page deployed to Vercel. Lead submissions are sent from the browser to the Supabase Edge Function `ansury-lead-intake`, which validates the payload and stores it in Supabase. The browser never receives or uses a Supabase service-role key.

## Vercel configuration

`vercel.json` defines the Vite framework, frozen pnpm install, production build command, static output directory, and SPA fallback rewrite. Configure this public environment variable in Vercel for Production, Preview, and Development:

```text
VITE_SUPABASE_LEAD_INTAKE_URL=https://btwlytxbrguovuxtvbnl.supabase.co/functions/v1/ansury-lead-intake
```

The same value is provided in `.env.example`. Do not add service-role keys, HubSpot tokens, n8n credentials, or other private secrets to this frontend project.

## Supabase

The current database schema includes `lead_submissions`, `lead_profiles`, `automation_events`, and `email_sequence_enrollments`. Public browser access is limited by Row Level Security. The Edge Function uses its server-side Supabase runtime credentials to insert records and applies validation, honeypot filtering, and idempotency protection.

## Custom domain and Cloudflare DNS

After the Vercel project is created, add the chosen hostname to the Vercel project. Vercel will provide the exact DNS target and verification record. In Cloudflare DNS, create the record Vercel requests—normally a CNAME for a subdomain pointing to the Vercel hostname—and keep it DNS-only during initial verification. Do not proxy the record until Vercel reports the domain as verified and HTTPS is active.

A recommended hostname is `www.ansury.systems` for the primary marketing site. If the apex or `www` record is already used, choose a dedicated hostname such as `go.ansury.systems` instead.

## Verification checklist

1. Run `pnpm check`.
2. Run `pnpm build`.
3. Deploy to Vercel Production.
4. Open the Vercel deployment URL and submit a test lead.
5. Confirm a new row appears in `public.lead_submissions`.
6. Confirm the production custom domain resolves over HTTPS.
7. Only then enable the n8n/HubSpot enrichment workflow.
