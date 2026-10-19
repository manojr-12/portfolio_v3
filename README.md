# Manoj Ravichandran — Portfolio

Personal portfolio built with Next.js and Sanity.
<img width="1418" height="988" alt="image" src="https://github.com/user-attachments/assets/3450e09b-182f-44c8-81c1-eda977d564e9" />


## Links

- **Live site:** [portfoliov3-ecru.vercel.app](https://portfoliov3-ecru.vercel.app)
- **Source code:** [github.com/manojr-12/portfolio_v3](https://github.com/manojr-12/portfolio_v3)
- **Content editor:** [Portfolio Studio](https://portfoliov3-ecru.vercel.app/studio)

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Set `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET=production` in `.env.local` before running the site or opening `/studio`.

## Updating content

Open the [Portfolio Studio](https://portfoliov3-ecru.vercel.app/studio), edit the **Portfolio page**, and publish. To replace the resume, upload a PDF in the **Resume PDF** field and publish. Published content appears on the site within about 30 seconds without a Vercel redeploy. See [SANITY_SETUP.md](SANITY_SETUP.md) for setup details.
