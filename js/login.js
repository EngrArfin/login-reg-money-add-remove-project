
//stp-1: add click even handeler with the submit button 
//console.log('login jas file')

document.getElementById('btn-submit').addEventListener('click', function(){
    //stp:2 get the email
    //always remainder from the input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    

    //step:3 get pass
    const passwordField = document.getElementById('user-pass');
    const password = passwordField.value;
    //console.log(email, password);

    //verify email pass
    if(email === 'arfin.cse.green.edu.bd@gmail.com' && password === 'arfin'){
        console.log('valid user')
    }
    else{
        console.log('invalid user')
    }
})