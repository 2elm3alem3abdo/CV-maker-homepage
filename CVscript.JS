const startbutton = document.getElementById("start");
const backbutton = document.getElementById("back");
if(startbutton){
    startbutton.addEventListener("click", PersonalInfoPage);
    function PersonalInfoPage(){
        window.location.href = "./Tabs.html"
    }
}

if(backbutton){
    backbutton.addEventListener("click", Homepage);
    function Homepage(){
        window.location.href = "./index.html"
    }
}