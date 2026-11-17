# Publish your redesigned portfolio on GitHub Pages

**GitHub account:** `vikashbalajik`  
**Existing repository:** https://github.com/vikashbalajik/vikashbalajik.github.io  
**Your live site:** https://vikashbalajik.github.io/  
**Working branch in this guide:** `portfolio-redesign-2026`

## Important: You already have a repository

You **do not** need to create a new `vikashbalajik.github.io` repository. Your existing repository is already public and contains the older `index.html`, `profile.jpg`, `resume.pdf`, and `styles.css` files on `main`. We will update it **safely with a new branch and pull request**, retaining the ability to restore previous versions via Git history. Your URL stays the same.

## Method A: GitHub website, no terminal (recommended for beginners)

### Step 1 — Sign in and open the correct repository

1. Log in at https://github.com/ using the `vikashbalajik` account.
2. Visit **https://github.com/vikashbalajik/vikashbalajik.github.io**.
3. On the **Code** tab, use the branch selector above the files and verify it shows `main`.

### Step 2 — Create a new branch from `main`

1. Click the branch selector labeled **main** (top left above the file list).
2. Type `portfolio-redesign-2026`.
3. Choose **Create branch: portfolio-redesign-2026 from main**.
4. Verify the branch selector now says `portfolio-redesign-2026`.

You now have a safe copy of the existing site where you can make changes without changing the live `main` branch.

### Step 3 — Extract the ZIP onto your computer

1. Download `Vikash_Balaji_Portfolio_2026.zip` from ChatGPT.
2. Extract/unzip the file.
3. Open the extracted folder. You should see `index.html`, `styles.css`, `script.js`, `README.md`, `.nojekyll`, `GITHUB_PUBLISHING_GUIDE.md`, and an `assets` folder.
4. In `assets/`, check you can see the `.webp`, `.pdf`, `.svg`, and `.jpg` files.

**Important:** `index.html` must end up at the **repository root** — NOT inside `Vikash_Portfolio_2026/`. Keep the folder name `assets` and its files.

### Step 4 — Upload the updated files to your working branch

1. Back on GitHub, make sure you are viewing the `portfolio-redesign-2026` branch.
2. Select **Add file → Upload files**.
3. Drag the **contents** of the extracted folder onto the upload screen, including the `assets` folder. In Chrome you can drag the folder from File Explorer/Finder to preserve its relative paths. If the uploader doesn't preserve the directory structure, use Method B below instead.
4. Keep the old repository files that are not replaced (`profile.jpg`, `resume.pdf`) for now. The new HTML does not reference them.
5. The `index.html` and `styles.css` names match older files; GitHub will treat the upload as replacements on this branch.
6. Set commit message to `Redesign ServiceNow portfolio using portrait palette`.
7. Click **Commit changes** to the `portfolio-redesign-2026` branch.
8. Confirm the repository root displays `index.html`, `styles.css`, `script.js`, and a folder named `assets`.
9. Open `assets` on GitHub and confirm `vikash-portrait.webp`, `social-preview.jpg`, `favicon.svg`, and `Vikash_Balaji_Kokku_Resume.pdf` are present.

**Hidden files:** macOS Finder may hide `.nojekyll`. That's okay; this static website does not depend on it. It can be added later using **Add file → Create new file**, naming it `.nojekyll`, with empty content.

### Step 5 — Review via a pull request

1. Choose **Contribute → Open pull request** or click **Compare & pull request**.
2. Verify **base: `main`** and **compare: `portfolio-redesign-2026`**.
3. Name the pull request `Refresh personal portfolio`.
4. Review **Files changed**. Make sure the right `index.html` and `styles.css` changed and that the new `assets` and `script.js` were added.
5. Click **Create pull request**.
6. Select **Merge pull request**, then **Confirm merge**.
7. Switch back to `main` and verify the new files are there.

### Step 6 — Confirm GitHub Pages settings

1. Go to the repository's **Settings** tab.
2. In the left navigation choose **Pages** (under Code and automation).
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Under **Branch**, select `main` and `/(root)`, then click **Save**.
5. Open the **Actions** tab to review the Pages deployment. If it reports an error, open the failed workflow and read the error message.
6. Open **https://vikashbalajik.github.io/** and hard-refresh (Windows: Ctrl + Shift + R; Mac: Command + Shift + R) if you still see an older cached version.

You do **not** need to buy a domain or use another URL; the existing URL remains valid.

## Method B: Git commands (most reliable for uploading folders)

Run the following in Terminal **after** Git is installed and authenticated. This also preserves all older files until you deliberately remove them.

```bash
# 1. Clone your existing website repository
git clone https://github.com/vikashbalajik/vikashbalajik.github.io.git
cd vikashbalajik.github.io

# 2. Start a fresh branch from the live branch
git switch main
git pull origin main
git switch -c portfolio-redesign-2026

# 3. Copy the extracted site's contents into this cloned folder.
#    macOS example, ADJUST the Downloads path to wherever you extracted it:
cp -R ~/Downloads/Vikash_Portfolio_2026/. ./

# 4. Confirm correct files
git status

# 5. Commit and push the new branch
git add index.html styles.css script.js assets README.md GITHUB_PUBLISHING_GUIDE.md .nojekyll
git commit -m "Redesign ServiceNow portfolio using portrait palette"
git push -u origin portfolio-redesign-2026
```

Then go to the repository on GitHub, create a pull request from `portfolio-redesign-2026` into `main`, and merge it as described above. If `git switch -c` reports that the branch already exists, use a different branch name such as `portfolio-redesign-2026-v2` and update the push command.

**Do not run `git push --force` on `main`** for this. The pull request workflow is safer.

## After publishing: basic verification checklist

- [ ] The opening screen shows your **warm-background professional photo** (not the old picture).
- [ ] Header links scroll to About, Experience, Selected Work, Expertise, Credentials, and Contact.
- [ ] Mobile: menu opens, navigation works, and the menu closes after a link is tapped.
- [ ] No sideways scrolling on a phone.
- [ ] Download résumé opens/downloads your **current truth-source resume**.
- [ ] GitHub, LinkedIn, and email links point to your intended destinations.
- [ ] Your current experience reads Kyndryl + CVS Health — not older experience from outdated résumé versions.
- [ ] Text is readable and photo cropping looks right on your laptop and phone.
- [ ] The page can be opened at `https://vikashbalajik.github.io/` without a 404 error.

## How to roll back if you dislike the new version

Because the redesign is merged through a pull request, your older site remains in Git history. To revert, open the merged pull request and use **Revert** if available, or use Git to revert the merge commit on a new branch and merge that revert. Do not delete the repository.

## How to update the site later

1. On the repository, switch to `main` and create a fresh branch such as `update-resume-dec-2026`.
2. Upload the new `assets/Vikash_Balaji_Kokku_Resume.pdf` (or other changed file).
3. Commit, open a pull request, review, and merge into `main`.

## Official GitHub references

- https://docs.github.com/en/pages/quickstart
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request

These are general instructions; GitHub sometimes renames buttons or menus. All changes to your GitHub account must be performed by you unless you explicitly connect an integration with permission to make them.
