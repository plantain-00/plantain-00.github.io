var TabType = require("./TabType");
var Keys = require("./Keys");
function getHead(context) {
    return context.text.substring(0, context.start);
}
function getTail(context) {
    return context.text.substring(context.end);
}
function isInOneLine(context) {
    for (var i = context.start; i < context.end; i++) {
        if (context.text[i] == '\r' || context.text[i] == '\n') {
            return false;
        }
    }
    return true;
}
function getSpaceNumberIn(context, from, max) {
    if (max === void 0) { max = 4; }
    var length = 0;
    for (var i = 0; i < max; i++) {
        if (context.text[from + i] == '\t') {
            length++;
            break;
        }
        if (context.text[from + i] != ' ') {
            break;
        }
        length++;
    }
    return length;
}
function findLineHead(context) {
    for (var i = context.start - 1; i >= 0; i--) {
        if (context.text[i] == '\r' || context.text[i] == '\n') {
            return i + 1;
        }
    }
    return 0;
}
function findLineEnd(context) {
    for (var i = context.end + 1; i < context.text.length; i++) {
        if (context.text[i] == '\r' || context.text[i] == '\n') {
            return i;
        }
    }
    return context.text.length;
}
var tabStrings = ["\t", "  ", "    "];
function getTabString(tabType) {
    return tabStrings[tabType];
}
function operate(context, key, tabType) {
    if (tabType === void 0) { tabType = 2 /* FourSpaces */; }
    switch (key) {
        case 0 /* OpenBrace */:
            context.text = getHead(context) + '{}' + getTail(context);
            context.start++;
            context.end++;
            break;
        case 1 /* OpenBracket */:
            context.text = getHead(context) + '[]' + getTail(context);
            context.start++;
            context.end++;
            break;
        case 2 /* OpenParenthese */:
            context.text = getHead(context) + '()' + getTail(context);
            context.start++;
            context.end++;
            break;
        case 3 /* SingleQuotation */:
            context.text = getHead(context) + "''" + getTail(context);
            context.start++;
            context.end++;
            break;
        case 4 /* DoubleQuotation */:
            context.text = getHead(context) + '""' + getTail(context);
            context.start++;
            context.end++;
            break;
        case 5 /* Tab */:
            var tabString = getTabString(tabType);
            if (context.start == context.end) {
                context.text = getHead(context) + tabString + getTail(context);
                context.start += tabString.length;
                context.end += tabString.length;
                return;
            }
            var startIndex = findLineHead(context);
            if (isInOneLine(context)) {
                context.text = context.text.substring(0, startIndex) + tabString + context.text.substring(startIndex);
                context.start += tabString.length;
                context.end += tabString.length;
                return;
            }
            var text = context.text.substring(0, startIndex) + tabString;
            var endIndex = context.end;
            context.start += tabString.length;
            context.end += tabString.length;
            for (var i = startIndex; i < endIndex; i++) {
                text += context.text[i];
                if (context.text[i] == "\r" || context.text[i] == "\n") {
                    text += tabString;
                    context.end += tabString.length;
                }
            }
            text += context.text.substring(endIndex);
            context.text = text;
            break;
        case 6 /* ShiftTab */:
            var startIndex = findLineHead(context);
            if (isInOneLine(context)) {
                var text = context.text.substring(0, startIndex);
                var length = getSpaceNumberIn(context, startIndex);
                context.text = text + context.text.substring(startIndex + length);
                context.start -= length;
                context.end -= length;
                if (context.start < 0) {
                    context.start = 0;
                }
                if (context.end < 0) {
                    context.end = 0;
                }
                return;
            }
            var text = context.text.substring(0, startIndex);
            var endIndex = context.end;
            var length = getSpaceNumberIn(context, startIndex);
            context.text = text + context.text.substring(startIndex + length);
            context.start -= length;
            context.end -= length;
            for (var i = startIndex; i < endIndex; i++) {
                text += context.text[i];
                if (context.text[i] == "\r" || context.text[i] == "\n") {
                    var length = getSpaceNumberIn(context, i + 1);
                    i += length;
                    context.end -= length;
                }
            }
            text += context.text.substring(endIndex);
            context.text = text;
            if (context.start < 0) {
                context.start = 0;
            }
            if (context.end < 0) {
                context.end = 0;
            }
            break;
        case 7 /* Cut */:
            if (context.start == context.end) {
                var startIndex = findLineHead(context);
                var endIndex = findLineEnd(context);
                if (context.text[endIndex] == "\n" || context.text[endIndex] == "\r") {
                    endIndex++;
                }
                else if (context.text[startIndex - 1] == "\n" || context.text[startIndex - 1] == "\r") {
                    startIndex--;
                }
                context.start = startIndex;
                context.end = endIndex;
                return;
            }
            break;
    }
}
exports.operate = operate;
//# sourceMappingURL=operator.js.map