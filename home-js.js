$(`.o1`).on("click", () => {
    $(`.w1`).fadeIn()
    $(".w2,.w3,.w4").css("display", "none")
})
const showAloneO2 = () => {
    $(`.w2`).fadeIn()
    $(".w1,.w3,.w4").css("display", "none")
}
const showAloneO3 = () => {
    $(`.w3`).fadeIn()
    $(".w1,.w2,.w4").css("display", "none")
}
const showAloneO4 = () => {
    $(`.w4`).fadeIn()
    $(".w1,.w2,.w3").css("display", "none")
}
const addButton = () => {
    $(`.add-action`).fadeOut()
}

$(`.dropdown-item1`).on("click", () => {
    $(`body`).css("background-color", "white")
    $(`.top`).css("background-color", "#bfc7d9")
    $(`.fa-plus-circle`).css("background-color", "transparent")
    $(`.add-action`).css("background-image", 'url(chat-bubble-flipped.png)')
    $(`#balance`).css('background-color', 'white')
})
$(`.dropdown-item2`).on("click", () => {
    $(`body`).css("background-color", "#626673")
    $(`.top`).css("background-color", "#517581")
    $(`.fa-plus-circle`).css("background-color", "#999")
    $(`.add-action`).css("background-image", 'url(dark.png)')
    $(`#balance`).css('background-color', '#999')
})