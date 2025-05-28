window.addEventListener("load", () => {
  loadCmaData();
});

function loadCmaData() {
  fetch('./data/artworks.json')
    .then((response) => response.json())
    .then((json) => displayArtworks(json));
}

function displayArtworks(json) {
  var aws = document.getElementById("artworks");
  for (var i = 0; i < json.length; i++) {
    var newBtn = document.createElement("button");
    newBtn.setAttribute("class", "collapsible");
    var text = document.createTextNode("\u2022 " + json[i].artwork.title);
    newBtn.appendChild(text);
    aws.appendChild(newBtn);
    addDetailedInfo(aws, json[i]);
  }
  addClickEvents();
}

function addDetailedInfo(parent, details_json) {
  var newDiv = document.createElement("div");
  newDiv.setAttribute("class", "content");
  var dl = document.createElement("dl");
  // artwork
  var dt = document.createElement("dt");
  dt.appendChild(document.createTextNode("artwork"));
  dl.appendChild(dt);
  var dd = document.createElement("dd");
  var txtKey = "id";
  var txtValue = details_json.artwork.id;
  dd.appendChild(document.createTextNode(txtKey + ": " + txtValue));
  dl.appendChild(dd);
  dd = document.createElement("dd");
  txtKey = "accession_number";
  txtValue = details_json.artwork.accession_number;
  dd.appendChild(document.createTextNode(txtKey + ": " + txtValue));
  dl.appendChild(dd);
  dd = document.createElement("dd");
  txtKey = "title";
  txtValue = details_json.artwork.title;
  dd.appendChild(document.createTextNode(txtKey + ": " + txtValue));
  dl.appendChild(dd);
  dd = document.createElement("dd");
  txtKey = "tombstone";
  txtValue = details_json.artwork.tombstone;
  dd.appendChild(document.createTextNode(txtKey + ": " + txtValue));
  dl.appendChild(dd);
 
  newDiv.appendChild(dl);
  parent.appendChild(newDiv);
  
  
  //var newDiv = document.createElement("div");
  //newDiv.setAttribute("class", "content");
  var dl = document.createElement("dl");
  // creator
  var dt = document.createElement("dt");  
  dt.appendChild(document.createTextNode("creator"));
  dl.appendChild(dt);
  var dd = document.createElement("dd");
  var txtKey = "id";
  var txtValue = details_json.creator.id;
  dd.appendChild(document.createTextNode(txtKey + ": " + txtValue));
  dl.appendChild(dd);
  dd = document.createElement("dd");
  txtKey = "role";
  txtValue = details_json.creator.role;
  dd.appendChild(document.createTextNode(txtKey + ": " + txtValue));
  dl.appendChild(dd);
  dd = document.createElement("dd");
  txtKey = "description";
  txtValue = details_json.creator.description;
  dd.appendChild(document.createTextNode(txtKey + ": " + txtValue));
  dl.appendChild(dd);
  dd = document.createElement("dd");
  
  if ((txtValue === undefined) == false){
  newDiv.appendChild(dl);
  parent.appendChild(newDiv);
  }
  var dl = document.createElement("dl");
  // department
  var dt = document.createElement("dt");  
  dt.appendChild(document.createTextNode("department"));
  dl.appendChild(dt);
  var dd = document.createElement("dd");
  var txtKey = "id";
  var txtValue = details_json.department.id;
  dd.appendChild(document.createTextNode(txtKey + ": " + txtValue));
  dl.appendChild(dd);
  dd = document.createElement("dd");
  txtKey = "name";
  txtValue = details_json.department.name;
  dd.appendChild(document.createTextNode(txtKey + ": " + txtValue));
  dl.appendChild(dd);
 
  newDiv.appendChild(dl);
  parent.appendChild(newDiv);
}

function addClickEvents() {
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
}

