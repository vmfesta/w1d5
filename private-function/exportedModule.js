/*
Implement your own module that exports an object containing a function. However the function you export should invoke a 
'private' function that is defined within your module but not exported from it.

Implement a Node.js script that imports the functionality of your module and invokes at least one exported function.
*/

var myModule = {
    someFunction : function()  {
         var privateFunction = function () {
            console.log("This is a provate function");
        }
        console.log("This is some function");
    }
}


module.exports = myModule;