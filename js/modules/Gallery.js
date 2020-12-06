export default {
    name: "Gallery",

    props: ["work"],


    template: 
    `<div class="thumb" @click="loadMediaComponent">
        <img  class="work_img" :src="work.smaller_img">
    </div>`,

    methods: {
        loadMediaComponent(event) {
            debugger;
            this.$emit("setmediatype", this.work);
        }
    }
    }