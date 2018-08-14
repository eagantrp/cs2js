function display(input,id) {
	if (id) {
	document.getElementById(id).innerHTML = input;
  }
  else {
  document.getElementById("test").innerHTML = input;
  }
}
function listener(elementId,eventId,event) {
	document.getElementById(elementId).addEventListener(eventId,event)
}
