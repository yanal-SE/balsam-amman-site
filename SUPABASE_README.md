## Supabase setup and deploy notes

To store bookings and enable the demo to work end-to-end, follow these steps:

1) Create a Supabase project
- Go to https://app.supabase.com and create a free project.
- After the project is ready, go to Settings → API and copy the Project URL (use as SUPABASE_URL) and the Project API keys. You'll need the Service Role key.

2) Create the bookings table
- In Supabase → SQL Editor → paste the contents of `SUPABASE_CREATE_TABLE.sql` and run it to create the `bookings` table.

3) Add Vercel environment variables (in your Vercel project settings)
- SUPABASE_URL = <the Supabase project URL>
- SUPABASE_SERVICE_ROLE_KEY = <the Supabase service_role key>

Note: For client-side access (if you want to use anonymous requests directly from the browser), also add:
- NEXT_PUBLIC_SUPABASE_URL = <Supabase URL>
- NEXT_PUBLIC_SUPABASE_ANON_KEY = <anon public key>

4) Redeploy the site on Vercel (trigger new deployment)
- After adding the env vars, trigger a redeploy (either push to main or redeploy via Vercel dashboard). The API `/api/book` will start inserting bookings into your Supabase `bookings` table.

5) Test a booking
- From the live site (or curl), submit the booking form on /appointments. Verify the inserted row in Supabase Table Editor → bookings.

If you want, I can perform steps 3–4 for you if you add the SUPABASE_* keys as repository secrets or provide them here securely. Otherwise follow the steps above and share the deployment URL when ready; I'll test and confirm.
