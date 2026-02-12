import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://dootxtmvyqxhnmprgqdq.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_aZrPqWq5Qb41RXtogrJ7vQ_NjM1FIB1';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
