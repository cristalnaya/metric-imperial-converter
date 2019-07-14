/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = input => {
    const regex = input.match(/[a-z]/i);
    if(regex) {
       input = input.substring(0, regex.index);     
    }
    if(input.length === 0) {
      return 1;
    }
    const numbers = input.split('/');
    switch (numbers.length) {
      case 1:
        return parseFloat(numbers[0]) == numbers[0] ? parseFloat(numbers[0]) : 'invalid number';
      
      case 2:
        if (!(parseFloat(numbers[0]) == numbers[0])) {
          return 'invalid number';
        }
        if (!(parseFloat(numbers[1]) == numbers[1])) 
        {
          return 'invalid number';
        }
        return parseFloat(numbers[0]) / parseFloat(numbers[1]);
        
      default:
        return 'invalid number';
    }
  };
  
  this.getUnit = input => {
    const regex = input.match(/[a-z]/i);
    if(!regex) return 'invalid unit';

    input = input.substring(regex.index);
    const units = ['gal', 'l', 'lbs', 'kg', 'mi', 'km'];

    if(units.indexOf(input.toLowerCase() + 1)) {
      return input;
    }
    return 'invalid unit';
  };
  
  this.getReturnUnit = (initUnit) => {
    switch(initUnit.toLowerCase()) {
      case 'gal':
        return 'l';
      case 'l':
        return 'gal';
      case 'lbs':
        return 'kg';
      case 'kg':
        return 'lbs';
      case 'mi':
        return 'km';
      case 'km':
        return 'mi';
      default:
        return 'invalid unit';
    }
  };

  this.spellOutUnit = (unit) => {
    switch(unit.toLowerCase()) {
      case 'gal':
        return 'gallons';
      case 'l':
        return 'liters';
      case 'lbs':
        return 'pounds';
      case 'kg':
        return 'kilograms';
      case 'mi':
        return 'miles';
      case 'km':
        return 'kilometers';
      default:
          return 'invalid unit';
    }
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    switch(initUnit.toLowerCase()) {
      case 'gal':
        return parseFloat((initNum * galToL).toFixed(5));
      case 'l':
        return parseFloat((initNum / galToL).toFixed(5));
      case 'lbs':
        return parseFloat((initNum * lbsToKg).toFixed(5));
      case 'kg':
        return parseFloat((initNum / lbsToKg).toFixed(5));
      case 'mi':
        return parseFloat((initNum * miToKm).toFixed(5));
      case 'km':
        return parseFloat((initNum / miToKm).toFixed(5));
      default: 
        return 'invalid unit';
    }
  };
  
  this.getString = (initNum, initUnit, returnNum, returnUnit) => {
    
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
  
}

module.exports = ConvertHandler;
