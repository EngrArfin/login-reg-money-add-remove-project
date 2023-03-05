document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const depositAmount = depositField.value;
    console.log(depositAmount);

    //step-3 get the current deposit total
    //for non input 
    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotal = depositTotalElement.innerText;
    depositTotalElement.innerHTML = depositAmount;
    

})  

















/* function op(){
    var field2=document.getElementById("user-pass").value;
   if(field2==="arfin")
       window.location.href='bank.html';
          
    else{
        alert("invaild information")
   }
   
}  */