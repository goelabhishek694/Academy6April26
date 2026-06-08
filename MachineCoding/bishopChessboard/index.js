//create a chessboard of n*n

const n = 8;
let table = document.querySelector("#table");
for(let ri=0; ri<n;ri++){
    let tr = document.createElement("tr");
    let white = ri%2==0 ? true : false;
    for(let ci=0; ci<n;ci++){
        let cell = document.createElement("td");
        cell.setAttribute("class", `box ${white == true ? "white" : "black"}`);
        // cell.innerText = `${ri}-${ci}`;
        cell.setAttribute("data-index", `${ri}-${ci}`);
        tr.appendChild(cell);
        white=!white;

    }
    table.appendChild(tr);
}

table.addEventListener("mouseover", function(e){
    let dataIndex = e.target.dataset.index;
    let [ri,ci] = dataIndex.split("-");
    // console.log(ri,ci);

    //find the probable path , colour it 
    let storage = {};
    findTopRight(ri,ci, storage);
    findBottomRight(ri,ci, storage);
    findBottomLeft(ri,ci, storage);
    findTopLeft(ri,ci, storage);

    const allBoxes = document.querySelectorAll(".box");
    allBoxes.forEach(box => {
        let boxIndex = box.dataset.index;
        if(storage[boxIndex]){
            box.classList.add("yellow");
        }else{
            box.classList.remove("yellow");
        }
    })
});

function findTopRight(ri,ci, storage){
    ri--;
    ci++;
    while(ri>=0 && ci<n){
        let dataIndex = `${ri}-${ci}`;
        storage[dataIndex] = true;
        ri--;
        ci++;
    }
}

function findBottomRight(ri,ci, storage){
    ri++;
    ci++;
    while(ri<n && ci<n){
        let dataIndex = `${ri}-${ci}`;
        storage[dataIndex] = true;
        ri++;
        ci++;
    }
}

function findBottomLeft(ri,ci, storage){
    ri++;
    ci--;
    while(ri<n && ci>=0){
        let dataIndex = `${ri}-${ci}`;
        storage[dataIndex] = true;
        ri++;
        ci--;
    }
}

function findTopLeft(ri,ci, storage){
    ri--;
    ci--;
    while(ri>=0 && ci>=0){
        let dataIndex = `${ri}-${ci}`;
        storage[dataIndex] = true;
        ri--;
        ci--;
    }
}


