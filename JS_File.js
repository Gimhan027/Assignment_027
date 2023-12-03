function Bold_Feature() {
    document.execCommand('bold', true, null)
}

function Underline_Feature() {
    document.execCommand('underline', true, null)
}

function Italic_Feature() {
    document.execCommand('italic', true, null)
}

function Font_color_Feature() {
    var fontColor = document.querySelector('input[type="color"]').value;
    if (fontColor) {
        document.execCommand('styleWithCSS', false, true);
        document.execCommand('foreColor', false, fontColor);
    }
}