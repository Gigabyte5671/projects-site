var ls = new lightshard;

ls.flags.doNavTransparency = 0;
ls.init();

function populateDOM(){
  $("#projects section_inner").append(
    ls.blocks.h2("In Progress:") +
    '<projects id="inprogress"></projects>' +
    ls.blocks.h2("Completed:") +
    '<projects id="completed"></projects>'
  );
  

  projects.forEach(function(p){
    if(p.status == "In Progress"){
      var id = "inprogress";
    }else{
      var id = "completed";
    }
    $("#" + id).append(
      ls.blocks.link(p.link, "", "", "",
        ls.blocks.general("project_card", "", 
          ls.blocks.img(p.image) +
          ls.blocks.general("project_card_inner", '" href="#', 
            ls.blocks.taglist("", p.tags) +
            ls.blocks.h3(p.title) +
            ls.blocks.info((p.status == "In Progress" ? p.status : ls.toSpokenDate(p.date))) +
            ls.blocks.paragraph(p.desc)
          )
        )
      )
    );
  });
}
populateDOM();


function landingScroll(){
  document.addEventListener("scroll", function(event){
    if(window.scrollY > 0){
      var landing = document.querySelector("landing");
      var landing_inner = document.querySelector("landing_inner");
      //var landing_background = document.querySelector("landing_background");
      
      var acceleration = 1.0;
      var height = window.innerHeight - (window.scrollY * acceleration);
      if(height < 0){
        height = 0;
      }
      landing_inner.style.height = height + "px";
      landing.style.paddingTop = (window.innerHeight - height) + "px";
      //landing_inner.style.filter = "blur(" + (((window.innerHeight - height) / window.innerHeight) * 10)  + "px)"; //An interesting effect but really slow
      
    }
  });
}
landingScroll();

