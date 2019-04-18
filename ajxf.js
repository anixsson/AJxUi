//
// Accordion
//
var acc = document.getElementsByClassName("AJxAccordion");

var Ti;

for (Ti = 0; Ti < acc.length; Ti++) {
	acc[Ti].addEventListener("click", function() {
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		if (panel.style.maxHeight){
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	});
}


//
// Tree View
//

var toggler = document.getElementsByClassName("treeViewBox");
var i;

for (i = 0; i < toggler.length; i++) {
	toggler[i].addEventListener("dblclick", function() {
		this.parentElement.querySelector(".treeViewNested").classList.toggle("active");
		this.classList.toggle("check-box");
	});
}


// Get an empty DIV id of a TreeView

// Set this DIV to the "AJxTreeView" class

