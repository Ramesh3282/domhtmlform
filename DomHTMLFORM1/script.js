let formSubmission=document.querySelector('#form')
// var table = document.createElement("TABLE");
var table=document.getElementById("data_table")
// table.style.border="1"
// table.setAttribute("class", "table_class");

var tableValueCount=0

formSubmission.addEventListener("submit",(event)=>{
    event.preventDefault();
    let fname=document.getElementById("first-name").value
    let lname=document.getElementById("last-name").value
    let gender=document.getElementById("customRadioInline1").checked ? "Male" : document.getElementById("customRadioInline2").checked ? "Female" :''
    let fruit=document.getElementById("customCheck1").checked
    let vegtable=document.getElementById("customCheck2").checked
    let chicken=document.getElementById("customCheck3").checked
    let mutton=document.getElementById("customCheck4").checked
    let seafood=document.getElementById("customCheck5").checked
    let address=document.getElementById("inputAddress").value
    let country=document.getElementById("country").value
    let State=document.getElementById("state").value
    let city=document.getElementById("city").value
    let pincode=document.getElementById("pincode").value
    
   let food =''
   if (fruit){
        food=food+" fruit"

   }
   if (vegtable){
    food=food+" vegtable"

    }
    if (mutton){
        food=food+" mutton"

   }
   if (chicken){
    food=food+" chicken"
   }
   if (seafood){
    food=food+" seafood"

    }

    if (tableValueCount==0){
        headingArray=["FirstName","LastName","Gender","Food","Address","Country","State","City","Pincode"]
        let tr = document.createElement('tr');  
        for (index in headingArray){
            
            let td = document.createElement('td');
            let text = document.createTextNode(headingArray[index]);
            td.appendChild(text);
            tr.appendChild(td);

        }
        table.appendChild(tr);
        tableValueCount++;
        
    }
    if (tableValueCount>0){

   
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    var cell9 = row.insertCell(8);

    cell1.innerHTML = fname;
    cell2.innerHTML = lname;
    cell3.innerHTML = gender;
    cell4.innerHTML = food
    cell5.innerHTML = address;
    cell6.innerHTML = country;
    cell7.innerHTML = State;
    cell8.innerHTML = city;
    cell9.innerHTML = pincode;
    }
    formSubmission.reset();
})



const stateArray=["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal"]

var option='<option>Choose</option>'
for (index in stateArray){
    option=option+"<option>"+stateArray[index]+"</option>"
}

function foodValidation(){
    let checkboxArray = document.getElementsByName('food')
    let checkedCount=0
    for (index in checkboxArray ){
        if (checkboxArray[index].checked){
            checkedCount++
        }
    }
    if (checkedCount<2){
        alert("Please choose the two food")
    }

}

document.getElementById("state").innerHTML=option
document.body.append(table)