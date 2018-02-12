'use strict';

const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

// const mongoose = require('mongoose');
require('sinon-mongoose');

const Transaction = require('../src/api/transactionModel');

describe("Get all Transactions", function() {
    // Test will pass if we get all Transactions
   it("should return all Transactions", function(done){
       const TransactionMock = sinon.mock(Transaction);
       const expectedResult = {status: true, Transaction: {}};
       TransactionMock.expects('find').yields(null, expectedResult);
       Transaction.find(function (err, result) {
           TransactionMock.verify();
           TransactionMock.restore();
           expect(result.status).to.be.true;
           done();
       });
   });

   // Test will pass if we fail to get a Transaction
   it("should return error", function(done){
       const TransactionMock = sinon.mock(Transaction);
       const expectedResult = {status: false, error: "Something went wrong"};
       TransactionMock.expects('find').yields(expectedResult, null);
       Transaction.find(function (err) {
           TransactionMock.verify();
           TransactionMock.restore();
           expect(err.status).to.not.be.true;
           done();
       });
   });
});
