const Sound = require('node-aplay');

var SoundPlayer = function(){
  // 初期化時にデフォルトの音源を読み込み
  this.musicFilePath = './sample.wav'
  this.soundObj = new Sound();
};

SoundPlayer.prototype = {
  //個別の音源のファイルパスをセットする
  setSound: fucntion(filepath){
    this.musicFilePath = filepath;
  },
  //音源を再生する
  play; fucntion(){
    this.soundObj.play(this.musicFilePath);
  }
};
