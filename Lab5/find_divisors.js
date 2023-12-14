
let numberForm = document.createElement("form");
let numberInput = document.createElement("input");
let numberLabel = document.createElement("label");
let divisorsButton = document.createElement("button");

divisorsButton.append("Знайти дільники");
divisorsButton.onclick = function() {findDivisors()};
numberInput.type = "number";
numberInput.id = "number-input";

numberLabel.setAttribute("for", "number-input");
numberLabel.append("Введіть число для визначення його дільників ");

numberForm.append(numberLabel);
numberForm.append(numberInput);
numberForm.append(divisorsButton);

div5.append(numberForm);

body.onload = function() {pageReloaded()};
function findDivisors()
{
    let enteredNumber = document.getElementById("number-input").value;
    let divisorsArray = [];
    let arrayIndex = 0;
    for (let i = 1; i <= enteredNumber; i++)
    {
        if (enteredNumber % i == 0) 
        {
            divisorsArray[arrayIndex] = i;
            arrayIndex++;
        }
    }
    document.cookie = "divisors=" + divisorsArray;
    alert("Дільники: " + divisorsArray);
}

function pageReloaded()
{
    if (document.cookie != "") 
    {
        if (confirm("Поточні дані cookie: " + document.cookie + "\n" + "Зберегти дані cookie?"))
        {
            alert("Cookie збережені.\n" + "Для їх оновлення, перезавантажте сторінку, натисніть 'Скасувати' у діалоговому вікні та введіть дані ще раз");
            numberForm.style.display = "none";
        }
        else
        {
            document.cookie += "; expires= Thu, 21 Aug 2000 20:00:00 UTC";
        }
    }
    console.log("Куки: " + document.cookie);
}

div5.append(hr.cloneNode());