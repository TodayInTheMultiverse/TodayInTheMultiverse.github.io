var tmv;

function displayHeader() {
  $('#title').html(tmv.header.title);
}

function displayFromJson() {
  displayHeader(); 
}

$(document).ready(function () {
  $.getJSON('tmv.json', function (tmvData) {
      tmv = tmvData;
      displayFromJson();
  });
});