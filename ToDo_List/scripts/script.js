const btnAdd = document.querySelector(".btn__add");
const toDoInput = document.querySelector(".add__item-input");
const todoErrorMsg = document.querySelector(".add__error");
const todoItemsList = document.querySelector(".todo__list");
const btnDeletetask = document.querySelectorAll(".todo__item-delete");
let items = [];

const renderItems = function (items) {
    console.log("Items List: ", items);
    items.forEach(item => {
        const html = `
        <li class="todo__item d-flex__row">
            <input class="todo__item-checkbox" type="checkbox" name="todo__item-checkbox">
            <span class="todo__item-text">${item}</span>
            <ion-icon id="todo__delete" class="todo__item-delete" name="trash-outline"></ion-icon>
        </li>`;
        todoItemsList.insertAdjacentHTML('beforeend', html);
    })
}

const localStorgateSet = function(items) {
    localStorage.setItem("items", JSON.stringify(items));
}


console.log("Local Storage Items", localStorage.getItem("items"));
if (localStorage.getItem("items") !== null) items = JSON.parse(localStorage.getItem("items"));
renderItems(items);

btnAdd.addEventListener("click", function () {
    const inputFormatted = toDoInput.value.trim();
    if (inputFormatted === "" || inputFormatted === null) {
        todoErrorMsg.classList.add("add__error-show");
    } else {
        todoItemsList.innerHTML = "";
        items.push(inputFormatted);
        localStorgateSet(items);
        renderItems(items);
        toDoInput.value = "";
        todoErrorMsg.classList.remove("add__error-show");
        console.log("[ADD]: Item got added");
    }
});


todoItemsList.addEventListener('click', (e) => {
    if (e.target.id === "todo__delete") {
        const itemToRemove = e.target.parentElement.querySelector(".todo__item-text").textContent;
        items = items.filter(item => item !== itemToRemove);
        localStorgateSet(items);
        e.target.parentElement.remove();
        console.log("[DELETE]: Item got deleted");
    }
})