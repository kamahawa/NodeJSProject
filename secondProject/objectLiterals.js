/**
 * Created by Administrator on 1/4/2016.
 */
var foo = {};
console.log(foo); // {}
foo.bar = 123;    // extend foo
console.log(foo); // { bar: 123 }

var foo = {
    bar: 123
};
console.log(foo); // { bar: 123 }

var foo = {
    bar: 123,
    bas: {
        bas1: 'some string',
        bas2: 345
    }
};
console.log(foo);

var foo = {
    bar: 123,
    bas: [1, 2, 3]
};
console.log(foo);

var foo = {
    bar: 123,
    bas: [{
        qux: 1
    },
    {
        qux: 2,
        tx : 'text'
    },
    {
        qux: 3
    }]
};
console.log(foo.bar);        // 123
console.log(foo.bas[0].qux); // 1
console.log(foo.bas[1].tx); // text
console.log(foo.bas[2].qux); // 3