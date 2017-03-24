/**
 * Created by Administrator on 2017/3/20 0020.
 */
/*
define(['dependency'],function(){
    var name='aurora';
    function printName(){
        console.log(name);
    }
    return {
        printName:printName
    };
});
*/

// 定义模块 myModule.js
/*define( function(){
    var name = 'Byron';
    function printName(){
        console.log(name);
    }

    return {
        printName: printName
    };
});*/

/*
define(function(){
    function fun1(){
        alert("it works");
    }

    fun1();
})*/
define(['jquery'],function(){
    return{
         changeColor:function(){
         $('body').css('backgroundColor','red')
         },
        show:function(){
            alert('aurora');
        },
        detail:function(){
            alert('lalla');
        }
    }
});



























