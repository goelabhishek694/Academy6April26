const ticketCont = document.querySelector(".ticket_cont");
const toolboxPriorityCont = document.querySelector(".toolbox_priority_cont");
const addBtn = document.querySelector(".add_btn");
const deleteBtn = document.querySelector(".delete_btn");
const modalCont = document.querySelector(".modal_cont");
const mainCont = document.querySelector(".main_cont");
let isDelete = false;
let isLocked= true;
let colors = ["pink","blue","purple","green"];
let activeModalColor = "pink";
let tickets = localStorage.getItem("tickets") ? JSON.parse(localStorage.getItem("tickets")) : [];

if(Array.isArray(tickets) && tickets.length > 0){
    populateUI(tickets);
}

function populateUI(tickets){
    tickets.forEach(({color,uid,task}) => {
        createTicket(color, uid, task);
    });
}

//fix for all the tickets
function handleLockUnlock(lockBtn, ticketArea, uid){
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
    let ticketObj = tickets.find(ticketObj=>ticketObj.uid === uid);
    ticketObj.task = ticketArea.textContent;
    updateLocalStorage();
    isLocked=!isLocked;
}

function handleTicketColor(e,uid){
    const ele = e.target;
    let presentColor = ele.classList[1];
    console.log(presentColor);
    let nextColorIdx = (colors.indexOf(presentColor)+1)%colors.length;
    console.log(nextColorIdx);
    let nextColor = colors[nextColorIdx];
    console.log(nextColor);
    ele.classList.remove(presentColor);
    ele.classList.add(nextColor);
    let ticketObj = tickets.find(ticketObj=>ticketObj.uid === uid);
    ticketObj.color = nextColor;
    updateLocalStorage();
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
deleteBtn.addEventListener("click",handleDelete);

function handleModal(){
    modalCont.style.display="flex";
}

function handleDelete(){
    if(isDelete){
        deleteBtn.style.color="black";
    }else{
        deleteBtn.style.color="red";
    }
    isDelete=!isDelete;
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
    if(e.key !== "Enter"){
        return;
    }
    //createTicket
    const task = e.target.value;
    createTicket(activeModalColor, null, task);
    modalCont.style.display="none";
    e.target.value = "";
    let allPriorityColors = document.querySelectorAll(".priority_color");
    allPriorityColors.forEach((color,idx) => {
        color.classList.remove("active");
        if(idx==0) color.classList.add("active");
    });
    activeModalColor=colors[0];
}

function createTicket(color, ticketUid=null, task){
    const ticketCont = document.createElement("div");
    ticketCont.classList.add("ticket_cont");
    const uid = ticketUid || crypto.randomUUID().slice(0,6);
    ticketCont.innerHTML = `<div class="ticket_color ${color}"></div>
            <div class="ticket_id">#${uid}</div>
            <div class="ticket_area">${task}</div>
            <div class="lock_unlock">
                <i class="fa-solid fa-lock"></i>
            </div>`;
    mainCont.appendChild(ticketCont);
    const lockBtn = ticketCont.querySelector(".lock_unlock");
    const ticketArea = ticketCont.querySelector(".ticket_area");
    lockBtn.addEventListener("click",()=>handleLockUnlock(lockBtn, ticketArea, uid));
    const ticketColor = ticketCont.querySelector(".ticket_color");
    ticketColor.addEventListener("click",(e)=>handleTicketColor(e,uid));
    ticketCont.addEventListener("click",handleDeleteTicket);

    //if ticket uid is present , then it means ticket is already present in local storage, so we dont need to add ticket in local storage again. 
    if(ticketUid){
        return;
    }

    //add to local storage
    const ticketObj ={
        color,
        uid,
        task
    }
    tickets.push(ticketObj);
    localStorage.setItem("tickets",JSON.stringify(tickets));
}

function handleDeleteTicket(e){
    if(isDelete){
        const ticket = e.currentTarget;
        const ticketUid = ticket.children[1].textContent.split("#")[1];
        ticket.remove();
        console.log(ticket);
        tickets = tickets.filter(ticketObj=>{
            console.log(ticketObj.uid, ticketUid);
            
            return ticketObj.uid !== ticketUid
        });
        updateLocalStorage();
    }
}

function updateLocalStorage(){
    localStorage.setItem("tickets",JSON.stringify(tickets));
}