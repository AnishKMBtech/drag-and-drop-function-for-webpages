var dropArea = document.getElementById('drop-area');
var fileElem = document.getElementById('fileElem');
var fileSelectBtn = document.getElementById('fileSelectBtn');
var fileList = document.getElementById('file-list');

fileSelectBtn.onclick = function() {
  fileElem.click();
};

dropArea.addEventListener('dragover', function(e) {
  e.preventDefault();
  dropArea.classList.add('dragover');
});
dropArea.addEventListener('dragleave', function() {
  dropArea.classList.remove('dragover');
});
dropArea.addEventListener('drop', function(e) {
  e.preventDefault();
  dropArea.classList.remove('dragover');
  handleFiles(e.dataTransfer.files);
});
fileElem.addEventListener('change', function() {
  handleFiles(fileElem.files);
});

function handleFiles(files) {
  for (var i = 0; i < files.length; i++) {
    showFile(files[i]);
  }
}

function showFile(file) {
  var preview = document.createElement('div');
  preview.className = 'file-preview';
  var info = document.createElement('span');
  info.textContent = file.name + ' (' + Math.round(file.size/1024) + ' KB)';
  preview.appendChild(info);
  var removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.className = 'remove-btn';
  removeBtn.onclick = function() { preview.parentNode.removeChild(preview); };
  preview.appendChild(removeBtn);
  fileList.appendChild(preview);
}
