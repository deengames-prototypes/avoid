Crafty.c('ObstacleManager', {
   init: function() {
       this.bind('EnterFrame', function() {
           
         var obstacles = foreach('Obstacle', function(i, obstacle) {
             if (obstacle.x < -obstacle.attr('w')) {
                 obstacle.die();
             }
         });
         
         obstacles = Crafty('Obstacle');
         if (obstacles.length < extern('total_obstacles'))
         {
             Crafty.e('Obstacle');
         }  
       })
   } 
});