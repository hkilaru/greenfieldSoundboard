"use strict";

var LibraryList = function LibraryList(_ref) {
  var library = _ref.library;
  var getCurrentSound = _ref.getCurrentSound;

  var results = library;
  var audio = null;

  var playTrack = function playTrack(item) {
    audio = new Audio(item);
    audio.play();
    // if(!audio){
    //   audio = new Audio(item);
    //   audio.play();
    // } else {
    //   audio.pause();
    //   audio = null;
    // }
  };

  return React.createElement(
    "div",
    { className: "sound-library" },
    React.createElement(
      "ul",
      null,
      results.map(function (result) {
        return React.createElement("li", { className: "sound-item", key: results.indexOf(result), onClick: function onClick() {
            playTrack(result.previews['preview-hq-mp3']);
            getCurrentSound(result.previews['preview-hq-mp3']);
          } });
      })
    )
  );
};

window.LibraryList = LibraryList;