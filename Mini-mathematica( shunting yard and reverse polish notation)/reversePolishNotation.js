/**
 * Created by Ivan on 2/6/2016.
 */
/*
 *----------------Reverse Polish notation-------------
 * Reverse Polish notation is a mathematical notation
 * in which every operator follows all of its operands
 *----------------------------------------------------
 * */
function ReversePolishNotation(input){
    //Make queue with result from Shunting Yard Algorithm
    var queue = ShuntingYardAlgorithm(input);
    //Make stack for numbers
    var stack = [];
    /*
     * For loop to access every element from queue
     * 1)If the element is a number push in stack
     * 2)Else do arithmetic operation
     * 3)Push the result which now is a number in
     *   the stack with other numbers
     */
    for(var i = 0; i < queue.length; i++){
        if(isNumber(queue[i])){
            stack.push(queue[i]);
        }
        else{
            var TopOfStack = stack.pop();
            var BeforeTopOfStack = stack.pop();
            // sign is equal to current sign
            var sign = queue[i];
            var result;
            switch(sign){
                case "+":result = Add(BeforeTopOfStack,TopOfStack);break;
                case "-":result = Substract(BeforeTopOfStack,TopOfStack);break;
                case "*":result = Multiply(BeforeTopOfStack,TopOfStack);break;
                case "/":result = Devide(BeforeTopOfStack,TopOfStack);break;
            }
            stack.push(result);
        }
    }
    return stack.pop();
}
