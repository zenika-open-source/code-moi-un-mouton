import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Code-moi un mouton",
  description: "Initier les enfants au code et à la tech",
  base: '/code-moi-un-mouton/',
  ignoreDeadLinks: [
    /^http:\/\/localhost/,
    /\.sb[23]$/,
    /\.vpl3$/
  ],
  vite: {
    assetsInclude: ['**/*.sb2', '**/*.sb3', '**/*.vpl3']
  },
  themeConfig: {
    nav: [
      { text: 'Accueil', link: '/' },
      { text: 'Kit de démarrage', link: '/kit-de-demarrage/README' },
      { text: 'Ateliers', link: '/ateliers/README' }
    ],
    sidebar: {
      '/kit-de-demarrage/': [
        {
          text: 'Kit de démarrage',
          items: [
            { text: 'Présentation', link: '/kit-de-demarrage/README' },
            { text: 'Comment faire ?', link: '/kit-de-demarrage/how_to' },
            { text: 'Autorisation parentale', link: '/kit-de-demarrage/autorisation-parentale' }
          ]
        },
        {
          text: 'Emails types',
          items: [
            { text: 'Prise de contact école', link: '/kit-de-demarrage/emails/email_prise_contact_ecole' },
            { text: 'Présentation ateliers', link: '/kit-de-demarrage/emails/email_presentation_ateliers' },
            { text: 'Email participant', link: '/kit-de-demarrage/emails/email_participant' },
            { text: 'Remerciements', link: '/kit-de-demarrage/emails/email_remerciement' }
          ]
        },
        {
          text: 'Ateliers de base',
          items: [
            { text: 'Pré-requis', link: '/kit-de-demarrage/ateliers/atelier_pre-requis' },
            { text: 'Thymio', link: '/kit-de-demarrage/ateliers/atelier_thymio' },
            { text: 'Scratch', link: '/kit-de-demarrage/ateliers/atelier_scratch' },
            { text: 'Déconnecté', link: '/kit-de-demarrage/ateliers/atelier_deconnecte' }
          ]
        }
      ],
      '/ateliers/': [
        {
          text: 'Nos Ateliers',
          items: [
            { text: 'Tous les ateliers', link: '/ateliers/README' },
            { text: '🤖 Atelier IA', link: '/ateliers/Atelier-IA/README' },
            {
              text: '🐢 Thymio', items: [
                { text: 'Présentation', link: '/ateliers/thymio/readme' },
                { text: 'VPL 2', link: '/ateliers/thymio/vpl2/readme' },
                { text: 'VPL 3', link: '/ateliers/thymio/vpl3/README' }
              ]
            },
            { text: '📟 Microbit', link: '/ateliers/microbit/README' },
            {
              text: '😸 Scratch', items: [
                { text: 'Scratch 2', link: '/ateliers/Scratch/Scratch2/README' },
                { text: 'Scratch 3', link: '/ateliers/Scratch/Scratch3/README' }
              ]
            },
            { text: '🧱 Lego Mindstorms', link: '/ateliers/lego-mindstorms/README' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/jeanphi-baconnais/code-moi-un-mouton' }
    ],
    footer: {
      message: 'Initialement créé par des Zenikas.',
      copyright: 'Copyright © 2024-present'
    }
  }
})
