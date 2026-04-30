# Tezana White — IT Labs Portfolio
**GitHub Pages Site · Sci-Fi Command Center Theme**

A personal IT portfolio documenting hands-on labs, projects, and skill development across IT support, cybersecurity, cloud, and data center technologies.

🔗 **Live site:** `https://yourusername.github.io`

---

## 📁 File Structure

```
your-repo/
├── index.html                  ← Main page (all sections)
├── README.md                   ← This file
└── assets/
    ├── css/
    │   └── style.css           ← All styles and theme variables
    ├── js/
    │   └── main.js             ← Hamburger menu, animations, typewriter
    ├── images/
    │   └── profile-sci-fi.png  ← Your portrait image ← REPLACE THIS
    └── videos/
        └── hero-video.mp4      ← Hero background video ← REPLACE THIS
```

---

## 🚀 Publishing on GitHub Pages

1. Create a GitHub repo named exactly: **`yourusername.github.io`**
2. Upload all files keeping the folder structure intact
3. Go to **Settings → Pages**
4. Under **Source** select `main` branch and `/ (root)`
5. Click **Save** — your site goes live at `https://yourusername.github.io` in ~60 seconds

---

## ✏️ How to Edit

### Replace the profile image
1. Add your image to `assets/images/`
2. Name it `profile-sci-fi.png` (or update the `src` in `index.html`):
```html
<img src="assets/images/your-photo.png" alt="Your Name — portrait" />
```

### Replace the hero video
1. Add your video to `assets/videos/`
2. Name it `hero-video.mp4` (or update the `src` in `index.html`):
```html
<source src="assets/videos/your-video.mp4" type="video/mp4"/>
```
> The video is muted, autoplays, and loops automatically. Opacity and grayscale are controlled in `style.css` under `.hero-video-bg video`.

### Update your name / headline
Find and edit this block in `index.html`:
```html
<h1 class="hero-name">
  Tezana
  <span class="last">White</span>
</h1>
<p class="hero-sub">Building hands-on technical skills...</p>
```

### Update GitHub / LinkedIn / email links
Search for `yourusername` and `your.email@example.com` in `index.html` and replace:
```html
href="https://github.com/yourusername"
href="https://linkedin.com/in/yourusername"
href="mailto:your.email@example.com"
```

### Add a new lab card
Find `<!-- LAB 4 -->` inside the `.labs-grid` div and paste after it:
```html
<!-- LAB 5 -->
<a href="YOUR_GITHUB_REPO_LINK" class="lab-card reveal">
  <div class="lc-row1">
    <span class="lc-num">LAB-005</span>
    <span class="badge badge-done">Completed</span>
    <!-- badge options: badge-done | badge-wip | badge-plan -->
  </div>
  <div class="lc-title">Your Lab Title</div>
  <div class="lc-cat">Category / Domain</div>
  <p class="lc-summary">What you did and what you learned.</p>
  <div class="lc-meta">
    <span><strong>Difficulty:</strong> Beginner</span>
    <span><strong>Tools:</strong> Tool1, Tool2</span>
    <span><strong>Skills:</strong> Skill1, Skill2</span>
  </div>
  <div class="chip-row">
    <span class="chip">Tag1</span>
    <span class="chip">Tag2</span>
  </div>
</a>
```

### Add a new project card
Find `<!-- PROJECT-04 -->` inside `.projects-grid` and paste after:
```html
<div class="proj-card reveal">
  <div class="proj-num">PROJECT-05</div>
  <div class="proj-title">Project Title</div>
  <p class="proj-problem">Problem: What problem does this solve?</p>
  <p class="proj-body">What you built, how you built it, what you learned.</p>
  <p class="proj-tools"><strong>Tools:</strong> Tool1, Tool2</p>
  <a href="YOUR_LINK" class="btn-card">View on GitHub →</a>
</div>
```

### Change the typewriter phrases
Edit the `phrases` array in `assets/js/main.js`:
```js
const phrases = [
  'IT Support | Cybersecurity | Cloud | Data Center Labs',
  'Your Second Phrase Here',
  'Your Third Phrase Here'
];
```

### Change theme colors
All colors are CSS variables at the top of `assets/css/style.css`:
```css
:root {
  --c-void:    #06080b;   /* page background */
  --c-white:   #f4f7fa;   /* primary text / headings */
  --c-silver:  #8896a8;   /* secondary text */
  --b-bright:  rgba(176,188,200,.42);  /* bright borders */
}
```

---

## 📋 Sections Overview

| # | Section | What It Contains |
|---|---------|-----------------|
| Hero | Home | Name, headline, video BG, profile image, CTA buttons |
| 01 | About | Background story, focus areas |
| 02 | Labs | Lab cards with status badges |
| 03 | Projects | Larger portfolio project cards |
| 04 | Skills | Grouped skill tag badges |
| 05 | Certifications | Completed and in-progress cert cards |
| 06 | Process | Lab documentation philosophy + timeline |
| 07 | Contact | GitHub, LinkedIn, Email links |

---

## 💡 Interview Tips

- Give recruiters your `github.io` URL — they can verify everything
- Each lab card should link to a separate GitHub repo with its own README
- Update badge status from `Planned → In Progress → Completed` as you finish
- Screenshot your terminal output and add to lab repos for proof of work

---

*Built with plain HTML, CSS, and JavaScript — no frameworks required.*
