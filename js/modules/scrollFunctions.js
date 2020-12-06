
function scrollDown() {
    debugger;
    console.log(this.id);
    let anchor = this.id.split("_")[0];
    let anchorID = `.${anchor}`;
    let scroll_element = document.querySelector(`${anchorID}`);
    console.log(scroll_element);
    scroll_element.scrollIntoView({behavior:'smooth', block: 'start'});
}

function stickyNav () {
    var navBar = document.getElementById("mainNav");
    var stickyPos = navBar.offsetTop;
    let aboutBox = document.querySelector(".about");
    if (window.pageYOffset > stickyPos) {
        navBar.classList.add("sticky");
        aboutBox.setAttribute("style", "margin-top:10vh");
    } else {
        navBar.classList.remove("sticky");
        aboutBox.removeAttribute("style", "margin-top:10vh");
    }
}


export { scrollDown, stickyNav };
