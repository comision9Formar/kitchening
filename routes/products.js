const express = require('express');
const router = express.Router();
const {search, add, store, edit, update, destroy, detail} = require('../controllers/productsController');

router.get('/search',search);
router.get('/detail/:id',detail);
router.get('/add',add);
router.post('/add',store);
router.get('/edit/:id',edit);
router.put('/update/:id',update);
 router.delete('/destroy/:id',destroy);


module.exports = router;