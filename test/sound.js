const Sound = require("node-aplay");

class SoundPlayer {
  constructor(){
    this.soundObj = new Sound("./sample.wav");	  
  }
  set musicfile(filepath){
    this._soundObj = new Sound(filepath);
  }
  play(){
    this.soundObj.play();
  }
}

module.exports = SoundPlayer;
