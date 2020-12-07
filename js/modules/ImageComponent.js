export default {
    name: "Graphic",

    props: ["work"],

    template: 
    `<div class="image-viewer">
        <div class="left_arrow">◀</div>
        <div class="right_arrow">▶</div>
        <p class="info_toggle" @mouseover="showInfo" @mouseleave="hideInfo" >Hover over here to view project info.</p>
        <img :src="work.source">
        <div class="work_info">
            <h3 class="work_title">{{work.title}}</h3>
            <p class="work_description">{{work.description}}</p>
            <p class="work_date">Worked on in {{work.date}}.</p>
        </div>
    </div>`,

    methods: {
        showInfo() {
            document.querySelector(".work_info").style.opacity = "1";
        },
        hideInfo() {
            document.querySelector(".work_info").style.opacity = "0";
        }
    }

}