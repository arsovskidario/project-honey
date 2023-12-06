# Project honey 🍯

## Description 📝
Project Honey is an innovative e-commerce application crafted specifically for beekeepers, inspired by the legacy of my father—a seasoned professional beekeeper with over 35 years of experience. Recognizing the evolving landscape of the beekeeping industry, this app aims to bring a modern touch to his traditional business.

Drawing on the rich expertise of a seasoned beekeeper, Project Honey is designed to empower apiarists with advanced tools and a seamless digital platform. The app is meticulously tailored to cater to the unique needs of beekeepers, providing a comprehensive solution that simplifies and modernizes every aspect of their operations

## Features 💡

### Guest Features
- **Catalog View:** Guests can browse through all the products offered on the site.
- **Details View:** Guests can view specific product details, including description, price, reviews, and have the option to add the selected product to the shopping cart.
- **Shopping Cart:** Guests can add products to the shopping cart and review the added items. However, they cannot proceed to checkout.
- **Newsletter:** Guests can subscribe to the site's newsletter via email.
- **Login:** Guests can access the login page to log in.
- **Sign Up:** Guests can sign up for the app.

### User Features 
- *Inherits all features available to guests.*
- **Checkout:** Users can proceed to checkout and add an order preference during the checkout process.
- **Reviews:** Users can add reviews and ratings to products they have selected.
- **Logout:** Users can log out from the app.

### Admin Features
- *Inherits all features available to users.*
- **Admin Panel:** The admin has a dedicated panel to navigate to sections such as Orders, Users, and Products.
- **Orders:** The admin can view all orders made by users, mark them as 'Complete' when dispatched to the customer.
- **Users:** The admin can view all registered users and contact them using the submitted personal information.
- **Products:** The admin can view all products in the app and create new products using the 'Create Product' button, which opens a popup for entering relevant product details.
- **Edit:** The admin can edit product details via the Product Details page and also delete unwanted products.

## Installation 💻
This app uses React, to run the app you need go to **/app** and run the following commands:
```bash
npm i         # Install relevant packages
npm run dev   # Run the app locally
```

The server used for the backend is a mock server filled with relevant products. To access run this server go to **/mock-server** and run the following command:
```bash
node server.js
```
