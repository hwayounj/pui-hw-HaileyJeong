//get the fade element
const fadeEffect = document.querySelector(".fade-effect");

// window.addEventListener("scroll",fadeEffectDecrease);



const filterEffect = document.querySelector(".filters");
const project1 = document.querySelector("#work1");
const project2 = document.querySelector('#work2');
// get position of project2 for use later
const posPro2 = project2.getBoundingClientRect();
const project3 = document.querySelector('#work3');
const project4 = document.querySelector('#work4');
const project5 = document.querySelector('#work5');
const project6 = document.querySelector('#work6');

// credit: https://www.youtube.com/watch?v=LX66mf1Xzt8&list=PLCtrXAQxe0rJNkjGV4ZSLSUuYR5iz6SNx
filterEffect.addEventListener("click",(event) => {
    document.querySelector(".filter-btn--active").classList.remove("filter-btn--active");
    event.target.classList.remove("filter-btn")
    event.target.classList.add("filter-btn--active")

    const filterText = event.target.textContent;
     if(filterText === "All"){
        project1.style.opacity="1";
        project1.style.transform='scale(1)';
        project2.style.opacity="1";
        project2.style.transform='scale(1)';
        project3.style.opacity="1";
        project3.style.transform='scale(1)';
        project4.style.opacity="1";
        project4.style.transform='scale(1)';
        project6.style.opacity="1";
        project6.style.transform='scale(1)';
        project5.style.opacity="1";
        project5.style.transform='scale(1)';


        
     }else if(filterText === "Game Design"){
        //remove
        // project1.classList.add("remove");
        project2.style.opacity="0";
        project2.style.transform='scale(0)';
        project4.style.opacity="0";
        project4.style.transform='scale(0)';
        project6.style.opacity="0";
        project6.style.transform='scale(0)';
        project5.style.opacity="0";
        project5.style.transform='scale(0)';

        //align
        project3.style.transform='translate(520px, -400px)';
        project3.style.opacity="1";
        // project3.style.transform='scale(1)';
        project1.style.opacity="1";
        project1.style.transform='scale(1)';
      
     }else if(filterText === "UIUX Design"){
        project1.style.opacity="0";
        project1.style.transform='scale(0)';
        project3.style.opacity="0";
        project3.style.transform='scale(0)';
        project5.style.opacity="0";
        project5.style.transform='scale(0)';

        //align
        project2.style.transform='translate(-520px, 0px)';
        project4.style.transform='translate(0px, -400px)';
        project6.style.transform='translate(-520px,-400px)';
        project2.style.opacity="1";
        // project2.style.transform='scale(1)';
        project4.style.opacity="1";
        // project4.style.transform='scale(1)';
        project6.style.opacity="1";
        // project6.style.transform='scale(1)';
        


     }else if(filterText === "Modelling Work"){
        // project1.classList.add("remove");
        // project1.style.opacity("0");
        project1.style.opacity="0";
        project1.style.transform='scale(0)';
        project2.style.opacity="0";
        project3.style.transform='scale(0)';
        project3.style.opacity="0";
        project3.style.transform='scale(0)';
        project4.style.opacity="0";
        project4.style.transform='scale(0)';
        project6.style.opacity="0";
        project6.style.transform='scale(0)';

        project5.style.transform='translate(0px, -800px)';
        project5.style.opacity="1";


     }
     

});


// function buttonEvnet(){
//     //make clicked button active
// }