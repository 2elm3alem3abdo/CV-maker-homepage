const steps = document.querySelectorAll(".question-step");
const startbutton = document.getElementById("start");
const backbutton = document.getElementById("back");
const Nextbutton = document.getElementById("nextbutton");
let currentindex = 0;

if(startbutton){
    startbutton.addEventListener("click", PersonalInfoPage);
    function PersonalInfoPage(){
        window.location.href = "./Tabs.html"
    }
}

if(Nextbutton){
    Nextbutton.addEventListener("click", ()=>{

        if(currentindex >= steps.length-1){
            alert("CV Finished! Generating PDF...");
            return
        }

        steps[currentindex].style.display = "none";
        currentindex++;
        steps[currentindex].style.display = "flex";
    });
}

if(backbutton){
    backbutton.addEventListener("click", Homepage);
    function Homepage(){
        if(currentindex <= 0){
            window.location.href = "./index.html"
        }

        steps[currentindex].style.display = "none";
        currentindex--;
        steps[currentindex].style.display = "flex";
    }
}