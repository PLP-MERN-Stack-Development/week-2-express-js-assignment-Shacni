# 🛠️ Express.js Products API

A RESTful API built with **Express.js** to manage products. This project was developed as part of the PLP MERN Stack Week 2 assignment.

---

## 🚀 Features

- ✅ Full CRUD operations
- ✅ Authentication using API key
- ✅ Input validation middleware
- ✅ Custom error handling
- ✅ Logger middleware
- ✅ Advanced features:
  - Filtering by category
  - Pagination
  - Search by name
  - Product statistics (count by category)

---

## 📦 API Endpoints

### 🔄 Basic CRUD

| Method | Endpoint            | Description       |
|--------|---------------------|-------------------|
| GET    | `/api/products`     | List all products |
| GET    | `/api/products/:id` | Get product by ID |
| POST   | `/api/products`     | Create a product  |
| PUT    | `/api/products/:id` | Update a product  |
| DELETE | `/api/products/:id` | Delete a product  |

### 🧠 Advanced Features

| Endpoint                                   | Description            |
|-------------------------------------------|------------------------|
| GET `/api/products?category=electronics`  | Filter by category     |
| GET `/api/products?page=1&limit=2`        | Paginate results       |
| GET `/api/products/search?q=laptop`       | Search by product name |
| GET `/api/products/stats`                 | Get product statistics |

---

## 🔐 Required Headers

All routes that **create, update, or delete** data require an API key.

| Header         | Value              |
|----------------|--------------------|
| `Content-Type` | `application/json` |
| `x-api-key`    | `yourapikeyhere`   |

---

## 🧪 Example Request Body (POST)

```json
{
  "name": "Lamp",
  "description": "Desk lamp",
  "price": 19.99,
  "category": "furniture",
  "inStock": true
}
```

---

## 🏗️ Project Structure

```
express-app/
│
├── server.js
├── routes/
│   └── products.js
├── controllers/
│   └── productController.js
├── middleware/
│   ├── auth.js
│   ├── validateProduct.js
│   ├── logger.js
│   └── errorHandler.js
├── utils/
│   └── errors.js
├── .env.example
├── README.md
└── package.json
```

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Shacni/week-2-express-js-assignment-Shacni.git
cd express-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Environment Variables

Copy the example file and edit your `.env`:

```bash
cp .env.example .env
```

Inside `.env`, add:

```env
PORT=3000
API_KEY=yourapikeyhere
```

### 4. Run the Server

```bash
node server.js
```

---

## ✅ Technologies Used

- Node.js
- Express.js
- UUID
- dotenv
- body-parser

---


