# Vercel Deployment Checklist

## 🔒 Security
- [ ] .env.local removed from Git
- [ ] Environment variables set in Vercel dashboard
- [ ] Google Service Account has minimal permissions
- [ ] No hardcoded secrets in code
- [ ] Security headers configured

## 🚀 Performance  
- [ ] Images optimized with next/image
- [ ] Bundle size under 500KB
- [ ] LCP (Largest Contentful Paint) under 2.5s
- [ ] CLS (Cumulative Layout Shift) under 0.1

## ✅ Functionality
- [ ] Mobile menu works on all devices
- [ ] Google Sheets data loads
- [ ] WhatsApp button functional
- [ ] All links work
- [ ] Forms submit correctly

## 🌐 SEO
- [ ] Metadata properly set
- [ ] OpenGraph tags working
- [ ] Sitemap generated
- [ ] robots.txt configured

## 📱 Mobile Testing
- [ ] Menu opens/closes properly
- [ ] No double hamburger icons
- [ ] Touch targets are large enough
- [ ] Text is readable without zoom
- [ ] Forms are mobile-friendly

## 🛠 Pre-Deployment Commands
```bash
npm run security:audit
npm run security:check-env  
npm run lint
npm run build