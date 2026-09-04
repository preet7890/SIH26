import { createBrowserClient } from "@supabase/ssr";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export const supabase = createBrowserClient(
  supabaseUrl,
  supabasePublishableKey,
);

export const supabaseConfig = {
  url: supabaseUrl,
  publishableKey: supabasePublishableKey,
};
