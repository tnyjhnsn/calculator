$(document).ready(function() {
  createCalculator();
});

function createCalculator() {

  var display = "";
  var calculator = [];
  var workingNum = "";

  setDisplay(0);

  $(".button").click(function() {
    eval($(this).attr("key") + '("' + $(this).text() + '")');
  });

  $(function() {
    $(window).keypress(function(e) {
      var key = e.which;
      console.log("key pressed: " + key);
   });
 });

  function setDisplay(val) {
    $("#display").html(val);
  }

  function number(num) {
    workingNum += workingNum.length === 10 ? "" : num;
    workingNum = (workingNum === "00" ? 0 : workingNum);
    setDisplay(workingNum);
  }

  function operator(op) {
    calculator.push(workingNum, op);
    workingNum = "";
  }

  function percent() {
    workingNum = workingNum / 100;
    setDisplay(workingNum);
  }

  function cancel(val) {
    calculator = (val === "CA") ? [] : calculator.slice(0, -1);
    workingNum = "";
    setDisplay(0);
  }

  function equals() {
    var result;
    calculator.push(workingNum);
    calculator = [eval(calculator.join(''))];
    workingNum = "";
    if (calculator[0] > 9999999999 || calculator[0] < 0.000000001) {
      result = calculator[0].toExponential(4);
    } else if (calculator[0].toString().length > 10) {
      var n = calculator[0].toString().split('.');
      result = calculator[0].toFixed(9 - n[0].toString().length);
    } else {
      result = calculator[0];
    }
    setDisplay(result);
  }

}
