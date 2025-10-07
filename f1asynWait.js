function asynTask(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("5 second passed");
        }, 5000);
    });
}