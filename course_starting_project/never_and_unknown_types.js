"use strict";
let userInput; //more restrictive than type 'any', makes TypeScript check the currently stored type before assigning to different type
let userName;
userInput = 5;
userInput = "Max";
userName = userInput;
function generateError(message, code) {
    //explicitly declare that this function should NEVER return anything -- good to let others know your intentions
    throw { message: message, errorCode: code }; //function never returns anything -- basically crashes the script
}
generateError("An error occured!", 500);
//# sourceMappingURL=never_and_unknown_types.js.map