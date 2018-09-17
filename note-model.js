(function(exports) {
  function Note() {
    this.text = "My favourite language is Javascript (or not)."
  }
  exports.Note = Note
})(this)

var note = new Note();
console.log(note.text);
