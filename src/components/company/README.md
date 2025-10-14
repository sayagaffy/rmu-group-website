# Company Components

Reusable components for displaying RMU Group's portfolio companies.

## Components

### CompanyCard

Individual company card component with hover effects and animations.

**Features:**
- White background with shadow on hover
- 150x150 logo area with gradient placeholder
- Company name, industry tag, and short description
- Location and founding year
- Top 3 highlights displayed
- Smooth hover animations:
  - Lift effect (card-hover utility)
  - Border color change to blue
  - "View Details" button slides in
  - Logo scales up
- Bottom stats bar showing employees and certifications
- Responsive design
- Links to `/company/[slug]` for detail pages (Phase 4)

**Props:**
```typescript
interface CompanyCardProps {
  company: CompanyData;  // Company data from companies.ts
  index?: number;        // Optional index for staggered animations
}
```

**Usage:**
```tsx
import { CompanyCard } from '@/components/company';
import { getCompanyById } from '@/data/companies';

const company = getCompanyById('bls');

<CompanyCard company={company} index={0} />
```

---

### CompanyGrid

Container component that displays companies in a responsive grid layout.

**Features:**
- Responsive grid layout:
  - Mobile: 1 column (full width)
  - Tablet: 2 columns (md:)
  - Desktop: 3 columns (lg:) or 4 columns (xl:)
- Optional industry filter buttons
- Optional section title and subtitle
- Statistics summary panel
- Empty state handling
- Configurable column count (3 or 4)

**Props:**
```typescript
interface CompanyGridProps {
  companies?: CompanyData[];  // Default: all companies from companiesData
  showFilters?: boolean;      // Default: false - Show industry filter buttons
  columns?: 3 | 4;            // Default: 3 - Number of columns on desktop
  title?: string;             // Optional section title
  subtitle?: string;          // Optional section subtitle
}
```

**Usage Examples:**

1. **Basic - All Companies (Default)**
```tsx
import { CompanyGrid } from '@/components/company';

<CompanyGrid />
```

2. **With Filters Enabled**
```tsx
<CompanyGrid showFilters={true} />
```

3. **4-Column Layout**
```tsx
<CompanyGrid columns={4} />
```

4. **Custom Subset with Title**
```tsx
import { CompanyGrid } from '@/components/company';
import { getCompaniesByIndustry } from '@/data/companies';

const miningCompanies = getCompaniesByIndustry('Coal Mining');

<CompanyGrid
  companies={miningCompanies}
  title="Mining Operations"
  subtitle="Our coal mining portfolio across Indonesia"
  columns={4}
/>
```

5. **Complete Example with All Options**
```tsx
import { CompanyGrid } from '@/components/company';
import { companiesData } from '@/data/companies';

<CompanyGrid
  companies={companiesData}
  showFilters={true}
  columns={3}
  title="Our Portfolio"
  subtitle="Eight specialized companies driving industrial excellence"
/>
```

---

## Responsive Breakpoints

The components use Tailwind CSS breakpoints:

| Breakpoint | Size | CompanyGrid Columns |
|------------|------|---------------------|
| `(default)` | < 768px | 1 column |
| `md:` | ≥ 768px | 2 columns |
| `lg:` | ≥ 1024px | 3 columns |
| `xl:` | ≥ 1280px | 4 columns (if columns=4) |

---

## Styling

Components use:
- Tailwind CSS utility classes
- Global styles from `globals.css`:
  - `.card-hover` - Lift animation on hover
  - `.section-padding` - Consistent section spacing
  - `.container-custom` - Max-width container
- Custom animations:
  - Staggered fade-in (via `animationDelay`)
  - Button slide-in on hover
  - Logo scale on hover
  - Border color transitions

---

## Integration Example

**pages/companies-showcase.tsx:**
```tsx
import { CompanyGrid } from '@/components/company';

export default function CompaniesShowcase() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <CompanyGrid
          showFilters={true}
          columns={3}
          title="Our Portfolio Companies"
          subtitle="Eight specialized companies delivering integrated industrial solutions"
        />
      </div>
    </section>
  );
}
```

---

## Data Source

Components consume data from `@/data/companies.ts`:

```typescript
import { companiesData, getCompanyById, getCompaniesByIndustry } from '@/data/companies';

// Use all companies
<CompanyGrid companies={companiesData} />

// Use specific company
const bls = getCompanyById('bls');
<CompanyCard company={bls} />

// Filter by industry
const miningCompanies = getCompaniesByIndustry('Coal Mining');
<CompanyGrid companies={miningCompanies} />
```

---

## Future Enhancements (Phase 4)

- Individual company detail pages at `/company/[slug]`
- Search functionality
- Sort options (by name, year, industry)
- Pagination for large datasets
- Skeleton loading states
- Animation library integration (Framer Motion)
- View toggle (Grid vs List view)

---

## Notes

- All companies currently use placeholder logos (gradient backgrounds with Building2 icon)
- Replace `logo` paths in `companies.ts` when real logos are available
- Links point to `/company/[slug]` - these routes need to be created in Phase 4
- Components are fully typed with TypeScript interfaces
- Built with Next.js 13+ App Router conventions
- Client-side components (marked with 'use client')
