import { fetchData } from "./modules/DataMiner.js";
import Lightbox from "./modules/Lightbox.js";
import Gallery from "./modules/Gallery.js";
import { scrollDown } from "./modules/scrollFunctions.js";
import { stickyNav } from "./modules/scrollFunctions.js";


(() => {

    let vue_info = new Vue({

        //el: "#app",

        data: {
            works: [],
            currentWork: {},
            mediaType: "",
            isShowing: false
        },
            created: function() {
                window.addEventListener("scroll", stickyNav);
             },

            mounted: function() {
                let scrollButtons = document.querySelectorAll(".button_link");
                let navButtons = document.querySelectorAll(".nav_link");
                let mainLogo = document.querySelector(".logo_image");

                mainLogo.addEventListener("click", scrollDown);
                scrollButtons.forEach(button =>button.addEventListener("click", scrollDown));
                navButtons.forEach(nav => nav.addEventListener("click", scrollDown));

            console.log("Vue is mounted, trying a fetch for the initial data");
            
            fetchData("./includes/index.php")
                .then(data => {
                    this.works = data;
                })
                .catch(err => console.error(err));

        },

        // run a method when we change our view (update the DOM with Vue)
        updated: function() {

        },

        methods: {
            setComponent(work) {
                debugger;
                this.mediaType = work.mediatype;
                this.currentWork = work;

                document.querySelector(".lightbox").style.display = "block";
                var y = window.scrollY;
                console.log(y);
                document.querySelector(".lightbox").style.top = `${y}px`;
            }
            },

        components: {
            "lightbox": Lightbox,
            "gallery" : Gallery
        }
    })
    .$mount("#app"); // also connects Vue to your wrapper in HTML
 

})();