# Israël-ai APK
Créé par **Israël Kibwe Zongwe** - Kasenga, Haut-Katanga, RDC
Né le 27 mai 2009

Backend: https://israel-ai.onrender.com
API: https://israel-ai.onrender.com/api/chat

## Structure
```
Israël-ai APK/
├── images/
│   ├── icon.png      # Icône Is-ai ronde noire
│   └── splash.png    # Splash screen
├── index.html        # Interface finale connectée
└── README.md
```

## Fonctionnalités (version finale)
- Logo Is-ai rond noir, deux tirets (long haut, court bas) fixes
- Barre d'écriture fixe qui se cache quand on ouvre une option
- Flèche ↓ pour retourner au dernier message
- Bouton copier code (copie seulement le bloc)
- Appui long sur message → Copier / Supprimer rouge
- Sombre/Clair, couleurs, micro vocal, + fichiers, gras **

## Créer l'APK via GitHub

### Méthode 1: GitHub Actions (automatique)
1. Push ce dépôt sur GitHub
2. Va dans Actions -> le workflow va builder l'APK automatiquement
3. Télécharge l'APK dans Artifacts

Le fichier `.github/workflows/build-apk.yml` est inclus.

### Méthode 2: Avec VoltBuilder / PhoneGap
1. Zip le dossier
2. Upload sur https://volt.build

Créateur: Israël Kibwe Zongwe
