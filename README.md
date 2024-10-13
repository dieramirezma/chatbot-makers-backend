# Makers Tech Chatbot Backend

This is the backend service for the Makers Chatbot, built with Node.js and Express. The chatbot uses Google's Generative AI to respond to customer queries and provides inventory and sales metrics.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [License](#license)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/dieramirezma/chatbot-makers-backend.git
    cd makers-chatbot-backend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add your environment variables (see [Environment Variables](#environment-variables)).

## Usage

To start the server in development mode:
```sh
npm run dev
```

To start the server in production mode:
```sh
npm start
```

The server will run on the port specified in the `.env` file or default to `3900`.

## API Endpoints

### Chat Endpoints

- **POST /api/v1/chat/message**

  Request Body:
  ```json
  {
    "message": "Your customer query here"
  }
  ```

  Response:
  ```json
  {
    "response": "Chatbot response here"
  }
  ```

### Dashboard Endpoints

- **GET /api/v1/dashboard/sales**

  Response:
  ```json
  {
    "salesPerYear": [
      { "year": 2021, "totalSales": 15000 },
      { "year": 2022, "totalSales": 20000 },
      { "year": 2023, "totalSales": 25000 },
      { "year": 2024, "totalSales": 30000 }
    ]
  }
  ```

- **GET /api/v1/dashboard/metrics**

  Response:
  ```json
  {
    "metricsData": {
      "totalComputers": 4,
      "totalInventoryValue": 4700,
      "totalBrands": 3
    }
  }
  ```

## Environment Variables

Create a 
`.env`
 file in the root directory and add the following variables:

```env
GEMINI_API_KEY=your_google_generative_ai_api_key
PORT_BACK=your_preferred_port
```

## Project Structure

```
.env
.gitignore
controllers/
    chat.js
    dashboard.js
index.js
models/
    inventory.js
package.json
routes/
    chat.js
    dashboard.js
services/
    geminiService.js
```

- **controllers/**: Contains the controller logic for handling requests.
- **models/**: Contains the data models for the application.
- **routes/**: Contains the route definitions.
- **services/**: Contains the service logic, including the integration with Google's Generative AI.

## License

This project is licensed under the MIT License.
