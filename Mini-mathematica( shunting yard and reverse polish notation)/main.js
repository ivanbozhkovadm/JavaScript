
//Global constants
var e = Math.E;
var pi= Math.PI;

(function main() {
    //Given string
    var input = "5 + sin(pi) / pow(2, 10) - log(e, pow(e, sqrt(4)))";
    console.log(input);

   //Action
    var output = ReversePolishNotation(input);

    //Print final result
    console.log(output);
})();


