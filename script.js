// const fs = require ('fs');
// var selectedRow = null
window.onload = function(){
const form = document.getElementById('form');
const username = document.getElementById('username');
const surname = document.getElementById('surname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const chkbox = document.getElementById('chkbox');
const feedback = document.getElementById('feedback');
// var selectedRow = null
// const showUsers = document.getElementById('showUsers');


// document.getElementById("showUsers").innerHTML="";
// jsonText = document.getElementById("jsontext")

// const male = document.getElementById('male');
// const female = document.getElementById('female');
// const genderS = document.getElementsByName('gender');
// console.log(gender)
}

var genderS = document.getElementsByName('gender');
for (var i = 0, length = genderS.length; i < length; i++) {
    if (genderS[i].checked) {
      var gen = genderS[i].value;
      break;
    }
  }

//more email validate
const isEmail = (emailVal) => {
    var atSymbol = emailVal.indexOf('@');
    if(atSymbol < 1) return false;
    var dot = emailVal.lastIndexOf('.');
    if(dot <= atSymbol + 2) return false;
    if(dot === emailVal.length - 1) return false;
    return true;
}


// username
const usernamev = () => {
    const usernameVal = username.value.trim();
    if(usernameVal === "") {
        setErrorMsg(username, 'username cannot be blank');
        // return false;
    // } else if ((!(/^\S{1,}$/.test(usernameVal))) && (!/^[a-zA-Z]*$/g.test(usernameVal) )) {
    //     setErrorMsg((username, 'Name cannot contain whitespace') && (username, 'only alphabets allow'));
    } else if (!/^[a-zA-Z]*$/g.test(usernameVal) ) {
        setErrorMsg(username, 'only alphabets allow');
    } else if (usernameVal.length >= 15 ) {
        setErrorMsg(username, 'username max 15 char');
    } else if (!(/^\S{1,}$/.test(usernameVal))) {
        setErrorMsg(username, 'Name cannot contain whitespace');
    // } else if ((!(/^\S{1,}$/.test(usernameVal))) && (!/^[a-zA-Z]*$/g.test(usernameVal) )) {
    //     setErrorMsg((username, 'Name cannot contain whitespace') && (username, 'only alphabets allow'));
    }else{
        setSuccessMsg(username);
    }
    // usernameVal.charAt(0).toUpperCase() + usernameVal.slice(1);
    // console.log(usernameVal)
    const str = usernameVal;
    const str2 = str.charAt(0).toUpperCase() + str.slice(1);
    document.getElementById("username").value = str2
    // return true;
    // console.log(str2);
    
}



//lastname
const surnamev = () => {
    const surnameVal = surname.value.trim();
    if(surnameVal === "") {
        setErrorMsg(surname, 'surname cannot be blank');
    } else if (!(/^\S{1,}$/.test(surnameVal))) {
        setErrorMsg(surname, 'Name cannot contain whitespace');
    } else if (!/^[a-zA-Z]*$/g.test(surnameVal) ) {
        setErrorMsg(surname, 'only alphabets allow');
    } else if (surnameVal.length >= 15) {
        setErrorMsg(surname, 'surname max 15 char');
    }else{
        setSuccessMsg(surname);
    } 
    const str = surnameVal;
    const str2 = str.charAt(0).toUpperCase() + str.slice(1);
    document.getElementById("surname").value = str2
}

//email
const emailv = () => {
    const emailVal= email.value.trim();
    if(emailVal === "") {
        setErrorMsg(email, 'email cannot be blank');
    } else if (!isEmail(emailVal)) {
        setErrorMsg(email, 'Not a valid Email');
    } else if (emailVal.length >= 25) {
        setErrorMsg(email, 'email max 25 char');
    }
    else{
        setSuccessMsg(email);
    } 
}

    //phone
const phonev = () => {
    const phoneVal = phone.value.trim();   
    if(phoneVal === "") {
        setErrorMsg(phone, 'phone number cannot be blank');
    } else if (phoneVal.length != 10) {
        setErrorMsg(phone, 'Not a valid phone number');
    }else{
        setSuccessMsg(phone);
    }
}

    // feedback
const feedbackv = () => {
    const feedbackVal = feedback.value.trim(); 
    if(feedbackVal === "") {
        setErrorMsg(feedback, 'feedback cannot be blank');
    }else if (feedbackVal.length >= 30 ) {
        setErrorMsg(feedback, 'feedback max 30 char');
    }else{
        setSuccessMsg(feedback);
    }
}

//checkbox
const chkboxv = () => {
    if(! chkbox.checked){
        setErrorMsg(chkbox, 'please click on box');
    }else{
        setSuccessMsg(chkbox);
    }
}

   //validate gender
const genderv = () => {
    if ( ( male.checked == false ) && ( female.checked == false ) ){
        setErrorMsg(female,'please select gender');
        // setErrorMsg(male,'please select gender');
    }else{
        setSuccessMsg(male);
        // setSuccessMsg(famale);
    }
}
 

//add event

// form.addEventListener(('submit'), (event) => {
//     event.preventDefault();
//     validate();
// })

var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
        }
        else
            updateRecord(formData);
        resetForm();
    }
}

const sendData = (usernameVal, surnameVal,emailVal,phoneVal,feedbackVal,gen, sRate, count) => {
    if (sRate === count){
        // alert('Form Submitted')
        
        // swal( usernameVal+ "   " + surnameVal,gen+ "   " + emailVal  +"   " +phoneVal +"    " +"   " + feedbackVal , "success");
        // location.href = `demo.html?username=${usernameVal}`



        // (async () => {

        //     const { value: accept } = await Swal.fire({
        //       title:  ''+usernameVal+ "   " + surnameVal,
        //       icon: 'info',
        //       html:
        //       ' <b>Email - </b>   ' + emailVal +'  <br>  <b>Phone No. - </b>  ' +phoneVal +' <br>  <b> Gender - </b>  ' +gen ,
        //       input: 'checkbox',
        //       inputValue: 1,
        //       inputPlaceholder:
        //         'I have checked all the details carefully.',
        //       confirmButtonColor: '#3085d6',
        //       cancelButtonColor: '#d33',
        //       confirmButtonText:
        //         'Submit <i class="fa fa-arrow-right"></i>',
        //         inputValidator: (result) => {
        //             return !result && 'You need to click on checkbox for continue.'
        //         },
        //     showCancelButton: true
        //     })
            
        //     if (accept) {
        //     //   Swal.fire('You agreed with T&C :)')
        //       Swal.fire(
        //         'Submitted!',
        //         'Your data has been submitted.'+
        //         ' <br> <b> Thank you </b>',
        //         'success'
        //       )
        //     }
            
        //     })()







        Swal.fire({
            title: ''+usernameVal+ "   " + surnameVal,
            icon: 'info',
            html:
              ' <b>Email - </b>   ' + emailVal +'  <br>  <b>Phone No. - </b>  ' +phoneVal +' <br>  <b> Gender - </b>  ' +gen ,
            // input: 'checkbox',
            // inputPlaceholder: 'please click on box',
            
            //     popup: 'swal2-show',
            //     backdrop: 'swal2-backdrop-show',
            //     icon: 'swal2-icon-show',
            
            // showClass: {
            //     popup: 'animate__animated animate__fadeInDown'
            // },
            // hideClass: {
            //     popup: 'animate__animated animate__fadeOutUp'
            // }   , 
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Submit it!',
            footer: '<b>Please check your all details.</b> '
            // background: '#fff url(/images/trees.png)'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Submitted!',
                'Your data has been submitted.'+
                ' <br> <b> Thank you </b>',
                'success'
              )
            }

            // let user_records=new Array();
            // user_records=JSON.parse(localStorage.getItem(users))?JSON.parse(localStorage.getItem(users)):[]
        
            // user_records.push({
            //     "Name":usernameVal,
            //     "Surname":surnameVal,
            //     "E-mail":emailVal,
            //     "Phone":phoneVal,
            //     "Gender":gen
        
            // })
            // localStorage.setItem("users",JSON.stringify(user_records));
        //   localStorage.setItem("Name",usernameVal)
        //   localStorage.setItem("Surname",surnameVal)
        //   localStorage.setItem("E-mail",emailVal)
        //   localStorage.setItem("Phone",phoneVal)
        //   localStorage.setItem("Gender",gen)
        //   })
          

        // Swal.fire({
        //     title: "<i>Title</i>" +"You clicked the button!" + "Welcome! "+ usernameVal, 
        //     html: "Testno  sporocilo za objekt: <b>test</b>",  
        //     confirmButtonText: "V <u>redu</u>", 
        //   });
        // swal({
        //     title: usernameVal,
        //     text: "You clicked the button!" + "Welcome! "+ usernameVal,
        //     icon: "success",
        //     html: true
        //   });
        // swal({
        //     title: "HTML <small>Title</small>!",
        //     // text: "A custom <span style="color:#F8BB86";>html<span> message.",
        //     html: true
          });
    }
}

//for final data validation
const successMsg = (usernameVal,surnameVal,emailVal,phoneVal,feedbackVal,gen) => {
    let formCon = document.getElementsByClassName('form-control');
    var count = formCon.length - 1;
    for(var i = 0; i < formCon.length; i++){
        if(formCon[i].className === "form-control success") {
            var sRate = 0 + i;
            console.log(sRate);
            sendData(usernameVal,surnameVal,emailVal,phoneVal,feedbackVal,gen, sRate, count);
        }else{
            return false;
        }
    }
}
// //more email validate


// const isEmail = (emailVal) => {
//     var atSymbol = emailVal.indexOf('@');
//     if(atSymbol < 1) return false;
//     var dot = emailVal.lastIndexOf('.');
//     if(dot <= atSymbol + 2) return false;
//     if(dot === emailVal.length - 1) return false;
//     return true;
// }
//capital first letter

// function startsWithCapital(word){
//     return word.charAt(0) === word.charAt(0).toUpperCase()
// }

// function capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }



// //dedine the validate function

// 'use strict';

// const fs = require['fs'];

// let student = {
//     "Name":usernameVal,
//     "Surname":surnameVal,
//     "E-mail":emailVal,
//     "Phone":phoneVal,
//     "Gender":gen
// };
// console.log(student);

//         let data = JSON.stringify(student); 

// console.log(typeof(data));
// console.log(data);

// fs.writeFile('C:\Projects\validation_form\file.json', data);


// const validate = () => {
function validate() {

    isValid = true;
    if ((document.getElementById("username").value == "") ||
    (document.getElementById("surname").value == "") ||
    (document.getElementById("email").value == "") ||
    (document.getElementById("phone").value == "") ||
    (document.getElementById("feedback").value == "") ||
    (! chkbox.checked) || 
    ( ( male.checked == false ) && ( female.checked == false ) )) {
        isValid = false;
        // document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        // if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
        //     document.getElementById("fullNameValidationError").classList.add("hide");
    }
    // return isValid;

    const usernameVal = username.value.trim();
    const surnameVal = surname.value.trim();
    const emailVal= email.value.trim();
    const phoneVal = phone.value.trim();    
    const feedbackVal = feedback.value.trim();
    // var selectedRow = null 
    // const showUsers = document.getElementById('showUsers');
    
    // document.getElementById("showUsers").innerHTML="";
    
    // jsonText = document.getElementById("jsontext")
    // const fs = require['fs'];   
    // var genderS =  findSelection("gender");
    // alert(genderS);
    var genderS = document.getElementsByName('gender');
    for (var i = 0, length = genderS.length; i < length; i++) {
        if (genderS[i].checked) {
          // do whatever you want with the checked radio
        //   alert(genderS[i].value);
          var gen = genderS[i].value;
        //   alert(gen);
      
          // only one radio can be logically checked, don't check the rest
          break;
        //   alert(gen);
        }
      }
    //   alert(gen);
    // const maleVal = male.value;    
    // const femaleVal = female.value;    
    // const genderVal = gender.value;   
    
    // if (isValid = true) {
    //     usernamev();
    //     surnamev();
    //     emailv();
    //     phonev();
    //     feedbackv();
    //     chkboxv();
    //     genderv()
    // } else {
    //     isValid = false;
    // }

    // if (usernamev(),
    // surnamev(),
    // emailv(),
    // phonev(),
    // feedbackv(),
    // chkboxv(),
    // genderv()) {
    //     isValid = true;
    //     // document.getElementById("fullNameValidationError").classList.remove("hide");
    // } else {
    //     isValid = false;
    //     // if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
    //     //     document.getElementById("fullNameValidationError").classList.add("hide");
    // }

    // var x ={
    //     usernamev()
    //     surnamev()
    //     emailv()
    //     phonev()
    //     feedbackv()
    //     chkboxv()
    //     genderv()
    // } 
    usernamev()
    surnamev();
    emailv();
    phonev();
    feedbackv();
    chkboxv();
    genderv();
    // Swal.fire(
    //     'Good job!',
    //     'You clicked the button!',
    //     'success'
    //   )
    successMsg(usernameVal,surnameVal,emailVal,phoneVal,feedbackVal,gen);
    return isValid;


    // let user_records=new Array();
    // user_records=JSON.parse(localStorage.getItem(users))?JSON.parse(localStorage.getItem(users)):[]

    // user_records.push({
    //     "Name":usernameVal,
    //     "Surname":surnameVal,
    //     "E-mail":emailVal,
    //     "Phone":phoneVal,
    //     "Gender":gen

    // })
    // localStorage.setItem("users",JSON.stringify(user_records));
    // successMsg(usernameVal,surnameVal,emailVal,phoneVal,feedbackVal,gen);
    // return isValid;

    // var selectedRow = null

    // var formData = readFormData();
    // console.log(formData)
    //         if (formData)
    //             insertNewRecord(formData);
    //         else
    //             updateRecord(formData);
    //         resetForm();



    // let data = {
    //         "Name":usernameVal,
    //         "Surname":surnameVal,
    //         "E-mail":emailVal,
    //         "Phone":phoneVal,
    //         "Gender":gen
    // }
    // jsonText.innerText = JSON.stringify(data)

    // function handleSubmit(event) {
    //     event.preventDefault();
      
    //     const data = new FormData(event.target);
      
    //     const value = data.get('email');
      
    //     console.log({ value });
    //   }
      
    //   const form = document.querySelector('form');
    //   form.addEventListener('submit', handleSubmit);

    // 'use strict';

    
    // let student = {
    //     "Name":usernameVal,
    //     "Surname":surnameVal,
    //     "E-mail":emailVal,
    //     "Phone":phoneVal,
    //     "Gender":gen
    // };
    // // console.log(student);
    
    // let data = JSON.stringify(student); 
    // const var = require('./filename.js');
    // console.log(typeof(data));
    // console.log(data);
    
  
    // fs.
    
    // function finished(err)
    // {
    //     console.log('success');
    // }
    // document.addEventListener('DOMContentLoaded', function what() {


//     let user_records=new Array();
//     user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
//     if(user_records.some((v)=>{return v.emailVal==emailVal}))
//     {
//     //   alert("duplicate data");
//     }
//     else
//     {
//       user_records.push({
//         "usernameVal":usernameVal,
//         // "Surname":surnameVal,
//         "emailVal":emailVal,
//         "phoneVal":phoneVal
//         // "Gender":gen    
//     })
//     localStorage.setItem("users",JSON.stringify(user_records));
//     }

//     // document.addEventListener('DOMContentLoaded', function what() {
//     //     document.getElementById("showUsers").innerHTML="";
//         // let user_records=new Array(); 
//     //     what();
//     // function what(){
//         // document.getElementById("showUsers").innerHTML="";
    
    

//     document.getElementById("showUsers").innerHTML="";
//     // let user_records=new Array();
//   user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
//     if(user_records)
//     {
//       for(let i=0;i<user_records.length;i++)
//       {
//         let addDiv=document.createElement('div');
//     addDiv.className="row";
//     addDiv.innerHTML='  <div class="col-sm-4" style="padding: 10px;">'+user_records[i].usernameVal+'</div><div class="col-sm-4" style="padding: 10px;">'+user_records[i].emailVal+'</div><div class="col-sm-4" style="padding: 10px;">'+user_records[i].phoneVal+'</div>';
//     document.getElementById("showUsers").appendChild(addDiv);
  
//       }
    // }
// }); 

    // let user_records=new Array();
 
    // user_records=JSON.parse(localStorage.getItem(users))?JSON.parse(localStorage.getItem(users)):[]

    // user_records.push({
    //     "Name":usernameVal,
    //     "Surname":surnameVal,
    //     "E-mail":emailVal,
    //     "Phone":phoneVal,
    //     "Gender":gen

    // })
    // localStorage.setItem("users",JSON.stringify(user_records));
    // console.log( user_records);
    // localStorage.setItem("Name",usernameVal)
    // localStorage.setItem("Surname",surnameVal)
    // localStorage.setItem("E-mail",emailVal)
    // localStorage.setItem("Phone",phoneVal)
    // localStorage.setItem("Gender",gen)
    // validatename();
    // const maleVal = male.value;    
    // const femaleVal = female.value;    
    // const genderVal = gender.value;    
    //validate username
    // capitalizeFirstLetter(usernameVal)
    // if(usernameVal === "") {
    //     setErrorMsg(username, 'username cannot be blank');
    // } else if (!(/^\S{3,}$/.test(usernameVal))) {
    //     setErrorMsg(username, 'Name cannot contain whitespace');
    // } else if (!/^[a-zA-Z]*$/g.test(usernameVal) ) {
    //     setErrorMsg(username, 'only alphabets allow');
    // } else if (usernameVal.length >= 15 ) {
    //     setErrorMsg(username, 'username max 15 char');
    // }else{
    //     setSuccessMsg(username);
    // }

    // //validate surname
    // if(surnameVal === "") {
    //     setErrorMsg(surname, 'surname cannot be blank');
    // } else if (!(/^\S{1,}$/.test(usernameVal))) {
    //     setErrorMsg(username, 'Name cannot contain whitespace');
    // } else if (!/^[a-zA-Z]*$/g.test(surnameVal) ) {
    //     setErrorMsg(surname, 'only alphabets allow');
    // } else if (surnameVal.length >= 15) {
    //     setErrorMsg(surname, 'surname max 15 char');
    // }else{
    //     setSuccessMsg(surname);
    // } 
    //validate email
    // if(emailVal === "") {
    //     setErrorMsg(email, 'email cannot be blank');
    // } else if (!isEmail(emailVal)) {
    //     setErrorMsg(email, 'Not a valid Email');
    // } else if (emailVal.length >= 25) {
    //     setErrorMsg(email, 'email max 25 char');
    // }
    // else{
    //     setSuccessMsg(email);
    // } 
    // //validate phone
    // if(phoneVal === "") {
    //     setErrorMsg(phone, 'phone number cannot be blank');
    // } else if (phoneVal.length != 10) {
    //     setErrorMsg(phone, 'Not a valid phone number');
    // }else{
    //     setSuccessMsg(phone);
    // }
    // vaidate gender
    // if(! gender.checked){
    //     setErrorMsg(gender, 'please select gender');
    // }else{
    //     setSuccessMsg(gender);
    // }
    // // validate feedback
    // if(feedbackVal === "") {
    //     setErrorMsg(feedback, 'feedback cannot be blank');
    // }else if (feedbackVal.length >= 30 ) {
    //     setErrorMsg(feedback, 'feedback max 30 char');
    // }else{
    //     setSuccessMsg(feedback);
    // }
    // if(!this.form.chkbox.checked){

    // //validate checkbox
    // if(! chkbox.checked){
    //     setErrorMsg(chkbox, 'please click on box');
    // }else{
    //     setSuccessMsg(chkbox);
    // }
    //  vaidate gender
    //  if(male.checked==true){
    //     setSuccessMsg(male);
    // }else{
    //     setErrorMsg(male,'please select gender');
    // } 
    //  if(female.checked==true){
    //     setSuccessMsg(famale);
    // }else{
    // }   setErrorMsg(female,'please select gender');

    // //validate gender
    // if ( ( male.checked == false ) && ( female.checked == false ) ){
    //     setErrorMsg(female,'please select gender');
    //     // setErrorMsg(male,'please select gender');
    // }else{
    //     setSuccessMsg(male);
    //     // setSuccessMsg(famale);
    // }
    // successMsg(usernameVal,surnameVal,emailVal,phoneVal,feedbackVal);
}

function setErrorMsg(input,errormsgs) {
    // console.log(errormsgs)
    // const formControl = textarea.parentElement;
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className= "form-control error";
    small.innerText = errormsgs;
}
function setSuccessMsg(input) {
    const formControl = input.parentElement;
    formControl.className= "form-control success";
}

function readFormData() {
    var genderS = document.getElementsByName('gender');
    for (var i = 0, length = genderS.length; i < length; i++) {
        if (genderS[i].checked) {
          var gen = genderS[i].value;
          break;
        }
      }
        var formData = {};
        formData["usernameVal"] = document.getElementById("username").value;
        formData["surnameVal"] = document.getElementById("surname").value;
        formData["emailVal"] = document.getElementById("email").value;
        formData["phoneVal"] = document.getElementById("phone").value;
        formData["feedbackVal"] = document.getElementById("feedback").value;
        formData["gen"] = gen;
        return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.usernameVal;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.surnameVal;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.emailVal;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.phoneVal;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.feedbackVal;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.gen;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    // document.getElementById("username").value = "";
    // document.getElementById("surname").value = "";
    // document.getElementById("email").value = "";
    // document.getElementById("phone").value = "";
    // document.getElementById("feedback").value = "";
    document.getElementById("form").reset();
    // var element = document.querySelector('#parent')
    // console.log(element)
    // const boxes = Array.from(document.getElementsByClassName('formControl'));

    const boxes = document.querySelectorAll('.form-control');
    // console.log(boxes)

    boxes.forEach(box => {
      // ✅ Remove class from each element
      box.classList.remove('success');
    });
    // var element = document.getElementsByClass("success");
    // element.classList.remove("success");
    // const formControl = input.parentElement;
    // formControl.className= "form-control success";
    // formControl.classList.remove("success");
    // document.getElementsByClassName("formControl").remove("success");
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("username").value = selectedRow.cells[0].innerHTML;
    document.getElementById("surname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("email").value = selectedRow.cells[2].innerHTML;
    document.getElementById("phone").value = selectedRow.cells[3].innerHTML;
    document.getElementById("feedback").value = selectedRow.cells[4].innerHTML;
    var genderS = document.getElementsByName('gender');
    for (var i = 0, length = genderS.length; i < length; i++) {
        if (genderS[i].value == selectedRow.cells[5].innerHTML) {
            genderS[i].checked = true;
            break;
        }
      }
    document.getElementsByName("gender").checked = selectedRow.cells[5].innerHTML;

    const boxes = document.querySelectorAll('.form-control');
    boxes.forEach(box => {
        // ✅ Remove class from each element
        box.classList.remove('error');
      
        // ✅ Add class to each element
        box.classList.add('success');
      });
      chkboxv();
    //   resetForm();
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.usernameVal;
    selectedRow.cells[1].innerHTML = formData.surnameVal;
    selectedRow.cells[2].innerHTML = formData.emailVal;
    selectedRow.cells[3].innerHTML = formData.phoneVal;
    selectedRow.cells[4].innerHTML = formData.feedbackVal;
    selectedRow.cells[5].innerHTML = formData.gen;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}

// function validate() {
//     isValid = true;
//     if (document.getElementById("fullName").value == "") {
//         isValid = false;
//         document.getElementById("fullNameValidationError").classList.remove("hide");
//     } else {
//         isValid = true;
//         if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
//             document.getElementById("fullNameValidationError").classList.add("hide");
//     }
//     return isValid;
// }