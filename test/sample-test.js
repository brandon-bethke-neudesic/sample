var sample = require("../src/sample");
var Sample = new sample();


describe("Sample", function(next){

   it("Returns Hello World2", function(next){
        var text = Sample.hello();
        var error = null;
        if(text !== "Hello World") {
            error = new Error("The value was not 'Hello World'. Actual: " + text);
        }
        next(error);
   });

});
