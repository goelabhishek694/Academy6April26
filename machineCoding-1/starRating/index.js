const  ratingContainer = document.querySelector(".rating");
const stars = document.querySelectorAll(".star");
const countSpan = document.querySelector("#count")
var clickedValue = 0;

ratingContainer.addEventListener("click", function(event){
    console.log(event.currentTarget); //explicutly in which el is attahced
    console.log(event.target); //event occurence 
    if(!event.target.classList.contains("star")) return;
    clickedValue = Number(event.target.dataset.value);
    countSpan.textContent=clickedValue;
    fillStar(clickedValue);
});

function fillStar(rating){
    const allStars = ratingContainer.children;

    for(let i=0;i<allStars.length;i++){
        allStars[i].classList.remove("yellow");
    }

    for(let i=0;i<rating;i++){
        allStars[i].classList.add("yellow");
    }

}

ratingContainer.addEventListener("mouseover",function(e){
    let ele = e.target;
    let rating = ele.dataset.value;
    fillStar(rating);
})

ratingContainer.addEventListener("mouseleave",function(e){
    fillStar(clickedValue);
})