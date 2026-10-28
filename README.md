# Portfolio de Moez Latrach

Site statique Angular 21, prérendu (SEO), bilingue FR/EN, hébergeable gratuitement.

## Lancer en local

```bash
npm install
npm start          # http://localhost:4200, rechargement automatique
```

## Construire

```bash
npm run build      # sortie : dist/portfolio/browser (HTML prérendu pour chaque page)
```

## Modifier le contenu

Tout le contenu est dans `src/app/data/` (textes FR et EN côte à côte) :

| Fichier | Contenu |
|---|---|
| `profile.ts` | nom, liens, accroche, trois chiffres, CV proposés par angle, `siteUrl` |
| `angles.ts` | titre, introduction et ordre des sections de `/java`, `/ba`, `/ia` |
| `experiences.ts` | missions ; `first: [...]` choisit les lignes mises en tête par angle |
| `skills.ts` | compétences par niveau (Au quotidien / Pratiqué / En apprentissage) |
| `learning.ts` | frise « Montée en compétence » et section « À propos » |
| `projects.ts` | projets et études de cas |

**Ajouter un projet :** ajouter un objet dans `PROJECTS` (`projects.ts`). Sa page
`/fr/projects/<slug>` et `/en/projects/<slug>` est générée automatiquement au build.
Pensez à l'ajouter aussi à `public/sitemap.xml`.

**Ajouter une démo vidéo :** placer le fichier dans `public/media/` puis ajouter
`demo: { src: 'media/rag-demo.mp4', alt: { fr: '...', en: '...' } }` au projet.

**CV :** les PDF sont dans `public/cv/`. Remplacez-les par vos versions publiques.

## Publier (GitHub Pages)

Le site est publié sur https://moez-latrach.github.io depuis le dépôt `moez-latrach.github.io`.
Chaque `git push` sur `main` lance `.github/workflows/deploy.yml` : build Angular, ajout de `404.html`, déploiement.

Réglage unique sur GitHub : **Settings > Pages > Source : GitHub Actions**.
