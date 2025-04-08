# Méthodologie du Test – Projets NestJS

Ce dépôt contient plusieurs projets NestJS pour les travaux pratiques de la matière **Méthodologie du Test**.

## Arborescence

```
.
├── tp_1/
│   └── calculatrice/
├── tp_2/
│   └── fizzbuzz/
├── tp_3/
│   └── bowling/
```

Chaque dossier (`calculatrice`, `fizzbuzz`, `bowling`) contient un projet NestJS indépendant avec ses propres tests.

---

## Prérequis

- Node.js (v18+ recommandé)
- npm ou yarn
- Nest CLI *(facultatif mais pratique)*

```bash
npm install -g @nestjs/cli
```

---

## 📦 Installation des dépendances

Dans chaque projet (`calculatrice`, `fizzbuzz`, `bowling`), fais :

```bash
cd tp_X/nom_du_projet
npm install
```

---

## 🚀 Lancer les tests

Dans le dossier de chaque projet :

```bash
npm run test
```

Ou si tu veux voir les détails (mode verbeux) :

```bash
npm run test:watch
```

Exemple pour lancer les tests du projet fizzbuzz :

```bash
cd tp_2/fizzbuzz
npm install
npm run test
```

---

## 📁 Détails des projets

- **tp_1/calculatrice** : Tests des opérations de base (addition, soustraction, multiplication, division)
- **tp_2/fizzbuzz** : Générateur FizzBuzz avec logique de test unitaire sur les valeurs
- **tp_3/bowling** : Implémentation d’un jeu de bowling avec gestion du score

---

## 🧪 Technologies utilisées

- [NestJS](https://nestjs.com/)
- [Jest](https://jestjs.io/)
- TypeScript

---

## 📌 Astuces

- `npm run test:cov` pour voir la couverture des tests
- `npm run start` si tu veux exécuter l'app en mode développement

---

Bon courage et bons tests 💥
