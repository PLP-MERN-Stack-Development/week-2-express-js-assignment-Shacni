const { v4: uuidv4 } = require('uuid');
let products = [];

exports.getProducts = (req, res) => {
  const { category, page = 1, limit = 10 } = req.query;
  let filtered = category ? products.filter(p => p.category === category) : products;
  const paginated = filtered.slice((page - 1) * limit, page * limit);
  res.json(paginated);
};

exports.getProductById = (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
};

exports.createProduct = (req, res) => {
  const { name, description, price, category, inStock } = req.body;
  const newProduct = { id: uuidv4(), name, description, price, category, inStock };
  products.push(newProduct);
  res.status(201).json(newProduct);
};

exports.updateProduct = (req, res) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Product not found' });

  products[index] = { ...products[index], ...req.body };
  res.json(products[index]);
};

exports.deleteProduct = (req, res) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Product not found' });

  products.splice(index, 1);
  res.status(204).send();
};

exports.searchProducts = (req, res) => {
  const { q } = req.query;
  const result = products.filter(p => p.name.toLowerCase().includes(q.toLowerCase()));
  res.json(result);
};

exports.getStats = (req, res) => {
  const countByCategory = products.reduce((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + 1;
    return acc;
  }, {});
  res.json(countByCategory);
};
