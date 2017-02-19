
/*
 *  -------------------Shunting-yard algorithm-------------------
 *   Shunting-yard algorithm is a method for parsing mathematical
 *   expressions specified in infix notation.
 *   It can be used to produce output in Reverse Polish notation
 *---------------------------------------------------------------
 *  Function ShuntingYardAlgorithm accept string and return queue
 *  in Reverse Polish notation
 * */
function ShuntingYardAlgorithm(string) {

    //Delete intervals after comma
    string = string.replace(/, /g, ",");

    //Split string by intervals and make array
    string = string.split(" ");

    //Here we can see our string converted to array
    console.log(string);

    //Define output queue
    var queue = [];
    //Define operator stack
    var stack = [];

    //Need for loop to access every element
    for(var i=0;i<string.length;i++){

        //If the token is a number, then add it to the output queue
        if(isNumber(string[i])){
            queue.push(eval(string[i]));
        }
        //If the token is a function, then evaluate it
        // and push it to the output queue
        else if(isFunction(string[i])){
            queue.push(eval(string[i]));
        }
        /*
         * If the token is a sign
         * 1)If stack is empty - push sign in stack
         * 2)If stack is not empty
         *   2.1)Check priority of sign
         *       2.1.1)If Top Of Stack operator have
         *             priority is less than current sign
         *             push in stack
         *       2.1.2)Else pop all elements from stack
         *             and push them in queue after that
         *             push current sign
         */
        else if(isSign(string[i])){
            if(stack.length<1){
                stack.push(string[i]);
            }else{
                if(PriorityOfSign(stack[stack.length-1])<=PriorityOfSign(string[i])){
                    stack.push(string[i]);
                }else{
                    while(stack.length!=0){
                        queue.push(stack.pop());
                    }
                    stack.push(string[i]);
                }
            }
        }

    }

    /*
     *   pop all elements from stack
     *   and push them in queue after that
     *   push current sign
     */
    while(stack.length!=0){
        queue.push(stack.pop());
    }

    //Print result
    console.log(queue);

    return queue;
}
/*
 -----------------end-of-Shunting-yard algorithm-----------

*/