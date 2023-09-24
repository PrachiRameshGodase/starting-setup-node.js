const path = require('path');

const express = require('express');

const produtsConroller=require('../controllers/product')

const router = express.Router();



// /admin/add-product => GET
router.get('/add-product', produtsConroller.getAddproduct);

// /admin/add-product => POST
router.post('/add-product',produtsConroller.postAddProduct);

module.exports=router
