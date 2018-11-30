(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space




document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.materialboxed');
  var instances = M.Materialbox.init(elems, options);
});

// Or with jQuery

$(document).ready(function(){
  $('.materialboxed').materialbox();
});

$('.dropdown-trigger').dropdown();

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems, options);
});

// Or with jQuery

$(document).ready(function(){
  $('.collapsible').collapsible();
});
      
var instance = M.Tabs.getInstance(elem);
instance.select('tab_id');
instance.updateTabIndicator();
instance.destroy();
