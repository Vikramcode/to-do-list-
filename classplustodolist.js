const newdiv1 = document.createElement("div")
const ulll = document.getElementById("ulll")
const table = document.getElementById("tablee")
const button = document.getElementById("button")
const nam = document.getElementById("name")
const email = document.getElementById("mail")
const phone = document.getElementById("tel")


button.addEventListener("click" , makingtr);

function makingtr(){
    if(nam.value =="" ||email.value == "" || phone.value ==""){
        alert("!Enter all feilds")
    }else{
    const newtr = document.createElement("tr");
    newtr.id="trr"
    newtr.style.display="flex"
    newtr.style.justifyContent="space-between"
    
    table.appendChild(newtr);
    const newtd1 = document.createElement("td");
    
    newtr.appendChild(newtd1);
    newtd1.id="td1"
    console.log(newtd1)

    const newtd2 = document.createElement("td");
    newtr.appendChild(newtd2);
    newtd2.id="td2"

    const newtd3 = document.createElement("td");
    newtr.appendChild(newtd3);
    newtd3.id="td3"
    console.log(newtr)
    newtd1.innerText = nam.value
    newtd2.innerText = email.value
    newtd3.innerText = tel.value
     
    // const newtd4 = document.createElement("td")
    // newtd4.id = "newtd4"
    // newtr.appendChild(newtd4)
    
    // ......
    
    var button2 = document.createElement("button")
    button2.className = "button2"
    button2.innerText ="Delete"
    newtr.appendChild(button2);
    nam.value = ""
    email.value = ""
    tel.value = ""
} 
}
  
table.addEventListener("click", function deletetask(e){
    if(e.target.classList.contains("button2")){
        e.target.parentNode.remove();
    }
})

