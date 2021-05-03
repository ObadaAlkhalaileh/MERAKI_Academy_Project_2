function clickSound() {
    click.play()
}

//tabs show and hide
$(`.o1`).on("click", () => {
    $(`.w1`).fadeIn();
    $(".w2,.w3,.w4,.w5").css("display", "none");
    $(`.data-container`).fadeOut();
    $(".track").fadeOut();
    $(`.navigate`).fadeOut();
    $(`.header-name2`).fadeOut();
});
$(`.o2`).on("click", () => {
    $(`.w2`).fadeIn();
    $(".w1,.w3,.w4,.w5").css("display", "none");
    $(`.data-container`).fadeOut();
    $(".track").fadeOut();
    $(`.navigate`).fadeOut();
    $(`.header-name2`).fadeOut();
});
$(`.o3`).on("click", () => {
    $(`.w3`).fadeIn();
    $(".w1,.w2,.w4,.w5").css("display", "none");
    $(`.data-container`).fadeOut();
    $(".track").fadeOut();
    $(`.navigate`).fadeOut();
    $(`.header-name2`).fadeOut();
});
$(`.o4`).on("click", () => {
    $(`.w4`).fadeIn();
    $(".w1,.w2,.w3,.w5").css("display", "none");
    $(".track").css("display", "none");
    $(`.data-container`).fadeOut();
    $(".track").fadeOut();
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
    $(`body`).css("background-image", "url(money2.jpg)");
    $(`.top`).css("background-color", "#bfc7d9");
    $(`.side`).css("background-color", "#07A6A4");
    $(`.fa-plus-circle`).css("background-color", "whitesmoke");
    $(`.add-action`).css("background-image", 'url(chat-bubble-flipped.png)');
    $(`input`).css('background-color', 'whitesmoke');
    $(`.track`).css('background-color', '#07A6A4');
    $(`.window`).css('background-color', 'rgba(191, 199, 217, 0.75)')
    $(`.record`).css('background-color', 'whitesmoke');
    $(`.record1`).css('background-color', 'whitesmoke');
    $(`select`).css('background-color', 'whitesmoke');
    $(`.fa-plus-circle`).css("color", "#07A6A4");
    $(`#addButton`).css("background-color", "#07A6A4");
});

//dark theme
$(`.dropdown-item2`).on("click", () => {
    $(`body`).css("background-image", "url(money2dark.jpg)");
    $(`.top`).css("background-color", "#047E8F");
    $(`.side`).css("background-color", "#047E8F");
    $(`.fa-plus-circle`).css("background-color", "#bfc7d9");
    $(`.add-action`).css("background-image", 'url(dark.png)');
    $(`input`).css('background-color', '#bfc7d9');
    $(`.track`).css('background-color', '#047E8F', );
    $(`.window`).css('background-color', 'rgba(138, 138, 138, 0.6)');
    $(`.record`).css('background-color', 'rgba(138, 138, 138, 1)');
    $(`.record1`).css('background-color', 'rgba(138, 138, 138, 1)');
    $(`select`).css('background-color', '#bfc7d9');
    $(`.fa-plus-circle`).css("color", "#047E8F");
    $(`#addButton`).css("background-color", "#047E8F");
    // $(`p,span,input,div,select`).css('color', '#F29F05');
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

//trying to add blinking effect
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

//FUNCTIONALITY//

//addition to main array of objects
const transactions = [];
const addPayment = (description, cost, date, type) => {
    let newPayment = {};
    newPayment.description = description;
    newPayment.cost = cost;
    newPayment.date = date;
    newPayment.type = type;
    transactions.push(newPayment);
    filterTransactions()
        //this method devides the main transactions array into two sub-arrays (expenses,incomes)
        // while keeping the main also
        //(it may make improvements easier for future features but I still dont know)
};

//deviding main transaction array into 2 sub-arrays
let expenseItems = []
let incomeItems = []

const filterTransactions = () => {
    expenseItems = transactions.filter(function(elem) {
        return elem.type === "Expense"
    })
    incomeItems = transactions.filter(function(elem) {
        return elem.type === "Income"
    })

    //local storage update 
    localStorage.setItem('expenseItems', JSON.stringify(expenseItems))
    localStorage.setItem('incomeItems', JSON.stringify(incomeItems))
}

//local storage function to restore all the changes
window.onload = function() {
        expenseItems = JSON.parse(localStorage.getItem('expenseItems'))
        incomeItems = JSON.parse(localStorage.getItem('incomeItems'))
        renderList()
        updateBalance()
        highestExp()
    }
    //add inputs to main transactions array
    // $(`#addButton`).on('click', addPayment($(`#in1`).val(), $(`#in2`).val(), $(`#in3`).val()))------ didn't work
let a, b, c, d;
$(`#addButton`).on('click', function() {
    a = $(`#in1`).val();
    b = Number($(`#in2`).val()); //always return numbers as string so I had to use Number()
    c = $(`#in3`).val();
    d = $(`#in4`).val(); //this line may be removed in case of using the (filterTransactions) function above 
    addPayment(a, b, c, d);
});


//render list function, that needs to run after every addition of removal of payment

function renderList() {

    //all this method is based on iterating over the main transactions array and filtering types with (if)
    //this method may not be best practice for future improvements

    /*-------------------------------------------
    $(`.expense-list`).text(""); //important to keep the counting right
    $(`.income-list`).text(""); //important to keep the counting right

    for (let i = 0; i < transactions.length; i++) {

        if (transactions[i].type === 'Expense') {

            let li1 = $(`<li> </li>`);
            li1.append(transactions[i].description);
            li1.append(" ( ", transactions[i].cost, " ) ");
            li1.append(transactions[i].date);

            let bt1 = $(`<i class="fas fa-backspace"></i>`);
            bt1.addClass("delete-btn");
            bt1.on('click', function() { ///////// it didnt work with function(i),, why??
                transactions.splice(i, 1);
                renderList();
                updateBalance();
            });

            li1.append(bt1);
            $(`.expense-list`).append(li1);

        } else if (transactions[i].type === 'Income') { //used else if to prepare for future features

            let li2 = $(`<li> </li>`);
            li2.append(transactions[i].description);
            li2.append(" ( ", transactions[i].cost, " ) ");
            li2.append(transactions[i].date);

            let bt2 = $(`<i class="fas fa-backspace"></i>`);
            bt2.addClass("delete-btn");
            bt2.on('click', function() { ///////// it didnt work with function(i),, why??
                transactions.splice(i, 1);
                renderList();
                updateBalance();
            });

            li2.append(bt2);
            $(`.income-list`).append(li2);
        }
    }
    ------------------------*/

    //now this other method is based on iterating over 2 sub-arrays (expenses,incomes) seperately
    //and print each one on its specific list(it may help in future improvements and features)

    $(`.expense-list`).text(""); //important to not copy on another copy
    $(`.income-list`).text(""); //important to not copy on another copy

    expenseItems.forEach(function(elem, i) {
        let li1 = $(`<li> </li>`);
        li1.append(elem.description);
        li1.append(" ( ", elem.cost, " ) ");
        li1.append(elem.date);

        let bt1 = $(`<i class="fas fa-backspace"></i>`);
        bt1.addClass("delete-btn");
        bt1.on('click', function() { ///////// it didnt work with function(i),, why??
            expenseItems.splice(i, 1);
            renderList();
            updateBalance();
            highestExp();
        });
        li1.append(bt1);
        $(`.expense-list`).append(li1);
    })
    incomeItems.forEach(function(elem, i) {
            let li2 = $(`<li> </li>`);
            li2.append(elem.description);
            li2.append(" ( ", elem.cost, " ) ");
            li2.append(elem.date);

            let bt2 = $(`<i class="fas fa-backspace"></i>`);
            bt2.addClass("delete-btn");
            bt2.on('click', function() { ///////// it didnt work with function(i),, why??
                incomeItems.splice(i, 1);
                renderList();
                updateBalance();
                highestExp();
            });
            li2.append(bt2);
            $(`.income-list`).append(li2);
        })
        //any undefined transaction type will not be shown on lists
}
$(`#addButton`).on('click', function() { renderList() }); //// it doesnt work without this structure


//update balance
let updatedBalance = 0
let totalExpense = 0
let totalIncome = 0
const updateBalance = () => {
    /*
        //this method uses the main transaction array directly without deviding it into
        // two sub-arrays(expenses,incomes)

        transactions.forEach(function(elem) {
            if (elem.type === "Expense") {
                totalExpense = totalExpense + elem.cost
            }
            if (elem.type === "Income") {
                totalIncome = totalIncome + elem.cost
            }
        })*/


    //this methods calculate sum of the two sub-arrays(expenses,income) which I filtered already using ( filterTransactions) func
    //any undefined transaction type will not be counted in balance

    totalExpense = expenseItems.reduce(function(acc, elem) {
        return acc + elem.cost
    }, 0)
    totalIncome = incomeItems.reduce(function(acc, elem) {
            return acc + elem.cost
        }, 0)
        // console.log('updatedBalance=' +
        //     updatedBalance)
        // console.log('totalExpense=' +
        //     totalExpense)
        // console.log('totalIncome=' +
        //     totalIncome)

    updatedBalance = balance - totalExpense + totalIncome;
    $('#balance').val(updatedBalance);

    //important to keep the right updated balance each time
    //(prevent the accumalation of updated balances)
    updatedBalance = 0;
    totalExpense = 0;
    totalIncome = 0;
};

$(`#addButton`).on('click', function() { updateBalance() }); //// it doesnt work without this structure

//clear inputs after addition
$(`#addButton`).on('click', function() {
    $(`#in1`).val('');
    $(`#in2`).val('');
    $(`#in3`).val('');
});

//currency
let cc = ""
$(`#currency`).on('change', function() {
    $(`#curr`).text(" ");
    let cc = $(`#currency`).val();
    $(`#curr`).append(cc);
});

//highest Expense

const highestExp = () => {
    let max = Number.NEGATIVE_INFINITY //had to use them inside the function to reset the values everytime I invoke this function by delete-btn
    let maxIndex = 0

    expenseItems.forEach(function(elem, i) {
        if (elem.cost >= max) {
            max = elem.cost
            maxIndex = i
        }
    })
    console.log('max=' + max)
    console.log('maxIndex=' + maxIndex)
    $(`.max-list`).text('') // to keep list clean and unrepeated with repeating execution

    let li1 = $(`<li> </li>`)
    let li2 = $(`<li> </li>`)
    let li3 = $(`<li> </li>`)

    li1.append(expenseItems[maxIndex].description)
    li2.append(expenseItems[maxIndex].cost)
    li3.append(expenseItems[maxIndex].date)

    $(`.max-list`).append(li1, li2, li3)

};

$(`#addButton`).on('click', function() { highestExp() }); //// it doesnt work without this structure