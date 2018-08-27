'use strict';
const dateFormat = require('dateformat');
function getTimeStamp(){
  return dateFormat(this.createdAt, "dddd, mmmm dS, yyyy, hh:MM TT");
}

module.exports = (sequelize, DataTypes) => {
  var Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    genre: DataTypes.STRING,
    first_published: DataTypes.INTEGER
  }, {
    timestamps: false
  });
  Book.associate = function(models) {
    // associations can be defined here
  };
  return Book;
};
