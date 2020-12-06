export default {
    name: "Carousel",

    props: ["work"],

    template: 
    `<div @click="loadMediaComponent">
        <img  class="work_img" :src="work.smaller_img">
    </div>`,

    created: function () {
        console.log(`created ${this.work.title}`);
    },

    methods: {
        loadMediaComponent(event) {
            debugger;
            this.$emit("setmediatype", this.work);
        }
    }
    }