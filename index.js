function addingEventListener() {
    // Select the element you want to add an event listener to
    const input = document.getElementById('button'); // Replace 'button' with the actual element's ID
  
    // Define the event listener function
    function clickAlert() {
      alert('I was clicked!');
    }
  
    // Add the event listener for the 'click' event
    input.addEventListener('click', clickAlert);
  }
  
  addingEventListener();