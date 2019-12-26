function loadFile(event) {
    var selfiId = event.target.id
    var lastChar = selfiId.charAt(selfiId.length - 1)
    var selfiOutput = document.getElementById(`output${lastChar}`);
    var fileName = event.target.files[0].name
    selfiOutput.src = URL.createObjectURL(event.target.files[0]);
    document.getElementById(`selfi${lastChar}-name`).innerText = fileName
}