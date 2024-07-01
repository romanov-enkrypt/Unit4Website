let toggle = false;
/* SOCIALS FUNCTION */
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

/* SIDEBAR FUNCTION */
function goHome() {
    location.assign("index.html")
}
function goTheLore() {
    location.assign("the-lore.html")
}
function goCharacters() {
    location.assign("characters.html")
}
function goChangeLogs(){
    location.assign("change-logs.html")
}
function goMultiplayer() {
    location.assign("multiplayer.html")
}
function goAbout() {
    location.assign("about.html")
}
function goSupport() {
    location.assign("support.html")
}

/* FOOTER FUNCTION */
function tosPage(){
    location.assign("terms-of-service.html")
}
function ppPage(){
    location.assign("privacy-policy.html")
}
function ciPage(){
    location.assign("company-information.html")
}
function eulaPage(){
    location.assign("eula.html")
}
function ePage(){
    location.assign("enquiries.html")
}
function fPage(){
    location.assign("forums.html")
}