# Image Requirements - RMU Group Website

This document outlines the image requirements for the RMU Group website, including dimensions, formats, file sizes, and naming conventions.

---

## 📁 Directory Structure

```
public/images/
├── companies/     (8 company logos)
├── team/          (11 team member photos) ✅ COMPLETE
├── hero/          (hero section images)
└── showcase/      (data showcase section images)
```

---

## 🏢 Company Logos

**Location:** `public/images/companies/`

### Required Files (8 logos):
1. `bls-logo.png` - PT Bumi Lintas Sejahtera
2. `pog-logo.png` - PT Putra Ogan Gemilang
3. `spk-logo.png` - PT Sriwijaya Perkasa Kencana
4. `gsj-logo.png` - PT Gerbang Sumber Jaya
5. `ptk-logo.png` - PT Ponco Teguh Kencana
6. `rrr-logo.png` - PT Riau Raya Resources
7. `rfd-logo.png` - PT Rafindo
8. `yosin-logo.png` - PT Yosin Mineral

### Specifications:
- **Dimensions:** 400x400px minimum (square aspect ratio preferred)
- **Format:** PNG with transparent background (preferred) or JPG
- **File Size:** < 50 KB per logo
- **Quality:** High resolution for retina displays (2x)
- **Style:** Professional, clean, consistent with brand identity
- **Background:** Transparent PNG preferred, white background acceptable

### Usage:
- Company portfolio page grid
- Individual company detail pages
- Navigation/breadcrumbs
- Cards and thumbnails

---

## 👥 Team Member Photos

**Location:** `public/images/team/` ✅ **COMPLETE (11/11 photos uploaded)**

### Current Files:
1. `ibih-tg-hassan.jpg` - President Commissioner
2. `iwan-abdurrachman.jpg` - Commissioner
3. `judiono-tosin.jpg` - Commissioner
4. `zaki-mubarok.jpg` - Commissioner
5. `mulyo-widodo.jpg` - Commissioner
6. `fifi-hariani.jpg` - Commissioner
7. `indra-laksana.jpg` - Commissioner
8. `djoni-rosadi.jpg` - President Director
9. `umar-nurul-anwar.png` - Director
10. `andi-ch-hassan.jpg` - Director
11. `sapto-adi-nugroho.jpg` - Director

### Specifications:
- **Dimensions:** 400x400px (square aspect ratio)
- **Format:** JPG or PNG
- **File Size:** < 100 KB per photo
- **Quality:** Professional headshots with neutral background
- **Style:** Consistent lighting and framing across all photos
- **Background:** Neutral, professional (gray, blue, or white)

---

## 🎨 Hero Section Images

**Location:** `public/images/hero/`

### Recommended Images (3-5 images for hero slider):
- `hero-mining-operations.jpg` - Mining site overview
- `hero-processing-plant.jpg` - Processing facility
- `hero-technology.jpg` - Advanced technology/equipment
- `hero-sustainability.jpg` - Environmental/sustainability efforts
- `hero-team.jpg` - Team collaboration/leadership

### Specifications:
- **Dimensions:** 1920x1080px minimum (16:9 aspect ratio)
- **Format:** WebP (preferred) or JPG
- **File Size:** < 300 KB per image (optimize for web)
- **Quality:** High resolution, professional photography
- **Style:** Wide angle, inspiring, professional
- **Content:** Authentic company operations, avoid stock photos if possible

### Optimization:
- Use Next.js Image component for automatic optimization
- Implement lazy loading for below-fold images
- Provide responsive srcset for different screen sizes
- Consider WebP format with JPG fallback

---

## 📊 Data Showcase Section

**Location:** `public/images/showcase/`

**Note:** Currently using Recharts for data visualization. This section documents requirements IF you decide to replace charts with images/screenshots.

### Potential Images (4 showcase items):
1. `showcase-ev-sales.png` - Global EV Sales data visualization
2. `showcase-battery-market.png` - EV Battery Market growth
3. `showcase-battery-demand.png` - Regional battery demand
4. `showcase-nickel-reserves.png` - Indonesia's nickel reserves

### Specifications:
- **Dimensions:** 1200x800px (3:2 aspect ratio)
- **Format:** PNG (for charts/graphs) or WebP
- **File Size:** < 200 KB per image
- **Quality:** Clear, readable text and data
- **Style:** Professional, consistent design language
- **Background:** White or transparent

### Alternative Approach:
**Keep Recharts** - The current implementation uses Recharts for interactive data visualization, which provides:
- Interactive tooltips
- Responsive design
- Real-time data updates (if needed)
- Better accessibility than static images
- Smaller bundle size than large PNG files

**Recommendation:** Keep Recharts for data showcase section unless you have specific high-quality infographic images ready.

---

## 🖼️ Image Optimization Guidelines

### General Best Practices:
1. **Compress Images:**
   - Use tools like TinyPNG, ImageOptim, or Squoosh
   - Target 70-85% quality for JPGs
   - Use WebP format when possible

2. **Responsive Images:**
   - Provide multiple sizes for different devices
   - Use Next.js Image component `sizes` prop
   - Implement srcset for retina displays

3. **Lazy Loading:**
   - Use `loading="lazy"` for below-fold images
   - Priority load hero images
   - Implement intersection observer for advanced cases

4. **Next.js Image Component:**
   ```tsx
   import Image from 'next/image';

   <Image
     src="/images/companies/bls-logo.png"
     alt="PT Bumi Lintas Sejahtera Logo"
     width={400}
     height={400}
     className="object-contain"
   />
   ```

5. **Alt Text:**
   - Descriptive, concise (< 125 characters)
   - Include company name or person's name
   - Describe image content for accessibility

---

## 📝 Naming Conventions

### Files:
- Use lowercase letters
- Use hyphens for spaces (kebab-case)
- Include descriptive names
- Add size suffix if multiple versions: `-sm`, `-md`, `-lg`

### Examples:
- ✅ `bls-logo.png`
- ✅ `hero-mining-operations.jpg`
- ✅ `team-photo-john-doe.jpg`
- ❌ `Logo_BLS.PNG`
- ❌ `IMG_1234.jpg`
- ❌ `company logo (1).png`

---

## 🎯 Priority Order

### Phase 3A - Immediate Needs:
1. ✅ Team photos (COMPLETE - 11/11)
2. ⏳ Company logos (NEEDED - 0/8)
3. ⏳ Hero images (OPTIONAL - 0/5)

### Phase 3B - Optional Enhancements:
4. ⏳ Showcase images (OPTIONAL - consider keeping Recharts)
5. ⏳ Additional content images

---

## 📦 File Size Budget

### Target Sizes:
- **Per Page:** < 1 MB total images
- **Company Logo:** < 50 KB
- **Team Photo:** < 100 KB
- **Hero Image:** < 300 KB
- **Showcase Image:** < 200 KB

### Current Status:
- Team photos: ~1.1 MB total (11 files) ✅
- Company logos: Not yet added
- Hero images: Not yet added

---

## 🚀 Optimization Scripts

### Recommended Tools:

1. **Manual Optimization:**
   - [TinyPNG](https://tinypng.com/) - PNG/JPG compression
   - [Squoosh](https://squoosh.app/) - Advanced image optimization
   - [ImageOptim](https://imageoptim.com/) - Mac app

2. **Automated (NPM):**
   ```bash
   # Install sharp for image processing
   npm install sharp

   # Create optimization script
   node scripts/optimize-images.js
   ```

3. **Batch Processing:**
   ```bash
   # Using ImageMagick
   mogrify -resize 400x400 -quality 85 public/images/companies/*.jpg
   ```

---

## ✅ Verification Checklist

### Before Production:
- [ ] All required images uploaded
- [ ] File sizes within budget
- [ ] Images display correctly on all devices
- [ ] Alt text added for accessibility
- [ ] Lazy loading implemented
- [ ] Next.js Image component used
- [ ] Build completes without errors
- [ ] Lighthouse performance score > 90

### Testing Commands:
```bash
# Development server
npm run dev

# Production build
npm run build

# Check bundle size
npm run build -- --analyze
```

---

## 📞 Contact

For questions about image requirements or to submit images, please contact the development team.

**Last Updated:** October 14, 2025
