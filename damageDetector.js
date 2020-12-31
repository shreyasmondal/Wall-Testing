function detect(o1, o2) {
    if (o2.x - o1.x < o1.width / 2 + o1.width / 2) {
        
        var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness)
        o1.velocityX = 0
    
        if (damage < 10) {
            o2.shapeColor = color(0, 255, 0)
        }
    
        if (damage > 10) {
            o2.shapeColor = "red"
        }
    }
}