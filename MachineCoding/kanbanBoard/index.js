const ticketCont = document.querySelector(".ticket_cont");
const ticketColor = document.querySelector(".ticket_color");
const ticketArea = document.querySelector(".ticket_area");
const lockBtn = document.querySelector(".lock_unlock");
let isLocked= true;
let colors = ["pink","blue","purple","green"];

lockBtn.addEventListener("click",handleLockUnlock);

function handleLockUnlock(){
    if(isLocked){
        //unlock the ticket
        lockBtn.children[0].classList.remove("fa-lock");
        lockBtn.children[0].classList.add("fa-unlock");
        ticketArea.contentEditable=true;
    }else{
        //lock the ticket
        lockBtn.children[0].classList.remove("fa-unlock");
        lockBtn.children[0].classList.add("fa-lock");
        ticketArea.contentEditable=false;
    }
    isLocked=!isLocked;
}

ticketColor.addEventListener("click",handleTicketColor);

function handleTicketColor(e){
    const ele = e.target;
    let presentColor = ele.classList[1];
    console.log(presentColor);
    let nextColorIdx = (colors.indexOf(presentColor)+1)%colors.length;
    console.log(nextColorIdx);
    let nextColor = colors[nextColorIdx];
    console.log(nextColor);
    ele.classList.remove(presentColor);
    ele.classList.add(nextColor);
}
