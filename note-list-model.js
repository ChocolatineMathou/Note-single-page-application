(function(exports) {
  function List() {
    this.notes = [];
  };

  // List.prototype.printNotes = function () {
  //
  // };

  List.prototype.addNote = function (note) {
    this.notes.push(note);
  };

  exports.List = List;

})(this)
