const express = require('express');
const router = express.Router();
const Book = require('../models').Book;
const Patron = require('../models').Patron;
const Loan = require('../models').Loan;


router.get('/', function(req, res, next) {
  res.render('index');
});

// BOOKS -----------------------------------------------------------------------

// GET All Books
router.get('/books', function(req, res, next) {
  Book.findAll().then(function(books){
    res.render('all_books', { books: books, title: "All Books" });
  });
});

// GET Book by ID
router.get('/books/:id', function(req, res, next){
  Book.findById(req.params.id).then(function(book){
    res.render('book_detail', { book: book, title: book.title });
  });
});

// GET New Book Form
router.get('/books/new', function(req, res, next) {
  res.render('new_book', { title: "New Book" });
});

// POST New Book
router.post('/books/new', function(req, res, next) {
  Book.create(req.body).then(function(book){
    res.redirect('/books/' + book.id);
  });
});

// PATRONS ---------------------------------------------------------------------
router.get('/patrons', function(req, res, next) {
  Patron.findAll().then(function(patrons){
    res.render('all_patrons', { patrons: patrons, title: "All Patrons" });
  });
});

// GET Patron by ID
router.get('/patrons/:id', function(req, res, next){
  Patron.findById(req.params.id).then(function(patron){
    res.render('patron_detail', { patron: patron, title: patron.first_name + " " + patron.last_name });
  });
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
