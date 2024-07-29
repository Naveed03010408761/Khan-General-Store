
document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-input').value.trim().toLowerCase();
    if (query === 'account') {
        window.location.href = 'account.html';
    } else if (query === "product") {
        window.location.href = "product.html";
    } 
    else if (query === "contact") {
        window.location.href = "contact.html";
    } 
    else {
        alert('Please enter a search term');
    }
});



const button5 = document.getElementById("btn5");
let mode = true;

button5.addEventListener("click", () => {
    if (mode === true) { 
        document.body.style.backgroundColor = "black"; 
        mode = false; 
    } else {
        document.body.style.backgroundColor = "white"; 
        mode = true; 
    }
});

let  button1 = document.getElementById("btn1");
button1.addEventListener("click" , ()=>{
    button1.style.backgroundColor = "lightcoral";
})
let  button2 = document.getElementById("btn2");
button2.addEventListener("click" , ()=>{
   alert("explore our store");
})
let  button3 = document.getElementById("btn3");
button3.addEventListener("click" , ()=>{
    button3.textContent = "welcome";
})
let  button4 = document.getElementById("btn4");
button4.addEventListener("click" , ()=>{
    button4.style.visibility = "hidden";
})



function submitForm()
{
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var gender = document.getElementById("gender").value;
    var bio = document.getElementById("bio").value;
    var agree = document.getElementById("agree").value;

    if(!name || !email || !password || !gender || !bio || !agree)
    {
        alert("please fill in all fields and agree to the terms and conditions.");
    }

    var formData = new FormData();
    formData.append("name" , name);
    formData.append("email" , email);
    formData.append("password" , password);
    formData.append("gender" , gender);
    formData.append("bio" , bio);

    var xhr = new XMLHttpRequest();
    xhr.open("POST" , "/submit");
    xhr.send(formData);

}
