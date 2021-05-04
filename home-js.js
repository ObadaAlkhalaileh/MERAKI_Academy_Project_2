function clickSound() {
    click.play()
}

//tabs show and hide
const o1 = () => {
    $(`.w1`).fadeIn();
    $(".w2,.w3,.w4,.w5").css("display", "none");
    $(`.data-container`).fadeOut();
    $(".track").fadeOut();
    $(`.navigate`).fadeOut();
    $(`.header-name2`).fadeOut();
    localStorage.setItem('page', 1)
}
$(`.o1`).on("click", () => { o1() });

const o2 = () => {
    $(`.w2`).fadeIn();
    $(".w1,.w3,.w4,.w5").css("display", "none");
    $(`.data-container`).fadeOut();
    $(".track").fadeOut();
    $(`.navigate`).fadeOut();
    $(`.header-name2`).fadeOut();
    localStorage.setItem('page', 2)
}
$(`.o2`).on("click", () => { o2() });

const o3 = () => {
    $(`.w3`).fadeIn();
    $(".w1,.w2,.w4,.w5").css("display", "none");
    $(`.data-container`).fadeOut();
    $(".track").fadeOut();
    $(`.navigate`).fadeOut();
    $(`.header-name2`).fadeOut();
    localStorage.setItem('page', 3)
}
$(`.o3`).on("click", () => { o3() });

const o4 = () => {
    $(`.w4`).fadeIn();
    $(".w1,.w2,.w3,.w5").css("display", "none");
    $(".track").css("display", "none");
    $(`.data-container`).fadeOut();
    $(".track").fadeOut();
    $(`.navigate`).fadeOut();
    $(`.header-name2`).fadeOut();
    localStorage.setItem('page', 4)
}
$(`.o4`).on("click", () => { o4() });

const o5 = () => {
    $(`.w5`).fadeIn();
    $(".w1,.w2,.w3,.w4").css("display", "none");
    $(`.add-action`).fadeOut();
    $(`.data-container`).fadeOut();
    $(".track").fadeOut();
    $(`.navigate`).fadeOut();
    $(`.header-name2`).fadeOut();
    localStorage.setItem('page', 5)
}
$(`.fa-plus-circle`).on("click", () => { o5() });

//light theme
const lightTheme = () => {
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
    $(`.max-div`).css('background-color', 'whitesmoke');
    localStorage.setItem('theme', 'light')

}

$(`.dropdown-item1`).on("click", () => { lightTheme() });

//dark theme
const darkTheme = () => {
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
    $(`.max-div`).css('background-color', 'rgba(138, 138, 138, 0.6)');
    localStorage.setItem('theme', 'dark')
}

$(`.dropdown-item2`).on("click", () => { darkTheme() })

//user data
let balance = 0
$(`#data-button`).on('click', function() {
    balance = Number($(`#account`).val());
    let user = $(`#username`).val();

    localStorage.setItem('user', user)
    localStorage.setItem('balance', balance)

    $(`#balance`).val(balance);
    // $(`.header-name`).text('');
    $(`.header-name`).append(user);
})
$(`#data-button`).on('click', function() {
    $(`.data-container`).fadeOut();
    $(`#data-button`).fadeOut();
    $(`.navigate`).fadeIn();
    $(`.header-name2`).fadeOut();
    // $(`#body`).css('background-image', 'url(money.jpg)');
})


//FUNCTIONALITY//

//addition to main array of objects
let transactions = [];
const addPayment = (description, cost, date, type) => {

    let newPayment = {};
    newPayment.description = description;
    newPayment.cost = cost;
    newPayment.date = date;
    newPayment.type = type;
    transactions.push(newPayment);
    filterTransactions()
        //first step in local storage work
    localStorage.setItem('transactions', JSON.stringify(transactions)) //here I store the transactions array as soon I created it
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

        // //local storage update (first step)
        // localStorage.setItem('expenseItems', JSON.stringify(expenseItems)) //and here I store the two sub arrays also as soon as they are created
        // localStorage.setItem('incomeItems', JSON.stringify(incomeItems)) //and here I store the two sub arrays also as soon as they are created


    }
    //HERE YOU MUST START RESTORING
    //on refresh event listener ..function to restore all the changes by local storage 
window.onload = function() {
    //to restore username and balance
    balance = JSON.parse(localStorage.getItem('balance'))
    user = localStorage.getItem('user')

    $(`#balance`).val(balance);
    $(`.header-name`).append(user);

    if (!(!localStorage.getItem('transactions') === true)) { // this condittion was added in case the user refresh before adding anything
        //veery important THE PROCEDURE OF RESTORING MY SETTINGS// evey function that controls values and results on screen is executed
        transactions = JSON.parse(localStorage.getItem('transactions')) // here is the start point of restoring results after refresh(((oonly with condition)))
        filterTransactions()
        renderList()
        updateBalance()
        highestExp()
    }

    //to restore theme selection
    if (localStorage.getItem('theme') === 'dark') {
        darkTheme()
    } else { lightTheme() }
    //to restore currency 
    if (!(!localStorage.getItem('curr') === true)) {
        cc = localStorage.getItem('curr')
        $(`#curr`).append(cc);
    }

    //to restore window
    if (localStorage.getItem('page') === '1') { o1() }
    if (localStorage.getItem('page') === '2') { o2() }
    if (localStorage.getItem('page') === '3') { o3() }
    if (localStorage.getItem('page') === '4') { o4() }
    if (localStorage.getItem('page') === '5') { o5() }

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
    console.log(expenseItems)
    console.log(incomeItems)
        //all this method is based on iterating over the main transactions array and filtering types with (if)
        //this method may not be best practice for future improvements
        //طلعت هي البيست براكتيس بالاخر مع اللوكال ستوريج هههههه

    //-------------------------------------------
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
                filterTransactions()
                renderList();
                updateBalance();
                highestExp();

                localStorage.setItem('transactions', JSON.stringify(transactions)) //we need to update the local storage
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
                filterTransactions()
                renderList();
                updateBalance();
                highestExp();

                localStorage.setItem('transactions', JSON.stringify(transactions)) //we need to update the local storage
            });
            li2.append(bt2);
            $(`.income-list`).append(li2);
        }
    }
}
//------------------------
//last update (5-4-2021) not best practice for local storage(we need to deal with main array)
//now this other method is based on iterating over 2 sub-arrays (expenses,incomes) seperately
//and print each one on its specific list(it may help in future improvements and features)
/*
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
            //need to apply the changes on local storage also
            localStorage.setItem('expenseItems', JSON.stringify(expenseItems))
            localStorage.setItem('incomeItems', JSON.stringify(incomeItems))
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
                //need to apply the changes on local storage also
                localStorage.setItem('expenseItems', JSON.stringify(expenseItems))
                localStorage.setItem('incomeItems', JSON.stringify(incomeItems))
            });
            li2.append(bt2);
            $(`.income-list`).append(li2);
        })
        //any undefined transaction type will not be shown on lists
}
*/
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
const currSwitch = () => {
    $(`#curr`).text(" ");
    cc = $(`#currency`).val();
    $(`#curr`).append(cc);
    localStorage.setItem('curr', cc)
}
$(`#currency`).on('change', function() { currSwitch() });


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

    // console.log('max=' + max)
    // console.log('maxIndex=' + maxIndex)
    $(`.max-list`).text('') // to keep list clean and unrepeated with repeating execution

    let li1 = $(`<li> </li>`)
    let li2 = $(`<li> </li>`)
    let li3 = $(`<li> </li>`)
    if (!(!expenseItems[maxIndex] === true)) {
        //this condition was added for the case of removing the last item from the expense list
        li1.append(expenseItems[maxIndex].description)
        li2.append(expenseItems[maxIndex].cost)
        li3.append(expenseItems[maxIndex].date)

        $(`.max-list`).append(li1, li2, li3)
    }
};

$(`#addButton`).on('click', function() { highestExp() }); //// it doesnt work without this structure

//reset button to clear local storage
$(`#reset`).on('click', function() {
    localStorage.removeItem('transactions');
    localStorage.removeItem('balance');
    localStorage.removeItem('user');
    localStorage.removeItem('curr');
    localStorage.removeItem('theme');
    localStorage.removeItem('page');

    location.reload();
});