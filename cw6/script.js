 // it is java script not java !!!!

alert("مرحباً بك ")
alert(" هل انت مستعد لحساب درجاتك ؟  ")
 
// now making the grades culculating . . . . 

let firstnumber = prompt(" اكتب درجتك هنا")

console.log(firstnumber)
if (firstnumber > 100 ){
    firstnumber=prompt(" enter a vaild number ")
}
else if(firstnumber >= 90 && firstnumber<=100){
    console.log('%c ممتاز لقد حصلت على امتياز', 'background:#2DC800; color: #ffffff ; font-size:20px')
} else if (firstnumber >= 80 && firstnumber<=89){
    console.log('%c ممتازلقد حصلت على جيد جداً ','background:#2dc800; color: #ffffff ; font-size:20px')

}else if (firstnumber >= 70 && firstnumber<=79){
    console.log('%cممتاز لقد حصلت على جيد ', 'background:#E06D00; color: #ffffff ; font-size:20px')

}else if (firstnumber >= 60 && firstnumber<=69){
    console.log('%cممتاز لقد حصلت على مقبول', 'background:#E06D00; color: #ffffff ; font-size:20px')

}else if (firstnumber >= 50 && firstnumber<=59){
    console.log('%cممتاز لقد حصلت على ضعيف ' , 'background:#E04400; color: #000000 ; font-size:20px')

}else if (firstnumber < 50 ){
    console.log('%c لقد رسبت للأسف ', 'background:#FF2300; color: #000000 ; font-size:20px')

}

