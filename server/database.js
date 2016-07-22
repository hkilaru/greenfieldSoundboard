var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Grid = require('gridfs-stream');
var fs = require('fs');

mongoose.connect('mongodb://needsclosure:needsclosure1@ds027175.mlab.com:27175/soundboard');
var conn = mongoose.connection;
Grid.mongo = mongoose.mongo;

// TO ADD SOUND TO DATABASE
var saveToDB = function(name) {
  conn.once('open', function () {
      console.log('open');
      var gfs = Grid(conn.db);
      console.log('OPEN!')
      // streaming to gridfs
      //filename to store in mongodb
      var writestream = gfs.createWriteStream({
          filename: name
      });
      fs.createReadStream('./uploads/412d6e3f5e8bad66d8d4ac0220c09660').pipe(writestream);
      writestream.on('close', function (file) {
          // do something with `file`
          console.log(file.filename + 'Written To remote DB!!');
      });
  });
}

//TO RETRIEVE SOUND FROM DATABASE
var retrieveSound = function(name) {
  conn.once('open', function(){
      console.log('open');
      var gfs = Grid(conn.db);
      var fs_write_stream = fs.createWriteStream('./downloads/'+ name);

  //read from mongodb
  var readstream = gfs.createReadStream({
       filename: 'sound files'
  });
  readstream.pipe(fs_write_stream);
  fs_write_stream.on('close', function () {
       console.log('sound downloaded');
     })
   })
}


var keyboardSchema = new Schema({
  name: String,
  97 : String,
  98 : String,
  99 : String,
  100 : String,
  101 : String,
  102 : String,
  103 : String,
  104 : String,
  105 : String,
  106 : String,
  107 : String,
  108 : String,
  109 : String,
  110 : String,
  111 : String,
  112 : String,
  113 : String,
  114 : String,
  115 : String,
  116 : String,
  117 : String,
  118 : String,
  119 : String,
  120 : String,
  121 : String,
  122 : String
});


var Keyboard = mongoose.model('Keyboard', keyboardSchema);

module.exports = {
  'keyboard': Keyboard
}
