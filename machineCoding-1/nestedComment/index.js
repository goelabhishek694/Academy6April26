var commentInput = document.getElementById("comment-input");
var addCommentBtn = document.getElementById("add-comment-btn");
var commentsContainer = document.querySelector(".comments-container");

addCommentBtn.addEventListener("click", function(){
    var text = commentInput.value.trim();
    if(!text) return

    var commentElement = createCommentElement(text);
    commentsContainer.appendChild(commentElement);
    commentInput.value="";
})

commentsContainer.addEventListener("click", function(e){
    var target = e.target; 
    if(target.classList.contains("reply-btn")){
        handleReplyToggle(target);
    }

    if (target.classList.contains('submit-reply-btn')) {
        handleSubmitReply(target);
    }

    if (target.classList.contains('toggle-btn')) {
        handleToggleReplies(target);
    }
});

function handleToggleReplies(toggleBtn){
    var comment = toggleBtn.closest(".comment");
    var repliesContainer = comment.querySelector(".replies-container");
    repliesContainer.classList.toggle("collapsed");
}

function handleSubmitReply(submitBtn){
    var comment = submitBtn.closest(".comment");
    var replyInput = comment.querySelector(".reply-input");
    var textArea = replyInput.querySelector(".reply-textarea");
    var text = textArea.value.trim();

    if(!text) return;

    var repliesContainer = comment.querySelector(".replies-container");
    var replyElement = createCommentElement(text);

    repliesContainer.appendChild(replyElement);
    textArea.value="";
    replyInput.style.display="none";

}

function handleReplyToggle(replyBtn){
    var comment = replyBtn.closest(".comment");
    var replyInput = comment.querySelector(".reply-input");

    if(replyInput.style.display == "block"){
        replyInput.style.display="none";
    }else{
        replyInput.style.display="block";
    }
}

function createCommentElement(text){
    var comment = document.createElement("div");
    comment.classList.add("comment");

    //comment text
    var commentText = document.createElement("p");
    commentText.classList.add("comment-text");
    commentText.textContent = text;
    comment.appendChild(commentText);

    //action region
    var actions = document.createElement("div");
    actions.classList.add("comment-actions");

    var replyBtn = document.createElement("button");
    replyBtn.classList.add("reply-btn");
    replyBtn.textContent = "Reply";

    var toggleBtn = document.createElement("button");
    toggleBtn.classList.add("toggle-btn");
    toggleBtn.textContent = "Show/Hide";

    actions.appendChild(replyBtn);
    actions.appendChild(toggleBtn);

    comment.appendChild(actions);
    
    //add the hidde reply editor
    var replyInput = document.createElement("div");
    replyInput.classList.add("reply-input");

    var replytextArea = document.createElement("textarea");
    replytextArea.classList.add("reply-textarea");
    replytextArea.placeholder="Write a reply....";

    var submitReplyBtn = document.createElement("button");
    submitReplyBtn.classList.add("submit-reply-btn");
    submitReplyBtn.textContent="Submit Reply";

    replyInput.appendChild(replytextArea);
    replyInput.appendChild(submitReplyBtn);

    comment.appendChild(replyInput);

    var repliesContainer = document.createElement("div");
    repliesContainer.classList.add("replies-container");
    
    comment.appendChild(repliesContainer);





    return comment;
}