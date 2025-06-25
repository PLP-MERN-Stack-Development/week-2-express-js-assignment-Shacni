const express = require('express');
const router = express.Router();

const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  searchProducts,
  getStats
} = require('../controllers/productcontroller');

const validateProduct = require('../middleware/validateProduct');
const authenticate = require('../middleware/auth');

// RESTful Routes
router.get('/', getProducts);
router.get('/search', searchProducts);
router.get('/stats', getStats);
router.get('/:id', getProductById);
router.post('/', authenticate, validateProduct, createProduct);
router.put('/:id', authenticate, validateProduct, updateProduct);
router.delete('/:id', authenticate, deleteProduct);

module.exports = router;
