/**
 * GDIZ PORTAL — Main JavaScript Engine (Soft International Design)
 */

document.addEventListener('DOMContentLoaded', () => {
  const i18n = {
    fr: {
      brand_badge: "PORTAL",
      nav_services: "Services",
      nav_ecosystem: "Écosystème",
      nav_about: "À propos",
      btn_login: "Se connecter",
      status_pill: "Glo-Djigbé Industrial Zone • Portail Officiel",
      hero_title_part1: "L'Écosystème Industriel ",
      hero_title_highlight: "de Référence",
      hero_desc: "La plateforme numérique unifiée pour accéder aux services, démarches et opérations de la Zone Industrielle de Glo-Djigbé.",
      search_placeholder: "Rechercher un service, une démarche ou un accès...",
      btn_explore: "Explorer",
      cta_primary: "Accéder aux services",
      cta_secondary: "Découvrir la plateforme",
      status_secure: "Système Sécurisé",
      c1_title: "Entreprises & Investisseurs",
      c1_desc: "Guichet unique & agréments",
      c2_title: "Logistique & Port Sec",
      c2_desc: "Fret, douanes & opérations",
      c3_title: "Guichet & Documents",
      c3_desc: "Certificats, quitus & formalités",
      c4_title: "Badges & Personnel",
      c4_desc: "Accès sécurisé & conformité",
      p1_title: "Entreprises",
      p1_desc: "Services dédiés",
      p2_title: "Logistique",
      p2_desc: "Transit & fret",
      p3_title: "Personnel",
      p3_desc: "Badges d'accès",
      p4_title: "Documents",
      p4_desc: "Gestion & quitus",
      p5_title: "Support",
      p5_desc: "Assistance 24/7",
      footer_copy: "© 2026 GDIZ Portal — Le portail numérique de l'écosystème industriel"
    },
    en: {
      brand_badge: "PORTAL",
      nav_services: "Services",
      nav_ecosystem: "Ecosystem",
      nav_about: "About",
      btn_login: "Sign In",
      status_pill: "Glo-Djigbé Industrial Zone • Official Portal",
      hero_title_part1: "The Premier Industrial ",
      hero_title_highlight: "Ecosystem",
      hero_desc: "The unified digital platform to access services, administrative procedures, and industrial operations at Glo-Djigbé Industrial Zone.",
      search_placeholder: "Search for a service, procedure or access pass...",
      btn_explore: "Explore",
      cta_primary: "Access Services",
      cta_secondary: "Discover Platform",
      status_secure: "Secure System",
      c1_title: "Enterprises & Investors",
      c1_desc: "Single window & licenses",
      c2_title: "Logistics & Dry Port",
      c2_desc: "Freight, customs & operations",
      c3_title: "Single Window & Docs",
      c3_desc: "Certificates & formalities",
      c4_title: "Access Passes & Staff",
      c4_desc: "Secure badge & compliance",
      p1_title: "Enterprises",
      p1_desc: "Corporate services",
      p2_title: "Logistics",
      p2_desc: "Transit & freight",
      p3_title: "Workforce",
      p3_desc: "Access passes",
      p4_title: "Documents",
      p4_desc: "Vault & clearance",
      p5_title: "Support",
      p5_desc: "24/7 Helpdesk",
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
