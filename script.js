    let toggle = document.getElementById("toggle");
    toggle.addEventListener("click", function(){
    let body = document.body;
    body.classList.toggle("light-mode");
    }); 
    let lookAtWork = document.getElementById("lookAtWork");
     let heroPara  = document.getElementById("hero-para");
     
     lookAtWork.addEventListener("click", function(){
        const ogText = " I am learning web development, JavaScript, DSA, and Web3.";
        const newText = "I build projects to practice JavaScript, DSA, Web3, and full-stack development step by step.";
        const ogBtn = "Take a look at My work";
        const newBtn = "Show Intro";
        if(heroPara.textContent === ogText){
            heroPara.textContent = newText;
            lookAtWork.textContent = newBtn;

        }
        else{
            heroPara.textContent = ogText;
            lookAtWork.textContent = ogBtn;
        }

    });
    let showSkill = document.getElementById("showskill");
    let skillList = document.getElementById("skillList");
const hide = "Hide Skill"
const show = "Show Skill"
    showSkill.addEventListener("click", function () {
        if(skillList.style.display === 'none'){
            skillList.style.display = 'block';
            showSkill.textContent = hide;
        }
        else{
            skillList.style.display = 'none';
            showSkill.textContent = show;
        }
    });
   let projectBtn = document.getElementById("projectBtn");
let projectDetails = document.getElementById("projectDetails");

projectBtn.addEventListener("click", function () {
  if (projectDetails.style.display === "none") {
    projectDetails.style.display = "block";
    projectBtn.textContent = "Hide Details";
  } else {
    projectDetails.style.display = "none";
    projectBtn.textContent = "Show Details";
  }
});
let contactBtn = document.getElementById("contactBtn");
let contactMsg = document.getElementById("contactMsg");
contactBtn.addEventListener("click", function(){
    contactMsg.textContent = "Thanks for checking my portfolio. You can reach me through email or LinkedIn.";
});
    
