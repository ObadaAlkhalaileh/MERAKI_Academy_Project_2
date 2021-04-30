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