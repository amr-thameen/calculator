

const calculator = (a,b, operation) => {
let result;
if (operation == 'add'){
        result = a+b;
    };

if (operation === 'mult'){
    result = a*b;
};

if (operation === 'sub'){
    result = a-b;
};
console.log(result)
return result;
}




module.exports = calculator;