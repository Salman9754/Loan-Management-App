import { createClient } from '@supabase/supabase-js'
const url = 'https://ibrwgfrqofhgnitcnjcv.supabase.co'
const SupabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlicndnZnJxb2ZoZ25pdGNuamN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzNjcyNzgsImV4cCI6MjA1OTk0MzI3OH0.ZoewNfU6ThrFtbHxqkYxr1U7-wSYrIdFIzrmR2PE8XQ'
const supabase = createClient(url, SupabaseKey)
export default supabase