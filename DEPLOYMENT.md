# EGL Website Deployment Guide

## 🚀 Deploy to Vercel (Recommended)

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Prepare your files:**
   - Make sure all your files are in the project folder
   - The `vercel.json` configuration file is already created

2. **Go to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub, GitLab, or email

3. **Import Project:**
   - Click "New Project"
   - Import your Git repository OR drag & drop your project folder
   - Vercel will automatically detect it's a static site

4. **Deploy:**
   - Click "Deploy"
   - Your site will be live in 2-3 minutes!

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   cd /Users/prakash/Documents/eco_glamp_life
   vercel
   ```

3. **Follow the prompts:**
   - Link to existing project or create new
   - Deploy to production

## 🌐 Set Up Custom Domain

### Step 1: Add Domain in Vercel

1. Go to your project dashboard in Vercel
2. Click on "Domains" tab
3. Click "Add Domain"
4. Enter your domain name (e.g., `yourdomain.com`)
5. Vercel will show DNS configuration

### Step 2: Configure DNS

You'll need to add these DNS records to your domain provider:

**For apex domain (yourdomain.com):**
```
Type: A
Name: @
Value: 76.76.19.61
```

**For www subdomain (www.yourdomain.com):**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Step 3: SSL Certificate

- Vercel automatically provides SSL certificates
- Your site will be available at `https://yourdomain.com`
- This process takes 5-10 minutes

## 📱 Alternative: Railway Deployment

If you prefer Railway:

1. **Install Railway CLI:**
   ```bash
   npm install -g @railway/cli
   ```

2. **Login and Deploy:**
   ```bash
   railway login
   railway init
   railway up
   ```

3. **Add Custom Domain:**
   - Go to Railway dashboard
   - Add custom domain in project settings

## 💰 Cost Comparison

### Vercel (Recommended)
- **Free Tier:** 100GB bandwidth/month, unlimited static sites
- **Pro:** $20/month for 1TB bandwidth
- **Perfect for:** Static websites, great performance

### Railway
- **Free Tier:** $5 credit monthly
- **Pro:** Pay-per-use, typically $5-20/month
- **Good for:** Full-stack applications

## 🔧 Post-Deployment Checklist

- [ ] Test all pages and functionality
- [ ] Check mobile responsiveness
- [ ] Verify contact form works (currently uses localStorage)
- [ ] Test video and audio playback
- [ ] Check image loading speeds
- [ ] Verify Instagram links work
- [ ] Test WhatsApp integration

## 🎯 Performance Tips

1. **Optimize Images:** Consider compressing large images
2. **CDN:** Vercel provides global CDN automatically
3. **Caching:** Configured in `vercel.json`
4. **SEO:** Add meta tags if needed

## 🆘 Troubleshooting

### Common Issues:

1. **Domain not working:** Check DNS propagation (can take 24-48 hours)
2. **Images not loading:** Check file paths and case sensitivity
3. **Video not playing:** Ensure video files are web-optimized
4. **Form not working:** Contact form uses localStorage (client-side only)

### Need Help?
- Vercel Documentation: https://vercel.com/docs
- Railway Documentation: https://docs.railway.app

## 📞 Contact

For website issues or updates, contact your developer or EGL team.

---

**Your website will be live at:** `https://your-domain.vercel.app` (temporary) or `https://yourdomain.com` (custom domain)
