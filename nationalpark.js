

// nationalpark.js
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.park-name').forEach(function(parkNameDiv) {
    parkNameDiv.addEventListener('click', function(event) {
      toggleParkSelection(this.id.replace('ParkName-', ''), event);
    });
  });
});

function TogglePark(element) {
    // Determine the base ID from either the park name or park dot, depending on which was clicked.
    var baseId = element.id.replace("Click-", "").replace("ParkDot-", "");

    // Get references to both the park name and park dot elements.
    var parkNameElement = document.getElementById("Click-" + baseId);
    var parkDotElement = document.getElementById("ParkDot-" + baseId);
    var uploadButton = parkNameElement.querySelector('.upload-btn'); // Get the upload button within the park name element.

    // Toggle the 'selected' class on both elements. If they were not previously selected, they will now become selected.
    parkNameElement.classList.toggle("selected");
    parkDotElement.classList.toggle("selected");

    // Adjust the display of the upload button based on the new 'selected' state.
    if (parkNameElement.classList.contains("selected")) {
        // If now selected, show the upload button.
        uploadButton.style.display = 'inline';
    } else {
        // If now deselected, hide the upload button.
        uploadButton.style.display = 'none';
    }
}

function uploadImage(parkName, event) {
    event.stopPropagation(); // Stop the event from propagating to the parent elements

    var input = document.createElement('input');
    input.type = 'file';
    input.multiple = true;
    input.accept = 'image/*';
    input.onchange = e => {
        var files = e.target.files; // Array of all files

        for (var i = 0, file; file = files[i]; i++) {
            if (file.type.match('image.*')) {
                var reader = new FileReader();
                reader.onload = (function (theFile) {
                    return function (e) {
                        // Render thumbnail.
                        var div = document.createElement('div');
                        div.innerHTML = `<img class="thumb" src="${e.target.result}" style="height: 100px;"> <br>`;
                        document.getElementById('image-display-container').appendChild(div);
                    };
                })(file);
                reader.readAsDataURL(file);
            }
        }
    };
    input.click();
}