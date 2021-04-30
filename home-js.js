//tabs show and hide
$(`.o1`).on("click", () => {
    $(`.w1`).fadeIn();
    $(".w2,.w3,.w4,.w5").css("display", "none");
    $(".track").css("display", "none");

});
$(`.o2`).on("click", () => {
    $(`.w2`).fadeIn();
    $(".w1,.w3,.w4,.w5").css("display", "none");

});
$(`.o3`).on("click", () => {
    $(`.w3`).fadeIn();
    $(".w1,.w2,.w4,.w5").css("display", "none");
});
$(`.o4`).on("click", () => {
    $(`.w4`).fadeIn();
    $(".w1,.w2,.w3,.w5").css("display", "none");
});
$(`.fa-plus-circle`).on("click", () => {
    $(`.w5`).fadeIn();
    $(".w1,.w2,.w3,.w4").css("display", "none");
    $(`.add-action`).fadeOut();
    $(".track").css("transform", "translateY(-250px)");

});

//light theme
$(`.dropdown-item1`).on("click", () => {
    $(`body`).css("background-color", "whitesmoke")
    $(`.top`).css("background-color", "#bfc7d9")
    $(`.fa-plus-circle`).css("background-color", "transparent")
    $(`.add-action`).css("background-image", 'url(chat-bubble-flipped.png)')
    $(`input`).css('background-color', 'white')
    $(`.track`).css('color', 'rgba(81, 117, 129, 0.65)')
    $(`.status`).css('background-color', 'whitesmoke')

})

//dark theme
$(`.dropdown-item2`).on("click", () => {
    $(`body`).css("background-color", "#626673")
    $(`.top`).css("background-color", "#517581")
    $(`.fa-plus-circle`).css("background-color", "#999")
    $(`.add-action`).css("background-image", 'url(dark.png)')
    $(`input`).css('background-color', 'rgba(187, 187, 187,1)')
    $(`.track`).css('color', 'rgba(191, 199, 217, .5)')
    $(`.status`).css('background-color', 'rgba(187, 187, 187,.5)')
})

//functionality


const payments = []
const addPayment = (description, cost, date) => {
    let newPayment = {}
    newPayment.description = description
    newPayment.cost = cost
    newPayment.date = date
    payments.push(newPayment)
}


//add payments to array function
// $(`#addButton`).on('click', addPayment($(`#in1`).val(), $(`#in2`).val(), $(`#in3`).val()))------ didn't work
let a, b, c;
$(`#addButton`).on('click', function() {
    a = $(`#in1`).val()
    b = Number($(`#in2`).val())
    c = $(`#in3`).val()
    addPayment(a, b, c)
})

//render list function that needs to run after every addition of removal
function renderList() {
    $(`.payment-list`).text("") //important to keep the counting right
    for (let i = 0; i < payments.length; i++) {
        let lii = $(`<li> </li>`)
        lii.append(payments[i].description)
        lii.append(" ( ", payments[i].cost, " ) ")
        lii.append(payments[i].date)

        let bt = $(`<button>delete</button>`)

        bt.on('click', function() { ///////// it didnt work with function(i),, why??
            payments.splice(i, 1)
            renderList()
        })
        lii.append(bt)

        $(`.payment-list`).append(lii)
    }
}

$(`#addButton`).on('click', function() { renderList() }) //// it doesnt work without this structure


//collect balance 
let myBalance = 0
$(`#balance`).on('change', function() {
    myBalance = Number($('#balance').val())
})

//update balance
let updatedBalance = 0
$(`#addButton`).on('click', function() {
    // updatedBalance = myBalance + Number($('#in2').val())
    updatedBalance = myBalance + payments.reduce(function(acc, elem) {
        return acc + elem.cost
    }, 0)

    $('#balance').val(updatedBalance)
})

//currency
let cc = ""
$(`#currency`).on('change', function() {
    $(`#curr`).text(" ")
    let cc = $(`#currency`).val()
    $(`#curr`).append(cc)
})