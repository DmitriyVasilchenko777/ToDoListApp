let button = document.querySelector(".input-text button").onclick = addToDo;
let inputElement = document.querySelector(".input-text input");
let olElement = document.querySelector(".to-do-list ol");
let divAlert = document.querySelector(".container div.alert");

let newliElement; // Переменная для хранения элементов li

function addToDo(event)
{
    let inputText = inputElement.value; // Получаем введеный текст из input

    if(inputElement.value === "")
    {
        divAlert.style.display = "block";
    }
    else
    {
        divAlert.style.display = "none";

        newliElement = document.createElement("li");
        newliElement.innerHTML = inputText + " <button class='delete-btn' onclick='deleteBtn(this)'>Удалить</button>";
    
        // Функция которая добавляет новый li элимент в начадо списка ul
    
        olElement.append(newliElement);
    
        inputElement.value = ""; // Очищаем input после добавления элемента списка
    }
}

function deleteBtn(button)
{
    button.closest("li").remove(); // Получаем ближаеший родительский элемент кнопки и удаляем его 
}