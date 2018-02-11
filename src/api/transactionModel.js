'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
 name: {
   type: String,
   required: 'Name of the transaction'
 },
 Created_date: {
   type: Date,
   default: Date.now
 },
 status: {
   type: [{
     type: String,
     enum: ['done', 'pending', 'ongoing', 'completed']
   }],
   default: ['done']
 }
});

module.exports = mongoose.model('Transaction', TransactionSchema);
