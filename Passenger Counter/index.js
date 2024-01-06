let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0;
function increment() {
    count += 1; // count = count + 1
    countEl.textContent = count  // countEl.innerText = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr  // saveEl.innerText += countStr
    countEl.textContent = 0
    count = 0
}
