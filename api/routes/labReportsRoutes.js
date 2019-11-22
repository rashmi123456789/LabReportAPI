'use strict';
module.exports = function(app) {
  var labReports = require('../controllers/labReportsController');

  app.route('/reports')
    .get(labReports.list_all_reports)
    .post(labReports.create_a_report);


  app.route('/reports/:reportId')
    .get(labReports.read_a_report)
    .put(labReports.update_a_report)
    .delete(labReports.delete_a_report);
};
