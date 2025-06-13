# Line-by-Line Summary of All Project Files

---

## index.html

1.  `<!-- Main HTML file for Drag and Drop File Uploader -->` — A comment describing the file.
2.  `<!DOCTYPE html>` — Declares the document as HTML5.
3.  `<html lang="en">` — Starts the HTML document, language is English.
4.  `<head>` — Starts the head section (meta info, links, title).
5.  `  <meta charset="UTF-8">` — Sets character encoding to UTF-8.
6.  `  <meta name="viewport" content="width=device-width, initial-scale=1.0">` — Makes the page responsive.
7.  `  <title>Drag and Drop File Uploader</title>` — Sets the browser tab title.
8.  `  <link rel="stylesheet" href="styles.css">` — Links the CSS file for styling.
9.  `</head>` — Ends the head section.
10. `<body>` — Starts the visible page content.
11. `  <div class="container">` — Main box for the uploader.
12. `    <h2>Drag and drop your files here</h2>` — Heading for the uploader.
13. `    <div id="drop-area">` — Area for dropping/selecting files.
14. `      <p>Drop files here or <button id="fileSelectBtn">Select Files</button></p>` — Message and button to select files.
15. `      <input type="file" id="fileElem" multiple style="display:none">` — Hidden file input for picking files.
16. `      <div id="file-list"></div>` — Where uploaded files will be shown.
17. `    </div>` — Ends drop area.
18. `  </div>` — Ends container.
19. `  <script src="app.js"></script>` — Loads the JavaScript file.
20. `</body>` — Ends the body.
21. `</html>` — Ends the HTML document.

---

## styles.css

1.  `body { ... }` — Styles the whole page (font, background, centering).
2.  `.container { ... }` — Styles the main box (size, color, padding, shadow).
3.  `#drop-area { ... }` — Styles the drop area (border, background, padding).
4.  `#drop-area.dragover { ... }` — Styles drop area when dragging files over it.
5.  `#file-list { ... }` — Styles the file list area (scrollable, border, background).
6.  `.file-preview { ... }` — Styles each file row (layout, background, shadow).
7.  `.remove-btn { ... }` — Styles the remove button (color, size, hover effect).

---

## app.js

1.  `var dropArea = document.getElementById('drop-area');` — Gets the drop area from the page.
2.  `var fileElem = document.getElementById('fileElem');` — Gets the hidden file input.
3.  `var fileSelectBtn = document.getElementById('fileSelectBtn');` — Gets the select files button.
4.  `var fileList = document.getElementById('file-list');` — Gets the area to show uploaded files.
5.  `fileSelectBtn.onclick = function() { fileElem.click(); };` — Clicking the button opens the file picker.
6.  `dropArea.addEventListener('dragover', function(e) {...});` — Highlights drop area when dragging files over it.
7.  `dropArea.addEventListener('dragleave', function() {...});` — Removes highlight when leaving drop area.
8.  `dropArea.addEventListener('drop', function(e) {...});` — Handles files dropped into the area.
9.  `fileElem.addEventListener('change', function() {...});` — Handles files picked with the file picker.
10. `function handleFiles(files) {...}` — Goes through all files and shows each one.
11. `function showFile(file) {...}` — Shows file info and remove button (no image preview).

---

This summary explains what each line or block does in your project. The image preview has been removed, so only file name, size, and remove button are shown.
