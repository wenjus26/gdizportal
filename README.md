# GDIZ Portal

> **Le portail numérique de la Zone Industrielle de Glo-Djigbé — Zè-Bénin**  
> **The digital platform of Glo-Djigbé Industrial Zone — Zè, Benin**

🌐 **[gdizportal.bj](https://gdizportal.bj)**

---

## À propos / About

Page d'accueil statique officielle du portail GDIZ.  
Single-screen static landing page for the GDIZ digital portal.

- Bilingue **FR / EN** — deux sections HTML indépendantes, aucun texte mélangé
- Responsive — mobile, tablette, desktop
- Zéro dépendance externe côté serveur — HTML / CSS / JS vanilla

---

## Identité visuelle / Brand

| Couleur | Hex | Rôle |
|--------|-----|------|
| GDIZ Blue | `#302F7F` | Dominant |
| GDIZ Yellow | `#F0B310` | Accent |
| GDIZ Red | `#EF463B` | Accent |
| GDIZ Green | `#00A950` | Accent |

**Typographie :** Plus Jakarta Sans (Google Fonts)

---

## Structure

```
gdizportal/
├── index.html                  # Landing page FR / EN
├── 404.html                    # Page d'erreur personnalisée
├── CNAME                       # Domaine custom → gdizportal.bj
├── README.md
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── main.js
    ├── img/
    │   └── gdiz-logo.png       # Logo officiel GDIZ (331×152 RGBA)
    └── favicon/
        ├── favicon.ico
        ├── favicon-16x16.png
        ├── favicon-32x32.png
        ├── apple-touch-icon.png
        ├── android-chrome-192x192.png
        ├── android-chrome-512x512.png
        └── site.webmanifest
```

---

## Déploiement / Deployment

| Composant | Valeur |
|-----------|--------|
| Hébergement | GitHub Pages — branche `main` |
| CDN / DNS | Cloudflare |
| Domaine | `gdizportal.bj` |
| CNAME | `www.gdizportal.bj` → `wenjus26.github.io` |

**Pousser une mise à jour :**

```bash
git add -A
git commit -m "feat: description du changement"
git push origin main
```

---

## Langue / Language toggle

Le sélecteur **FR / EN** en haut à droite affiche/masque deux sections HTML entièrement distinctes.  
Par défaut, la page s'ouvre en **anglais (EN)**.

---

© 2026 GDIZ Portal — [gdizportal.bj](https://gdizportal.bj)
