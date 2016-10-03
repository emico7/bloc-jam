var animatePoints = function() {

    var points = document.getElementsByClassName('point');
    
    var revealPoint = function(elements) {
        
        for (var i=0; i < elements.length; i++) {
            elements[i].style.opacity = 1;
            elements[i].style.transform = "scaleX(1) translateY(0)";
            elements[i].style.msTransform = "scaleX(1) translateY(0)";
            elements[i].style.WebkitTransform = "scaleX(1) translateY(0)";
            
        }
     };
    
     revealPoint(points);

};