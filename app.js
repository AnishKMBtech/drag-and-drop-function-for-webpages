// selecting elements
var dropArea      = document.getElementById('drop-area');
var fileinput     = document.getElementById('fileinput');
var selectbutton  = document.getElementById('selectbutton');
var list          = document.getElementById('list');

// open file picker
selectbutton.onclick = function () {
  fileinput.click();
};

// drag over effect
dropArea.addEventListener('dragover', function (e) {
  e.preventDefault();
  dropArea.classList.add('dragover');
});

// drag leave effect
dropArea.addEventListener('dragleave', function () {
  dropArea.classList.remove('dragover');
});

// drop files
dropArea.addEventListener('drop', function (e) {
  e.preventDefault();
  dropArea.classList.remove('dragover');
  displayFiles(e.dataTransfer.files);
});

// file input selected
fileinput.addEventListener('change', function () {
  displayFiles(fileinput.files);
});

// display each file name with remove button
function displayFiles(files) {
  // Clear the list before displaying new files
  list.innerHTML = "";
  for (var i = 0; i < files.length; i++) {
    (function(fileName) {
      var item = document.createElement('div');
      item.className = 'file-preview';

      var name = document.createElement('span');
      name.textContent = fileName;

      var remove = document.createElement('button');
      remove.textContent = 'Remove';
      remove.className = 'remove-btn';

      remove.onclick = function () {
        list.removeChild(item);
      };

      item.appendChild(name);
      item.appendChild(remove);
      list.appendChild(item);
    })(files[i].name);
  }
}
