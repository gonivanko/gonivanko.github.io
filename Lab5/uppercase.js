let lettercaseForm = document.createElement("form");
let uppercaseButton = document.createElement("input");
let uppercaseLabel = document.createElement("label");
let lowercaseButton = document.createElement("input");
let lowercaseLabel = document.createElement("label");
let lettercaseParagraph = document.createElement("p");

// const div4Text = div4.innerText;
let div4Paragraphs = div4.getElementsByTagName("p");
let div4OriginalText = [];
for (let i = 0; i < div4.childElementCount; i++)
{
    div4OriginalText[i] = div4Paragraphs[i].innerText;
}
// console.log(div4OriginalText);
// console.log(typeof div4OriginalText);
// console.log(div4.childElementCount);

uppercaseButton.type = "radio";
uppercaseButton.id = "uppercase_button";
uppercaseButton.name = "letter-case";
uppercaseButton.onchange = function() {uppercaseFirstLetters()};

lowercaseButton.type = "radio";
lowercaseButton.id = "lowercase-button";
lowercaseButton.name = "letter-case";
lowercaseButton.onchange = function() {normalLetters()};

uppercaseLabel.setAttribute("for", "uppercase_button");
uppercaseLabel.append("Верхній регістр");

lowercaseLabel.setAttribute("for", "lowercase-button");
lowercaseLabel.append("Нижній регістр");

lettercaseParagraph.append("Оберіть регістр для перших літер блоку 4");
// uppercaseButton.value = "Верхній регістр";
lettercaseForm.append(lettercaseParagraph);
lettercaseForm.append(uppercaseButton);
lettercaseForm.append(uppercaseLabel);
lettercaseForm.append(lowercaseButton);
lettercaseForm.append(lowercaseLabel);

function uppercaseFirstLetters()
{
    localStorage.setItem("uppercase", "true");
    // console.log(localStorage.getItem("uppercase"));
    for (let i = 0; i < div4.childElementCount; i++)
    {
        const wordsArray = div4Paragraphs[i].innerText.split(" ");
        for (let j = 0; j < wordsArray.length; j++)
        {
            wordsArray[j] = wordsArray[j][0].toUpperCase() + wordsArray[j].substr(1);
        }
        div4Paragraphs[i].innerText = wordsArray.join(" ");
    }
}

function normalLetters()
{
    localStorage.setItem("uppercase", "false");
    console.log(localStorage.getItem("uppercase"));
    for (let i = 0; i < div4.childElementCount; i++)
    {
        div4Paragraphs[i].innerText = div4OriginalText[i];
    }
}

div5.append(lettercaseForm);

if (localStorage.getItem("uppercase") == "true")
{
    uppercaseFirstLetters();
}

div5.append(hr.cloneNode());