# Outil Simplifié d'Analyse des Paniers d'Achat

## Description
Ce projet est un outil d'analyse pour aider un administrateur de site e-commerce à obtenir des informations sur les produits les plus vendus, la répartition des ventes par catégorie, et les tendances de ventes.

## Prérequis
- Node.js (v16 ou supérieur)
- MongoDB (local ou cloud, comme MongoDB Atlas)
- Vue CLI (pour le frontend)

## Installation des Dépendances

### Backend
1. Accédez au répertoire du backend :
   ```bash
   cd backend
   
   
### Installez les dépendances 

npm install

## Frontend
1 .Accédez au répertoire du frontend
cd frontend 
cd vue-project

### Installez les dépendances 

npm install

# Lancer l'Application
### Backend
  cd backend
  ts-node src/server.ts

### Frontend
  cd ../frontend
  cd vue-project
  npm run dev

### Endpoints API
  1. Total des Ventes
Exemple de Requête:
GET http://localhost:5000/analytics/total_sales?startDate=2023-01-01&endDate=2023-12-31
2. Produits Tendances
   Exemple de Requête:
   GET http://localhost:5000/analytics/trending_products
3. Répartition des Ventes par Catégorie
   Exemple de Requête:
   GET http://localhost:5000/analytics/category_sales
4. Liste des Produits
    Exemple de Requête:
   GET http://localhost:5000/products
   

  

