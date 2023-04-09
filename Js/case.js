function UpdatePriceTotal(newPhon) {
    const CaseTotalPrice = newPhon * 59;
    const CaseDesplay = document.getElementById('Phone_case_tk_Desplay');
    CaseDesplay.innerText = CaseTotalPrice;
}



document.getElementById('Case_Plus_Btn').addEventListener('click', function () {
    // step :-1 Get cast total plas Quantity
    const newPhon = PhontIncrementDecrement(true, 'case_total');
    //Step 2 Get Desplay Amount  and Calcuit and set new Amount

    UpdatePriceTotal(newPhon);
    //Total product price
    SuMTotal()


})
document.getElementById('Case_mainus_btn').addEventListener('click', function () {
    // step :-1 Get cast total  Quantity

    const newPhon = PhontIncrementDecrement(false, 'case_total');
    //Step 2 Get Desplay Amount  and Calcuit and set new Amount
    UpdatePriceTotal(newPhon);
    //Total product price
    SuMTotal()
})