async function fetchData(){
    try{
        const response = await fetch('https://fakestoreapi.com/products/54');
        const data=await response.json();
        console.log(data);

    }
    catch{
        console.log("Fetch failed");
    }
}
fetchData();
