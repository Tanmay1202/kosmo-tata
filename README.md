# Kosmo Tata

Next.js dealership website for the Tata Motors vehicle range.

## Getting Started

Requires Node.js 20.9 or newer. Install dependencies and start the development server:

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

Copy `.env.example` to `.env.local` and provide SMTP credentials to deliver contact and booking submissions. In development, submissions are acknowledged without sending email when SMTP is not configured. In production, configure the SMTP variables before deploying; the API returns an error instead of claiming delivery when credentials are missing.

## Deploy to Vercel

1. Import the repository into Vercel using Git integration. Vercel detects Next.js and uses `npm run build` automatically.
2. Set the project's Node.js version to **20.x** or newer.
3. Add `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, and `SMTP_PASS` under **Settings → Environment Variables** for each environment that needs to send email. Keep credentials server-side; do not prefix them with `NEXT_PUBLIC_`.
4. Deploy and verify the site and a test contact submission.

Run a production build locally before deployment:

```bash
npm run build
```
