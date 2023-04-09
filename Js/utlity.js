// step :-1 Get cast total plas Quantity
function PhontIncrementDecrement(IsitTru, InputFeildId) {
    const PhoneInputFeildElement = document.getElementById(InputFeildId);
    const PhoneInputString = PhoneInputFeildElement.value;
    const PhoneTotal = parseInt(PhoneInputString);
    let newPhon;
    if (IsitTru === true) {
        newPhon = PhoneTotal + 1;
    } else {
        newPhon = PhoneTotal - 1;
    }

    PhoneInputFeildElement.value = newPhon;
    return newPhon;
}
//get product total amount
function ProductTotalAmount(ProductTk) {
    const phoneTotalElement = document.getElementById(ProductTk);
    const phoneTotalString = phoneTotalElement.innerText;
    const phoneTotalAmount = parseInt(phoneTotalString);
    return phoneTotalAmount;
}
//Total product price
function setTextElementById(element, value) {
    const SubtotalElement = document.getElementById(element);
    SubtotalElement.innerText = value;
}

function SuMTotal() {
    const phoneTotalAmount = ProductTotalAmount('Phone_tk_Desplay');
    const caseTotalAmount = ProductTotalAmount('Phone_case_tk_Desplay');

    const totalTk = caseTotalAmount + phoneTotalAmount;
    setTextElementById('Subtotal_desplay', totalTk)

    //total tex 
    const texElementString = (totalTk * 0.1).toFixed(2);
    const taxamount = parseFloat(texElementString)
    setTextElementById('Tex_desplay', taxamount);
    //carent total amount
    const Finalamount = totalTk + taxamount;
    setTextElementById('Total_desplay', Finalamount)
}