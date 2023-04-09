//Step 2 Get Desplay Amount  and Calcuit and set new Amount
function updatephonePriceNew(newPhonMK) {
    const TotalPrice = newPhonMK * 1219
    const PhoneDesplay = document.getElementById('Phone_tk_Desplay')
    PhoneDesplay.innerText = TotalPrice

}


document.getElementById('Phone_plus_Btn').addEventListener('click', function () {
    // seep:-1 Get Increment and Decrement Phones 
    const newPhonMK = PhontIncrementDecrement(true, 'Phone_total_input_feilr');
    //Step 2 Get Desplay Amount  and Calcuit and set new Amount

    updatephonePriceNew(newPhonMK);
    //step 3 Get phone total amount 
    //Total product price
    SuMTotal()






})
document.getElementById('phone_minus_btn').addEventListener('click', function () {
    // seep:-1 Get Increment and Decrement Phones 
    const newPhonMK = PhontIncrementDecrement(false, 'Phone_total_input_feilr')
    //Step 2 Get Desplay Amount  and Calcuit and set new Amount
    updatephonePriceNew(newPhonMK)

    //step 3 Total product price
    SuMTotal()



})