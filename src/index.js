class SmartCalculator {
  constructor(initialValue) {

      this.smartCalculator = [initialValue];
  }

  add(number) {

    number = '+' + number;
    this.smartCalculator.push(number);
    return this;
  }
  
  subtract(number) {

    number = '-' + number;
    this.smartCalculator.push(number);
    return this;
  }

  multiply(number) {

    number = '*' + number;
    this.smartCalculator.push(number);
    return this;
  }

  devide(number) {

    number = '/' + number;
    this.smartCalculator.push(number);
    return this;
  }

  pow(number) {

    var popped = this.smartCalculator.pop();
    var sum = 0;
    var change = /[+-/*]/g.test(popped.toString().charAt(0)) ? (popped.toString().charAt(0) + 'Math.pow(' + popped.toString().slice(1).replace(/[)]/g, '') + ', ') : ('Math.pow(' + popped.toString().replace(/[)]/g, '') + ', ');

    this.smartCalculator.push(change);

    if (this.smartCalculator.length >1 && this.smartCalculator[this.smartCalculator.length - 2].toString().replace(/[^M]/g, "").length != 0){
        this.smartCalculator.forEach(function (v) {
          let count = v.toString().replace(/[^M]/g, "").length;

          if (count > 0) {
            sum += count;
          } else {
            sum = 0;
          }
        });
    } else {

        sum = 1;
    }

    this.smartCalculator.push(number + ')'.repeat(sum));
    return this;
  }
valueOf() {

    var variable = '';
    for (var i = this.smartCalculator.length - 1; i >= 0; i--) {
        variable = this.smartCalculator[i] + variable;
    }

    this.smartCalculator.push(eval(variable));
    return this.smartCalculator.pop();
}}
module.exports = SmartCalculator;
