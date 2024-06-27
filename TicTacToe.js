let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector("#reset-btn")
const main = document.querySelector("main")

let turnO = true

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

let count = 0

boxes.forEach((box) => {
    box.addEventListener("click", function() {
        count++

        if(turnO) {
            box.innerText = "o"
            box.style.color = "blue"
            turnO = false
        } else {
            box.innerText = "x"
            box.style.color = "red"
            turnO = true
        }
        box.disabled = true     //eta dewar reason hocche taile ekta box e ekbar click korar por abar click korle sign change hoye jacchilo tai ekta box e ekbar e click kora jaate jaay shejonno porerbar box taake disable kore dewa hoyeche.

        checkWinner()
    })
})

const resetGame = () => {
    count = 0
    turnO = true
    enableBoxes()
}

const disableBoxes = () => {    //kono user jitar por button gula disable kore dicchi jaate ar khela cholte na pare.
    for(let box of boxes) {
        box.disabled = true
    }
}

const enableBoxes = () => {    //kono user jitar por button gula disable kore dicchi jaate ar khela cholte na pare.
    for(let box of boxes) {
        box.disabled = false
        box.innerText = ""
    }
    winInput.style.display = "none"
    newBtn.style.display = "none"
}

let winInput = document.createElement("h1")
let newBtn = document.createElement("button")
const checkWinner = () => {
    for(let pattern of winPatterns) {
        // console.log(pattern[0], pattern[1], pattern[2])
        let pos1Val = boxes[pattern[0]].innerText
        let pos2Val = boxes[pattern[1]].innerText
        let pos3Val = boxes[pattern[2]].innerText

        if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if(pos1Val == pos2Val && pos2Val == pos3Val) {

                winInput.innerText = pos1Val.toUpperCase() + " user winner"
                winInput.style.color = "Yellow"
                winInput.style.border = "2px solid slate"
                winInput.style.font = "70px bold"
                winInput.style.display = "block"
                main.insertBefore(winInput, resetBtn)
                disableBoxes()

                
                newBtn.innerText = "New Game"
                newBtn.className = "bg-black text-white font-semibold mt-10 p-3 rounded-2xl"
                newBtn.style.display = "block"
                main.insertBefore(newBtn, resetBtn)
                
            }
            if(count == 9 && pos1Val != pos2Val && pos2Val != pos3Val) {
                winInput.style.display = "block"
                winInput.innerText = "Match Drawn"
                winInput.style.color = "Red"
                winInput.style.border = "2px solid slate"
                winInput.style.font = "70px bold"
                main.insertBefore(winInput, resetBtn)
    
                newBtn.style.display = "block"
                newBtn.innerText = "New Game"
                newBtn.className = "bg-black text-white font-semibold mt-10 p-3 rounded-2xl"
                main.insertBefore(newBtn, resetBtn)
            }
        }
        
    }
}

newBtn.addEventListener("click", resetGame)
resetBtn.addEventListener("click",resetGame)

