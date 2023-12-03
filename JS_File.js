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

function AlignLeft_Feature() {
    document.execCommand('justifyLeft', false, null);
  }

  function Center_Feature() {
    document.execCommand('justifyCenter', false, null);
  }

  function AlignRight_Feature() {
    document.execCommand('justifyRight', false, null);
  }

  function Justify_Feature() {
    document.execCommand('justifyFull', false, null);
  }

  function Undo_Feature() {
    document.execCommand('undo', false, null);
  }

  function Redo_Feature() {
    document.execCommand('redo', false, null);
  }