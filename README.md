# Unplugged Shop

A MERN (MongoDB, Express, React, Node) shopping cart app. It is an early-stage learning project (2021). Right now it lists products and shows a product page. Cart, checkout, user login and orders are not built yet (the user and order data models exist in the backend, but no routes use them).

## Tech stack
- Backend: Node.js (ES modules), Express 4.17, Mongoose 5.13, bcryptjs, dotenv
- Frontend: React 17, Redux (redux-thunk), React Router 5, React-Bootstrap 1.6, Axios (Create React App 4.0.3)
- Dev tools: nodemon, concurrently

## Requirements
- Node.js and npm
- A MongoDB database (local or MongoDB Atlas)

## Install and run
```bash
git clone https://github.com/KhaledShehataA/unplugged-shop.git
cd unplugged-shop
npm install
npm install --prefix frontend
```
Create a `.env` file in the project root (see below), then:
```bash
npm run data:import   # load the sample products and users
npm run dev           # backend on port 5000 + React app on port 3000
```
Other scripts: `npm run server` (backend only), `npm run client` (frontend only), `npm start` (production server), `npm run data:destroy` (clear the database).

## Environment variables
Put these in a `.env` file at the project root. Do not commit it.
```
NODE_ENV=development
PORT=5000
MONGO_URI=<your MongoDB connection string>
```

## Usage
- Home page: product list.
- Product page: details for one product.
- API: `GET /api/products` and `GET /api/products/:id`.

## Screenshots / demo
Not available yet.

## Tests
No tests have been written yet. The frontend uses `npm test --prefix frontend` (Create React App test runner).

## Roadmap
- Shopping cart and checkout
- User registration and login
- Orders
