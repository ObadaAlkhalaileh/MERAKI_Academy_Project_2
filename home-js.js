const showAloneO1 = () => {
    $(`.w1`).fadeIn()
    $(".w2,.w3,.w4").css("display", "none")
}
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
})
$(`.dropdown-item2`).on("click", () => {
    $(`body`).css("background-color", "#626673")
    $(`.top`).css("background-color", "#517581")
    $(`.fa-plus-circle`).css("background-color", "#999")
})