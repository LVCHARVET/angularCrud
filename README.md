# Angularcrud

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.

## Introduction

Cette application Angular est un projet CRUD (Create, Read, Update, Delete) permettant de gérer une liste de produits. Elle utilise Angular pour le frontend, json-server pour la gestion des produits, et Bootstrap pour la mise en page et les composants interactifs.

## Choix technique

Bootstrap : J'ai intégré Bootstrap pour faciliter la création d'une interface utilisateur responsive et moderne, notamment pour les boutons, les cartes de produits et les modales.

Modale de confirmation : Pour la suppression des produits, j'ai implémenté une modale Bootstrap pour demander une confirmation à l'utilisateur. Cela permet d'éviter des suppressions accidentelles et améliore l'expérience utilisateur.

J'ai eu un problème avec la modale :
const modal = new bootstrap.Modal(document.getElementById('confirmDeleteModal')!); 
J'utilise l'API JavaScript de Bootstrap pour ouvrir la modale en récupérant l'élément HTML avec l'id confirmDeleteModal
Une erreur survenait sur bootstrap : Cannot find name 'bootstrap'.
J'ai donc déclarer ma variable bootstrap pour y palier : product-get.component.ts - ligne 6 - declare var bootstrap: any;

Pour la structure de la modale j'ai repris du code existant avec les classes modal, modal-dialog, et modal-content. 
J'ai remplacé les boutons statiques par des boutons dynamiques qui déclenchent des événements Angular lorsque la modale est confirmée ou annulée :
- id="confirmDeleteModal" : Identifiant unique utilisé pour cibler la modale via JavaScript.
- button data-bs-dismiss="modal" : Ce bouton permet de fermer la modale après la confirmation de la suppression.

Pour mes methodes : 
- handleConfirmDelete : Cette méthode est appelée lorsque l'utilisateur confirme la suppression. Elle supprime le produit en appelant le service deleteProduct puis ferme la modale.
- handleCancelDelete : Cette méthode permet de réinitialiser l'identifiant du produit à supprimer lorsque l'utilisateur annule l'action.

## Prérequis

Avant de démarrer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

- Node.js
- Angular CLI 
- Json-server

## Installation

1. Clonez le dépôt sur votre machine locale :

```bash
git clone https://github.com/LVCHARVET/angularCrud.git
cd votre-repo
npm install
```

## Backend 

Attention à bien vous placer dans le répertoire qui contient le fichier db.json pour lancer le serveur :

```bash
npx json-server db.json
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
