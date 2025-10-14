# DEPRECATED - October 2025

## Status: Obsolete - Safe to Delete

These Recharts components have been **replaced with PDF screenshot images** in the DataShowcase component.

---

## What Changed

**Old Implementation:**
- Used Recharts library for interactive charts
- Components: `GlobalEVSalesChart`, `EVBatteryMarketChart`, `BatteryDemandChart`, `NickelReservesChart`
- Location: `src/components/home/DataShowcase.tsx` (now replaced)

**New Implementation:**
- Uses PDF screenshots from presentation
- Next.js Image component for optimization
- Static images from: `public/images/pdf-assets/home/`
- Location: `src/components/home/DataShowcase.tsx` (updated October 14, 2025)

---

## Files in This Folder

1. `GlobalEVSalesChart.tsx` - Global EV sales stacked bar + line chart
2. `EVBatteryMarketChart.tsx` - Battery market growth bar chart
3. `BatteryDemandChart.tsx` - Regional battery demand area chart
4. `NickelReservesChart.tsx` - Nickel reserves pie chart

**All files are NO LONGER IMPORTED anywhere in the codebase.**

---

## Why Replaced?

- Client requested use of PDF presentation charts for consistency
- Static images load faster than Recharts bundle
- Easier to maintain exact branding from original presentation
- PDF screenshots already available in `public/images/pdf-assets/home/`

---

## Backup Location

Original DataShowcase component with Recharts:
- `src/components/home/DataShowcase.BACKUP.tsx`

---

## Safe to Delete?

**YES** - After client approval of new PDF-based version, this entire folder can be deleted.

To remove:
```bash
rm -rf src/components/charts.OLD
```

---

## Recharts Package

If Recharts is not used elsewhere in the project, consider removing it:

```bash
npm uninstall recharts
```

Check usage first:
```bash
grep -r "recharts" src/
```

---

**Date Deprecated:** October 14, 2025
**Replaced By:** PDF screenshots in DataShowcase.tsx
**Can Be Deleted:** Yes, after client approval
