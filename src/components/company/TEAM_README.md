# Team Components

Reusable components for displaying RMU Group's leadership and management team.

## Components

### TeamCard

Individual team member card component with professional styling and expandable bio.

**Features:**
- Circular photo with 128x128px gradient placeholder
- Name (text-xl font-semibold)
- Position/Title (text-blue-600)
- Department badge
- Experience and Education badges
- Brief bio (always visible)
- Extended bio (expandable on click)
- Top 3 expertise tags with "+X more" indicator
- Social/contact icons (LinkedIn, Email, Phone)
- Hover effects:
  - Enhanced shadow
  - Border color change
  - Ring color change on photo
  - Active/online badge appears
- Bottom stats bar (join year, tenure)
- Smooth animations and transitions

**Props:**
```typescript
interface TeamCardProps {
  member: TeamMemberData;     // Team member data from team.ts
  index?: number;             // Optional index for staggered animations
  showExtendedBio?: boolean;  // Always show extended bio (default: false)
}
```

**Usage:**
```tsx
import { TeamCard } from '@/components/company';
import { getTeamMemberById } from '@/data/team';

const member = getTeamMemberById('djoni-rosadi');

<TeamCard member={member} index={0} />
```

---

### TeamGrid

Container component that displays team members in a responsive grid layout.

**Features:**
- Responsive grid layout:
  - Mobile: 1 column (full width)
  - Tablet: 2 columns (md:)
  - Desktop: 3 columns (lg:) or 4 columns (xl:)
- Two display modes:
  - **Standard Grid**: All members in one grid
  - **Category View**: Grouped by categories (Executive, Senior Management)
- Optional department filter buttons
- Optional section title and subtitle
- Statistics summary panel
- Empty state handling
- Configurable column count (3 or 4)

**Props:**
```typescript
interface TeamGridProps {
  members?: TeamMemberData[];  // Default: all team members
  categories?: TeamCategory[]; // Default: teamCategories
  showFilters?: boolean;       // Default: false - Show department filters
  columns?: 3 | 4;             // Default: 3 - Number of columns
  title?: string;              // Optional section title
  subtitle?: string;           // Optional section subtitle
  showByCategory?: boolean;    // Default: false - Group by categories
}
```

**Usage Examples:**

1. **Basic - All Team Members**
```tsx
import { TeamGrid } from '@/components/company';

<TeamGrid />
```

2. **Grouped by Categories (Executive + Senior Management)**
```tsx
<TeamGrid showByCategory={true} />
```

3. **With Department Filters**
```tsx
<TeamGrid showFilters={true} />
```

4. **Custom Subset - Executive Team Only**
```tsx
import { TeamGrid } from '@/components/company';
import { getExecutiveTeam } from '@/data/team';

const executives = getExecutiveTeam();

<TeamGrid
  members={executives}
  title="Executive Leadership"
  subtitle="Our board and executive management team"
  columns={4}
/>
```

5. **Complete Example with Categories**
```tsx
<TeamGrid
  showByCategory={true}
  title="Our Leadership Team"
  subtitle="Experienced professionals driving RMU Group's success"
  columns={3}
/>
```

---

## Data Structure

### TeamMemberData Interface

```typescript
interface TeamMemberData {
  id: string;
  name: string;
  position: string;
  title: string;
  department?: string;
  bio: string;
  bioExtended?: string;
  image?: string;
  email?: string;
  phone?: string;
  linkedin?: string;
  expertise?: string[];
  education?: string;
  experience?: string;
  achievements?: string[];
  joinedYear?: number;
}
```

### Team Categories

Two main categories are defined in `team.ts`:

1. **Executive Leadership** (6 members)
   - President Commissioner
   - President Director
   - Commissioners
   - CTO
   - CFO

2. **Senior Management** (6 members)
   - COO
   - VP Business Development
   - HSE Director
   - HR Director
   - CTO
   - General Counsel

---

## Responsive Breakpoints

| Breakpoint | Size | Grid Columns |
|------------|------|--------------|
| `(default)` | < 768px | 1 column |
| `md:` | ≥ 768px | 2 columns |
| `lg:` | ≥ 1024px | 3 columns |
| `xl:` | ≥ 1280px | 4 columns (if columns=4) |

---

## Styling Features

- **Photo Placeholder**: Gradient background (blue-600 to blue-800) with User icon
- **Color Ring**: Blue ring around photo that intensifies on hover
- **Badge System**: Experience, education, and expertise tags
- **Expandable Bio**: Smooth height transition with chevron icon
- **Contact Icons**: Circular buttons with hover scale effect
- **Stats Bar**: Gradient background showing tenure information

---

## Integration Examples

### Leadership Section on Company Page

```tsx
import { TeamGrid } from '@/components/company';

export default function CompanyPage() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <TeamGrid
          showByCategory={true}
          title="Meet Our Leadership"
          subtitle="Experienced leaders driving innovation and excellence"
        />
      </div>
    </section>
  );
}
```

### Executive Team Highlight

```tsx
import { TeamGrid } from '@/components/company';
import { getExecutiveTeam } from '@/data/team';

const executives = getExecutiveTeam();

<section className="section-padding bg-white">
  <div className="container-custom">
    <TeamGrid
      members={executives}
      columns={3}
      title="Executive Leadership"
      subtitle="Board members and executive management"
    />
  </div>
</section>
```

### With Department Filters

```tsx
import { TeamGrid } from '@/components/company';

<TeamGrid
  showFilters={true}
  title="Our Team"
  subtitle="12 experienced professionals across all departments"
  columns={4}
/>
```

---

## Utility Functions (from team.ts)

```typescript
import {
  allTeamMembers,
  executiveTeam,
  seniorManagement,
  getTeamMemberById,
  getTeamMembersByDepartment,
  getAllDepartments,
  getTotalTeamCount
} from '@/data/team';

// Get specific member
const ceo = getTeamMemberById('djoni-rosadi');

// Filter by department
const financeTeam = getTeamMembersByDepartment('Finance');

// Get all departments
const departments = getAllDepartments();
// Returns: ['Board of Commissioners', 'Executive Board', 'Finance', ...]

// Get team count
const totalMembers = getTotalTeamCount();
// Returns: 12
```

---

## Team Member Placeholder Data

The `team.ts` file includes comprehensive placeholder data for:

### Executive Leadership (6 members):
- **IBIH TG HASSAN** - President Commissioner
- **H. IR. DJONI ROSADI** - President Director
- **PROF. DR. IR. MUHAMMAD ZAKI MUBAROK** - Commissioner & CTO
- **PROF. DR. IR. MULYO WIDODO** - Commissioner & Strategic Advisor
- **IWAN ABDURRACHMAN, IR.** - Commissioner
- **Chief Financial Officer** - CFO (placeholder)

### Senior Management (6 members):
- **Head of Operations** - COO
- **Head of Business Development** - VP Business Development
- **Head of HSE** - HSE Director
- **Head of Human Resources** - HR Director
- **Head of Technology & Innovation** - CTO
- **Head of Legal & Compliance** - General Counsel

Each member includes:
- Full name and position
- Department
- Brief bio (1-2 sentences)
- Extended bio (2-3 paragraphs)
- 5+ expertise areas
- Experience level (e.g., "20+ Years")
- Education credentials (where applicable)
- 3+ achievements
- Join year

---

## Future Enhancements

- Individual team member detail pages at `/team/[id]`
- Team member search functionality
- Advanced filtering (by expertise, department, experience)
- Photo upload functionality
- Dynamic bio editing
- Social media integration (Twitter, email signatures)
- Organization chart view
- Team timeline/history
- Awards and recognition section

---

## Notes

- All team members currently use gradient placeholders with User icon
- Replace `image` paths in `team.ts` when real photos are available
- Extended bios are hidden by default and expand on "Read More" click
- Components are fully typed with TypeScript interfaces
- Built with Next.js 13+ App Router conventions
- Client-side components (marked with 'use client')
- All placeholder data can be easily updated with real information

---

## Accessibility

- Semantic HTML structure
- Proper aria-labels on social icons
- Keyboard navigation support
- Focus states on interactive elements
- Alt text for images
- Screen reader friendly
