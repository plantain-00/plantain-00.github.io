require("./index.css");
require("./default.css");

var Keys = require("./Keys");
var operator = require("./operator");

$(function () {
    hljs.initHighlightingOnLoad();

    var context;

    $("#content").keydown(function (e) {
        var keyCode = e.keyCode || e.which;

        var tabType = $("input[name=tabType]:checked").val();

        if (keyCode == 9) {
            e.preventDefault();

            context = {
                text: this.value,
                start: this.selectionStart,
                end: this.selectionEnd
            };

            if (e.shiftKey) {
                operator.operate(context, Keys.ShiftTab, tabType);
                this.value = context.text;
                this.selectionStart = context.start;
                this.selectionEnd = context.end;
            } else {
                operator.operate(context, Keys.Tab, tabType);
                this.value = context.text;
                this.selectionStart = context.start;
                this.selectionEnd = context.end;
            }
        } else if (keyCode == 219) {
            e.preventDefault();

            context = {
                text: this.value,
                start: this.selectionStart,
                end: this.selectionEnd
            };

            if (e.shiftKey) {
                operator.operate(context, Keys.OpenBrace, tabType);
                this.value = context.text;
                this.selectionStart = context.start;
                this.selectionEnd = context.end;
            } else {
                operator.operate(context, Keys.OpenBracket, tabType);
                this.value = context.text;
                this.selectionStart = context.start;
                this.selectionEnd = context.end;
            }
        } else if (keyCode == 57 && e.shiftKey) {
            e.preventDefault();

            context = {
                text: this.value,
                start: this.selectionStart,
                end: this.selectionEnd
            };

            operator.operate(context, Keys.OpenParenthese, tabType);
            this.value = context.text;
            this.selectionStart = context.start;
            this.selectionEnd = context.end;
        } else if (keyCode == 222) {
            e.preventDefault();

            context = {
                text: this.value,
                start: this.selectionStart,
                end: this.selectionEnd
            };

            if (e.shiftKey) {
                operator.operate(context, Keys.DoubleQuotation, tabType);
                this.value = context.text;
                this.selectionStart = context.start;
                this.selectionEnd = context.end;
            } else {
                operator.operate(context, Keys.SingleQuotation, tabType);
                this.value = context.text;
                this.selectionStart = context.start;
                this.selectionEnd = context.end;
            }
        } else if (keyCode == 88 && e.ctrlKey) {
            context = {
                text: this.value,
                start: this.selectionStart,
                end: this.selectionEnd
            };

            operator.operate(context, Keys.Cut, tabType);
            this.value = context.text;
            this.selectionStart = context.start;
            this.selectionEnd = context.end;
        } else if (keyCode == 8) {
            context = {
                text: this.value,
                start: this.selectionStart,
                end: this.selectionEnd
            };

            operator.operate(context, Keys.Backspace, tabType);
            this.value = context.text;
            this.selectionStart = context.start;
            this.selectionEnd = context.end;
        } else if (keyCode == 188 && !e.shiftKey) {
            e.preventDefault();

            context = {
                text: this.value,
                start: this.selectionStart,
                end: this.selectionEnd
            };

            operator.operate(context, Keys.Comma, tabType);
            this.value = context.text;
            this.selectionStart = context.start;
            this.selectionEnd = context.end;
        } else if (keyCode == 32) {
            context = {
                text: this.value,
                start: this.selectionStart,
                end: this.selectionEnd
            };

            operator.operate(context, Keys.Space, tabType);
            this.value = context.text;
            this.selectionStart = context.start;
            this.selectionEnd = context.end;
        } else if (keyCode == 13) {
            e.preventDefault();

            context = {
                text: this.value,
                start: this.selectionStart,
                end: this.selectionEnd
            };

            operator.operate(context, Keys.Enter, tabType);
            this.value = context.text;
            this.selectionStart = context.start;
            this.selectionEnd = context.end;
        } else if (keyCode == 189 && !e.shiftKey) {
            context = {
                text: this.value,
                start: this.selectionStart,
                end: this.selectionEnd
            };

            operator.operate(context, Keys.Minus, tabType);
            this.value = context.text;
            this.selectionStart = context.start;
            this.selectionEnd = context.end;
        } else if (keyCode == 191 && !e.shiftKey) {
            context = {
                text: this.value,
                start: this.selectionStart,
                end: this.selectionEnd
            };

            operator.operate(context, Keys.Slash, tabType);
            this.value = context.text;
            this.selectionStart = context.start;
            this.selectionEnd = context.end;
        }
    });

    var md = markdownit();

    function preview() {
        var input = $("#content").val();
        var output = md.render(input);
        $("#output").html(output);
        $('pre code').each(function (i, block) {
            hljs.highlightBlock(block);
        });
    }

    $("#preview").click(preview);

    preview();
});