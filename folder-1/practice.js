/* ---- John McCutchan ---- */
/* ---- John McCutchan ---- */
/* Notes:
*  A place to practice JS stuff.
*/
/* ============= Find A key  ==========*/
// document.onkeypress = function(e) { // doesn't have to be "e"
//     console.log("Key that was pressed: " + e.which);
//     console.log("Document has focus: " + document.hasFocus());
//     console.log("**document.nodeName** " + document.nodeName);
//     console.log("**document.activeElement** " + document.activeElement);
//     console.dirxml(document.activeElement);
// };
/* ============= Hit Return With a Input Focused  ==========*/
document.onkeypress = function(e) { // doesn't have to be "e"
    console.log("Key that was pressed: " + e.which);
    console.log("Document has focus: " + document.hasFocus());
    console.log("**document.nodeName** " + document.nodeName);
    console.log("**document.activeElement** " + document.activeElement);
    console.dirxml(document.activeElement);
    if (e.keyCode == 13){
        console.log("Return Key Pressed");
        return false;
    }
};
/* ====== Bone Pile ====== */
//&& (document.getElementsByTagName("input") === checkFocus)
// function returnfocusKeyPress(event) { // event is object KeyBoardEvent
//   var checkFocus = document.activeElement;
//   if ((event.keyCode === 13) && (checkFocus == null)){ // compares it to 13 (return key)
//     console.log("Input is focused and enter key is pressed " + document.hasFocus() + document.activeElement);
//   }
// }
// && (checkFocus === true))
// function CheckFocus () {
//   var info = document.getElementById ("info");
//   if (document.hasFocus ()) {
//       info.innerHTML = "The document has the focus.";
// };
/*
window.addEventListener('keypress', function (e) { // added enter key listener
  /* ----- Input Focus Validation ---- */
/*
  if ((e.keyCode == 13) && (document.querySelector("input").focus() !== null)) {
    console.log("just hit enter" + document.activeElement); // checks to see if enter key is hit and element in the focus field
    checkFields(); // calls checkFields
  }
}); // << Because an autonomous function was called // end enter key and focus input validation
*/
