divX.onclick = function() {showImageForm()};
divX.innerHTML = "Форма для зображень";

let image = [];
let deleteImageButton = [];
let image_index = 0;
const image_array = ["https://images.unsplash.com/photo-1702404275992-929c62049bfe?q=80&w=2031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1702499903230-867455db1752?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]
image_array[2] = "https://images.unsplash.com/photo-1702452782235-9b850b9255c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

function showImageForm()
{
    let imageForm = document.createElement("form");
    let addImageButton = document.createElement("button");
    let imageLocalStorageButton = document.createElement("button");

    addImageButton.type = "button";
    addImageButton.append("Додати зображення");
    addImageButton.onclick = function() {addImage()};

    imageLocalStorageButton.type = "button";
    imageLocalStorageButton.append("Зберегти в local storage");
    imageLocalStorageButton.onclick = function() {imageLocalStorage()};

    
    imageForm.append(addImageButton);
    imageForm.append(imageLocalStorageButton);
    div5.append(imageForm);
}

function addImage()
{
    image[image_index] = document.createElement("img");
    image[image_index].style.width = "100%";
    let random_number = Math.floor(Math.random() * image_array.length)
    image[image_index].src = image_array[random_number];
    div4.append(image[image_index]);
    
    deleteImageButton[image_index] = document.createElement("button");
    deleteImageButton[image_index].type = "button";
    deleteImageButton[image_index].id = "delete-button" + image_index;
    deleteImageButton[image_index].append("Видалити зображення " + (image_index + 1));
    deleteImageButton[image_index].onclick = function() {deleteImage(this.id)};

    div4.append(deleteImageButton[image_index]);

    image_index++;
}

function imageLocalStorage()
{
    let name;
    for (let i = 0; i < image.length; i++)
    {
        name = "image" + (i+1);
        // console.log(name);
        localStorage.setItem(name, image[i].src);
        // alert(localStorage.getItem(name));
    }   
}

function deleteImage(buttonID)
{
    let index = buttonID.substr(13);
    console.log(index);
    let name = "image" + (index + 1);
    localStorage.removeItem(name);
    console.log(localStorage.getItem(name));
    image[index].remove();
    deleteImageButton[index].remove(); 
}