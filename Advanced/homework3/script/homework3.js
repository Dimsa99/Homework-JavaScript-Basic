document.getElementById("btn").addEventListener('click',function(){
    //returns promise
    fetch("https://dog.ceo/api/breed/hound/images")
    .then(response => response.json())
    .then(res =>{ // response
        console.log(res);
        const images = res.message
        for(let image of images){
            console.log(image);
            const img = document.createElement('img');
            img.src = image;
            document.getElementById("myPicturesOfDogs").appendChild(img);
        }
        

    })
    
        
    

})