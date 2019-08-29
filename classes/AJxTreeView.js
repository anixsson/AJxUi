"use strict";
// Some Tyescript NEW
var AJxTreeView = /** @class */ (function () {
    function AJxTreeView(ID) {
        var _this = this;
        this.obj = document.getElementById(ID);
        var UL_node = document.createElement("ul");
        UL_node.classList.add("AJxTreeView");
        UL_node.appendChild(document.createTextNode("---"));
        this.obj.append(UL_node);
        this.obj.firstChild.addEventListener("DOMNodeInserted", function () { return _this.addEvent(); });
        this.structure = [
            "+403.",
            [
                "960.",
                [
                    "000.",
                    "001.",
                    "050.",
                    "090.",
                    [
                        "D001"
                    ]
                ]
            ]
        ];
        this.update();
    }
    // private addContext( node:any ) : void {
    //     node.addEventListener('contextmenu', function(e) {
    //         console.log( e.clientX + " : " + e.clientY );
    //         document.getElementById("aa").style.display = "block";
    //         document.getElementById("aa").style.top = (Number(e.clientY) - 5) + "px";
    //         document.getElementById("aa").style.left = (Number(e.clientX) - 5) + "px";
    //         console.log(e);
    //         e.preventDefault();
    //     }, false);
    //     document.getElementById("aa").addEventListener('mouseleave', function() {
    //         console.log( "mouseleave" );
    //         document.getElementById("aa").style.display = "none";
    //     }, false);
    // }
    AJxTreeView.prototype.addObject = function (text) {
        var li_node = document.createElement("li");
        li_node.appendChild(document.createTextNode(text));
        return li_node;
    };
    AJxTreeView.prototype.addSub = function (text, node) {
        // text: name of the sub
        // node: everything under the sub
        var li_node = document.createElement("li");
        var li_span = document.createElement("span");
        li_span.appendChild(document.createTextNode(text));
        li_span.classList.add("treeViewBox");
        li_node.appendChild(li_span);
        var li_ul = document.createElement("ul");
        li_ul.classList.add("treeViewNested");
        li_ul.appendChild(node);
        li_node.appendChild(li_ul);
        return li_node;
    };
    AJxTreeView.prototype.builder = function (array) {
        var node = document.createElement("div");
        ;
        for (var i = 0; i < array.length; i++) {
            if (typeof array[i + 1] == "object") {
                node.append(this.addSub(array[i], this.builder(array[i + 1])));
            }
            else if (typeof array[i] !== "object") {
                node.append(this.addObject(array[i]));
            }
        }
        return node;
    };
    AJxTreeView.prototype.update = function () {
        this.obj.firstChild.innerHTML = "";
        console.log("START");
        this.obj.firstChild.append(this.builder(this.structure));
        console.log("DONE");
        // ASYNC!!!
    };
    AJxTreeView.prototype.addEvent = function () {
        var toggler = this.obj.getElementsByClassName("treeViewBox");
        for (var i = 0; i < toggler.length; i++) {
            toggler[i].addEventListener("dblclick", function () {
                //this.parentElement.querySelector(".treeViewNested").classList.toggle("active");
                //this.classList.toggle("check-box");
            });
        }
    };
    AJxTreeView.prototype.setStructure = function (JSONarray) {
        this.structure = JSONarray;
    };
    return AJxTreeView;
}());
// var node = document.createElement("LI");                 // Create a <li> node
// var textnode = document.createTextNode("Water");         // Create a text node
// node.appendChild(textnode);                              // Append the text to <li>
// document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with id="myList"
