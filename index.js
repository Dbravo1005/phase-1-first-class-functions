function receivesAFunction(callback){
    return callback();
}
receivesAFunction(function (){return "Hello, World" });

function returnsANamedFunction(){
    function namedBirthday(){
    console.log("It is my birthday")
    } return namedBirthday;
};

function returnsAnAnonymousFunction(){
    return function (){
}
};