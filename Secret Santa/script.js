let contactForm = document.getElementById("contact-form");
let fullNameInput = document.getElementById("full-name-input");
let emailInput = document.getElementById("email-input");
let subjectInput = document.getElementById("subject-input");
let submitButton = document.getElementsByClassName("submit-button")[0];

let formHeading = document.getElementById("form-heading");
let formLegend = document.getElementById("form-legend");


submitButton.onclick = function() {saveAnswer(event)};

let forScrollButton = document.getElementsByClassName("form-scroll");

console.log(forScrollButton.length);

for (let i = 0; i < forScrollButton.length; i++)
{
    forScrollButton[i].onclick = function() 
    {
        contactForm.scrollIntoView
        ({
            behavior: 'smooth',
            block: 'center',
            inline: 'center'
        });
    }
}

// document.cookie += "; expires= Thu, 21 Aug 2000 20:00:00 UTC";

contactForm.removeAttribute('novalidate');

function saveAnswer(event)
{
    event.preventDefault();
    // console.log(document.cookie);

    let nameValue = fullNameInput.value;
    let emailValue = emailInput.value;
    let subjectValue = subjectInput.value;

    if (nameValue == "")
    {
        alert("Please enter full name to submit the form");
    }
    else if (emailValue == "")
    {
        alert("Please enter email to submit the form");
    }
    else if (subjectValue == "")
    {
        alert("Please enter subject to submit the form");
    }
    else
    {
        let cookieString = document.cookie;

        if (cookieString != "")
        {    
            
            let nameArray = [], emailArray = [], subjectArray = [];

            let nameIndex = -1, emailIndex = -1, subjectIndex = -1;

            const cookieArray = cookieString.split(";");

            const indexesArray = getCookieIndexes(cookieArray);
            nameIndex = indexesArray[0]; emailIndex = indexesArray[1]; subjectIndex = indexesArray[2];
            
            // console.log("nameIndex = " + nameIndex + " emailIndex = " + emailIndex + " subjectIndex = " + subjectIndex);

            let positionIndex = cookieArray[nameIndex].indexOf("=") + 1;
            if (positionIndex >= 0)
            {
                nameArray = (cookieArray[nameIndex].substring(positionIndex)).split(",");
            }
            
            positionIndex = cookieArray[emailIndex].indexOf("=") + 1;
            if (positionIndex >= 0)
            {
                emailArray = (cookieArray[emailIndex].substring(positionIndex)).split(",");
            }

            positionIndex = cookieArray[subjectIndex].indexOf("=") + 1;
            if (positionIndex >= 0)
            {
                subjectArray = (cookieArray[subjectIndex].substring(positionIndex)).split(",");
            }


            nameArray.push(nameValue);
            emailArray.push(emailValue);
            subjectArray.push(subjectValue);

            document.cookie = "name=" + nameArray + ";";

            document.cookie = "email=" + emailArray + ";";

            document.cookie = "subject=" + subjectArray + ";";

            // console.log(nameArray);
            // console.log(emailArray);
            // console.log(subjectArray);

            let randomIndex = randomNumber(0, nameArray.length);

            let randomName = nameArray[randomIndex];
            let randomEmail = emailArray[randomIndex];
            let randomSubject = subjectArray[randomIndex];

            alert("Random person has been chosen!");
            
            fullNameInput.value = randomName;
            emailInput.value = randomEmail;
            subjectInput.value = randomSubject;

            submitButton.disabled = true;
            formHeading.innerHTML = "Random person's contacts";
            formLegend.innerHTML = "Please save this somewhere or try to remember";
        }
        else
        {
            document.cookie = "name=" + nameValue + ";";

            document.cookie = "email=" + emailValue + ";";

            document.cookie = "subject=" + subjectValue + ";";

            alert("We will send your ward later ☃️");
        }
    }
    
}


function randomNumber(min, max)
{
    return Math.floor(min + Math.random() * (max - min));
}


function getCookieIndexes(cookieArray)
{
    for (let i = 0; i < cookieArray.length; i++)
    {
        if (cookieArray[i].indexOf("name") >= 0)
        {
            nameIndex = i;
        }
        else if (cookieArray[i].indexOf("email") >= 0)
        {
            emailIndex = i;
        }
        else if (cookieArray[i].indexOf("subject=") >= 0)
        {
            subjectIndex = i;
        }
    }

    return [nameIndex, emailIndex, subjectIndex];
}

function deleteAllCookies() {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}
