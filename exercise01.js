// For all of these, what is the value of a when the function gets called with the alert()
// #1
{
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    console.log(1, a); // 3
}

//#2
var a = 0;
{
    a = 5;
}

{
    console.log(2, a); // 5
}


//#3
{
    window.a = "hello";
}


{
    console.log(3, a); // "hello"
}

//#4
var a = 1;
{
    var a = "test";
    console.log(4, a); // "test"
}

//#5
var a = 2;
{
    var a = 5;
    console.log(5, a); // 5
}

//#6
console.log(6, a); // 5, as with the var keyword, an inner scope variable a was not actually created. However if it were inside a function, THEN var a would create an inner scoped variable.