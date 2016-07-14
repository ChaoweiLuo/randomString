/**
 * 生成一个特定长度的随机字符串
 */
function _generate(length){
    if(typeof length !== 'number')
        throw new Error("你连长度都不敢告诉我吗？");
    if(length<2){
        throw new Error("你就这么点长度？");
    }
    var str = Math.random().toString(36).slice(2);
    do{
        str = str.concat(Math.random().toString(36).slice(2));            
    }while(str.length<length)
    return str.substr(0,length);
}

/**
 * 生成一个随机的字符串
 * @params length {number} 字符串的长度(可空)
 * @params opt {{length:1,chats:['a','b','c',...]}} 配置项 其中 length 如果前一个参数有传就可不传 
 */
module.exports = function(length,opt){
    // opt = {
    //     length:1
    // };
    // opt.chats=['a','c'];
    var lenType =  typeof length;
    if(lenType === "object"){
        opt = length;
    }
    opt = opt || {};
    if(lenType === 'number'){
        opt.length = length;
    }
    var str = _generate(opt.length);
    // if(opt.chats instanceof Array){
    //     if(opt.chats.length>36){
            
    //     }
    //     var allChats = '0123456789abcdefghijklmnopqrstuvwxyz';
    //     opt.chats.map(function(item,index) {
    //         var reg = new RegExp(item,'g');
            

    //     });
    // }
    return str;
}

