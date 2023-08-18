# Brick Store
This project is a monorepo with yarn workspaces. It contains a backend and a frontend.  
The concept of the webshop is that people can order small amounts of specific lego pieces hence the name 'Brick Store'.  
Author: `Brent Van Steertegem`  
Current version: `1.0.0`

## Backend
The backend is made with NestJS and is fully typed. It has a single endpoint which accepts graphql queries and mutations, most of which are guarded by the custom 'AuthGuard' which prevents these queries or mutation from being used by unauthorized perople.  
The server is hosted on [Render](https://brickstore-backend.onrender.com/graphql).

## Frontend
The frontend is made with Vite and uses Apollo Client to communicate with the backend. It uses React Router for styling and styled components for styling.  
Most components have been optimized to be responsive. The dashboard is the only page that is not responsive. This is because it is not meant to be used on mobile devices. The dashboard is also not publicly accessible. To access the dashboard you need to go to the `/dashboard/login` route and login first.  
It is hosted on [Render](https://brickstore.onrender.com) as well.  
Please note that `Render` uses a cold boot system. To make sure the server is running when you visit the website, please visit the backend first.