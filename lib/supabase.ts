import { createClient } from "@supabase/supabase-js";

// Safe loading of environmental parameters
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

const isKeysMissing = !supabaseUrl || !supabaseAnonKey;

if (typeof window === "undefined" && isKeysMissing) {
  console.warn(
    "⚠️ HOUSECHECK WARNING: Supabase URL or Anon Key is missing. Live database queries will fail. Please create a .env.local file with valid keys."
  );
}

// Instantiate the singleton Supabase JS client
export const supabase = createClient(
  supabaseUrl || "https://placeholder-project.supabase.co",
  supabaseAnonKey || "placeholder-anon-key-12345"
);

// Helper check to verify if Supabase is fully configured
export const isSupabaseConfigured = () => !isKeysMissing;
