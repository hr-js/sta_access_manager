const Sound = require("node-aplay");

class SoundPlayer {
  constructor(){
    this._musicfile = "./sample.wav";
    this.soundObj = new Sound();	  
  }
  set musicfile(filepath){
    this._musicfile = filepath;
  }
  play(){
    this.soundObj.play(this.musicfile);
  }
}

module.exports = SoundPlayer;
