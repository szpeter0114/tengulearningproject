let btn = document.querySelectorAll(".click");
let colorr = document.querySelector("header");
let items = document.querySelectorAll(".item");
let japan = document.querySelector(".japan");
let light = document.querySelector(".light");
let dark = document.querySelector(".dark");
let project = document.querySelector(".projects");
let projecttext = document.querySelectorAll(".projecttext");
let articleheader = document.querySelectorAll(".articleheader");
let awesome = document.querySelectorAll('.awesome');
let gradient = document.querySelector('.gradient');
let form = document.querySelector('.my-form');
let itemitems = document.querySelectorAll('.itemitem');


btn.forEach(switchIcon);
function switchIcon(icon){
    
    
    icon.onclick = function()
    {
        
        items.forEach(toggleColor);
        function toggleColor(item) {
            
            if(item.style.color === "rgb(255, 255, 255)"){
                item.style.color = "rgb(0, 0, 0)";
                item.addEventListener("mouseover", function(){
                    item.style.color = "darkcyan";
                });
                item.addEventListener("mouseleave", function() {
                    item.style.color = "rgb(0, 0, 0)";
                })
            }else{
                item.style.color = "rgb(255, 255, 255)";
                item.addEventListener("mouseover", function(){
                    item.style.color = "darkcyan";
                });
                item.addEventListener("mouseleave", function() {
                    item.style.color = "rgb(255, 255, 255)";
                })
            }
            
        }

        articleheader.forEach(toggleheadercolor);
        function toggleheadercolor(header){
            if(colorr.style.backgroundColor === "rgb(255, 255, 255)"){
                header.style.color = "rgb(146, 233, 214)"
            }else{
                header.style.color = "rgb(100, 149, 237)";
            }
        };

        projecttext.forEach(toggletextColor);
        function toggletextColor(texxt) {
            if(colorr.style.backgroundColor === "rgb(255, 255, 255)") {
                texxt.style.color = "rgb(255, 255, 255)"
            } else{texxt.style.color = "rgb(0, 0, 0)";

            }
        };

        awesome.forEach(switchClr);
        function switchClr(koumoku){
            if(colorr.style.backgroundColor === "rgb(255, 255, 255)"){
                koumoku.style.color = "rgb(248, 244, 34)";
            } else{
                koumoku.style.color = "rgb(236, 170, 77)";
            }
        }

        if(colorr.style.backgroundColor === "rgb(255, 255, 255)") {
            colorr.style.backgroundColor = "rgb(86, 65, 65)";
            colorr.style.color = "rgb(255, 255, 255)";
            japan.style.webkitTextStrokeColor = "rgb(255, 255, 255)";
            japan.style.color = "rgb(0, 0, 0, 0%)";
            dark.style.display = "none";
            light.style.display = "block";
            project.style.backgroundColor = "rgb(71, 101, 145)";
            gradient.style.backgroundImage = "-webkit-linear-gradient(#b6c3758d, #352b2b)";
            form.style.color = "white";
            
        }else{
            colorr.style.backgroundColor = "rgb(255, 255, 255)";
            colorr.style.color = "rgb(0, 0, 0)";
            japan.style.webkitTextStrokeColor = "rgb(0, 0, 0)";
            japan.style.color = "rgb(165, 42, 42)";
            light.style.display = "none";
            dark.style.display = "block";
            project.style.backgroundColor = "rgb(248, 248, 255)";
            gradient.style.backgroundImage = "-webkit-linear-gradient(#b6c3758d, #eaeaea)"
            form.style.color = "black";

        }
    }
}