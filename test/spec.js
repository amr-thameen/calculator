const expect = require('chai').expect;
const calculator = require('../calculator')



describe('calculator',()=> {
    it('should exist', ()=>{
        expect(calculator).to.be.ok;
    });
    it('takes variables and ADD operation and adds', ()=>{
        expect(calculator(1,2,'add')).to.eql(3);
    });
    it('takes variables and SUBTRACT operation and subtract', ()=>{
        expect(calculator(3,1,'sub')).to.eql(2);
    });
    it('takes variables and MULTIPLY operation and multiplies', ()=>{
        expect(calculator(10,10,'mult')).to.eql(100);
    });

})