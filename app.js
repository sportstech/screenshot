var ipcRenderer = require('electron').ipcRenderer;

document.addEventListener("DOMContentLoaded", function(){
  var viewInputsWrapper = document.querySelector('.view-inputs');
  var projectName = document.getElementById('project-name');
  var addMore = document.querySelector('.add-more');
  var submit = document.querySelector('.submit');

  addMore.addEventListener("click", function(e){
    var viewInputTemplate = document.createElement('div');
    viewInputTemplate.classList.add('view-input');
    viewInputTemplate.innerHTML = "<input type=\"text\" placeholder=\"View Name\" class=\"view-name\" /><input type=\"text\" placeholder=\"View URL\" class=\"view-url\" />";
    viewInputsWrapper.appendChild(viewInputTemplate);
  });

  submit.addEventListener("click", function(e){
    var viewInputs = document.querySelectorAll('.view-input');
    console.log(projectName.value);

    var projectNameKey = projectName.value.toLowerCase();

    var bundle = {};

    bundle.projectName = projectNameKey;
    bundle.urls = [];

    console.log(viewInputs);

    for(var i=0;i<viewInputs.length;i++){
      if(viewInputs[i].querySelector('.view-name').value && viewInputs[i].querySelector('.view-url').value){
        bundle.urls.push({
          name: viewInputs[i].querySelector('.view-name').value,
          url: viewInputs[i].querySelector('.view-url').value
        });
      }
    }

    ipcRenderer.send('screenshot-bundle', bundle);

  });

});
