let userInput: unknown; //more restrictive than type 'any', makes TypeScript check the currently stored type before assigning to different type
let userName: string;

userInput = 5;
userInput = "Max";
userName = userInput;

function generateError(message: string, code: number): never {
  //explicitly declare that this function should NEVER return anything -- good to let others know your intentions
  throw { message: message, errorCode: code }; //function never returns anything -- basically crashes the script
}

generateError("An error occured!", 500);
