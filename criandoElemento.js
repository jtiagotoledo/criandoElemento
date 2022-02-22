(function(){
    const elemento = document.createElement("div")
    elemento.innerHTML="<p>oi</p>"
    const elementoPai = document.getElementById("paragrafo")
    elementoPai.insertBefore(elemento, elementoPai.firstChild)
})()