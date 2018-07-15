

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
return result;
}


const add = (a,b)=>{
    return a+b;
}



module.exports = {
    calculator,
    add}