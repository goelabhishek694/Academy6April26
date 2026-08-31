const socket = io();
socket.on("message", (data) => {
  console.log("receiving message", data);
});

const btn = document.getElementById("send");
const input = document.getElementById("message");
const ul = document.getElementById("list");
const createGrp = document.getElementById("createGrp");
const joinGrp = document.getElementById("joinGrp");
const stg = document.getElementById("stg");

btn.addEventListener("click", () => {
  const value = input.value;
  const div = document.createElement("div");
  div.setAttribute("class", "sender");
  const li = document.createElement("li");
  li.innerText = value;
  const para = document.createElement("p");
  para.innerText = "sender";
  div.appendChild(para);
  div.appendChild(li);
  ul.appendChild(div);
  input.value = "";
  socket.emit("message", value);
});

socket.on("broadcast", (data) => {
    console.log("broadcadted message", data);
    const div = document.createElement("div");
    div.setAttribute("class","receiver");
    const li = document.createElement("li");
    li.innerText = data;
    const para = document.createElement("p");
    para.innerText = "receiver";
    div.appendChild(para);
    div.appendChild(li);
    ul.appendChild(div);
});

createGrp.addEventListener("click", () => {
    console.log("group created req");
    socket.emit("create_grp", 100);
});

joinGrp.addEventListener("click", () => {
    console.log("group joined req");
    socket.emit("join_room");
});

stg.addEventListener("click", () => {
  let value = input.value;
  if(value){
     socket.emit("grp message", value);
  }
});

socket.on("serv_grp_message", function (data) {
  console.log("grp message", data);
});

