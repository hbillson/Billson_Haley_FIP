import Video from "./VideoComponent.js";
import Graphic from "./ImageComponent.js";

export default {
    name: "Lightbox",

    props: ["work", "mediatype"],

    template: 
    `<div>
        <span class="lb-close" @click="closelb">x</span>
        <component :is="currentComponent" :work="work"></component>
    </div>`,

    created: function () {
        console.log(`created ${this.work.title}`);
    },

    computed: {
        currentComponent: function() {
            return this.mediatype;
        }
    },

    components: {
        Video, 
        Graphic
    },

    methods: {
        closelb() {
            debugger;
            document.querySelector('.lightbox').style.display="none";
        }
    }

    }