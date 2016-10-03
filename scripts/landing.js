var pointsArray = document.getElementsByClassName('point');

var animatePoints = function(points) {
    
    var revealPoint = function(elements) {
        
        forEach(elements);
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
