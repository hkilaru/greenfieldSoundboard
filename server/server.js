var app = require('./server-config.js');
var db = require('./database.js');

var port = process.env.PORT || 8000;

app.listen(port);

// var newKeyboard = new db.keyboard({
//  97: "/soundfiles/deep-techno-groove.wav",
// 98: "/soundfiles/bam-bam-bolam.wav",
// 99: "/soundfiles/nyan-cat.wav",
// 100: "/soundfiles/day.wav",
// 101: "/soundfiles/beads.wav",
// 102: "/soundfiles/drums.wav",
// 103: "/soundfiles/pew-pew.wav",
// 104: "/soundfiles/grendel.wav",
// 105: "/soundfiles/derp-yell.wav",
// 106: "/soundfiles/beltbuckle.wav",
// 107: "/soundfiles/oh-yeah.wav",
// 108: "/soundfiles/power-up.wav",
// 109: "/soundfiles/straight-techno-beat.wav",
// 110: "/soundfiles/kamehameha.wav",
// 111: "/soundfiles/fart.wav",
// 112: "/soundfiles/heavy-rain.wav",
// 113: "/soundfiles/jet-whoosh.wav",
// 114: "/soundfiles/mystery-chime.ogg",
// 115: "/soundfiles/space-bloop.wav",
// 116: "/soundfiles/techno-drums2.wav",
// 117: "/soundfiles/whale.wav",
// 118: "/soundfiles/vegeta-big-bang.wav",
// 119: "/soundfiles/piano-mood.wav",
// 120: "/soundfiles/boing.wav",
// 121: "/soundfiles/techno-drums.wav",
// 122: "/soundfiles/guitar-chord.wav"
// });
//
// newKeyboard.save(function(err){
//   if(err){
//     console.log("newKeyboard not saved")
//   }
//   console.log("newKeyboard saved!");
// })

console.log('Soundboard is now listening on port ' + port);
