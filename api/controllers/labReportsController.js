'use strict';


var mongoose = require('mongoose'),
  LabReport = mongoose.model('labReports');

exports.list_all_reports = function(req, res) {
    LabReport.find({}, function(err, report) {
    if (err)
      res.send(err);
    res.json(report);
  });
};


exports.create_a_report = function(req, res) {
  var new_report = new LabReport(req.body);
  new_report.save(function(err, report) {
    if (err)
      res.send(err);
    res.json(report);
  });
};


exports.read_a_report = function(req, res) {
  Task.findById(req.params.reportId, function(err, report) {
    if (err)
      res.send(err);
    res.json(report);
  });
};


exports.update_a_report = function(req, res) {
  LabReport.findOneAndUpdate({_id: req.params.reportId}, req.body, {new: true}, function(err,report) {
    if (err)
      res.send(err);
    res.json(report);
  });
};


exports.delete_a_report = function(req, res) {

  Task.remove({
    _id: req.params.reportId
  }, function(err, report) {
    if (err)
      res.send(err);
    res.json({ message: 'Report successfully deleted' });
  });
};