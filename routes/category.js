const express = require('express');
const router = express.Router();
const { createCategory, getAllCategory, deleteCategory, updateCategory } = require('../controller/categoryController');
router.post('/createCategory', createCategory)
router.get('/getCategory', getAllCategory)
router.put('/updateCategory', updateCategory)
router.delete('/', deleteCategory)

module.exports = router;
