function display(input,elementId) {
	if (elementId) {
	document.getElementById(elementId).innerHTML = input;
  }
  else {
  document.getElementById("test").innerHTML = input;
  }
}

function listener(elementId,eventId,event) {
	document.getElementById(elementId).addEventListener(eventId,event)
}

function linker(url,elementId) {
	document.getElementById(elementId).href = url
}

function image(url,elementId,width,height,alt) {
	document.getElementById(elementId).src = url
  if (width) {
  	document.getElementById(elementId).width = width
  }
  if (height) {
  	document.getElementById(elementId).height = height
  }
  if (alt) {
  	document.getElementById(elementId).alt = alt
  }
}

function grabInput(elementId) {
	return document.getElementById(elementId).value
}