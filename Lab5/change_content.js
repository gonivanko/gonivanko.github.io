let temporaryDiv = document.createElement("div");

temporaryDiv.innerHTML = div3.innerHTML;

div3.innerHTML = div6.innerHTML;
div6.innerHTML = temporaryDiv.innerHTML;