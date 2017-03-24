/**
 * Created by Administrator
 * date:2017/3/23 0023
 */
define(function () {
    var allStudent=[];
    return {
        classID:'001',
        department:'computer',
        addToStudent:function(student){
            allStudent.push(student);
        },
        getStudentLen:function(){
            return allStudent.length;
        }
    };
});