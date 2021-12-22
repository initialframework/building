import { createClient } from "@supabase/supabase-js";

// const SUPABASE_KEY =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTg1MzM1MCwiZXhwIjoxOTU1NDI5MzUwfQ.YfWsHvjCVG2m8Jh5v3qk7E4GYemNyEHK6UacBscfdK8";
// const SUPABASE_URL = "https://zwuxdhdwdeklobyldfos.supabase.co";

const SUPABASE_KEY = "";
const SUPABASE_URL = "";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export { supabase };
