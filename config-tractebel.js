const CONFIG_TRACTEBEL = {
  // Connexion Supabase
  supabase: {
    url: 'https://mtgwnqzobxvnducxpuww.supabase.co',
    anon_key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10Z3ducXpvYnh2bmR1Y3hwdXd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk4ODM5MjQsImV4cCI6MjA3NTQ1OTkyNH0.iB6xGRvZsA5Dcjq0vTfoUB1Rhk6cW7HV4yF9-yew8DM'
  },
  
  // Tables dédiées
  tables: {
    pages: 'tractebel_pages',
    choix: 'tractebel_choix',
    votes: 'tractebel_votes',
    stats: 'tractebel_stats'
  },
  
  // Apparence
  branding: {
    nom: 'No Mind at Risk',
    logoNMAR: 'assets/logo-nmar.png',
    logoTractebel: 'assets/logo-tractebel.png',
    
    // Couleurs du brief
    couleurs: {
      fondPrincipal: '#00AAFF',
      fondDegrade: '#0066B3',
      accent: '#FFED00',
      boutons: 'rgba(0, 102, 179, 1)',
      boutonsBordure: '#FFFFFF',
      texte: '#FFFFFF',
      texteFonce: '#0066B3'
    },
    
    typo: {
      principale: 'Arial, sans-serif',
      titre: 'Arial, sans-serif',
      boutons: 'Arial, sans-serif'
    }
  },
  
  // Paramètres fonctionnels
  settings: {
    votesMultiples: false,
    cookieDuree: 365, // 1 an
    refreshStatsInterval: 3000, // 3 secondes
    layoutBoutons: 'vertical' // vertical ou grid
  }
};
