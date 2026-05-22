Build a production-ready marketing website and lightweight booking platform called “HouseCheck Kenya” using:

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Supabase
- React Hook Form + Zod

IMPORTANT:
This is NOT a full ERP or inspection management system.

The inspection operations, reports, technician management, invoicing, and internal workflows are handled by a separate internal system.

This application is ONLY for:
- marketing,
- lead generation,
- bookings,
- customer inquiries,
- content management,
- SEO,
- and premium brand presentation.

Keep architecture clean, scalable, modern, and conversion-focused.

==================================================
CORE PURPOSE
==================================================

The website represents a premium home inspection company in Kenya that helps property buyers inspect homes before purchase.

The target market:
- high-end buyers,
- diaspora buyers,
- investors,
- apartment buyers,
- luxury home buyers.

The site should feel:
- premium,
- trustworthy,
- corporate,
- modern,
- clean.

Avoid:
- startup gimmicks,
- excessive animations,
- flashy gradients,
- clutter.

==================================================
1. PUBLIC WEBSITE PAGES
==================================================

Create these pages:

- Home
- About
- Services
- Pricing
- Sample Report
- FAQs
- Contact
- Book Inspection
- Blog
- Individual Blog Post Page

==================================================
2. HOMEPAGE SECTIONS
==================================================

Homepage should include:

- Hero section
- Main CTA
- Services overview
- Why choose us
- Inspection process
- Sample report preview
- Testimonials
- FAQ section
- Blog preview
- Contact CTA
- Footer

Main CTA:
“Book Inspection”

Secondary CTA:
“View Sample Report”

==================================================
3. SERVICES
==================================================

Services include:

- Home Inspection
- Apartment Inspection
- Villa Inspection
- Mold Inspection
- Pest Inspection
- Roof Inspection
- Thermal Imaging Inspection

Each service page should include:
- overview
- what is checked
- benefits
- FAQs
- CTA section

==================================================
4. BOOKING SYSTEM
==================================================

Customers can:
- submit inspection booking requests
- choose preferred date
- enter property details
- upload property photos
- leave notes

Fields:
- full name
- phone number
- email
- property location
- property type
- bedrooms
- preferred date
- notes

After submission:
- save to Supabase
- show success state
- send notification email placeholder

NO internal inspection workflow needed.

==================================================
5. CMS / ADMIN PANEL
==================================================

Admin panel is ONLY for website content management.

Admin can:
- manage blog posts
- edit FAQs
- update testimonials
- manage homepage content
- update service descriptions
- manage pricing content
- upload website media/images

DO NOT build:
- technician assignment
- inspection workflow
- reports management
- invoicing systems
- operations dashboard

Keep admin lightweight and clean.

==================================================
6. AUTHENTICATION
==================================================

Use Supabase Auth for admin login only.

Roles:
- admin

Public users DO NOT need accounts.

==================================================
7. BLOG SYSTEM
==================================================

Create SEO-focused blog architecture.

Features:
- categories
- featured images
- SEO metadata
- related posts
- rich text support
- slug-based routing
- search functionality

==================================================
8. DATABASE DESIGN
==================================================

Create Supabase schema for:

- admin_users
- bookings
- blog_posts
- blog_categories
- testimonials
- faqs
- website_settings
- media_assets

Use:
- UUIDs
- timestamps
- foreign keys
- row level security

==================================================
9. FILE STORAGE
==================================================

Use Supabase Storage for:
- blog images
- uploaded booking images
- testimonials
- website media

==================================================
10. SEO + PERFORMANCE
==================================================

Implement:
- metadata
- OpenGraph
- Twitter cards
- sitemap.xml
- robots.txt
- schema markup
- optimized images
- lazy loading
- accessibility best practices

==================================================
11. UI STYLE
==================================================

The UI should feel like a premium inspection company.

Use:
- strong typography
- clean spacing
- professional layouts
- elegant cards
- subtle shadows
- modern navigation

Design inspiration:
high-end corporate service websites.

==================================================
12. EXTRA FEATURES
==================================================

Add:
- WhatsApp floating contact button
- Google Maps embed
- responsive mobile navigation
- sticky CTA buttons
- trust indicators
- before/after issue gallery
- downloadable sample PDF report
- contact form
- inquiry form

==================================================
13. TECHNICAL REQUIREMENTS
==================================================

Requirements:
- reusable components
- scalable architecture
- clean TypeScript
- proper validation
- loading states
- error handling
- environment variable support
- secure Supabase integration

==================================================
14. PROJECT STRUCTURE
==================================================

Use scalable structure:

/app
/components
/lib
/hooks
/types
/services
/utils
/schemas

==================================================
15. DELIVERABLES
==================================================

Generate:
- full application code
- Supabase SQL schema
- setup instructions
- environment variables template
- README
- reusable component structure
- SEO setup
- example seed data

The application should be production-ready.