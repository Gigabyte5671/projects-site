var ls = new lightshard;


ls.init();

function populateDOM(){
  projects.forEach(function(p){
    $("projects").append(
      ls.blocks.general("project_card", "", 
        ls.blocks.img(p.image) +
        ls.blocks.general("project_card_inner", "", 
          ls.blocks.h2(p.title) +
          ls.blocks.info(p.date) +
          ls.blocks.paragraph(p.desc)
        )
      )
    );
  });
}
populateDOM();