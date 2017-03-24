/**
 * Created by Administrator
 * date:2017/3/23 0023
 */
define(['student','class'],function (stu,cls) {
    return {
        addNewStudent:function(name,gender){
            cls.addToStudent(stu.creatStudent(name,gender));

        },
        getMyClassSize:function(){
            return cls.getStudentLen();
        }
    };
});