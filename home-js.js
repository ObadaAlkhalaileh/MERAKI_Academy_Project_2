$(`.o1`).on("click", () => {
    $(`.w1`).fadeIn()
    $(".w2,.w3,.w4,.w5").css("display", "none")
})
$(`.o2`).on("click", () => {
    $(`.w2`).fadeIn()
    $(".w1,.w3,.w4,.w5").css("display", "none")
})
$(`.o3`).on("click", () => {
    $(`.w3`).fadeIn()
    $(".w1,.w2,.w4,.w5").css("display", "none")
})
$(`.o4`).on("click", () => {
    $(`.w4`).fadeIn()
    $(".w1,.w2,.w3,.w5").css("display", "none")
})
$(`.fa-plus-circle`).on("click", () => {
    $(`.w5`).fadeIn()
    $(".w1,.w2,.w3,.w4").css("display", "none")
    $(`.add-action`).fadeOut()
})

//light theme
$(`.dropdown-item1`).on("click", () => {
    $(`body`).css("background-color", "white")
    $(`.top`).css("background-color", "#bfc7d9")
    $(`.fa-plus-circle`).css("background-color", "transparent")
    $(`.add-action`).css("background-image", 'url(chat-bubble-flipped.png)')
    $(`input`).css('background-color', 'white')
    $(`.track`).css('color', 'rgba(81, 117, 129, 0.65)')
})

//dark theme
$(`.dropdown-item2`).on("click", () => {
    $(`body`).css("background-color", "#626673")
    $(`.top`).css("background-color", "#517581")
    $(`.fa-plus-circle`).css("background-color", "#999")
    $(`.add-action`).css("background-image", 'url(dark.png)')
    $(`input`).css('background-color', 'rgba(187, 187, 187,1)')
    $(`.track`).css('color', 'rgba(191, 199, 217, .5)')
})
const payments = []
const addPayment = (description, value, date) => {
    let newPayment = {}
    newPayment.description = description
    newPayment.value = value
    newPayment.date = date
    return payments.push(newPayment)
}