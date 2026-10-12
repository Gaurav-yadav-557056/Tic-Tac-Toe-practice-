function add(a,b,cb){
    let result=a+b;
    cb(result);
}
add(2,3,function(result){
    console.log(result);
});

