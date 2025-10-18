const CONFIG_TRACTEBEL = {
  // Connexion Supabase
  supabase: {
    url: 'https://TON-PROJET.supabase.co',
    anon_key: 'TA_CLE_PUBLIQUE_SUPABASE'
  },
  
  // Tables dédiées
  tables: {
    questions: 'tractebel_sondage_questions',
    reponses: 'tractebel_sondage_reponses',
    config: 'tractebel_sondage_config'
  },
  
  // Apparence
  branding: {
    nom: 'No Mind at Risk',
    logoNMAR: 'assets/logo-nmar.png',
    logoTractebel: 'assets/logo-tractebel.png',
    
    // Couleurs du brief
    couleurs: {
      fondPrincipal: '#00AAFF',      // Bleu principal (gradient start)
      fondDegrade: '#0066B3',         // Bleu foncé (gradient end)
      accent: '#FFED00',              // Jaune du logo
      boutons: 'rgba(0, 102, 179, 1)', // Bleu des boutons (#0066B3)
      boutonsBordure: '#FFFFFF',      // Bordure blanche
      texte: '#FFFFFF',
      texteFonce: '#0066B3'
    },
    
    // Typographie
    typo: {
      principale: 'Arial, sans-serif',
      titre: 'Arial, sans-serif',
      boutons: 'Arial, sans-serif'
    }
  },
  
  // Paramètres fonctionnels
  settings: {
    votesMultiples: false,
    afficherResultats: false, // Pas de résultats côté public
    cookieDuree: 365, // 1 an
    layoutBoutons: 'grid' // Grille 2x4 comme dans l'image
  }
};
