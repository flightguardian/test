# Deployment Guide

This guide covers deploying your portfolio website to various hosting platforms.

## Pre-Deployment Checklist

Before deploying, ensure you've completed:

### Content
- [ ] Updated all placeholder text with your information
- [ ] Added your profile photo (`assets/images/profile.jpg`)
- [ ] Added project screenshots
- [ ] Updated social media links
- [ ] Added your resume PDF (if using download button)
- [ ] Updated meta tags (title, description, OG tags)
- [ ] Updated structured data (JSON-LD schema)

### Optimization
- [ ] Compressed all images
- [ ] Created WebP versions (optional)
- [ ] Removed console.log statements
- [ ] Minified CSS and JavaScript (for production)
- [ ] Tested on multiple devices and browsers
- [ ] Run Lighthouse audit (score 90+)
- [ ] Verified accessibility (WCAG AA)

### Configuration
- [ ] Updated URLs in `manifest.json`
- [ ] Updated URLs in `sitemap.xml`
- [ ] Updated domain in `robots.txt`
- [ ] Updated contact email addresses
- [ ] Set correct Open Graph URLs

## Deployment Options

### 🌟 Option 1: GitHub Pages (Free)

**Best for**: Personal portfolios, simple static sites

#### Setup Steps

1. **Create GitHub Repository**
   ```bash
   # Initialize git (if not already)
   git init
   git add .
   git commit -m "Initial commit"
   
   # Create repo on GitHub, then:
   git remote add origin https://github.com/yourusername/portfolio.git
   git branch -M main
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Source: Deploy from a branch
   - Branch: `main` / root
   - Click "Save"

3. **Access Your Site**
   - URL: `https://yourusername.github.io/repository-name`
   - Custom domain: See GitHub Pages documentation

#### Custom Domain (Optional)

1. **Add CNAME file** to repository root:
   ```
   yourdomain.com
   ```

2. **Configure DNS** (with your domain provider):
   ```
   Type: CNAME
   Name: www
   Value: yourusername.github.io
   
   Type: A (for apex domain)
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153
   ```

3. **Update GitHub Pages settings**:
   - Enter custom domain
   - Wait for DNS check (can take up to 24 hours)
   - Enable "Enforce HTTPS"

#### Pros & Cons

✅ **Pros**:
- Free hosting
- Automatic HTTPS
- Easy to set up
- Git-based deployment
- Good for personal portfolios

❌ **Cons**:
- Static sites only
- Limited to 100GB bandwidth/month
- 1GB repository size limit

---

### 🚀 Option 2: Netlify (Recommended)

**Best for**: Fast deployment, continuous deployment, form handling

#### Deploy via Drag & Drop

1. Go to [Netlify Drop](https://app.netlify.com/drop)
2. Drag your project folder
3. Done! Your site is live

#### Deploy via Git (Recommended)

1. **Sign up** at [netlify.com](https://www.netlify.com)

2. **Connect Repository**:
   - Click "New site from Git"
   - Choose GitHub/GitLab/Bitbucket
   - Select your repository
   - Configure build settings:
     ```
     Build command: (leave empty - no build needed)
     Publish directory: .
     ```
   - Click "Deploy site"

3. **Configure Domain** (optional):
   - Site settings → Domain management
   - Add custom domain
   - Update DNS records

#### Netlify Features

- **Forms**: Built-in form handling (upgrade HTML form)
  ```html
  <form netlify>
    <!-- Your form fields -->
  </form>
  ```

- **Redirects**: Create `_redirects` file
  ```
  # Redirect rules
  /old-url  /new-url  301
  ```

- **Headers**: Create `_headers` file
  ```
  /*
    X-Frame-Options: DENY
    X-XSS-Protection: 1; mode=block
  ```

#### Pros & Cons

✅ **Pros**:
- Extremely fast CDN
- Free SSL
- Continuous deployment
- Form handling
- Generous free tier
- Custom domains
- Preview deployments

❌ **Cons**:
- Free tier: 100GB bandwidth/month
- Advanced features require paid plan

---

### ⚡ Option 3: Vercel

**Best for**: Excellent performance, edge network, analytics

#### Deploy via CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Follow prompts**:
   - Link to Vercel account
   - Select project settings
   - Deploy!

#### Deploy via Git

1. **Sign up** at [vercel.com](https://vercel.com)

2. **Import Project**:
   - Click "New Project"
   - Import from Git
   - Select repository
   - Configure:
     ```
     Framework Preset: Other
     Build Command: (leave empty)
     Output Directory: .
     ```
   - Click "Deploy"

3. **Production URL**: `https://your-project.vercel.app`

#### Pros & Cons

✅ **Pros**:
- Blazing fast edge network
- Free SSL
- Automatic deployments
- Preview deployments
- Analytics (free tier)
- Great performance

❌ **Cons**:
- Free tier: 100GB bandwidth/month
- Overkill for simple portfolios

---

### 🌍 Option 4: Cloudflare Pages

**Best for**: Global CDN, advanced features, unlimited bandwidth

#### Setup

1. **Sign up** at [pages.cloudflare.com](https://pages.cloudflare.com)

2. **Create Project**:
   - Connect Git account
   - Select repository
   - Build settings:
     ```
     Build command: (none)
     Build output directory: .
     ```

3. **Deploy**: Automatic on push to main branch

#### Pros & Cons

✅ **Pros**:
- Unlimited bandwidth (free)
- Global CDN
- Free SSL
- Fast deployments
- Advanced security features

❌ **Cons**:
- Slightly more complex setup
- Requires Cloudflare account

---

## Post-Deployment

### 1. Verify Deployment

- [ ] Visit your live URL
- [ ] Test all sections (About, Projects, Contact)
- [ ] Test navigation links
- [ ] Submit contact form (if using form handler)
- [ ] Test on mobile device
- [ ] Check all images load
- [ ] Verify HTTPS is working

### 2. Performance Testing

Run Lighthouse audit on live site:
```
1. Open live site in Chrome
2. Open DevTools (F12)
3. Lighthouse tab → Generate report
4. Target: All 90+
```

### 3. SEO Setup

**Submit Sitemap** to search engines:
- Google Search Console: Add `sitemap.xml`
- Bing Webmaster Tools: Submit sitemap

**robots.txt**: Verify at `yoursite.com/robots.txt`

### 4. Analytics (Optional)

Add analytics to track visitors:

**Google Analytics**:
```html
<!-- Add to <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Plausible** (privacy-focused):
```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

### 5. Social Media

Test Open Graph tags:
- [Facebook Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

### 6. Monitor Performance

Set up monitoring:
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [WebPageTest](https://www.webpagetest.org/)
- [Uptime Robot](https://uptimerobot.com/) - Monitor uptime

## Continuous Deployment

All platforms above support automatic deployment:

1. **Push to Git**:
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```

2. **Automatic Deploy**: Platform automatically deploys changes

3. **Preview**: Most platforms create preview URL for pull requests

## Troubleshooting

### Site Not Loading

1. Check DNS propagation: [DNS Checker](https://dnschecker.org/)
2. Verify HTTPS certificate is active
3. Clear browser cache
4. Check deployment logs

### Images Not Loading

1. Verify image paths are correct (case-sensitive)
2. Check file extensions match
3. Ensure images are committed to repository

### Contact Form Not Working

1. If using Netlify: Add `netlify` attribute to form
2. If using FormSpree: Verify endpoint URL
3. Check browser console for errors

### Performance Issues

1. Run Lighthouse audit
2. Compress images further
3. Minify CSS/JS
4. Enable CDN caching

## Security

### Headers

Add security headers (Netlify `_headers` example):
```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
```

### HTTPS

Always use HTTPS:
- GitHub Pages: Automatic
- Netlify: Automatic
- Vercel: Automatic
- Custom domain: Use Let's Encrypt

## Updating Your Site

1. **Make changes locally**
2. **Test thoroughly**
3. **Commit and push**:
   ```bash
   git add .
   git commit -m "Describe your changes"
   git push
   ```
4. **Automatic deployment** handles the rest

## Backup

Keep backups of:
- Original images (high-resolution)
- Resume PDF
- Content in separate document
- Git repository (already a backup!)

## Support

### Platform Documentation

- [GitHub Pages](https://docs.github.com/en/pages)
- [Netlify Docs](https://docs.netlify.com/)
- [Vercel Docs](https://vercel.com/docs)
- [Cloudflare Pages](https://developers.cloudflare.com/pages/)

### Need Help?

- Check platform status page
- Review deployment logs
- Search documentation
- Community forums
- GitHub Issues (for this template)

---

**Your portfolio is ready to go live! Choose your platform and deploy! 🚀**
