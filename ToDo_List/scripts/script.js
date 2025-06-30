const btnAdd = document.querySelector(".btn__add");
const toDoInput = document.querySelector(".add__item-input");
const todoErrorMsg = document.querySelector(".add__error");
const todoItemsList = document.querySelector(".todo__list");
const btnDeletetask = document.querySelectorAll(".todo__item-delete");

btnAdd.addEventListener("click", function () {
    const inputFormatted = toDoInput.value.trim();
    if (inputFormatted === "" || inputFormatted === null) {
        todoErrorMsg.classList.add("add__error-show");
    } else {
        const html = `
        <li class="todo__item d-flex__row">
            <input class="todo__item-checkbox" type="checkbox" name="todo__item-checkbox">
            <span class="todo__item-text">${inputFormatted}</span>
            <ion-icon id="todo__delete" class="todo__item-delete" name="trash-outline"></ion-icon>
        </li>`;
        todoItemsList.insertAdjacentHTML('beforeend', html);
        toDoInput.value = "";
        todoErrorMsg.classList.remove("add__error-show");
    }
});


todoItemsList.addEventListener('click', (e) => {
    if (e.target.id === "todo__delete") {
        e.target.parentElement.remove();
    }
})