const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  author: {
    type: String,
  },
  title: {
    type: String,
    required: true
  },
  journal: {
    type: String,
  },
  year: {
    type: String
  },
  eprint: {
    type: String
  },
  eprinttype: {
    type: String
  },
  eprintclass: {
    type: String,
  },
  pages: {
    type: String,
  },
  month: {
    type: String,
  },
  annote: {
    type: String,
  }
});

module.exports = Article = mongoose.model('article', ArticleSchema);