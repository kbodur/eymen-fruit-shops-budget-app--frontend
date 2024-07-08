# Eymen's Fruit Shop Budget App
[./src/images/845758FA-A75E-4F01-8995-CF1948A0D0F5.jpeg]
Eymen's Fruit Shop Budget App is a full-stack application that allows users to track financial transactions for a fruit shop. This app provides functionalities for creating, reading, updating, and deleting transactions, along with user authentication features.

## Features

-CRUD Operations: Create, Read, Update, Delete transactions.
-User Authentication: Log in and create a new account.
-Filter Transactions: Filter transactions by category ('Sales' or 'Purchases').
-Responsive Design: User-friendly interface with responsive design.
-Navigation: Easy navigation using react-router-dom.


## Technologies Used

Frontend: React, react-router-dom
Backend: RESTful API
Styling: Basic CSS and optional integration with react-bootstrap


## Installation and Setup

-Prerequisites
  Node.js and npm installed
  Visual Studio Code installed
-Clone the Repository
  Open Visual Studio Code.
  Open the terminal in Visual Studio Code (Ctrl+` ).
  Clone the repository by running the following command:
  git clone https://github.com/kbodur/eymen-fruit-shops-budget-app--frontend.git

## Navigate into the project directory:

cd eymen-fruit-shops-budget-app--frontend

-Install Dependencies
  In the terminal, run:
  npm install
-Set Up Environment Variables
 In Visual Studio Code, create a .env file in the root directory.
Add your API base URL to the .env file:
VITE_BASE_URL=http://localhost:4001
-Start the Development Server
 In the terminal, run:
 npm run dev

## Project Structure

├── public
│   ├── index.html
├── src
│   ├── components
│   │   ├── Navbar.js
│   │   ├── Index.js
│   │   ├── Show.js
│   │   ├── New.js
│   │   ├── Edit.js
│   │   ├── Login.js
│   │   ├── CreateAccount.js
│   ├── App.js
│   ├── App.css
│   ├── main.jsx
├── .env
├── package.json
├── README.md


## Usage

-Home Page: Displays a list of transactions with options to filter by category.
-New Transaction: Form to add a new transaction.
-Show Transaction: Detailed view of a specific transaction.
-Edit Transaction: Form to edit an existing transaction.
-Login: User login form.
-Create Account: Form to create a new account.

## Styling
The application uses basic CSS for styling. You can customize the styles in the App.css file. Optional: Integrate react-bootstrap for a more sophisticated UI.

-Components Overview
Navbar.js
Renders the navigation bar with links to different routes.

-Index.js
Displays a list of all transactions with filtering options.

-Show.js
Shows the details of a specific transaction with options to edit or delete.

-New.js
Form to create a new transaction.

-Edit.js
Form to edit an existing transaction.

-Login.js
User login form.

-CreateAccount.js
Form to create a new account.

## API Endpoints
The application interacts with a RESTful API. Ensure the API is running and accessible at the base URL specified in the .env file.

-GET /transactions: Retrieve all transactions.
-GET /transactions/
: Retrieve a specific transaction by ID.
-POST /transactions: Create a new transaction.
-PUT /transactions/
: Update a specific transaction by ID.
-DELETE /transactions/
: Delete a specific transaction by ID.


## Deployment
To deploy the application, follow the instructions for your preferred deployment platform (e.g., Netlify, Vercel).

## Contributing
Feel free to submit issues or pull requests. Contributions are welcome!

## License
This project is licensed under the MIT License. See the LICENSE file for details.

My live url[https://eymenfruitshop.netlify.app/transactions]