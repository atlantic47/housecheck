-- ==================================================
-- HOUSECHECK KENYA - PRODUCTION DATABASE SCHEMA
-- ==================================================

-- 1. Extensions
create extension if not exists "uuid-ossp";

-- 2. Admin Users Table (linked to Supabase auth.users)
create table public.admin_users (
  id uuid references auth.users on delete cascade primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  full_name text not null,
  role text default 'admin'::text check (role in ('admin', 'editor')),
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. Bookings Table (Stores pre-purchase inspection bookings)
create table public.bookings (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  full_name text not null,
  phone_number text not null,
  email text not null,
  property_location text not null,
  property_type text not null check (property_type in ('Home', 'Apartment', 'Villa', 'Other')),
  bedrooms integer not null check (bedrooms >= 0),
  preferred_date date not null,
  notes text,
  photo_urls text[] default array[]::text[],
  status text default 'pending'::text check (status in ('pending', 'confirmed', 'completed', 'cancelled')),
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 4. Blog Categories Table
create table public.blog_categories (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null unique,
  slug text not null unique
);

-- 5. Blog Posts Table
create table public.blog_posts (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  title text not null,
  slug text not null unique,
  content text not null, -- Rich Markdown content
  featured_image text,
  excerpt text,
  category_id uuid references public.blog_categories(id) on delete set null,
  author_id uuid references public.admin_users(id) on delete set null,
  seo_title text,
  seo_description text,
  is_published boolean default false not null,
  published_at timestamp with time zone,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 6. Testimonials Table (For Dwello-styled testimonial slider)
create table public.testimonials (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  role text not null, -- e.g. "Diaspora Investor", "Nairobi Apartment Buyer"
  content text not null,
  rating numeric default 5.0 check (rating >= 1.0 and rating <= 5.0),
  avatar_url text,
  is_featured boolean default true not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 7. FAQs Table
create table public.faqs (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  question text not null,
  answer text not null,
  category text default 'General'::text check (category in ('General', 'Services', 'Pricing', 'Process')),
  order_index integer default 0,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 8. Website Settings Table (CMS config for text/banners)
create table public.website_settings (
  id uuid default uuid_generate_v4() primary key,
  key text not null unique,
  value jsonb not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- ==================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==================================================

alter table public.admin_users enable row level security;
alter table public.bookings enable row level security;
alter table public.blog_categories enable row level security;
alter table public.blog_posts enable row level security;
alter table public.testimonials enable row level security;
alter table public.faqs enable row level security;
alter table public.website_settings enable row level security;

-- Admin profiles policies
create policy "Admins can manage user profiles"
  on public.admin_users for all
  using (auth.uid() = id);

-- Bookings policies
create policy "Anyone can submit a booking request"
  on public.bookings for insert
  with check (true);

create policy "Admins can view and manage all bookings"
  on public.bookings for all
  using (exists (select 1 from public.admin_users where id = auth.uid()));

-- Blog Categories policies
create policy "Anyone can read blog categories"
  on public.blog_categories for select
  using (true);

create policy "Admins can manage blog categories"
  on public.blog_categories for all
  using (exists (select 1 from public.admin_users where id = auth.uid()));

-- Blog Posts policies
create policy "Anyone can read published blog posts"
  on public.blog_posts for select
  using (is_published = true);

create policy "Admins can manage all blog posts"
  on public.blog_posts for all
  using (exists (select 1 from public.admin_users where id = auth.uid()));

-- Testimonials policies
create policy "Anyone can read testimonials"
  on public.testimonials for select
  using (is_featured = true);

create policy "Admins can manage all testimonials"
  on public.testimonials for all
  using (exists (select 1 from public.admin_users where id = auth.uid()));

-- FAQs policies
create policy "Anyone can read FAQs"
  on public.faqs for select
  using (true);

create policy "Admins can manage all FAQs"
  on public.faqs for all
  using (exists (select 1 from public.admin_users where id = auth.uid()));

-- Website Settings policies
create policy "Anyone can read website settings"
  on public.website_settings for select
  using (true);

create policy "Admins can update website settings"
  on public.website_settings for all
  using (exists (select 1 from public.admin_users where id = auth.uid()));

-- ==================================================
-- AUTO-SYNC TRIGGER FROM Supabase Auth.users TO public.admin_users
-- ==================================================

create or replace function public.handle_new_admin_user()
returns trigger as $$
begin
  insert into public.admin_users (id, full_name, role)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', 'HouseCheck Administrator'),
    'admin'
  );
  return new;
end;
$$ language plpgsql security definer;

create or replace trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_admin_user();

-- ==================================================
-- SPEED OPTIMIZATION INDEXES
-- ==================================================

create index bookings_preferred_date_idx on public.bookings (preferred_date);
create index blog_posts_slug_idx on public.blog_posts (slug);
create index blog_posts_is_published_idx on public.blog_posts (is_published);
create index blog_categories_slug_idx on public.blog_categories (slug);
create index faqs_order_index_idx on public.faqs (order_index);
