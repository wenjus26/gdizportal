/**
 * GDIZ PORTAL — Main JavaScript Engine
 * Interactions, Dynamic Localization (FR/EN), and Ecosystem Visual Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  // Translations Dictionary
  const i18n = {
    fr: {
      badge: "DIGITAL INDUSTRIAL ECOSYSTEM",
      brand_tag: "PORTAL",
      nav_services: "Services",
      nav_ecosystem: "Écosystème",
      nav_about: "À propos",
      btn_login: "Se connecter",
      hero_title_part1: "Le portail numérique",
      hero_title_highlight: "de l'écosystème industriel",
      hero_desc: "Une plateforme numérique conçue pour simplifier l'accès aux services, démarches et informations de l'écosystème industriel.",
      cta_primary: "Accéder aux services",
      cta_secondary: "Découvrir la plateforme",
      badge_guichet: "Guichet Unique Numérique",
      badge_demat: "100% Dématérialisé",
      badge_hub: "Hub Logistique & Industriel",
      // Visual Nodes
      hub_sub: "PLATEFORME DIGITALE",
      node_ent_title: "Entreprises",
      node_ent_tags: "Guichet Unique • Démarches",
      node_log_title: "Logistique",
      node_log_tags: "Port Sec • Suivi Fret",
      node_srv_title: "Services",
      node_srv_tags: "Badges • Opérations",
      node_doc_title: "Documents",
      node_doc_tags: "Certificats • Quitus",
      live_status: "PLATEFORME EN LIGNE",
      telemetry_loc: "GLO-DJIGBÉ, BÉNIN",
      telemetry_sys: "SYSTÈME ACTIF",
      // Service Cards
      card1_title: "Entreprises",
      card1_desc: "Services aux entreprises",
      card2_title: "Logistique",
      card2_desc: "Transport & opérations",
      card3_title: "Personnel",
      card3_desc: "Services employés",
      card4_title: "Documents",
      card4_desc: "Gestion documentaire",
      card5_title: "Support",
      card5_desc: "Assistance & guichet",
      // Footer
      footer_text: "© 2026 GDIZ Portal — Le portail numérique de l'écosystème industriel",
      footer_zone: "Glo-Djigbé Industrial Zone, Zè-Bénin"
    },
    en: {
      badge: "DIGITAL INDUSTRIAL ECOSYSTEM",
      brand_tag: "PORTAL",
      nav_services: "Services",
      nav_ecosystem: "Ecosystem",
      nav_about: "About",
      btn_login: "Sign In",
      hero_title_part1: "The digital gateway",
      hero_title_highlight: "to the industrial ecosystem",
      hero_desc: "A unified digital platform designed to streamline access to industrial services, administrative procedures, and ecosystem intelligence.",
      cta_primary: "Access Services",
      cta_secondary: "Discover Platform",
      badge_guichet: "Single Digital Window",
      badge_demat: "100% Paperless",
      badge_hub: "Logistics & Industrial Hub",
      // Visual Nodes
      hub_sub: "DIGITAL PLATFORM",
      node_ent_title: "Enterprises",
      node_ent_tags: "Single Window • Procedures",
      node_log_title: "Logistics",
      node_log_tags: "Dry Port • Freight Tracking",
      node_srv_title: "Services",
      node_srv_tags: "Access Passes • Operations",
      node_doc_title: "Documents",
      node_doc_tags: "Certificates • Clearances",
      live_status: "PLATFORM ONLINE",
      telemetry_loc: "GLO-DJIGBÉ, BENIN",
      telemetry_sys: "SYSTEM ACTIVE",
      // Service Cards
      card1_title: "Enterprises",
      card1_desc: "Corporate services",
      card2_title: "Logistics",
      card2_desc: "Transport & operations",
      card3_title: "Workforce",
      card3_desc: "Employee services",
      card4_title: "Documents",
      card4_desc: "Document management",
      card5_title: "Support",
      card5_desc: "Helpdesk & assistance",
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

    // Special title handling with highlight span
    const titlePart1 = document.querySelector('[data-i18n-title-part1]');
    const titleHighlight = document.querySelector('[data-i18n-title-highlight]');
    if (titlePart1 && titleHighlight) {
      titlePart1.textContent = texts.hero_title_part1 + ' ';
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
        line.style.stroke = 'rgba(38, 40, 121, 0.2)';
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

  // Viewport Height Fix for Mobile
  const setVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };
  window.addEventListener('resize', setVh);
  setVh();
});
