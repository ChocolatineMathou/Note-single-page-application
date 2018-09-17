function testText() {
  var string = "My favourite language is Javascript (or not)."
  var note = new Note(string);
  assert.equal(note.textReturn() === "My favourite language is Javascript (or not).")
};
testText();
console.log('test passed');

// function testArray() {
//   var list = new List();
//   // var note1 = new Note("Note 1");
//   // var note2 = new Note("Note 2");
//   console.log(list.notes);
//   assert.equal(list.notes == [])
// };
// testArray();
// console.log('test passed');

function testAddNote() {
  var list = new List();
  var note = new Note("Just a new todo")
  list.addNote(note);
  assert.equal(list.notes[0].text === "Just a new todo");
};
testAddNote();
console.log('test passed');

function testShowList() {
  var list = new List();
  var note1 = new Note("Just a new todo")
  var note2 = new Note("Another todo")
  list.addNote(note1);
  list.addNote(note2);
  assert.equal(list.showNotes()[0].text === "Just a new todo");
  assert.equal(list.showNotes()[1].text === "Another todo");
  assert.equal(list.showNotes().length === 2);
};
testShowList();
console.log('test passed');

function returnsHTML() {
  var view = new View();
  var list = new List();
  var note1 = new Note("N1")
  var note2 = new Note("N2")
  list.addNote(note1);
  list.addNote(note2);
  assert.equal(view.arrayToHTML(list.showNotes()) === "<ul><li>N1</li><li>N2</li></ul>");
};
returnsHTML();
console.log('test passed');
