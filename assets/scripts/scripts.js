window.onload = () => {
console.log("Inside the scripts file");


//VARIABLE DECLARATIONS
let richTextField = document.getElementById("richTextField");
let buttonBold = document.getElementById("buttonBold");
let buttonItalic = document.getElementById("buttonItalic");
let buttonUnderline = document.getElementById("buttonUnderline");
let buttonStrikethrough = document.getElementById("buttonStrikethrough");
let buttonJustifyLeft = document.getElementById("buttonJustifyLeft");
let buttonJustifyCenter = document.getElementById("buttonJustifyCenter");
let buttonJustifyRight = document.getElementById("buttonJustifyRight");
let buttonJustifyFull = document.getElementById("buttonJustifyFull");
let buttonCut = document.getElementById("buttonCut");
let buttonCopy = document.getElementById("buttonCopy");
let buttonPaste = document.getElementById("buttonPaste");
let buttonIndent = document.getElementById("buttonIndent");
let buttonOutdent = document.getElementById("buttonOutdent");
let buttonSubscript = document.getElementById("buttonSubscript");
let buttonSuperscript = document.getElementById("buttonSuperscript");
let buttonUndo = document.getElementById("buttonUndo");
let buttonRedo = document.getElementById("buttonRedo");
let buttonInsertUnorderedList = document.getElementById("buttonInsertUnorderedList");
let buttonInsertOrderedList = document.getElementById("buttonInsertOrderedList");
let buttonInsertParagraph = document.getElementById("buttonInsertParagraph");
let selectParagraphStyle = document.getElementById("selectParagraphStyle")
let buttonHorizontalRule = document.getElementById("buttonHorizontalRule")
let buttonInsertLink = document.getElementById("buttonInsertLink");
let buttonRemoveLink = document.getElementById("buttonRemoveLink");
let buttonSourceCode = document.getElementById("buttonSourceCode");
let buttonToggleEdit = document.getElementById("buttonToggleEdit");
let selectFontStyle = document.getElementById("selectFontStyle");

let selectFontSize = document.getElementById("selectFontSize");

let inputFontColor = document.getElementById("inputFontColor");
let inputBackgroundColor = document.getElementById("inputBackgroundColor");
let buttonInsertImage = document.getElementById("buttonInsertImage");
let buttonSelectAll = document.getElementById("buttonSelectAll");






//EVENT LISTENERS
buttonBold.addEventListener("click", ()=>{execCmd('bold')});
buttonItalic.addEventListener("click", ()=>{execCmd('italic')});
buttonUnderline.addEventListener("click", ()=>{execCmd('underline')});
buttonStrikethrough.addEventListener("click", ()=>{execCmd('strikethrough')});
buttonJustifyLeft.addEventListener("click", ()=>{execCmd('justifyLeft')});
buttonJustifyCenter.addEventListener("click", ()=>{execCmd('justifyCenter')});
buttonJustifyRight.addEventListener("click", ()=>{execCmd('justifyRight')});
buttonJustifyFull.addEventListener("click", ()=>{execCmd('justifyFull')});
buttonCut.addEventListener("click", ()=>{execCmd('cut')});
buttonCopy.addEventListener("click", ()=>{execCmd('copy')});
buttonPaste.addEventListener("click", ()=>{execCmd('paste')}); //This has a problem
buttonIndent.addEventListener("click", ()=>{execCmd('indent')});
buttonOutdent.addEventListener("click", ()=>{execCmd('outdent')});
buttonSubscript.addEventListener("click", ()=>{execCmd('subscript')});
buttonSuperscript.addEventListener("click", ()=>{execCmd('superscript')});
buttonUndo.addEventListener("click", ()=>{execCmd('undo')});
buttonRedo.addEventListener("click", ()=>{execCmd('redo')});
buttonInsertUnorderedList.addEventListener("click", ()=>{execCmd('insertUnorderedList')});
buttonInsertOrderedList.addEventListener("click", ()=>{execCmd('insertOrderedList')});
buttonInsertParagraph.addEventListener("click", ()=>{execCmd('insertParagraph')});
selectParagraphStyle.addEventListener("change", ()=>{execCmdArg('formatBlock', selectParagraphStyle[selectParagraphStyle.selectedIndex].getAttribute('value'))});
buttonHorizontalRule.addEventListener("click", ()=>{execCmd('insertHorizontalRule')});
buttonInsertLink.addEventListener("click", ()=>{execCmd("createLink")}); //does this have the option of having an additional prompt window where the url is defined?
buttonRemoveLink.addEventListener("click", ()=>{execCmd("unlink")});
buttonSourceCode.addEventListener("click", ()=>{execCmd("insertHTML")}); //Need to check on this. codepen has it with a prompt where the user can enter raw html
buttonToggleEdit.addEventListener("click", ()=>{execCmd("styleWithCSS")}); //Not sure about this one and if it is right
selectFontStyle.addEventListener("change", ()=>{execCmdArg("fontName", selectFontStyle[selectFontStyle.selectedIndex].getAttribute('value'))});
selectFontSize.addEventListener("change", ()=>{execCmdArg("fontSize", selectFontSize[selectFontSize.selectedIndex].getAttribute('value'))});
inputFontColor.addEventListener("click", ()=>{execCmd("foreColor")}); //Need to work on this. Will this come in the function through a form?
inputBackgroundColor.addEventListener("click", ()=>{execCmd("backColor")}); //Need to work on this. Will this come in the function through a form?
buttonInsertImage.addEventListener("click", ()=>{execCmd("insertImage")}); //Need to work on this
buttonSelectAll.addEventListener("click", ()=>{execCmd("selectAll")}); //Need to find icon for this










// ----------FUNCTION DECLARATIONS=========================
//ENABLE EDIT MODE FOR THE IFRAME AREA
function enableEditMode() {
  richTextField.contentDocument.designMode = "On";
}

//EXECCOMMAND - ALLOWS US TO RUN COMMANDS TO MANIPULATE THE CONTENTS OF THE EDITABLE REGION
function execCmd(command) {
  console.log(command);
  richTextField.contentDocument.execCommand(command, false, null)
}

function execCmdArg(command, arg) {
  console.log(arg);
  // var value = this.getAttribute("value")
  richTextField.contentDocument.execCommand(command, false, arg)
}





//FUNCTION CALLS
enableEditMode();


} //End of window.onload





//bool = document.execCommand(aCommandName, aShowDefaultUI, aValueArgument)
/*
Parameters

aCommandName
A DOMString specifying the name of the command to execute. See Commands for a list of possible commands.
aShowDefaultUI
A Boolean indicating whether the default user interface should be shown. This is not implemented in Mozilla.
aValueArgument
For commands which require an input argument (such as insertImage,
for which this is the URL of the image to insert), this is a DOMString providing that information.
Specify null if no argument is needed.
*/

/*
var parms = [{
	"cmd": "aCommandName",
	"desc": "A DOMString representing the name of the command"
}, {
	"cmd": "aShowDefaultUI",
	"desc": "A Boolean indicating whether the default user interface should be shown. This is not implemented in Mozilla."
}, {
	"cmd": "aValueArgument",
	"desc": "A DOMString representing some commands (such as insertimage) require an extra value argument (the image's url). Pass an argument of null if no argument is needed."
}];
var commands = [{
	"cmd": "backColor",
	"val": "red",
	"desc": "Changes the document background color. In styleWithCss mode, it affects the background color of the containing block instead. This requires a color value string to be passed in as a value argument. (Internet Explorer uses this to set text background color.)"
}, {
	"cmd": "bold",
	"icon": "bold",
	"desc": "Toggles bold on/off for the selection or at the insertion point. (Internet Explorer uses the STRONG tag instead of B.)"
}, {
	"cmd": "contentReadOnly",
	"desc": "Makes the content document either read-only or editable. This requires a boolean true/false to be passed in as a value argument. (Not supported by Internet Explorer.)"
}, {
	"cmd": "copy",
	"icon": "clipboard",
	"desc": "Copies the current selection to the clipboard. Clipboard capability must be enabled in the user.js preference file. See"
}, {
	"cmd": "createLink",
	"val": "http://twitter.com/netsi1964",
	"icon": "link",
	"desc": "Creates an anchor link from the selection, only if there is a selection. This requires the HREF URI string to be passed in as a value argument. The URI must contain at least a single character, which may be a white space. (Internet Explorer will create a link with a null URI value.)"
}, {
	"cmd": "cut",
	"icon": "scissors",
	"desc": "Cuts the current selection and copies it to the clipboard. Clipboard capability must be enabled in the user.js preference file. See"
}, {
	"cmd": "decreaseFontSize",
	"desc": "Adds a SMALL tag around the selection or at the insertion point. (Not supported by Internet Explorer.)"
}, {
	"cmd": "delete",
	"icon": "scissors",
	"desc": "Deletes the current selection."
}, {
	"cmd": "enableInlineTableEditing",
	"desc": "Enables or disables the table row and column insertion and deletion controls. (Not supported by Internet Explorer.)"
}, {
	"cmd": "enableObjectResizing",
	"desc": "Enables or disables the resize handles on images and other resizable objects. (Not supported by Internet Explorer.)"
}, {
	"cmd": "fontName",
	"val": "'Inconsolata', monospace",
	"desc": "Changes the font name for the selection or at the insertion point. This requires a font name string (\"Arial\" for example) to be passed in as a value argument."
}, {
	"cmd": "fontSize",
	"val": "1-7",
	"icon": "text-height",
	"desc": "Changes the font size for the selection or at the insertion point. This requires an HTML font size (1-7) to be passed in as a value argument."
}, {
	"cmd": "foreColor",
	"val": "rgba(0,0,0,.5)",
	"desc": "Changes a font color for the selection or at the insertion point. This requires a color value string to be passed in as a value argument."
}, {
	"cmd": "formatBlock",
	"desc": "Adds an HTML block-style tag around the line containing the current selection, replacing the block element containing the line if one exists (in Firefox, BLOCKQUOTE is the exception - it will wrap any containing block element). Requires a tag-name string to be passed in as a value argument. Virtually all block style tags can be used (eg. \"H1\", \"P\", \"DL\", \"BLOCKQUOTE\"). (Internet Explorer supports only heading tags H1 - H6, ADDRESS, and PRE, which must also include the tag delimiters < >, such as \"<H1>\".)"
}, {
	"cmd": "forwardDelete",
	"desc": "Deletes the character ahead of the cursor's position.  It is the same as hitting the delete key."
}, {
	"cmd": "heading",
	"val": "h3",
	"icon": "header",
	"desc": "Adds a heading tag around a selection or insertion point line. Requires the tag-name string to be passed in as a value argument (i.e. \"H1\", \"H6\"). (Not supported by Internet Explorer and Safari.)"
}, {
	"cmd": "hiliteColor",
	"val": "Orange",
	"desc": "Changes the background color for the selection or at the insertion point. Requires a color value string to be passed in as a value argument. UseCSS must be turned on for this to function. (Not supported by Internet Explorer.)"
}, {
	"cmd": "increaseFontSize",
	"desc": "Adds a BIG tag around the selection or at the insertion point. (Not supported by Internet Explorer.)"
}, {
	"cmd": "indent",
	"icon": "indent",
	"desc": "Indents the line containing the selection or insertion point. In Firefox, if the selection spans multiple lines at different levels of indentation, only the least indented lines in the selection will be indented."
}, {
	"cmd": "insertBrOnReturn",
	"desc": "Controls whether the Enter key inserts a br tag or splits the current block element into two. (Not supported by Internet Explorer.)"
}, {
	"cmd": "insertHorizontalRule",
	"desc": "Inserts a horizontal rule at the insertion point (deletes selection)."
}, {
	"cmd": "insertHTML",
	"val": "<h3>Life is great!</h3>",
	"icon": "code",
	"desc": "Inserts an HTML string at the insertion point (deletes selection). Requires a valid HTML string to be passed in as a value argument. (Not supported by Internet Explorer.)"
}, {
	"cmd": "insertImage",
	"val": "http://dummyimage.com/160x90",
	"icon": "picture-o",
	"desc": "Inserts an image at the insertion point (deletes selection). Requires the image SRC URI string to be passed in as a value argument. The URI must contain at least a single character, which may be a white space. (Internet Explorer will create a link with a null URI value.)"
}, {
	"cmd": "insertOrderedList",
	"icon": "list-ol",
	"desc": "Creates a numbered ordered list for the selection or at the insertion point."
}, {
	"cmd": "insertUnorderedList",
	"icon": "list-ul",
	"desc": "Creates a bulleted unordered list for the selection or at the insertion point."
}, {
	"cmd": "insertParagraph",
	"icon": "paragraph",
	"desc": "Inserts a paragraph around the selection or the current line. (Internet Explorer inserts a paragraph at the insertion point and deletes the selection.)"
}, {
	"cmd": "insertText",
	"val": new Date(),
	"icon": "file-text-o",
	"desc": "Inserts the given plain text at the insertion point (deletes selection)."
}, {
	"cmd": "italic",
	"icon": "italic",
	"desc": "Toggles italics on/off for the selection or at the insertion point. (Internet Explorer uses the EM tag instead of I.)"
}, {
	"cmd": "justifyCenter",
	"icon": "align-center",
	"desc": "Centers the selection or insertion point."
}, {
	"cmd": "justifyFull",
	"icon": "align-justify",
	"desc": "Justifies the selection or insertion point."
}, {
	"cmd": "justifyLeft",
	"icon": "align-left",
	"desc": "Justifies the selection or insertion point to the left."
}, {
	"cmd": "justifyRight",
	"icon": "align-right",
	"desc": "Right-justifies the selection or the insertion point."
}, {
	"cmd": "outdent",
	"icon": "outdent",
	"desc": "Outdents the line containing the selection or insertion point."
}, {
	"cmd": "paste",
	"icon": "clipboard",
	"desc": "Pastes the clipboard contents at the insertion point (replaces current selection). Clipboard capability must be enabled in the user.js preference file. See"
}, {
	"cmd": "redo",
	"icon": "repeat",
	"desc": "Redoes the previous undo command."
}, {
	"cmd": "removeFormat",
	"desc": "Removes all formatting from the current selection."
}, {
	"cmd": "selectAll",
	"desc": "Selects all of the content of the editable region."
}, {
	"cmd": "strikeThrough",
	"icon": "strikethrough",
	"desc": "Toggles strikethrough on/off for the selection or at the insertion point."
}, {
	"cmd": "subscript",
	"icon": "subscript",
	"desc": "Toggles subscript on/off for the selection or at the insertion point."
}, {
	"cmd": "superscript",
	"icon": "superscript",
	"desc": "Toggles superscript on/off for the selection or at the insertion point."
}, {
	"cmd": "underline",
	"icon": "underline",
	"desc": "Toggles underline on/off for the selection or at the insertion point."
}, {
	"cmd": "undo",
	"icon": "undo",
	"desc": "Undoes the last executed command."
}, {
	"cmd": "unlink",
	"icon": "chain-broken",
	"desc": "Removes the anchor tag from a selected anchor link."
}, {
	"cmd": "useCSS ",
	"desc": "Toggles the use of HTML tags or CSS for the generated markup. Requires a boolean true/false as a value argument. NOTE: This argument is logically backwards (i.e. use false to use CSS, true to use HTML). (Not supported by Internet Explorer.) This has been deprecated; use the styleWithCSS command instead."
}, {
	"cmd": "styleWithCSS",
	"desc": "Replaces the useCSS command; argument works as expected, i.e. true modifies/generates style attributes in markup, false generates formatting elements."
}];
angular.module("myApp", [])
	.directive("click", function () {
		return {
			restrict: "A",
			link: function (scope, element, attrs) {
				element.bind("click", function () {
					scope.$evalAsync(attrs.click);
				});
			}
		};
	})
	.controller("Example", function ($scope) {
		$scope.supported = function (cmd) {
			var css = !!document.queryCommandSupported(cmd.cmd) ? "btn-succes" : "btn-error"
			return css
		};
		$scope.icon = function (cmd) {
			return (typeof cmd.icon !== "undefined") ? "fa fa-" + cmd.icon : "";
		};
		$scope.doCommand = function (cmd) {
			if ($scope.supported(cmd) === "btn-error") {
				alert("execCommand(“" + cmd.cmd + "”)\nis not supported in your browser");
				return;
			}
			val = (typeof cmd.val !== "undefined") ? prompt("Value for " + cmd.cmd + "?", cmd.val) : "";
			document.execCommand(cmd.cmd, false, (cmd.val || ""));
		}
		$scope.commands = commands;
		$scope.tags = [
    'Bootstrap', 'AngularJS', 'execCommand'
  ]
	})
*/
