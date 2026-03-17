# Vercel Git connection (one-time setup)

Connect this project on Vercel to the GitHub repo so pushes to `main` trigger automatic deployments.

## Steps (in Vercel Dashboard)

1. Open [Vercel Dashboard](https://vercel.com/dashboard) and select the **peccolehomes.com** (or matching) project.
2. Go to **Settings → Git**.
3. If **Connected Git Repository** is empty or wrong:
   - Click **Connect Git Repository** (or **Change**).
   - Choose **GitHub** and authorize if prompted.
   - Select **DrJanDuffy/peccolehomes.com** and branch **main**.
   - Save.

If the project was created without Git, use **Add New → Project** and **Import** the repo **DrJanDuffy/peccolehomes.com**, then set the same production domain in the new project’s settings.

After connecting, every push to `main` will trigger a new Vercel build and deploy.
