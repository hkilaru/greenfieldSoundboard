var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Grid = require('gridfs-stream');
var fs = require('fs');
var fse = require('fs-extra');
var db = require('./dbConnection.js')
db.conn.once('open', function(){
  console.log("connection established to remoteDB");
})
Grid.mongo = mongoose.mongo;

//SCHEMAS AND MODELS
var soundSchema = new Schema({
  name: String,
  soundLink: String,
  uploaded: Boolean
});

var Sound = mongoose.model('Sound', soundSchema);

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

//HANDLE UPLOADS

// TO ADD SOUND TO DATABASE
var saveToDB = function(name, res) {
  console.log("saveToDB called in database.js!!!!", name);
  //establishes filestream to remoteDB
  var gfs = Grid(db.conn.db);

  //creates stream to remote database and defines file name to be saved
  var writestream = gfs.createWriteStream({
      filename: name
  });
  //reads sound from uploads folder and sends it to remoteDB
  fs.createReadStream('./uploads/' + name).pipe(writestream);
  //when file is done uploading to DB
  writestream.on('close', function (file) {
    //create new sound in collection so that when library is retrieved, uploaded sounds are also seen
    var newSound = new Sound({
      "name": name,
      "link": './downloads/' + name
    })
    newSound.save(function(err){
      //deletes from local directory after saved to remoteDB to avoid buildup of space
      fse.remove('./uploads/' + name, function (err) {
        if (err) return console.error(err)
        console.log(file.filename + 'Written To remote DB!! and deleted from local directory');
        //should change this response to the next() middleware so that appropriate front-end .then can be implemented
        res.send("file saved to DB and new sound added to sound collection!");
        console.log('success!')
      })
    })

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

module.exports = {
  'keyboard': Keyboard,
  'Sound': Sound,
  'saveToDB': saveToDB,
  'retrieveSound': retrieveSound
}
