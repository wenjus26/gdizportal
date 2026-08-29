# GDIZ Portal — Le portail numérique de l'écosystème industriel

Site officiel : [https://gdizportal.bj](https://gdizportal.bj)

Plateforme numérique conçue pour simplifier et centraliser l'accès aux services, démarches et informations de l'écosystème industriel de la Zone Industrielle de Glo-Djigbé (Zè-Bénin).

---

## Identité Visuelle & Conception

- **Couleur dominante** : Bleu Institutionnel GDIZ (`#262879`)
- **Accents de marque** : Rouge GDIZ (`#EE463A`) & Ambre/Orange (`#F2B310`)
- **Architecture** : Single-screen static landing page (aucun scroll vertical sur ordinateur de bureau)
- **Typographie** : *Plus Jakarta Sans* & *Inter*
- **Technologies** : HTML5, CSS3, Bootstrap 5, Font Awesome, JavaScript Vanilla

---

## Structure des Fichiers

```text
gdizportal/
├── index.html          # Page d'accueil single-screen
├── 404.html            # Page d'erreur personnalisée
├── CNAME               # Configuration du domaine personnalisé gdizportal.bj
├── README.md           # Documentation du projet
└── assets/
    ├── css/
    │   └── style.css   # Feuille de styles et responsive design
    ├── js/
    │   └── main.js     # Logique d'interaction, i18n bilingue (FR/EN)
    └── img/
        ├── gdiz-logo.png # Logo officiel GDIZ
        └── favicon.svg   # Favicon haute résolution
```

---

## Déploiement

Le site est hébergé statiquement via **GitHub Pages** couplé à **Cloudflare** avec le nom de domaine `gdizportal.bj`.
