/*anonymous functions = functions w/o a name.
                      Often not accessible after
                      its initial creation.

benefits = Doesn't clutter global namespace.
           Usable once
           Can be passed as arguments.

IIFE = a JS fxn that runs as soon as it is defined
grouping operator = ()*/

(function(){
    document.getElementById("myH1").innerHTML = "Hey!";
})();

// setTimeout(function, milliseconds);

// let task = function(){document.getElementById("myH1").innerHTML = "sup?";}
// setTimeout(task, 1000);

setTimeout(function()
        {document.getElementById("myH1").innerHTML = "sup?";
    },
     1000);