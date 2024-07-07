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
    location.assign("change-logs-v.0.0.1.html")
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
document.addEventListener("DOMContentLoaded", () => {
    const headerHTML = `
    <div class="header" id="gradientheader">
    <div id="headercontents">
    <button id="selectorbutton" class="buttons selector" onclick="revealSide()"><img width="100%" src="Images/Header/SidebarToggle.png"></button>
    <img width="50%" height="100%" src="Images/Header/TheNewGalaxyHeader4KNoBG.png">
    <button class="preorder buttons" onclick="preOrderPage()"><img width="100%" src="Images/Header/PreOrderNoBG.png"></button>
</div></div>
<!--HEADER ABOVE-->
<!--SIDEBAR BELOW-->
<div id="sidebar" style="background-color: #3e3e3e; width:20%; height:100vh; position:fixed; left:-20%;">
    <img width="100%" src="Images/Sidebar/TNGHeader.png">
    <button class="buttons sidebar" onclick="goHome()"><img width="100%" src="Images/Sidebar/HOME.png"></button>
    <button class="buttons sidebar" onclick="goTheLore()"><img width="100%" src="Images/Sidebar/THELORE.png"></button>
    <button class="buttons sidebar" onclick="goCharacters()"><img width="100%" src="Images/Sidebar/CHARACTERS.png"></button>
    <button class="buttons sidebar" onclick="goChangeLogs()"><img width="100%" src="Images/Sidebar/CHANGELOGS.png"></button>
    <button class="buttons sidebar" onclick="goMultiplayer()"><img width="100%" src="Images/Sidebar/MULTIPLAYER.png"></button>
    <button class="buttons sidebar" onclick="goAbout()"><img width="100%" src="Images/Sidebar/ABOUT.png"></button>
    <button class="buttons sidebar" onclick="goSupport()"><img width="100%" src="Images/Sidebar/SUPPORT.png"></button>
</div>
<!--SIDEBAR ABOVE-->
    `;
    const footerHTML = `
    <!--GRADIENT DIVISOR BETWEEN PAGE & FOOTER (BELOW)-->
    <div id="divisor"; style="height:2vh; background: linear-gradient(to bottom, #484848 0%, #000000 100%);"></div>
    <!--GRADIENT DIVISOR BETWEEN PAGE & FOOTER (ABOVE)-->
        <!--FOOTER BELOW-->
        <div id="footer">
        <img style="width:50%" class="footerbuttonsimage" src="Images/Footer/COPYRIGHT.png">
        <div style="height: 2vh"></div>
        <div id="CompanyPegi">
        <img id="cgslogo" class="cpsline" style="float:left; width:10%; height:10%;" src="Images/Footer/CGSLogo.png">
        <img id="footerpegi" class="cpsline" width="20%" height="100%" src="Images/Footer/Pegi.png">
        <button class="buttons socials" onclick="goX()"><img width="100%" class="cpsline" src="Images/Footer/XLogo.png"></button>
        <button class="buttons socials" onclick="goInsta()"><img width="100%" class="cpsline" src="Images/Footer/InstagramLOGO.png"></button>
        <button class="buttons socials" onclick="goYT()"><img width="100%" class="cpsline" src="Images/Footer/YouTubeLOGO.png"></button>
        <button class="buttons socials" onclick="goTikTok()"><img width="100%" class="cpsline" src="Images/Footer/TikTokLOGO.png"></button>
        </div>
        <div style="height: 2vh"></div>
        <div style="height: 100%; width: 80%" id="footermisc">
            <button class="buttons footerbuttons" onclick="tosPage()"><img type="image" class="footerbuttonsimage" src="Images/Footer/TOS.png"></button>
            <button class="buttons footerbuttons" onclick="ppPage()"><img type="image" class="footerbuttonsimage" src="Images/Footer/PP.png"></button>
            <button class="buttons footerbuttons" onclick="ciPage()"><img type="image" class="footerbuttonsimage" src="Images/Footer/CI.png"></button>
            <button class="buttons footerbuttons" onclick="eulaPage()"><img type="image" class="footerbuttonsimage" src="Images/Footer/EULA.png"></button>
            <button class="buttons footerbuttons" onclick="ePage()"><img type="image" class="footerbuttonsimage" src="Images/Footer/E.png"></button>
            <button class="buttons footerbuttons" onclick="fPage()"><img type="image" class="footerbuttonsimage" src="Images/Footer/F.png"></button>
        </div>
        <div style="height: 2vh"></div>
    </div>
    `;
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    document.body.insertAdjacentHTML('beforeend', footerHTML);
});