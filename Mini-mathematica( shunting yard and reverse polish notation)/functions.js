
/*
*
* ===FUNCTIONS===
*
* */


/*
 ---Advanced and trigonometric functions---
 Include this functions for easy using and
 that make code more readable by developers
 */
function exp(args){
    return Math.exp(args);
}

function log(base,args){
    return Math.log(args);
}
/*
 In function "sqrt" there are something specific:
 - It can with one parameter when we need
 square root for example"sqrt(4)"
 - It can use with two parameters when we need
 fourth root
 */
function sqrt(number,root){
    root = root || 2;
    return pow(number,1/root);
}

function pow(args1, args2){
    return Math.pow(args1,args2);
}

function cotan(args){
    return 1/tan(args);
}

function tan(args){
    return Math.tan(args);
}

function cos(args){
    return Math.cos(args);
}

function sin(args){
    return Math.sin(args);
}

//For all type different from number
//isNan return false
function isNumber(num){
    return !isNaN(num)
}

/*
 *     Function isSign accept as a sign
 *     if the sign is "+","-","*","/"
 *     function return "true" else return "false"
 */
function isSign(sign){
    switch(sign){
        case "+":
            return true;break;
        case "-":
            return true;break;

        case "*":
            return true;break;

        case "/":
            return true;break;
        default: return false;break;
    }
}

/*
 *  Function "isFunction"  check if element from input string is
 * advanced or trigonometric function and return true else return false
 *   1)First we initialize array from our math functions
 *   2)Use for loop to insert element in string
 *   3)Make regular expression
 *       - function "eval()" evaluate string to functional code
 *   4)Check if input string is valid for this regular expression
 * */
function isFunction(func){

    var funcArray = ["sin","cos","tan","cotan","pow","sqrt","log","exp"];

    for(var i = 0;i<funcArray.length;i++){
        var string = "/"+funcArray[i]+"(.*)/";
        var RegEx = eval(string);
        if(RegEx.test(func)){
            return true;
        }
    }
    return false;
}

//Define priority of each sign
function PriorityOfSign(sign){
    var priority = 0;
    switch(sign){
        case "+":
            return priority = 0;break;
        case "-":
            return priority = 0;break;
        case "*":
            return priority = 1;break;
        case "/":
            return priority = 1;break;
    }
}

// Functions for arithmetic operators
function Add(FirstAddend,SecondAddend){
    return FirstAddend + SecondAddend;
}
function Substract(Мinuend,Subtrahend){
    return Мinuend - Subtrahend;
}

function Multiply(FirstMltiplier,SecondMultiplier){
    return FirstMltiplier * SecondMultiplier;
}

function Devide(Dividend,Divisor){
    return Dividend / Divisor;
}
/**
 * Created by Ivan on 2/6/2016.
 */
