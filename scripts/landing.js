var pointsArray = document.getElementsByClassName('point');

var animatePoints = function(points) {
    
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

window.onload = function() {
    
   if (window.innerHeight > 950) {
       animatePoints(pointsArray);
   }
    
   var sellingPoints = document.getElementsByClassName('selling-points')[0];
   var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;    
   window.addEventListener('scroll', function(event) {
       if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance)
           animatePoints(pointsArray);
    });
}
