let toggle = false;
function goX() {
    location.assign("https://x.com")
}
function goInsta() {
    location.assign("https://instagram.com")
}
function goYT() {
    location.assign("https://youtube.com")
}
function goTiktok() {
    location.assign("https://tiktok.com")
}
function revealSide() {
    if (toggle) {
        $("#sidebar").animate({left: '-20%'});
    } else {
        $("#sidebar").animate({left: '0%'});
    }
    toggle = !toggle;
}
function preOrderPage() {
        $("#sidebar").animate({left: '-20%'});
}
function goAbout() {
    location.assign("about")
}
function goHome() {
    location.assign("index.html")
}