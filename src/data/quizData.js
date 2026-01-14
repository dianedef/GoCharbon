export const quizData = {
  questions: [
    {
      id: 1,
      text: "Qu'est-ce qui te motive le plus dans le business en ligne ?",
      options: [
        { 
          text: "Vendre des produits physiques ou digitaux", 
          icon: "🛒", 
          points: { ecommerce: 3, saas: 1 } 
        },
        { 
          text: "Créer du contenu et bâtir une audience", 
          icon: "📱", 
          points: { content: 3, formation: 1 } 
        },
        { 
          text: "Développer des solutions logicielles", 
          icon: "💻", 
          points: { saas: 3, service: 1 } 
        },
        { 
          text: "Partager mes connaissances et former", 
          icon: "🎓", 
          points: { formation: 3, content: 1 } 
        },
      ],
    },
    {
      id: 2,
      text: "Quelles sont tes compétences principales ?",
      options: [
        { 
          text: "Marketing et vente", 
          icon: "📊", 
          points: { ecommerce: 2, content: 2 } 
        },
        { 
          text: "Développement et technique", 
          icon: "⚙️", 
          points: { saas: 3, service: 2 } 
        },
        { 
          text: "Communication et création", 
          icon: "🎨", 
          points: { content: 3, formation: 1 } 
        },
        { 
          text: "Expertise dans un domaine", 
          icon: "🧠", 
          points: { formation: 3, service: 2 } 
        },
      ],
    },
    {
      id: 3,
      text: "Combien de temps peux-tu investir au départ ?",
      options: [
        { 
          text: "Quelques heures par semaine", 
          icon: "⏱️", 
          points: { content: 2, service: 2 } 
        },
        { 
          text: "Mi-temps (20h/semaine)", 
          icon: "📅", 
          points: { ecommerce: 2, formation: 2 } 
        },
        { 
          text: "Temps plein", 
          icon: "🚀", 
          points: { saas: 3, ecommerce: 1 } 
        },
        { 
          text: "Flexible selon les projets", 
          icon: "🔄", 
          points: { service: 3, content: 1 } 
        },
      ],
    },
    {
      id: 4,
      text: "Quel modèle de revenu te correspond le mieux ?",
      options: [
        { 
          text: "Ventes ponctuelles", 
          icon: "💰", 
          points: { ecommerce: 3, formation: 1 } 
        },
        { 
          text: "Abonnements récurrents", 
          icon: "🔁", 
          points: { saas: 3, content: 2 } 
        },
        { 
          text: "Projets sur-mesure", 
          icon: "🎯", 
          points: { service: 3 } 
        },
        { 
          text: "Mix de plusieurs revenus", 
          icon: "💼", 
          points: { formation: 2, content: 2 } 
        },
      ],
    },
    {
      id: 5,
      text: "Comment préfères-tu interagir avec tes clients ?",
      options: [
        { 
          text: "Automatisation maximale", 
          icon: "🤖", 
          points: { saas: 3, ecommerce: 2 } 
        },
        { 
          text: "Relation personnalisée", 
          icon: "🤝", 
          points: { service: 3, formation: 2 } 
        },
        { 
          text: "Communauté en ligne", 
          icon: "👥", 
          points: { content: 3, formation: 1 } 
        },
        { 
          text: "Mix d'automatique et humain", 
          icon: "⚡", 
          points: { ecommerce: 2, formation: 2 } 
        },
      ],
    },
  ],
  results: {
    ecommerce: {
      title: "E-commerce / Dropshipping",
      icon: "🛒",
      description: "Tu as l'âme d'un commerçant digital ! Lance ta boutique en ligne, que ce soit en dropshipping, produits digitaux ou print-on-demand.",
      strengths: [
        "Excellentes compétences en marketing",
        "Capacité à gérer les stocks et la logistique",
        "Sens commercial développé",
        "Aptitude à optimiser les conversions",
      ],
    },
    saas: {
      title: "SaaS (Logiciel en Service)",
      icon: "💻",
      description: "Tu es parfait pour créer une solution logicielle ! Développe un outil qui résout un problème récurrent avec un modèle d'abonnement.",
      strengths: [
        "Solides compétences techniques",
        "Vision produit claire",
        "Capacité à automatiser",
        "Revenus récurrents prévisibles",
      ],
    },
    content: {
      title: "Créateur de Contenu",
      icon: "📱",
      description: "Tu es fait pour bâtir une audience ! Crée du contenu de valeur sur YouTube, blog, réseaux sociaux et monétise ton influence.",
      strengths: [
        "Excellente communication",
        "Créativité et régularité",
        "Capacité à engager une audience",
        "Multiples sources de revenus possibles",
      ],
    },
    service: {
      title: "Services en Ligne",
      icon: "🎯",
      description: "Tu excelles dans le service client ! Propose ton expertise en consulting, freelance ou agence pour aider d'autres entrepreneurs.",
      strengths: [
        "Expertise valorisable",
        "Relation client personnalisée",
        "Démarrage rapide possible",
        "Revenus immédiats",
      ],
    },
    formation: {
      title: "Formation en Ligne",
      icon: "🎓",
      description: "Tu es un excellent pédagogue ! Crée et vends des formations, coaching ou membership pour transmettre ton savoir.",
      strengths: [
        "Expertise reconnue dans un domaine",
        "Passion pour l'enseignement",
        "Capacité à structurer des contenus",
        "Évolutivité et revenu passif",
      ],
    },
  },
};
