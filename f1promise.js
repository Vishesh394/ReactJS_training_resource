const myPromise=new Promise((resolve,reject)=>{
    //asyn operation here
    let success=true;
    if(success){
        resolve("operation was successful!");
    }
    else{
        reject("Something went wrong");
    }
});
myPromise.then(result=>{console.log("Success:",result);})
        .catch(error=>{
            console.log("Error:", error);
        });