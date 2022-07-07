$(".navbarSearchBtn").on("click", function() {
    $(".navbarSearchBtn").toggle("d-none");
    $(".navbarSearchInput").toggle("d-none");
    $(".navbarSearchBtnClose").toggleClass("d-none");
})

$(".navbarSearchBtnClose").on("click", function() {
    $(".navbarSearchBtnClose").toggleClass("d-none");
    $(".navbarSearchInput").toggle("d-none");
    $(".navbarSearchBtn").toggle("d-none");
})