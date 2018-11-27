let app = {
    init: function () {
        this.addEvents();
    },
    addEvents: function () {
        let loadContent = function () {
            fetch("/post")
                .then(res => res.json())
                .then(data => {
                    let posts = document.getElementsByClassName("posts")[0];
                    posts.innerHTML = data.reduce((cadena, element) => {
                        return cadena +
                            ` 

                            <div class="col s12 m8 offset-m2 l6 offset-l3">
                            <div class="card-panel grey lighten-5 z-depth-1">
                              <div class="row valign-wrapper">
                                <div class="col s2">
                                  <img src="profilepic.jpg " alt="" class="circle responsive-img smallpic"> <!-- notice the "circle" class -->
                                </div>
                                <div class="col s12">
                                  <h4 class="teal-text ">
                                  ${element.owner}
                                  </h4>
                                  <span class="black-text">
                                    ${element.post}
                                  </span>
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
                    body: new URLSearchParams(new FormData(form))
                }).then(res => res.json())
                .then(data => {
                    console.log(data);
                    form.post.value="";
                    loadContent();
                });
        });

        loadContent();

    }
};
window.onload = () => app.init();