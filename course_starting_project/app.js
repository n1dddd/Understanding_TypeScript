var userInput; //more restrictive than type 'any', makes TypeScript check the currently stored type before assigning to different type
var userName;
userInput = 5;
userInput = "Max";
userName = userInput;
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An error occured!", 500);
