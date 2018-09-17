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
  // console.log(list.notes[0].text);
  assert.equal(list.notes[0].text == "Just a new todo");
};
testAddNote();
console.log('test passed');
