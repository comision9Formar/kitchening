const express = require('express');
const router = express.Router();
const {search, add, store, edit, update, destroy, detail} = require('../controllers/productsController');

const productImageStore = require('../middlewares/productImageStore');
const productsAddValidator = require('../validations/productsAddValidator');

router.get('/search',search);
router.get('/detail/:id',detail);
router.get('/add',add);
router.post('/add',productImageStore.array('image'), productsAddValidator, store);
router.get('/edit/:id',edit);
router.put('/update/:id',update);
 router.delete('/destroy/:id',destroy);


module.exports = router;