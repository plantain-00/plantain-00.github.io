require("./index.css");

var Keys = require("./Keys");
var operator = require("./operator");

$(function () {
    hljs.initHighlightingOnLoad();

    var context;

    $("#content").keydown(function (e) {
        var keyCode = e.keyCode || e.which;

        if (keyCode == 9) {
            e.preventDefault();

            context = {
                text: this.value,
                start: this.selectionStart,
                end: this.selectionEnd
            };

            if (e.shiftKey) {
                operator.operate(context, Keys.ShiftTab);
                this.value = context.text;
                this.selectionStart = context.start;
                this.selectionEnd = context.end;
            } else {
                operator.operate(context, Keys.Tab);
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
                operator.operate(context, Keys.OpenBrace);
                this.value = context.text;
                this.selectionStart = context.start;
                this.selectionEnd = context.end;
            } else {
                operator.operate(context, Keys.OpenBracket);
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

            operator.operate(context, Keys.OpenBrace);
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
                operator.operate(context, Keys.DoubleQuotation);
                this.value = context.text;
                this.selectionStart = context.start;
                this.selectionEnd = context.end;
            } else {
                operator.operate(context, Keys.SingleQuotation);
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

            operator.operate(context, Keys.Cut);
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