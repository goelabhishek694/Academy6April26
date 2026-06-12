const ticketCont = document.querySelector(".ticket_cont");
const ticketColor = document.querySelector(".ticket_color");
const ticketArea = document.querySelector(".ticket_area");
const lockBtn = document.querySelector(".lock_unlock");
const toolboxPriorityCont = document.querySelector(".toolbox_priority_cont");
const addBtn = document.querySelector(".add_btn");
const deleteBtn = document.querySelector(".delete_btn");
const modalCont = document.querySelector(".modal_cont");
const mainCont = document.querySelector(".main_cont");

let isLocked= true;
let colors = ["pink","blue","purple","green"];
let activeModalColor = "green";

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

toolboxPriorityCont.addEventListener("click",handleToolboxPriority);

function handleToolboxPriority(e){
    const ele=e.target;
    if(ele.classList.contains("color")){
        let filteringColor = ele.classList[1];
        //nodelist
        let allTickets = document.querySelectorAll(".ticket_cont");
        allTickets.forEach(ticket => {
            let priorityColor = ticket.children[0].classList[1];
            if(priorityColor === filteringColor){
                ticket.style.display = "block";
            }else{
                ticket.style.display = "none";
            }
        })
    }else return;
}

toolboxPriorityCont.addEventListener("dblclick",showAllTickets);

function showAllTickets(){
    let allTickets = document.querySelectorAll(".ticket_cont");
    allTickets.forEach(ticket => {
        ticket.style.display = "block";
    })
}

addBtn.addEventListener("click",handleModal);

function handleModal(){
    modalCont.style.display="flex";
}
modalCont.addEventListener("click",handleModalClick);

function handleModalClick(e){
   const ele = e.target;
   if(ele.classList.contains("priority_color")){
    let allPriorityColors = document.querySelectorAll(".priority_color");
    allPriorityColors.forEach(color => {
        color.classList.remove("active");
    });
    ele.classList.add("active");
    activeModalColor = ele.classList[1];
   }
}

modalCont.addEventListener("keypress", handleAddTicket);

function handleAddTicket(e){
    console.log(e.target);
    if(e.key !== "Enter"){
        return;
    }
    //createTicket
    const task = e.target.value;
    createTicket(activeModalColor, task);
    modalCont.style.display="none";
    e.target.value = "";
    let allPriorityColors = document.querySelectorAll(".priority_color");
    allPriorityColors.forEach((color,idx) => {
        color.classList.remove("active");
        if(idx==0) color.classList.add("active");
    });
}

function createTicket(color, task){
    const ticketCont = document.createElement("div");
    ticketCont.classList.add("ticket_cont");
    ticketCont.innerHTML = `<div class="ticket_color ${color}"></div>
            <div class="ticket_id">#rvfdf</div>
            <div class="ticket_area">${task}</div>
            <div class="lock_unlock">
                <i class="fa-solid fa-lock"></i>
            </div>`;
    mainCont.appendChild(ticketCont);
}