//attaching 5 event listernrs and 5 async cb functions consume a lot of memory . 
// let allStars = document.querySelectorAll(".star");

// allStars.forEach(star=>{
//     star.addEventListener("click",function(){
//         let rating = star.getAttribute("idx");
//         console.log("star clicked with rating: ", rating);
//     });
// });

const starContainer = document.querySelector(".star_container");
let userSelectedRating = 0;

starContainer.addEventListener("click",function(e){
    let ele = e.target;
    let eleClass = ele.getAttribute("class").split(" ")[0];
    if(eleClass!="star"){
        return;
    }
    userSelectedRating = ele.getAttribute("idx");
    console.log("star clicked with rating: ", userSelectedRating);
    fillStar(userSelectedRating);
     //update the count
     const countSpan = document.querySelector("#count");
     countSpan.textContent = userSelectedRating;
});

function fillStar(rating){
    //colour the star upto rating to yellow colour
    const allStars = starContainer.children;
    console.log(allStars);
    
    //reset to gray
    for(let i=0;i<allStars.length;i++){
        allStars[i].classList.remove("yellow");
    }  

    //colour to yellow
    for(let i=0;i<rating;i++){
        allStars[i].classList.add("yellow");
    }  
}

starContainer.addEventListener("mouseover",function(e){
    let ele = e.target;
    let rating = ele.getAttribute("idx");
    fillStar(rating);
});

starContainer.addEventListener("mouseleave",function(e){
    fillStar(userSelectedRating);
});