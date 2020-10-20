// main js file

(() => {

    //variables up here

    let scrollButtons = document.querySelectorAll(".button_link");
    var navBar = document.getElementById("mainNav");
    var stickyPos = navBar.offsetTop;

function scrollDown() {
    debugger;
    console.log(this.id);
    let anchor = this.id.split("_")[0];
    console.log(anchor);

    let anchorID = `.${anchor}`;
    console.log(anchorID);
    let scroll_element = document.querySelector(`${anchorID}`);
    //console.log(scroll_element);
    scroll_element.scrollIntoView({behavior:'smooth'});

}

function stickyNav () {
    debugger;
    console.log("scrolling!");
    console.log(window.pageYOffset);
    console.log(stickyPos);
    if (window.pageYOffset > stickyPos) {
        navBar.classList.add("sticky");
    } else {
        navBar.classList.remove("sticky");
    }
}

// what the AJAX will look like when i have a server?

    //let myReq = newXMLHttpRequest;
    //myReq.open('GET', '../DataSet.json');

    //myReq.send();

    //function handleRequest() {
     //   if (myReq.readyState == XMLHttpRequest.DONE) {
    //       if (myReq.status === 200) {
    //           handleDataSet(myReq.responseText) 
    //       } else {
    //          console.error(`${myReq.status}: broken!`);
    //       }
    //   } else {
    //       console.log(`Request state: ${myReq.readyState}. Still processing...`)
    //    }
    // }

    // AJAX for my WORK information pop-up here 



// things that call the function down here

window.addEventListener("scroll", stickyNav);
scrollButtons.forEach(button =>button.addEventListener("click", scrollDown))
})();