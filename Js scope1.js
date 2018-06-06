var foo =function bar (){ // var foo is in the global scope
    var foo = 'baz';      // var foo is declared with in function scope bar
    function baz(foo) {      
       foo = 'bar';      // it is with baz() function scope
        foo;            //  bar i sthe output
    }
    baz();
  }; 
   console.log(foo);	 // output is bar 
  console.log(baz);      
  foo();
  bar();