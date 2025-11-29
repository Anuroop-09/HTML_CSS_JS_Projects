const btnAdd = document.querySelector(".todo__btn--add");
const toDoInput = document.querySelector(".todo__input--add");
const todoErrorMsg = document.querySelector(".todo__error");
const todoItemsList = document.querySelector(".todo__list");
const btnDeletetask = document.querySelectorAll(".todo__item-delete");
let items = [];

const renderItems = function (items) {
    console.log("Items List: ", items);
    items.forEach(item => {
        const html = `
        <li class="todo__item dflex__row">
            <input class="todo__input--checkbox" type="checkbox" name="todo__input--checkbox" ${item?.checked ? "checked" : null}>
            <span class="todo__item--text">${item.name}</span>
            <ion-icon class="todo__btn todo__btn--delete" name="trash-outline" id="todo__btn--delete"></ion-icon>
        </li>`;
        todoItemsList.insertAdjacentHTML('beforeend', html);
    })
}

const localStorgateSet = function (items) {
    localStorage.setItem("items", JSON.stringify(items));
}

console.log("Local Storage Items", localStorage.getItem("items"));
if (localStorage.getItem("items") !== null) items = JSON.parse(localStorage.getItem("items"));
renderItems(items);

btnAdd.addEventListener("click", function () {
    const inputFormatted = toDoInput.value.trim();
    if (inputFormatted === "" || inputFormatted === null) {
        todoErrorMsg.classList.add("todo__error--show");
        todoErrorMsg.textContent = "Enter something to add in the list *";
    } else {
        const isItemAvailable = items.some(item => item.name === inputFormatted);

        if (isItemAvailable) {
            todoErrorMsg.textContent = "Item is already added in the list!";
            todoErrorMsg.classList.add("todo__error--show");
        } else {
            todoItemsList.innerHTML = "";
            const data = {
                name: inputFormatted,
                checked: false
            }
            items.push(data);
            localStorgateSet(items);
            renderItems(items);
            toDoInput.value = "";
            todoErrorMsg.classList.remove("todo__error--show");
            console.log("[ADD]: Item got added");
        }
    }
});


todoItemsList.addEventListener('click', (e) => {
    console.log(e);
    const currentItemName = e.target.parentElement.querySelector(".todo__item--text").textContent;
    if (e.target.id === "todo__btn--delete") {
        items = items.filter(item => item.name !== currentItemName);
        localStorgateSet(items);
        e.target.parentElement.remove();
        console.log("[DELETE]: Item got deleted");
    }

    if (e.target.name === "todo__input--checkbox") {
        items = items.filter(item => {
            if (item.name === currentItemName) {
                if (item.checked) item.checked = false;
                else item.checked = true;
            }
            return item;
        });
        localStorgateSet(items);
        todoItemsList.innerHTML = "";
        renderItems(items);
    }
})