// Saves options to chrome.storage
function save_options() {
    var number_extension = document.getElementById('number_extension').value;
    chrome.storage.sync.set({
        number_extension: number_extension,
    }, function() {
      // Update status to let user know options were saved.
      var status = document.getElementById('status');
      status.textContent = 'Options saved.';
      setTimeout(function() {
        status.textContent = '';
      }, 750);
    });
}
  
function restore_options() {
    chrome.storage.sync.get({
        number_extension: '+34',
    }, function(items) {
        document.getElementById('number_extension').value = items.number_extension;
    });
}

function check_input(){
    console.log("check_input");
    let result = /^[+]{1}[0-9]{1,3}$/.test(document.getElementById('number_extension').value);
    if( result == false ){
        //disable button
        document.getElementById('save').disabled = true;
    }else{
        document.getElementById('save').disabled = false;
    }
}


document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',save_options);
document.getElementById('number_extension').addEventListener('change',check_input);