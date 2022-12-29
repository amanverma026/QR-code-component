let user=[];
function registerfunc(){
    let Firstname=document.getElementById('Firstname').value;
    let Lastname=document.getElementById('Lastname').value;
    let Email=document.getElementById('Email').value;
    let Password=document.getElementById('Password').value;
    let alert = document.getElementById("alertid");
    alert.classList.remove('alertd');
    alert.classList.remove('alerts');
    alert.classList.add('hidden');
    alert.innerText='Registered Successfully!';
    if (!Firstname || !Lastname || !Email || !Password) {
        alert.innerText='All fields are required';
        alert.classList.remove('hidden');
        alert.classList.add('alertd');
        nullcode();
        return;
      }
    if(user.some(u=>u.Email===Email))
    {
        alert.innerText='This email already exist!';
        alert.classList.remove('hidden');
        alert.classList.add('alertd');
        nullcode();
        return;
    }

    let tempuser={
        Firstname: Firstname,
        Lastname: Lastname,
        Email: Email,
        Password: Password
    }
    user.push(tempuser);
    console.log(user);
    nullcode();
    alert.classList.remove('hidden');
    alert.classList.add('alerts');
    
}
function nullcode(){
        document.getElementById('Firstname').value='';
        document.getElementById('Lastname').value='';
        document.getElementById('Email').value='';
        document.getElementById('Password').value='';
}
