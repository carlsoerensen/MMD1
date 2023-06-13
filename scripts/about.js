  // Get a reference to the button element and the modal
  let button = document.getElementById('showButton');
  let modal = document.getElementById('myModal');

  // Add a click event listener to the button
  button.addEventListener('click', function() {
    // Display the modal
    modal.style.display = 'block';
  });

  // Get a reference to the close button inside the modal
  let closeButton = document.getElementsByClassName('close')[0];

  // Add a click event listener to the close button
  closeButton.addEventListener('click', function() {
    // Hide the modal
    modal.style.display = 'none';
  });

let CV = document.getElementById('CV_Button');
CV.addEventListener('click', function(){
  window.open('../imgvid/CV.pdf');
})