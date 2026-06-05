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
        ele.parentNode.parentNode.appendChild(commentCard);
    }
    //if click happens on btn-submit
    if(isSubmit){
        const commentContainer = document.createElement("div");
        commentContainer.classList.add("comment-container");
        const inputValue = ele.parentNode.children[0].value;
        commentContainer.innerHTML = `<div class="comment-card">
          <h3>${inputValue}</h3>
          <div class="reply">Reply</div>
        </div>` 
        const commentReplyBox = ele.parentNode;
        const commentCard = commentReplyBox.parentNode;
        commentCard.replaceChild(commentContainer, commentReplyBox);
    }
    //ignore for all other click event
    return;
})