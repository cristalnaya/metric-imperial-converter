/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = (app) => {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get((req, res) => {

      let input = req.query.input;
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);

    
      if(initNum == 'invalid number' && initUnit.toLowerCase() == 'invalid unit') {
        res.status(422).send('invalid number and unit');
      } else if (initNum == 'invalid number') {
         res.status(422).send('invalid number');
      } else if(initUnit == 'invalid unit') {
          res.status(422).send('invalid unit');
      }

      res.json({ 
        initNum, 
        initUnit,
        returnNum,
        returnUnit,
        string: toString 
      });
    });
};
