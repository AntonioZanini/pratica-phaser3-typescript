import Phaser from 'phaser';
import MainScene from 'scenes/main-scene';


const config : Phaser.Types.Core.GameConfig =  {
    type: Phaser.AUTO,
    backgroundColor: '#125555',
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: true
        }
    },
    scene: MainScene
};

const game = new Phaser.Game(config);
