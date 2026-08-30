/**
 * GDIZ PORTAL — Main JavaScript Engine (Dark Luxury Edition)
 */

document.addEventListener('DOMContentLoaded', () => {
  const i18n = {
    fr: {
      brand_tag: "PORTAL",
      nav_services: "Services",
      nav_ecosystem: "Écosystème",
      nav_about: "À propos",
      btn_login: "Se connecter",
      badge_ecosystem: "DIGITAL INDUSTRIAL ECOSYSTEM",
      hero_title_part1: "L'Écosystème Industriel ",
      hero_title_highlight: "d'Excellence",
      hero_desc: "La plateforme numérique unifiée conçue pour simplifier l'accès aux services, démarches et opérations industrielles de la Zone de Glo-Djigbé.",
      cta_primary: "Accéder aux services",
      cta_secondary: "Découvrir la plateforme",
      stat1_label: "Dématérialisé",
      stat2_label: "Opérations & Fret",
      stat3_label: "Guichet Central",
      stage_header: "SERVICES & OPÉRATIONS",
      live_status: "HUB ACTIF",
      card1_title: "Services aux Entreprises",
      card1_desc: "Guichet unique d'implantation & agréments",
      card2_title: "Logistique & Port Sec",
      card2_desc: "Fret, douanes & transit de conteneurs",
      card3_title: "Guichet Documentaire",
      card3_desc: "Quitus, certificats officiels & vérifications",
      p1_title: "Entreprises",
      p1_desc: "Guichet & agréments",
      p2_title: "Logistique",
      p2_desc: "Fret & Port Sec",
      p3_title: "Personnel",
      p3_desc: "Badges & sécurité",
      p4_title: "Documents",
      p4_desc: "Quitus & certificats",
      p5_title: "Support",
      p5_desc: "Assistance 24/7",
      footer_copy: "© 2026 GDIZ Portal — Le portail numérique de l'écosystème industriel"
    },
    en: {
      brand_tag: "PORTAL",
      nav_services: "Services",
      nav_ecosystem: "Ecosystem",
      nav_about: "About",
      btn_login: "Sign In",
      badge_ecosystem: "DIGITAL INDUSTRIAL ECOSYSTEM",
      hero_title_part1: "The Premier Industrial ",
      hero_title_highlight: "Ecosystem",
      hero_desc: "The unified digital platform designed to streamline access to services, procedures, and industrial operations at Glo-Djigbé Industrial Zone.",
      cta_primary: "Access Services",
      cta_secondary: "Explore Platform",
      stat1_label: "Paperless",
      stat2_label: "Operations & Freight",
      stat3_label: "Single Window",
      stage_header: "SERVICES & OPERATIONS",
      live_status: "HUB ONLINE",
      card1_title: "Corporate Services",
      card1_desc: "Single window setup & licensing",
      card2_title: "Logistics & Dry Port",
      card2_desc: "Freight, customs & container transit",
      card3_title: "Document Vault",
      card3_desc: "Clearances, official certificates & audit",
      p1_title: "Enterprises",
      p1_desc: "Setup & Licensing",
      p2_title: "Logistics",
      p2_desc: "Freight & Dry Port",
      p3_title: "Workforce",
      p3_desc: "Passes & HSE Safety",
      p4_title: "Documents",
      p4_desc: "Certificates & Vault",
      p5_title: "Support",
      p5_desc: "24/7 Assistance",
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
