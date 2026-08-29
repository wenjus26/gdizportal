/**
 * GDIZ PORTAL — Main JavaScript Engine (Minimalist & Clean)
 */

document.addEventListener('DOMContentLoaded', () => {
  const i18n = {
    fr: {
      tag_label: "PORTAIL NUMÉRIQUE OFFICIEL",
      nav_services: "Services",
      nav_ecosystem: "Écosystème",
      nav_about: "À propos",
      btn_login: "Connexion",
      hero_title_part1: "L'Écosystème Industriel ",
      hero_title_highlight: "de Demain",
      hero_desc: "La porte d'entrée numérique unifiée pour accéder aux services, démarches et opérations de la Zone Industrielle de Glo-Djigbé.",
      cta_primary: "Accéder aux services",
      cta_secondary: "Découvrir l'écosystème",
      status_online: "EN LIGNE",
      card1_title: "Entreprises & Investisseurs",
      card2_title: "Logistique & Port Sec",
      card3_title: "Badges & Personnel",
      card4_title: "Guichet & Documents",
      pill1_title: "Entreprises",
      pill1_sub: "Guichet unique",
      pill2_title: "Logistique",
      pill2_sub: "Transit & fret",
      pill3_title: "Personnel",
      pill3_sub: "Badges d'accès",
      pill4_title: "Documents",
      pill4_sub: "Certificats officiels",
      pill5_title: "Support",
      pill5_sub: "Assistance 24/7",
      footer_copy: "© 2026 GDIZ Portal — Le portail numérique de l'écosystème industriel"
    },
    en: {
      tag_label: "OFFICIAL DIGITAL PORTAL",
      nav_services: "Services",
      nav_ecosystem: "Ecosystem",
      nav_about: "About",
      btn_login: "Sign In",
      hero_title_part1: "The Industrial Ecosystem ",
      hero_title_highlight: "of Tomorrow",
      hero_desc: "The unified digital gateway to access services, procedures, and industrial operations at Glo-Djigbé Industrial Zone.",
      cta_primary: "Access Services",
      cta_secondary: "Explore Ecosystem",
      status_online: "ONLINE",
      card1_title: "Enterprises & Investors",
      card2_title: "Logistics & Dry Port",
      card3_title: "Access Passes & Staff",
      card4_title: "Single Window & Docs",
      pill1_title: "Enterprises",
      pill1_sub: "Single Window",
      pill2_title: "Logistics",
      pill2_sub: "Transit & Freight",
      pill3_title: "Workforce",
      pill3_sub: "Access Passes",
      pill4_title: "Documents",
      pill4_sub: "Certificates & Vault",
      pill5_title: "Support",
      pill5_sub: "24/7 Helpdesk",
      footer_copy: "© 2026 GDIZ Portal — The digital gateway to the industrial ecosystem"
    }
  };

  let currentLang = 'fr';

  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const selectedLang = e.target.getAttribute('data-lang');
      if (selectedLang && selectedLang !== currentLang) {
        currentLang = selectedLang;
        updateLanguage(currentLang);
        langButtons.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        document.documentElement.setAttribute('lang', currentLang);
      }
    });
  });

  function updateLanguage(lang) {
    const texts = i18n[lang];
    if (!texts) return;

    document.querySelectorAll('[data-i18n]').forEach(elem => {
      const key = elem.getAttribute('data-i18n');
      if (texts[key]) {
        elem.textContent = texts[key];
      }
    });

    const titlePart1 = document.querySelector('[data-i18n-title-part1]');
    const titleHighlight = document.querySelector('[data-i18n-title-highlight]');
    if (titlePart1 && titleHighlight) {
      titlePart1.textContent = texts.hero_title_part1;
      titleHighlight.textContent = texts.hero_title_highlight;
    }
  }

  // Viewport Height Fix
  const setVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };
  window.addEventListener('resize', setVh);
  setVh();
});
