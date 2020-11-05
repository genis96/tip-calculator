const form = document.querySelector('#form').onchange = () => {
    let billAmt = document.querySelector('#bill-amt').value;
    let percentage = document.querySelector('#choose-percentage').value;
    let tipAmt = document.querySelector('#tip-amt');
    let totalBill = document.querySelector('#total-bill');

    if(billAmt === '' || percentage === 0) {
        alert('Required: Enter Value');
        return;
    }

    tipAmt = billAm / percentage;

}







/** PSEUDO CODE
 - Grab the html elements 
 - The number you input inside billAmt must link to the percentage chosen through the <option> value tags in html. It must collect the input inside this input tag. 
 - REQUIRED to enter number or else send alert
 - It must also do math: billAmt number * percentage = tipAmt 
 - the total math score must then link and display to the tipAmt 
 - The tipAmt must now be added to the billAmt to equal totalBill 
 - the math: billAmt + tipAmt = totalBill and it must display in the totalBill input. 


     // let billAmt = Number(document.querySelector('#bill-amt').value);

 */







