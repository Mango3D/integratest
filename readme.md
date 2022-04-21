# mango3d/integratest

> 🥽 Test d'intégration front-end pour Mango3D

* * *

## À propos

Merci de participer au test technique d'intégration front-end pour Mango3D.  
Vous trouverez tout ce qu'il vous faut dans ce *repository*.

La consigne est simple : sur base des ressources présentes dans le repo et les fichiers graphiques dans le dossier `gfx`, réalisez l'intégration du design sur une page web, architecturée en composants **react** via **typescript**.

> **NOTE:** notre objectif avec ce test est de jauger vos capacités techniques, vos méthodes et votre réactivité face à un projet. Nous avons essayé de faire au mieux pour vous proposez un projet court, pour ne pas trop accaparer votre temps.

### Formalités

L'entiéreté du site est _statique_, pas besoin de la mettre en ligne pour nous _rendre_ votre production : faites simplement un _fork_ du repo puis soumettez votre travail *via* une *pull request*.  
Si vous avez la moindre remarque, note ou précision, utilisez les commentaires de la pull request pour nous les transmettre.

## Usage

Pour faire tourner le projet en local, vous aurez juste besoin de `node.js`.  
Une fois le projet cloné localement, lancez `npm install` (ou `npm ci`) pour installer les dépendances du projet.

Ensuite, lancez `npm run work` pour démarrer un serveur local webpack qui compilera votre code à la volée. Le résultat est accessible sur [http://localhost:8000](http://localhost:8000).

Si vous avez besoin d'installer de nouvelles dépendances pour réaliser ce projet, n'hésitez pas, faites comme chez vous (mais précisez-nous le *pourquoi du comment* dans votre pull request, c'est toujours bon à savoir).

Chez Mango3D, nous travaillons avec **ESLint** mais l'avons volontairement désactivé pour ce test.  
Nous travaillons également avec **Prettier**, qui n'est pas activé par défaut, mais la configuration est inclue : lancez `npm run prettier` pour mettre en forme votre code à la demande.

### Contenu

Le code de base fourni est relativement clair et léger.  
Le point d'entrée se trouve dans `src/entries/app.tsx` et votre page de travail est déjà préparée dans `src/containers/pages/home.tsx`.

À vous d'organiser vos composants dans `src/components`.

Les données à afficher dans les composants sont récupérées dans un `Context`, qui est défini dans `src/core/contexts/data.tsx`.

#### Charte graphique

Dans le dossier `gfx`, vous trouverez le rendu final (`final-render.png`) et la charte graphique (`visual-guidelines.png`).

Les resources nécéssaires à la réalisation du projet sont déjà dans le dossier `dist/images`.

> 👉 les typos indiquées dans la charte sont déjà chargées depuis Google Font dans le `head` du template.

#### Header

Lorsque la page est _scrollée_ vers le bas et que le **header** sort du viewport, il passe en _sticky_ comme présenté dans la charte.

#### Carousel

La section _What we do?_ présente un petit carousel - nous aimerions une animation des transitions comme [celle présentée sur cette page](https://www.framer.com/examples/3d-carousel/).

#### Formulaire

Dans le `context` react, un handler nommé `handleSubmitForm` est présent pour envoyer le contenu de votre formulaire.

* * *

Si vous avez la moindre question, n'hésitez pas.

Un grand merci et bon travail !

![https://media.giphy.com/media/fm4puLW6jd7R6/giphy.gif](https://media.giphy.com/media/fm4puLW6jd7R6/giphy.gif)
