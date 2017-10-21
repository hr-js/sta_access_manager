const Sound = require("node-aplay");

class SoundPlayer {
  constructor(){
    this.musicfile = "./sample.wav";
    this.soundObj = new Sound();	  
  }
  set musicfile(filepath){
    this.musicfile = filepath;
  }
  play(){
    this.soundObj.play(this.musicfile);
  }
}

module.exports = SoundPlayer;
