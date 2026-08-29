/**
 * GDIZ PORTAL — Main JavaScript Engine
 * Interactions, Dynamic Localization (FR/EN), and Ecosystem Visual Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  // Translations Dictionary - Ultra Chic & Concise
  const i18n = {
    fr: {
      badge: "GLO-DJIGBÉ INDUSTRIAL ZONE • BÉNIN",
      brand_tag: "PORTAIL OFFICIEL",
      nav_services: "Services",
      nav_ecosystem: "Écosystème",
      nav_about: "À propos",
      btn_login: "Espace Sécurisé",
      hero_title_part1: "L'Écosystème Industriel ",
      hero_title_highlight: "d'Excellence",
      hero_desc: "La plateforme numérique unifiée pour accéder aux services, démarches et opérations de la Zone Industrielle de Glo-Djigbé.",
      cta_primary: "Accéder aux services",
      cta_secondary: "Découvrir l'écosystème",
      badge_guichet: "Guichet Unique Numérique",
      badge_demat: "100% Dématérialisé",
      badge_hub: "Hub Logistique Connecté",
      // Visual Nodes
      hub_sub: "PLATEFORME DIGITALE",
      node_ent_title: "Entreprises",
      node_ent_tags: "Guichet & Implantation",
      node_log_title: "Logistique",
      node_log_tags: "Port Sec & Transit",
      node_srv_title: "Opérations",
      node_srv_tags: "Badges & Sécurité",
      node_doc_title: "Documents",
      node_doc_tags: "Certificats & Quitus",
      live_status: "PLATEFORME EN LIGNE",
      telemetry_loc: "GLO-DJIGBÉ, BÉNIN",
      telemetry_sys: "SYSTÈME OPÉRATIONNEL",
      // Service Cards
      card1_title: "Entreprises",
      card1_desc: "Guichet & Implantation",
      card2_title: "Logistique",
      card2_desc: "Port Sec & Fret",
      card3_title: "Personnel",
      card3_desc: "Badges & Démarches",
      card4_title: "Documents",
      card4_desc: "Certificats & Quitus",
      card5_title: "Support",
      card5_desc: "Assistance & Guichet",
      // Footer
      footer_text: "© 2026 GDIZ Portal — Le portail numérique de l'écosystème industriel",
      footer_zone: "Glo-Djigbé Industrial Zone, Zè-Bénin"
    },
    en: {
      badge: "GLO-DJIGBÉ INDUSTRIAL ZONE • BENIN",
      brand_tag: "OFFICIAL PORTAL",
      nav_services: "Services",
      nav_ecosystem: "Ecosystem",
      nav_about: "About",
      btn_login: "Secure Access",
      hero_title_part1: "The Industrial Ecosystem ",
      hero_title_highlight: "of Excellence",
      hero_desc: "The unified digital gateway to access services, procedures, and industrial operations at Glo-Djigbé Industrial Zone.",
      cta_primary: "Access Services",
      cta_secondary: "Explore Ecosystem",
      badge_guichet: "Single Digital Window",
      badge_demat: "100% Paperless",
      badge_hub: "Connected Logistics Hub",
      // Visual Nodes
      hub_sub: "DIGITAL PLATFORM",
      node_ent_title: "Enterprises",
      node_ent_tags: "Single Window & Setup",
      node_log_title: "Logistics",
      node_log_tags: "Dry Port & Freight",
      node_srv_title: "Operations",
      node_srv_tags: "Access Passes & Safety",
      node_doc_title: "Documents",
      node_doc_tags: "Certificates & Clearances",
      live_status: "PLATFORM ONLINE",
      telemetry_loc: "GLO-DJIGBÉ, BENIN",
      telemetry_sys: "SYSTEM OPERATIONAL",
      // Service Cards
      card1_title: "Enterprises",
      card1_desc: "Setup & Single Window",
      card2_title: "Logistics",
      card2_desc: "Dry Port & Freight",
      card3_title: "Workforce",
      card3_desc: "Passes & Clearance",
      card4_title: "Documents",
      card4_desc: "Certificates & Vault",
      card5_title: "Support",
      card5_desc: "Helpdesk & Assistance",
      // Footer
      footer_text: "© 2026 GDIZ Portal — The digital gateway to the industrial ecosystem",
      footer_zone: "Glo-Djigbé Industrial Zone, Zè-Benin"
    }
  };

  let currentLang = 'fr';

  // Language Switcher Logic
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

  // Interactive Visual Node Interactivity
  const nodes = document.querySelectorAll('.satellite-node, .hub-center-core');
  nodes.forEach(node => {
    node.addEventListener('mouseenter', () => {
      const lines = document.querySelectorAll('.network-line');
      lines.forEach(line => {
        line.style.stroke = 'var(--gdiz-blue)';
        line.style.strokeWidth = '2.5';
      });
    });
    node.addEventListener('mouseleave', () => {
      const lines = document.querySelectorAll('.network-line');
      lines.forEach(line => {
        line.style.stroke = 'rgba(38, 40, 121, 0.22)';
        line.style.strokeWidth = '1.5';
      });
    });
  });

  // Modal Service Focus helper
  const serviceCards = document.querySelectorAll('.service-card-item');
  serviceCards.forEach(card => {
    card.addEventListener('click', () => {
      const targetCategory = card.getAttribute('data-service-category');
      if (targetCategory) {
        highlightServiceInModal(targetCategory);
      }
    });
  });

  function highlightServiceInModal(category) {
    const modalTab = document.querySelector(`[data-tab-target="${category}"]`);
    if (modalTab) {
      modalTab.click();
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
