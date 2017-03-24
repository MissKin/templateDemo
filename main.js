
/**
 * Created by Administrator on 2017/3/20 0020.
 */
//require.config()配置模块加载位置
require.config({
    baseUrl:'./resource/app',
    paths:{
        'jquery':'../lib/jquery-1.12.3.min',
        'boot':'../lib/bootstrap.min',
        'css':'../lib/css.min'
    },
    shim:{
        /*标准化模块*/
        'boot':{
            'deps':['jquery','css!../css/bootstrap.min.css']
        },
        /*非标准化的模块*/
        'noStand':{
            //多个方法
            /*init:function(){
                return{
                    modal:modal,
                    success:success
                }
            }*/
        //    一个方法
            exports:'modal'
        }

    }
});