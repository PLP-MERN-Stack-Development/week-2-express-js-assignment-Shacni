const { v4: uuidv4 } = require('uuid');
let products = [];

const getProducts = (req, res) => {
  const { category, page = 1, limit = 10 } = req.query;
  let filtered = category ? products.filter(p => p.category === category) : products;
  const paginated = filtered.slice((page - 1) * limit, page * limit);
  res.json(paginated);
};

const getProductById = (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
};

const createProduct = (req, res) => {
  const { name, description, price, category, inStock } = req.body;
  const newProduct = { id: uuidv4(), name, description, price, category, inStock };
  products.push(newProduct);
  res.status(201).json(newProduct);
};

const updateProduct = (req, res) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Product not found' });

  products[index] = { ...products[index], ...req.body };
  res.json(products[index]);
};

const deleteProduct = (req, res) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Product not found' });

  products.splice(index, 1);
  res.status(204).send();
};

const searchProducts = (req, res) => {
  const { q } = req.query;
  const result = products.filter(p => p.name.toLowerCase().includes(q.toLowerCase()));
  res.json(result);
};

const getStats = (req, res) => {
  res.send("Product stats here...");
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  searchProducts,
  getStats,
};
