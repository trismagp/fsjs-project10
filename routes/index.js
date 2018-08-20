const express = require('express');
const router = express.Router();
const Book = require('../models').Book;
// var Patron = require('../models').Patron;
// var Loan = require('../models').Loan;


router.get('/', function(req, res, next) {
  res.render('index');
});

// Books -----------------------------------------------------------------------
router.get('/books', function(req, res, next) {
  Book.findAll().then(function(books){
    res.render('all_books');
  });

});

router.get('/books/new', function(req, res, next) {
  res.render('new_book');
});

// Patrons ---------------------------------------------------------------------
router.get('/patrons', function(req, res, next) {
  res.render('all_patrons');
});

router.get('/patrons/new', function(req, res, next) {
  res.render('new_patron');
});

// Loans -----------------------------------------------------------------------
router.get('/loans', function(req, res, next) {
  res.render('all_loans');
});

router.get('/loans/new', function(req, res, next) {
  res.render('new_loan');
});

module.exports = router;
