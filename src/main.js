

/* global Phaser */

var config = {
        type: Phaser.AUTO,
        width:1300,
        height:600,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 200 },
                debug:false
            }
        },
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    };

    var game = new Phaser.Game(config);
    var player;
    var cursors;
    function preload ()
    {
        //Carga los recursos necesarios
        this.load.image('fondo', './img/fondo.png');
        this.load.spritesheet('personaje', './img/CorrerP.png',{ frameWidth: 32, frameHeight: 48 });

    }

    function create ()
    {
        //Mostrar en pantalla
        this.add.image(400, 300, 'fondo');
        player = this.physics.add.sprite(100, 450, 'personaje');
        player.setBounce(0);
        player.setCollideWorldBounds(true);
        
        
   this.anims.create({
    key: 'left',
    frames: this.anims.generateFrameNumbers('personaje', { start:7, end: 0 }),
    frameRate: 10,
    repeat: -1
});

this.anims.create({
    key: 'turn',
    frames: [ { key: 'personaje', frame: 8 } ],
    frameRate: 20
});

this.anims.create({
    key: 'right',
    frames: this.anims.generateFrameNumbers('personaje', { start: 9, end:16 }),
    frameRate: 10,
    repeat: -1
});
      
      cursors = this.input.keyboard.createCursorKeys();

    }
    
    function update (){
     if (cursors.left.isDown){
    player.setVelocityX(-160);
    player.anims.play('left', true);}
    
        else
    if (cursors.right.isDown){
    player.setVelocityX(160);
    player.anims.play('right', true);}
    
    else{
    player.setVelocityX(0);
    player.anims.play('turn');}

    if (cursors.up.isDown && player.body.touching.down){
    player.setVelocityY(-340);}
    }
    
//    var estadoPrincipal = {
//        
//    }