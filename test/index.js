

var assert = require("assert");
var rdm = require('..');

describe("main", function(){
    it("default",function (done) {
        var str1 = rdm(6);
        assert.equal(str1.length,6);

        var str2 = rdm(6);
        assert.notEqual(str1,str2);

        try{
            rdm();
            assert.throw(new Error("He should throw an error,but no!"))
        }catch(err){
            assert.equal(err.message,'你连长度都不敢告诉我吗？');
        }

        try{
            rdm(1);
            assert.throw(new Error("He should throw an error,but no!"))
        }catch(err){
            assert.equal(err.message,'你就这么点长度？');
        }

        typeof done ==='function' && done();
    });
});