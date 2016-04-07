Crafty.c('Obstacle', {
    init: function() {
        var minVelocity = extern('obstacle_min_velocity');
        var maxVelocity = extern('obstacle_max_velocity');
        var velocityDiff = maxVelocity - minVelocity;
        
        this.requires('Actor')
            .size(100, 50).color('#888888')
            .move(Game.view.width + Math.random() * 400, Math.random() * 600 - 50) // view minus our height
            .velocity(-minVelocity + Math.random() * -maxVelocity, 0);
            
        if (extern("flag_obstacles_reorient") == true && Math.random() * 100 <= 50)
        {
            this.rotation = 90;
        }
    }
})