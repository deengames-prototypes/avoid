Crafty.c('Player', {
   init: function() {
       var self = this;
       
       this.requires('Actor').size(48, 48).color('#FF0000')
           .draggable()
           .collide('Obstacle', function(o) {
              self.die();
              Crafty.e('Text2').move(200, 200).text('GAME OVER!').fontSize(72); 
           });
   } 
});