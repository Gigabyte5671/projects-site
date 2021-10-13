var ls = new lightshard;

ls.flags.doNavTransparency = 0;
ls.init();

function populateDOM(){
  projects.forEach(function(p){
    $("main").append(
      ls.blocks.h1(p.title + ":") +
      '<projects id="' + p.title + '"></projects>'
    );
    

    p.items.forEach(function(i){
      $("#" + p.title).append(
        ls.blocks.link(i.link, "", "", "",
          ls.blocks.general("project_card", "", 
            ls.blocks.img(i.image) +
            ls.blocks.general("project_card_inner", '" href="#', 
              ls.blocks.taglist("", i.tags) +
              ls.blocks.h2(i.title) +
              ls.blocks.info((i.date == "In Progress" ? i.date : ls.toSpokenDate(i.date))) +
              ls.blocks.paragraph(i.desc)
            )
          )
        )
      );
    });
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

