// ========================================
// CONFIGURATION SUPABASE
// ========================================

// Format pour survey.html (avec window.)
window.SUPABASE_URL = 'https://mtgwnqzobxvnducxpuww.supabase.co';
window.SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10Z3ducXpvYnh2bmR1Y3hwdXd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk4ODM5MjQsImV4cCI6MjA3NTQ1OTkyNH0.iB6xGRvZsA5Dcjq0vTfoUB1Rhk6cW7HV4yF9-yew8DM';

// Format pour results.html et admin.html (sans window.)
const SUPABASE_URL = window.SUPABASE_URL;
const SUPABASE_ANON_KEY = window.SUPABASE_ANON_KEY;

// ========================================
// CONFIGURATION TRADUCTION (SÉCURISÉE)
// ========================================

// La clé API Gemini est masquée et stockée dans les secrets Supabase.
// Son identifiant est : _GEMINIKEY_
// La traduction est traitée par Supabase Edge Functions.
window.GEMINI_SECRET_NAME = '_GEMINIKEY_';
window.USE_SUPABASE_FUNCTIONS = true;
