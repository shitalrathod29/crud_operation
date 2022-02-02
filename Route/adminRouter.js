const express=require('express')

var router = express.Router();

var adminController = require('../Controller/adminController');

router.post('/addAdmin',adminController.adminDetails);
router.get('/getAdminData',adminController.getAdmin);
router.get('/get',adminController.getOne);
router.post('/post',adminController.postOne);
router.post('/delete',adminController.deleteAdmin);
router.put('/updateAdmin/:_id',adminController.updateAdmin);

module.exports = router;