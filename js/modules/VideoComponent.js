export default {
    name: "Video",

    props: ["work"],

    template: 
    `<div class="video-player">
        <p class="info_toggle" @mouseover="showInfo" @mouseleave="hideInfo" >Hover over here to view project info.</p>
        <video :src="work.source" controls></video>
        <div class="work_info">
            <h3 class="work_title">{{work.title}}</h3>
            <p class="work_description">{{work.description}}</p>
        </div>
    </div>`,
    
    methods: {
        showInfo() {
            document.querySelector(".work_info").style.opacity = "1";
            document.querySelector(".work_info").style.zIndex = "100";
        },
        hideInfo() {
            document.querySelector(".work_info").style.opacity = "0";
            document.querySelector(".work_info").style.zIndex = "99";
        }

    }
}