const container = document.querySelector(".container");

container.addEventListener("click", function(e){
    const ele = e.target;
    const isReply = ele.classList.contains("reply");
    const isSubmit = ele.classList.contains("btn-submit");
    
    //if click happens on reply 
    if(isReply){
        console.log("reply clicked");
        const commentCard = document.createElement("div");
        commentCard.classList.add("comment-reply-container");
        commentCard.innerHTML= `<input type="text" placeholder="write your comment"/>
          <button class="btn-submit">submit</button>`;
        container.appendChild(commentCard);
    }
    //if click happens on btn-submit
    if(isSubmit){
        console.log("submit clicked");
    }
    //ignore for all other click event
    return;
})