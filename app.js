let form = document.querySelector('#form').onchange = () => {
    let billAmt = Number(document.querySelector('#bill-amt').value);
    let percentage = document.querySelector('#choose-percentage').value;
    let tipAmt = Number(document.querySelector('#tip-amt').innerHTML);
    let totalBill = Number(document.querySelector('#total-bill').value);
    
    function writeInputs() {
    // document.getElementById('results').style.display='block'
    // tipAmt = billAmt * (percentage/100);
    // totalBill = (tipAmt + billAmt);
    // let bill = Number(document.querySelector('#bill-amt').value);
    let tip = billAmt * (percentage/100);
    let total = tip + billAmt;

    tipAmt.textContent = "$"+(tip).toFixed(2);
    totalBill.textContent = "$"+(total).toFixed(2);

    }

    if(billAmt === '' || percentage === 0) {
        alert('Required: Enter Value'); 
        return;
    }

    writeInputs();
    console.log(billAmt + tip);
    console.log(tip);
    // console.log(billAmt + tipAmt); 
    // console.log(tipAmt); 
}






/** PSEUDO CODE
 - Grab the html elements 
 - The number you input inside billAmt must link to the percentage chosen through the <option> value tags in html. It must collect the input inside this input tag. 
 - REQUIRED to enter number or else send alert
 - It must also do math: billAmt number * percentage = tipAmt 
 - the total tipAmt score must then link and display to the tipAmt input
 - The tipAmt must now be added to the billAmt to equal totalBill 
 - the math: billAmt + tipAmt = totalBill and it must display in the totalBill input. 


     // let billAmt = Number(document.querySelector('#bill-amt').value);

 */







