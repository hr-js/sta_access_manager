const Sound = require('node-aplay');

function SoundPlayer(){
  // 初期化時にデフォルトの音源を読み込み
  this.defaultMusic = './sample.wav';
  this.selectMusic = null;
  this.soundObj = new Sound();
};

SoundPlayer.prototype = {
  //個別の音源のファイルパスをセットする
  setSound: function(filepath){
    this.selectMusic = filepath;
  },
  //音源を再生する
  play: function(){
    if(this.selectMusic == null){
	    this.soundObj.play(this.defaultMusic);
    	    return;
    }
    this.soundObj.play(this.selectMusic);
  }
};

module.exports = SoundPlayer;
