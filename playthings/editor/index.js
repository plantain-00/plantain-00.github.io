require("./index.css");

$(function () {
    hljs.initHighlightingOnLoad();

    $("#content").keydown(function (e) {
        var keyCode = e.keyCode || e.which;

        if (keyCode == 9) {
            e.preventDefault();
            var start = this.selectionStart;
            var end = this.selectionEnd;
            var val = this.value;
            var selected = val.substring(start, end);
            var re, count;

            if (e.shiftKey) {
                re = /^\t/gm;
                count = -selected.match(re).length;
                this.value = val.substring(0, start) + selected.replace(re, '') + val.substring(end);
                // todo: add support for shift-tabbing without a selection
            } else {
                re = /^/gm;
                count = selected.match(re).length;
                this.value = val.substring(0, start) + selected.replace(re, '\t') + val.substring(end);
            }

            if (start === end) {
                this.selectionStart = end + count;
            } else {
                this.selectionStart = start;
            }

            this.selectionEnd = end + count;
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