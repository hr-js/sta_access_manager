const Sound = require('node-aplay');

function SoundPlayer(){
  // 初期化時にデフォルトの音源を読み込み
  this.musicFilePath = './sample.wav'
  this.soundObj = new Sound();
};

SoundPlayer.prototype = {
  //個別の音源のファイルパスをセットする
  setSound: function(filepath){
    this.musicFilePath = filepath;
  },
  //音源を再生する
	play: function(){
    this.soundObj.play(this.musicFilePath);
  }
};

module.exports = SoundPlayer;
