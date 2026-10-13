# Update portfolio content with Sanity

The site now has a Sanity Studio at `/studio`. The Studio lets you edit the hero, experience, projects, and About section. Published changes are fetched automatically by the site without rebuilding or redeploying. The page cache refreshes within 30 seconds.

## One-time connection

1. Set `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET=production` in `.env.local` for local development and in the Vercel project's Production environment variables.
2. Add `http://localhost:3000` and the production site origin to the Sanity project's CORS origins.
3. Deploy the site once with those environment variables. Open `/studio`, create the **Portfolio page** document, and publish it. The fields start with the current portfolio content.

No API token is needed for a public dataset. Keep the project ID public; never add a write token to the website.

After this initial connection, update content by opening `/studio`, editing the **Portfolio page**, and publishing. No Vercel redeploy is required for content edits.
