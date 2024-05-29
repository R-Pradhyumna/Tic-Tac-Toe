//Used to open player info overlay
function openPlayerConfig(event) {
    editedPlayer = +event.target.dataset.playerid; // +'1' => 1 Converting from string to number
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
  }
  
  //Used to close player info overlay
  function closePlayerConfig() {
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorsOutputElement.textContent = '';
    formElement.firstElementChild.lastElementChild.value = '';
  }
  
  //Used for saving player data
  function savePlayerConfig(event) {
    event.preventDefault(); //Prevents page reload after submitting
    const formData = new FormData(event.target); //Points at HTML element responsible for the event
    const enteredPlayername = formData.get('playername').trim(); // Used to remove whitespaces
  
    if (!enteredPlayername) { // enteredPlayername === ''
      event.target.firstElementChild.classList.add('error');
      errorsOutputElement.textContent = 'Please enter a valid name!';
      return;
    }
  
    const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
    updatedPlayerDataElement.children[1].textContent = enteredPlayername; 
  
    players[editedPlayer - 1].name = enteredPlayername;//Gets name of player we are currently editing
  
    closePlayerConfig();  
  }