const text = document.getElementById('text')

document.addEventListener("DOMContentLoaded", function() {
    // const Text = document.getElementById('text')
    text.remove('text')
    let newText = document.createElement('p')
    newText.id = 'done'
    newText.innerHTML = 'This is really cool!'
    document.body.appendChild(newText)



    
  }); 

  