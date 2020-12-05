// main js file

(() => {

    //variables up here

    let scrollButtons = document.querySelectorAll(".button_link");
    let navButtons = document.querySelectorAll(".nav_link")
    var navBar = document.getElementById("mainNav");
    let mainLogo = document.querySelector(".logo_image");
    var stickyPos = navBar.offsetTop;
    let thumbnails = document.querySelectorAll(".thumbnail");

function scrollDown() {
    debugger;
    console.log(this.id);
    let anchor = this.id.split("_")[0];
    let anchorID = `.${anchor}`;
    let scroll_element = document.querySelector(`${anchorID}`);
    //console.log(scroll_element);
    scroll_element.scrollIntoView({behavior:'smooth', block: 'start'});

}

function stickyNav () {
    let aboutBox = document.querySelector(".about");
    if (window.pageYOffset > stickyPos) {
        navBar.classList.add("sticky");
        aboutBox.setAttribute("style", "margin-top:10vh");
    } else {
        navBar.classList.remove("sticky");
        aboutBox.removeAttribute("style", "margin-top:10vh");

    }
}

function openPopup() {
    debugger;
    let popup_window = document.getElementById('popup');
    console.log(popup_window);
    popup_window.classList.remove("hidden");
    console.log(popup_window.classList);

}

window.addEventListener("scroll", stickyNav);
mainLogo.addEventListener("click", scrollDown);
thumbnails.forEach(thumb => thumb.addEventListener("click", openPopup))
scrollButtons.forEach(button =>button.addEventListener("click", scrollDown))
navButtons.forEach(nav => nav.addEventListener("click", scrollDown))
})();