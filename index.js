let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

saveStr = document.getElementById("save-el").textContent

function increment() {
    count += 1
    countEl.textContent = count
}

function reset() {
    saveEl.textContent = saveStr;
    countEl.textContent = 0;
    count = 0;
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
