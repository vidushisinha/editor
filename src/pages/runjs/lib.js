import * as CodeMirror from "codemirror/lib/codemirror";

import "./formatting";

import "codemirror/lib/codemirror.css";

import "codemirror/theme/material.css";

import "codemirror/mode/javascript/javascript";
import "codemirror/mode/htmlmixed/htmlmixed";
import "codemirror/mode/css/css";

import "codemirror/addon/fold/foldcode";
import "codemirror/addon/fold/foldgutter";
import "codemirror/addon/fold/brace-fold";
import "codemirror/addon/fold/comment-fold";
import "codemirror/addon/fold/foldgutter.css";

import "codemirror/addon/edit/matchbrackets";

import "codemirror/addon/hint/show-hint";
import "codemirror/addon/hint/javascript-hint";
import "codemirror/addon/hint/html-hint";
import "codemirror/addon/hint/css-hint";
import "codemirror/addon/hint/show-hint.css";

import "codemirror/keymap/sublime.js";

import emmet from "@emmetio/codemirror-plugin";

emmet(CodeMirror);

function debounce(fn, wait) {
	var timer = null;
	return function () {
		if (timer !== null) {
			clearTimeout(timer);
		}
		timer = setTimeout(fn, wait);
	};
}

function handle() {
	console.log(Math.random());
}

export function initCodeEditor(dom, mode, initValue, fn) {
	let editor = CodeMirror.fromTextArea(dom, {
		mode: mode,
		lineWrapping: true,
		foldGutter: true,
		gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
		matchBrackets: true,
		smartIndent: true,
		indentUnit: 4,
		theme: "material",
		keymap: "sublime",
		extraKeys: {
			Tab: "emmetExpandAbbreviation",
			Esc: "emmetResetAbbreviation",
			Enter: "emmetInsertLineBreak",
			Ctrl: "autocomplete",
		},
		lineNumbers: true,
	});
	editor.setOption("value", initValue);

	editor.on("changes", debounce(fn, 800));

	return editor;
}

export function createNode(htmlStr) {
	var div = document.createElement("div");
	div.innerHTML = htmlStr;
	return div.childNodes[0];
}
