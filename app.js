let mainContent = document.getElementById("form-content");
console.log(mainContent);

let childElementOfMainContent = mainContent.children
for(var i = 0; i < childElementOfMainContent.length ; i++){
    console.log(childElementOfMainContent[i]);
}

let renderClass = document.getElementsByClassName("render");
console.log(renderClass);
 
 for(var j = 0; j < renderClass.length ; j++){
     document.write(`<div class="card">
     <h4>Printing the innerHTML of "render" class element in browser .</h4>
     <span>${renderClass[j].innerHTML}</spam>
    </div>`);
}

let firstName = document.getElementById("first-name");
firstName.value = "Maaz";

let last_Name = document.getElementById("last-name");
last_Name.value = "Khan";

let email = document.getElementById("email");
email.value = "maazkhan66376@gmail.com";

let formContent = document.getElementById("form-content");
console.log(formContent.nodeType);

let lastName = document.getElementById("lastName");
console.log(lastName.nodeType);
console.log(lastName.childNodes);

let lastNameChildNodes = lastName.childNodes;
lastNameChildNodes[0].innerHTML = "Maaz"
console.log(lastName);

let firstChildOfMainContent = mainContent.firstChild;
console.log(firstChildOfMainContent);

let lastChildOfMainContent = mainContent.lastChild;
console.log(lastChildOfMainContent);

let previousSiblingOfLastName = lastName.previousElementSibling;
console.log("Previous sibling of element having id 'lastName' is ", previousSiblingOfLastName);

let nextSiblingOfLastName = lastName.nextElementSibling;
console.log("Next sibling of element having id 'lastName' is ", nextSiblingOfLastName);

console.log("NodeType of element having id 'email' is ", email.nodeType);
let parentOfEmail = email.parentElement;
let parentNodeOfEmail = email.nodeType;
console.log("Parent node of element having id 'email' is ", parentNodeOfEmail);
