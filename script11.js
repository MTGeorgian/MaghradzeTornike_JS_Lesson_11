'use strict';

document.getElementById('form').addEventListener('submit', function(item){
    item.preventDefault();

    let errors = {};
    let form = item.target;
    
    let user = form.querySelector('[name = "user"]').value;

        if(user.length < 6){
            errors.user = 'Add Two Symbols :)';
        }
        if(user == ''){
            errors.user = 'Enter Your Name';
        }

    let useremail = form.querySelector('[name = "useremail"]').value;

        if(!useremail.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
            errors.useremail = 'Invalid Email Adress';
        }
        if(useremail == ''){
            errors.useremail = 'Please Enter Your Email';
        }

    let pswrd = form.querySelector('[name = "pswrd"]').value;
    let pswrd2 = form.querySelector('[name = "pswrd2"]').value;

        if(pswrd.length < 4){
            errors.pswrd = 'Invalid Password';
            errors.pswrd2 = 'Invalid Password';
        }
        if(pswrd != pswrd2){
            errors.pswrd2 = 'Password Do not Match';
            errors.pswrd = 'Password Do not Match';
        }
        if(pswrd & pswrd2 == ''){
            errors.pswrd = 'Password Must Be Filled';
            errors.pswrd2 = 'Password Must Be Filled';
        }


    let gender = false;    
        form.querySelectorAll('[name = "gender"]').forEach( element => {
            if(element.checked){
                gender = true;
            }
        });    
        if(!gender){
            errors.gender = 'Please Check Gender';
        }

    let check = form.querySelector('[name = "check"]').checked;
    
        if(!check){
            errors.check = 'You Have To Agree';
        }
      
    form.querySelectorAll('.error-div').forEach(item => {
        item.textContent = '';
    }); 
        
    for (let thing in errors){
        let errordiv = document.getElementById('error_' + thing);
        if(errordiv){
            errordiv.textContent = errors[thing];
        }
    }    

    if(Object.keys(errors).length == 0){
        form.submit();
    }

    console.log(errors);
})

function showpswrd2(){
    let password2 = document.getElementById('password2');

    if(password2.type === 'password'){
        password2.type = 'text';
        document.getElementById('eye2').style.display = 'inline-block';
        document.getElementById('eye-slash2').style.display = 'none';
    }else{
        password2.type = 'password';
        document.getElementById('eye2').style.display = 'none';
        document.getElementById('eye-slash2').style.display = 'inline-block';
    }
}

    function showpswrd (){
        let password = document.getElementById('password');
        
        if(password.type === 'password'){
            password.type = 'text';
            document.getElementById('eye').style.display = 'inline-block';
            document.getElementById('eye-slash').style.display = 'none';
    
        }else{
            password.type = 'password';
            document.getElementById('eye').style.display = 'none';
            document.getElementById('eye-slash').style.display = 'inline-block';
        }
    };