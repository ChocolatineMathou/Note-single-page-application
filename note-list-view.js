(function (exports) {
  function View() {
  }

  View.prototype.arrayToHTML = function (arr) {
    html = "<ul>"
    arr.forEach(function(item) {
      html += `<li>${item.textReturn()}</li>`
    })
    html += "</ul>"
    return html;
  }
  exports.View = View;
})(this)
