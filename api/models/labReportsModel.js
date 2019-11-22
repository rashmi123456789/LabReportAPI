'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ReportsSchema = new Schema({
  patient_name: {
    type: String,
  },
  report_name : {
      type : String
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'completed']
    }],
    default: ['pending']
  },
  historical_references : {
      type:[{
          type:String
      }],
      default: []
  },
  acknowledgement: {
    type: [{
      type: String,
      enum: ['yes', 'no']
    }],
    default: ['no']
  },
});

module.exports = mongoose.model('labReports', ReportsSchema);