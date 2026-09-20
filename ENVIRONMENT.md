# Environment configuration

## Required Vercel variable

Set this variable in Vercel for **Production**, **Preview**, and **Development**:

```text
VITE_SUPABASE_LEAD_INTAKE_URL=https://btwlytxbrguovuxtvbnl.supabase.co/functions/v1/ansury-lead-intake
```

It is a public browser endpoint and is safe to expose in the built frontend. Never add `SUPABASE_SERVICE_ROLE_KEY`, HubSpot tokens, n8n credentials, or other private credentials to this Vite project.

For local development, create `.env.local` manually from this value. `.env.local` is ignored by Git and should never be committed.
