# SSezireturns Next.js

Modern Next.js migration of the SSezireturns logistics website.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Forms:** Resend (contact form email)
- **Deployment:** Vercel

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with Header/Footer
│   ├── page.tsx            # Homepage
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── contact/page.tsx    # Functional contact form
│   ├── blog/page.tsx
│   ├── blog/[slug]/page.tsx
│   ├── request-a-quote/page.tsx
│   ├── workprocess/page.tsx
│   ├── our-team/page.tsx
│   ├── faqs/page.tsx
│   ├── trackyourparcel/page.tsx
│   ├── career/page.tsx
│   ├── comingsoon/page.tsx
│   ├── login/page.tsx
│   ├── register/page.tsx
│   ├── term-conditions/page.tsx
│   ├── sitemap.ts
│   └── api/contact/route.ts
├── components/
│   └── layout/
│       ├── Header.tsx
│       └── Footer.tsx
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```

3. Update `.env.local` with your actual values:
   - `NEXT_PUBLIC_APP_URL`
   - `RESEND_API_KEY`
   - `EMAIL_FROM`
   - `EMAIL_TO`

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Build for production:
   ```bash
   npm run build
   ```

## Deployment to Vercel

1. Push this repository to GitHub/GitLab/Bitbucket.

2. Import the project in Vercel.

3. Add the following environment variables in Vercel:
   - `NEXT_PUBLIC_APP_URL`
   - `RESEND_API_KEY`
   - `EMAIL_FROM`
   - `EMAIL_TO`

4. Deploy.

## URL Preservation

Old URLs are preserved via middleware and Vercel rewrites:

| Old URL | New URL |
|---------|---------|
| `/index.php` | `/` |
| `/about.php` | `/about` |
| `/services.php` | `/services` |
| `/contact.php` | `/contact` |
| `/blog.html` | `/blog` |
| `/request-a-quote.html` | `/request-a-quote` |
| ... | ... |

## Database

- **Original PHP site:** No database
- **Buzzlab Laravel app:** Remains on existing MySQL hosting at `/buzzlab/`
- **New Next.js site:** Sends contact form submissions through Resend; it does not require a database

## Notes

- The original PHP project at `C:\Users\ankii\Desktop\ez\` is untouched.
- All assets have been migrated to `public/assets/`.
- The Buzzlab Laravel admin panel is kept separate and unchanged.
