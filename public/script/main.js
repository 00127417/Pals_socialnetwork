let app = {
    
  init: function () {
      this.addEvents();
  },
  addEvents: function () {
      let loadContent = function () {
          
          fetch("/img")
              .then(res => res.json())
              .then(data => {
                  let posts = document.getElementsByClassName("posts")[0];
                  posts.innerHTML = data.reduce((cadena, element) => {
                      if(element.title=="" && element.title){
                        var cadenaux="";
                      }else{
                        var cadenaux=`<img class="materialboxed responsive-img" width="700" src="../uploads/${element.path}"></img>`;
                      }
                      return cadena +
                      ` 
                      <div class="section">
                        <div class="col s12 m8 offset-m2 l6 offset-l3">
                          <div class="card-panel grey lighten-5 z-depth-1">
                            <div class="row valign-wrapper">
                              <div class="col s2">
                                <img src="/img/profileholder.png " alt="" class="circle responsive-img smallpic"> <!-- notice the "circle" class -->
                              </div>
                              <div class="col s12">
                                <h4 class="teal-text ">
                                ${element.owner}
                                </h4>
                                <p class="black-text">
                                  ${element.post}
                                </p>
                                <br>
                                ${cadenaux}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      `
                  }, "");
              });
      }
      let form = document.forms.savePost;

      form.addEventListener('submit', function (event) {
          event.preventDefault();
          fetch(form.action, {
                  method: 'POST',
                  body: new FormData(form)
              }).then(res => res.json())
              .then(data => {
                  //console.log(data);
                  form.post.value="";
                  form.imagen.value = "";
                  loadContent();
              });

      });

      loadContent();

  }
  
  
};
window.onload = () => app.init();