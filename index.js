if(window.self !== window.top){ //Check if the site has been embedded
  $("nav").addClass("hidden");
}

Lightshard.flags.nav_transparency = 0;
Lightshard.flags.url_aliases.push({alias: "{WL}", url: "https://wilderzone.live/"});
Lightshard.functions.init();

function populateDOM(){
  $("#projects section_inner").append(
    Lightshard.blocks.h2("In Progress:") +
    '<grid_medium id="inprogress"></grid_medium>' +
    Lightshard.blocks.h2("Completed:") +
    '<grid_medium id="completed"></grid_medium>'
  );
  

  projects.forEach(function(p){
    if(p.status == "In Progress"){
      var id = "inprogress";
    }else{
      var id = "completed";
    }
    $("#" + id).append(
      Lightshard.blocks.link(p.link, "", "", "",
        Lightshard.blocks.general("card", "", 
          Lightshard.blocks.img(p.image) +
          Lightshard.blocks.general("card_inner", "", 
            Lightshard.blocks.taglist("", p.tags) +
            Lightshard.blocks.h3(p.title) +
            Lightshard.blocks.info((p.status == "In Progress" ? p.status : Lightshard.functions.toSpokenDate(p.date))) +
            Lightshard.blocks.paragraph(p.desc)
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

