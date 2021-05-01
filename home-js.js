//tabs show and hide
$(`.o1`).on("click", () => {
    $(`.w1`).fadeIn();
    $(".w2,.w3,.w4,.w5").css("display", "none");
    $(".track").css("display", "none");
    $(`.data-container`).fadeOut();
    $(`.navigate`).fadeOut();
    $(`.header-name2`).fadeOut();

});
$(`.o2`).on("click", () => {
    $(`.w2`).fadeIn();
    $(".w1,.w3,.w4,.w5").css("display", "none");
    $(`.data-container`).fadeOut();
    $(`.navigate`).fadeOut();
    $(`.header-name2`).fadeOut();

});
$(`.o3`).on("click", () => {
    $(`.w3`).fadeIn();
    $(".w1,.w2,.w4,.w5").css("display", "none");
    $(`.data-container`).fadeOut();
    $(`.navigate`).fadeOut();
    $(`.header-name2`).fadeOut();

});
$(`.o4`).on("click", () => {
    $(`.w4`).fadeIn();
    $(".w1,.w2,.w3,.w5").css("display", "none");
    $(".track").css("display", "none");
    $(`.data-container`).fadeOut();
    $(`.navigate`).fadeOut();
    $(`.header-name2`).fadeOut();

});
$(`.fa-plus-circle`).on("click", () => {
    $(`.w5`).fadeIn();
    $(".w1,.w2,.w3,.w4").css("display", "none");
    $(`.add-action`).fadeOut();
    $(`.data-container`).fadeOut();
    $(".track").fadeOut();
    $(`.navigate`).fadeOut();
    $(`.header-name2`).fadeOut();

});

//light theme
$(`.dropdown-item1`).on("click", () => {
    $(`body`).css("background-color", "whitesmoke");
    $(`.top`).css("background-color", "#bfc7d9");
    $(`.fa-plus-circle`).css("background-color", "transparent");
    $(`.add-action`).css("background-image", 'url(chat-bubble-flipped.png)');
    $(`input`).css('background-color', 'white');
    $(`.track`).css('color', 'rgba(191, 199, 217, .7)');
    $(`.status`).css('background-color', 'whitesmoke');

});

//dark theme
$(`.dropdown-item2`).on("click", () => {
    $(`body`).css("background-color", "#626673");
    $(`.top`).css("background-color", "#047E8F");
    $(`.fa-plus-circle`).css("background-color", "#999");
    $(`.add-action`).css("background-image", 'url(dark.png)');
    $(`input`).css('background-color', '#bfc7d9');
    $(`.track`).css({
        'color': 'rgba(4, 126, 143, .75)',
        'text-shadow': '-1px 1px 0 #575757, 1px 1px 0 #535252'

    });
    $(`.status`).css('background-color', 'rgba(187, 187, 187,.7)');
})


//user data
let balance = 0
$(`#data-button`).on('click', function() {
    balance = Number($(`#account`).val());
    let user = $(`#username`).val();

    $(`#balance`).val(balance);
    $(`.header-name`).text('');
    $(`.header-name`).append(user);
})

$(`#data-button`).on('click', function() {
    $(`.data-container`).fadeOut();
    $(`#data-button`).fadeOut();
    $(`.navigate`).fadeIn();
    $(`.header-name2`).fadeOut();

    // $(`#body`).css('background-image', 'url(money.jpg)');


})

// $(`#username`).on('change', function() {
//     // setInterval(function() {
//     //     if ($(`#data-button`).css('border') === 'none') {
//     //         $(`#data-button`).css('color', 'rgba(4, 126, 143, .8)')
// })
//     //     } else {
//     //         $(`#data-button`).css('border', 'none')
//     //     }
//     // }, 500)
//     $(`#data-button`).css('color', 'rgba(4, 126, 143, .8)')
// })


//functionality
const payments = [];
const addPayment = (description, cost, date) => {
    let newPayment = {};
    newPayment.description = description;
    newPayment.cost = cost;
    newPayment.date = date;
    payments.push(newPayment);
};


//add payments to array function
// $(`#addButton`).on('click', addPayment($(`#in1`).val(), $(`#in2`).val(), $(`#in3`).val()))------ didn't work
let a, b, c;
$(`#addButton`).on('click', function() {
    a = $(`#in1`).val();
    b = Number($(`#in2`).val());
    c = $(`#in3`).val();
    addPayment(a, b, c);
});

//render list function that needs to run after every addition of removal
function renderList() {
    $(`.payment-list`).text(""); //important to keep the counting right
    for (let i = 0; i < payments.length; i++) {
        let lii = $(`<li> </li>`);
        lii.append(payments[i].description);
        lii.append(" ( ", payments[i].cost, " ) ");
        lii.append(payments[i].date);

        let bt = $(`<i class="fas fa-backspace"></i>`);
        bt.addClass("delete-btn");
        bt.on('click', function() { ///////// it didnt work with function(i),, why??
            payments.splice(i, 1);
            renderList();
            updateBalance();
        });
        lii.append(bt);

        $(`.payment-list`).append(lii);
    }
}

$(`#addButton`).on('click', function() { renderList() }); //// it doesnt work without this structure


//collect balance 
// $(`#balance`).on('change', function() {
//     myBalance = Number($('#balance').val())
// })

//update balance
let updatedBalance = 0
const updateBalance = () => {
    updatedBalance = balance + payments.reduce(function(acc, elem) {
        return acc + elem.cost
    }, 0);

    $('#balance').val(updatedBalance);
};

$(`#addButton`).on('click', function() { updateBalance() }); //// it doesnt work without this structure

//clear inputs after addition
$(`#addButton`).on('click', function() {
    $(`#in1`).val('');
    $(`#in2`).val(0);
    $(`#in3`).val('');

});

//currency
let cc = ""
$(`#currency`).on('change', function() {
    $(`#curr`).text(" ");
    let cc = $(`#currency`).val();
    $(`#curr`).append(cc);
});