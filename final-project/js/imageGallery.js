const popup = document.querySelector("section.portfolio-box .pop-up-image");
// // const d = document.querySelector(".image");
let target ;


const imageDiv = document.querySelectorAll('.demoimage .image');
// imageDiv.addEventListener("click",showPopUp);

for(image of imageDiv){
    
    image.addEventListener("click",(event)=>{
        console.log(event.target);
        document.querySelector("section.portfolio-box .pop-up-image").style.display = "block";
        document.querySelector("section.portfolio-box .pop-up-image img").src = event.target.getAttribute("src");
    }
    );
    // console.log(image);
}

document.querySelector("section.portfolio-box .pop-up-image span").onclick = ()=>{
document.querySelector("section.portfolio-box .pop-up-image").style.display = "none";

}

