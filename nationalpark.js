
document.addEventListener('DOMContentLoaded', function() {

  document.querySelectorAll('.park-name').forEach(function(parkNameDiv) {
    parkNameDiv.addEventListener('click', function() {
      toggleParkSelection(this.id.replace('ParkName-', ''));
    });
  });
});

function toggleParkSelection(parkName) {

  var parkNameDiv = document.getElementById('ParkName-' + parkName);
  if (parkNameDiv) {
    parkNameDiv.classList.toggle('selected');
  }


  var parkDotButton = document.getElementById('ParkDot-' + parkName);
  if (parkDotButton) {
    parkDotButton.classList.toggle('selected');
  }
}
