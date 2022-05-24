const form = document.getElementById("form");
const username = document.getElementById("username");
const cellphone = document.getElementById("cellphone");
const gender = document.getElementById("gender");
const age = document.getElementById("age");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
 e.preventDefault();

 checkInputs();
});

function checkInputs() {
    const usernameValue = username.value;
    const cellphoneValue = cellphone.value;
    const genderValue = gender.value;
    const ageValue = age.value;
    const emailValue = email.value;

    if(usernameValue === "") {
      setErrorFor(username, "O nome e sobrenome do usúario são obrigatórios.");
    } else {
      setSuccessFor(username);
    }

    if(cellphoneValue === "") {
      setErrorFor(cellphone, "o número de telefone é obrigatório.");
    } else if (cellphoneValue.length < 12) {
      setErrorFor(cellphone, "insira um número de telefone válido.");
    } else {
      setSuccessFor(cellphone);
    }

    if(genderValue === "") {
      setErrorFor(age, "Este campo é obrigatório.");
    } else{
      setSuccessFor(gender);
    }
    
   if(ageValue === ""){
     setErrorFor(age, "A idade é obrigatória.");
   } else if(ageValue < 18){
     setErrorFor(age, "O usúario deve ser maior de 18 anos");
   } else {
     setSuccessFor(age);
   }


   if  ( emailValue  ===  "" )  {
    setErrorFor ( email ,  "O email é obrigatório." ) ;
  } else if(!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido.");
  }
  else {
    setSuccessFor(email);
  }
  
}

    function setErrorFor(input, message) {
       const formControl = input.parentElement;
       const small = formControl.querySelector("small")

       small.innerText = message;

       formControl.className = "form-control error";

}

   function setSuccessFor(input) {
     const formControl = input.parentElement;

     formControl.className = "form-control success";
   }

   function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
   }

  
  

  
   
