const router = require('express').Router();

//Our Controllers
const PagesControllers = require('../controllers/pagesControllers');

//Create our routes
router.get('/', PagesControllers.show);
router.get('/about', PagesControllers.show);
router.get('/contact', PagesControllers.show);

module.exports = router;