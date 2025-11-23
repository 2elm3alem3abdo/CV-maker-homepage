const steps = document.querySelectorAll(".question-step");
const startbutton = document.getElementById("start");
const backbutton = document.getElementById("back");
const Nextbutton = document.getElementById("nextbutton");
const BackInnerText = document.getElementById("B");
const NextInnerText = document.getElementById("N");
const counterInnerText = document.getElementById("c");
const PersonalFrame = document.getElementById("PersonalInfoFrame")
const EducationFrame = document.getElementById("EducationFrame")


let currentindex = 0;

function URLisValid(string){
    var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    return(res !=null)
}

if(startbutton){
    startbutton.addEventListener("click", PersonalInfoPage);
    function PersonalInfoPage(){
        window.location.href = "./Tabs.html"
    }
}

function HomeBtn(){
if(currentindex == 0){
        BackInnerText.innerText = "Home";
    }
    else{
        BackInnerText.innerText = "Back";
    }
}

function FinishBtn(){
    const currentInput =steps[currentindex].querySelector("input, textarea");
    if(currentindex >= steps.length -1){
        NextInnerText.innerText = "Finish";
        return
    }
    if(currentInput){
        const IsOptional = currentInput.classList.contains("optional");
        const IsEmpty = currentInput.value.trim() == "";
        if(IsOptional && IsEmpty){
            NextInnerText.innerText = "Skip";
        }
        else{
            NextInnerText.innerText = "Next";
        }
    }
    else{
        NextInnerText.innerText = "Next";
    }
}

const allinputs = document.querySelectorAll("input, textarea");
allinputs.forEach(input => {
    input.addEventListener("input", function(){
        FinishBtn();
    })
});

function counter(){
    counterInnerText.innerText = (currentindex+1) + "/" + steps.length;
}
counter();
HomeBtn();

if(Nextbutton){
    Nextbutton.addEventListener("click", ()=>{

        const currentInput =steps[currentindex].querySelectorAll("input, textarea");

        
        let isvalid = true;

        currentInput.forEach(input =>{
            const IsOptional = input.classList.contains("optional");
            const IsEmpty = input.value.trim() == "";

            if(IsEmpty && !IsOptional){
                isvalid = false;
                input.style.borderColor = "red";
            }
            else{
                isvalid = true;
                input.style.borderColor = "black";
            }
        })

        if(!isvalid){
            alert("Please fill in the flagged fields");
            return
        }
        
        if(currentindex == 5 || currentindex == 6){
            const urlval = steps[currentindex].querySelector("input");
            const url = urlval.value.trim();

            if(url !=="" && !URLisValid(url)){
                alert("URL/Link provided is not Valid, skip or enter a valid Link");
                urlval.style.borderColor = "red";
                return;
            }
            else{
                urlval.style.borderColor = "black";
            }
        }
        


        if(currentindex == 8){
            const startdate = document.getElementById("ans10").value;
            const enddate = document.getElementById("ans11").value;
            if(startdate && enddate){
                const startobj = new Date(startdate);
                const endobj = new Date(enddate);
                if(endobj<=startobj){
                    alert("end date can't be the same or earlier than the start date");
                    document.getElementById("ans10").style.borderColor = "red";
                    document.getElementById("ans11").style.borderColor = "red";
                    return
                }
                else{
                    document.getElementById("ans10").style.borderColor = "black";
                    document.getElementById("ans11").style.borderColor = "black";
                }
            }
        }

        if(currentindex >= steps.length-1){
            return
        }

        steps[currentindex].style.display = "none";
        currentindex++;
        steps.forEach(step => step.classList.remove("transformanim"));
        steps[currentindex].style.display = "flex";
        steps.forEach(step => step.classList.add("transformanim"));

        const frameselection = steps[currentindex].getAttribute("data-section")
        if(frameselection == "Education"){
            PersonalFrame.style.display = "none";
            EducationFrame.style.display = "flex";
        }
        else{
            PersonalFrame.style.display = "flex";
            EducationFrame.style.display = "none";
        }

        counter();
        FinishBtn();
        HomeBtn();

    });
}

if(backbutton){
    backbutton.addEventListener("click", Homepage);
    function Homepage(){
        if(currentindex <= 0){
            window.location.href = "./index.html"
            return
        }
        
        steps[currentindex].style.display = "none";
        currentindex--;
        steps.forEach(step => step.classList.remove("transformanim"));
        steps[currentindex].style.display = "flex";
        steps.forEach(step => step.classList.add("transformanim"));

        const frameselection = steps[currentindex].getAttribute("data-section")
        if(frameselection == "Education"){
            PersonalFrame.style.display = "none";
            EducationFrame.style.display = "flex";
        }
        else{
            PersonalFrame.style.display = "flex";
            EducationFrame.style.display = "none";
        }

        counter();
        HomeBtn();
        FinishBtn();

    }
}