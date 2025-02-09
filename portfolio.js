
let isSocialMediaActive = false;
let isdarkModeActive = true;
let skip = 0;
const alphabets = ["E", "D", "U", "A", "R", "D", "E", "V", "Q", "W", "E", "R", "T", "Y", "O", "P", "S", "D", "F", "H", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "N", "B", "M", "I", "Q", "W", "E", "R", "T", "Y", "G"];
let i = 0;
let isLogoNameAnimating = false;
const recipient = "gouravkotnala777@gmail.com";  
const subject = encodeURIComponent("Hello!");
const body = encodeURIComponent("Hi, good profile");

const section7 = document.getElementById("section_7");
const mySocialsIcons = document.getElementById("my_socials_icons");
const theme = document.getElementById("theme");
const social = document.getElementById("social");
const projectsCont = document.getElementById("projects_cont");
const projectCont = document.getElementById("project_cont");
const scrollableCont = document.getElementById("scrollable_cont");
const leftArrow = document.getElementById("left_arrow");
const leftArrowSvg = document.getElementById("left_arrow_svg");
const rightArrow = document.getElementById("right_arrow");
const rightArrowSvg = document.getElementById("right_arrow_svg");
const logoName = document.getElementById("logo_name");
const moonIcon = document.getElementById("moon_icon");
const sunIcon = document.getElementById("sun_icon");
const borderTheme = document.getElementsByClassName("border_theme");
const singleWord = document.getElementsByClassName("single_word");
const para = document.getElementsByClassName("para");
const subHeading = document.getElementsByClassName("sub_heading");
const heading = document.getElementsByClassName("heading");
const projectName = document.getElementsByClassName("project_name");
const scheduleCallBtn = document.getElementById("schedule_a_call");
const emailIcon = document.getElementById("email");


section7.addEventListener("click", socialLinksAnimationHandler);
leftArrow.addEventListener("click", projectsRightScrollingHandler);
rightArrow.addEventListener("click", projectsLeftScrollingHandler);
logoName.addEventListener("mouseover", headingAnimationHandler);
theme.addEventListener("click", themeHandler);
scheduleCallBtn.addEventListener("click", scheduleACallHandler);
emailIcon.addEventListener("click", scheduleACallHandler);


function themeHandler() {
    document.body.classList.toggle("light_mode");
    if (isdarkModeActive) {
        for(let i=0; i<para.length; i++){
            para[i].style.color = "#515151";
        }
        for(let i=0; i<heading.length; i++){
            heading[i].style.color = "#515151";
        }
        for(let i=0; i<subHeading.length; i++){
            subHeading[i].style.color = "#515151";
        }
        for(let i=0; i<singleWord.length; i++){
            singleWord[i].style.background = "linear-gradient(45deg, #ffffff, #000000, #ffffff)";
            singleWord[i].style.webkitBackgroundClip = "text";
            singleWord[i].style.webkitTextFillColor = "transparent";
        }
        for(let i=0; i<borderTheme.length; i++){
            borderTheme[i].style.border = "1px solid #dedede"
        }
        for(let i=0; i<projectName.length; i++){
            projectName[i].style.color = "black";
        }
        rightArrowSvg.style.stroke = "black";
        sunIcon.style.opacity = 1;
        sunIcon.style.top = "2px";
        moonIcon.style.opacity = 0;
        moonIcon.style.top = "-30px";
    }
    else{
        for(let i=0; i<para.length; i++){
            para[i].style.color = "#c1c1c1";
        }
        for(let i=0; i<heading.length; i++){
            heading[i].style.color = "#c1c1c1";
        }
        for(let i=0; i<subHeading.length; i++){
            subHeading[i].style.color = "#c1c1c1";
        }
        for(let i=0; i<singleWord.length; i++){
            singleWord[i].style.background = "linear-gradient(45deg, #000000, #ffffff, #000000)";
            singleWord[i].style.webkitBackgroundClip = "text";
            singleWord[i].style.webkitTextFillColor = "transparent";
        }
        for(let i=0; i<borderTheme.length; i++){
            borderTheme[i].style.border = "1px solid #333333"
        }
        rightArrowSvg.style.stroke = "white";

        sunIcon.style.opacity = 0;
        sunIcon.style.top = "-30px";
        moonIcon.style.opacity = 1;
        moonIcon.style.top = "2px";
    }
    isdarkModeActive = !isdarkModeActive;
};
async function headingAnimationHandler() {
    
    if (isLogoNameAnimating) return;

    isLogoNameAnimating = true;

    const intervaliID = setInterval(() => {
        if (isdarkModeActive) {
            logoName.innerHTML = (
                ((6-i)>=0?`<div class='single_word-light'>${alphabets[i]}</div>`:"<div class='single_word-light'>G</div>")+
                ((9-i)>=0?`<div class='single_word-light'>${alphabets[i+1]}</div>`:"<div class='single_word-light'>O</div>")+
                ((12-i)>=0?`<div class='single_word-light'>${alphabets[i+2]}</div>`:"<div class='single_word-light'>U</div>")+
                ((15-i)>=0?`<div class='single_word-light'>${alphabets[i+3]}</div>`:"<div class='single_word-light'>R</div>")+
                ((18-i)>=0?`<div class='single_word-light'>${alphabets[i]}</div>`:"<div class='single_word-light'>A</div>")+
                ((21-i)>=0?`<div class='single_word-light'>${alphabets[i+2]}</div>`:"<div class='single_word-light'>V</div>")
            );
        }
        else{
            logoName.innerHTML = (
                ((6-i)>=0?`<div class='single_word-dark'>${alphabets[i]}</div>`:"<div class='single_word-dark'>G</div>")+
                ((9-i)>=0?`<div class='single_word-dark'>${alphabets[i+1]}</div>`:"<div class='single_word-dark'>O</div>")+
                ((12-i)>=0?`<div class='single_word-dark'>${alphabets[i+2]}</div>`:"<div class='single_word-dark'>U</div>")+
                ((15-i)>=0?`<div class='single_word-dark'>${alphabets[i+3]}</div>`:"<div class='single_word-dark'>R</div>")+
                ((18-i)>=0?`<div class='single_word-dark'>${alphabets[i]}</div>`:"<div class='single_word-dark'>A</div>")+
                ((21-i)>=0?`<div class='single_word-dark'>${alphabets[i+2]}</div>`:"<div class='single_word-dark'>V</div>")
            );
        }
        if (i>=36) {
            i = 0;
            clearInterval(intervaliID);
            isLogoNameAnimating = false;
        }
        else{
            i += 1;
        }
    }, 30);
};
function projectsLeftScrollingHandler(){
    if (skip <= (scrollableCont.childElementCount - Math.ceil(projectsCont.clientWidth/projectCont.clientWidth))) {
        skip = skip + 1;
        scrollableCont.style.translate = `-${projectCont.clientWidth*skip}px`;
    }
    if (skip <= (scrollableCont.childElementCount - Math.ceil(projectsCont.clientWidth/projectCont.clientWidth))) {
        if (isdarkModeActive) {
            leftArrowSvg.style.stroke = "white";
            rightArrowSvg.style.stroke = "white";
            leftArrow.style.borderColor = "#adadad"
            rightArrow.style.borderColor = "#adadad"
        }
        else{
            leftArrowSvg.style.stroke = "black";
            rightArrowSvg.style.stroke = "black";
            leftArrow.style.borderColor = "#adadad"
            rightArrow.style.borderColor = "#adadad"
        }
    }
    else{
        if (isdarkModeActive) {
            leftArrowSvg.style.stroke = "white";
            rightArrowSvg.style.stroke = "#333333";
            leftArrow.style.borderColor = "#adadad"
            rightArrow.style.borderColor = "#333333"
        }
        else{
            leftArrowSvg.style.stroke = "black";
            rightArrowSvg.style.stroke = "white";
            leftArrow.style.borderColor = "#adadad"
            rightArrow.style.borderColor = "white"
        }
    }
};
function projectsRightScrollingHandler() {
    if (skip >= 1) {
        skip = skip - 1;
        scrollableCont.style.translate = `${Number(scrollableCont.style.translate.split("px")[0])+projectCont.clientWidth}px`;
    }
    if (skip <= 0) {
        if (isdarkModeActive) {
            leftArrowSvg.style.stroke = "#333333";
            rightArrowSvg.style.stroke = "white";
            leftArrow.style.borderColor = "#333333"
            rightArrow.style.borderColor = "#adadad"
        }
        else{
            leftArrowSvg.style.stroke = "white";
            rightArrowSvg.style.stroke = "black";
            leftArrow.style.borderColor = "white"
            rightArrow.style.borderColor = "black"
        }
    }
    else{
        if (isdarkModeActive) {
            leftArrowSvg.style.stroke = "white";
            rightArrowSvg.style.stroke = "white";
            leftArrow.style.borderColor = "#adadad"
            rightArrow.style.borderColor = "#adadad"
        }
        else{
            leftArrowSvg.style.stroke = "black";
            rightArrowSvg.style.stroke = "black";
            leftArrow.style.borderColor = "#adadad"
            rightArrow.style.borderColor = "#adadad"
        }
    }
};
function socialLinksAnimationHandler(){
    if (!isSocialMediaActive) {
        const aa = mySocialsIcons.children
    
        aa[0].style.left = "10px";
        aa[0].style.opacity = 1;
        aa[1].style.left = "40px";
        aa[1].style.opacity = 1;
        aa[2].style.left = "70px";
        aa[2].style.opacity = 1;
        
        isSocialMediaActive = !isSocialMediaActive;
        
    }
    else{
        const aa = mySocialsIcons.children

        aa[0].style.left = "-30px";
        aa[0].style.opacity = 0;
        aa[1].style.left = "-60px";
        aa[1].style.opacity = 0;
        aa[2].style.left = "-90px";
        aa[2].style.opacity = 0;
        isSocialMediaActive = !isSocialMediaActive;
    }
};
function scheduleACallHandler(){
    console.log("aaaaaaa");
    
    try {
        window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    } catch (error) {
        console.log(error);
        alert("error occured from scheduleACallHandler")
    }
};