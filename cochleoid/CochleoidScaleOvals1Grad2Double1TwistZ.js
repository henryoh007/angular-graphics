window.App = angular.module('App', []);

App.controller('MyCtrl', function($scope){
  $scope.getElems = function(){
    var basePointX  = 350, basePointY = 300;
    var currentX    = 0, currentY     = 0;
    var offsetX     = 0, offsetY      = 0;
    var radius      = 0, spiralCount  = 4;
    var Constant    = 20000, angle    = 0;
    var deltaAngle  = 1, maxAngle     = 721;
   
    var offsetX=0, offsetY=0, index=0;
    var rectWidth=80, rectHeight=120, elems=[], color="";
    var colors=["#FFFF00","#FF00FF","#FF00FF","#FF0000"];
  
    for(angle=1; angle<maxAngle; angle+=deltaAngle) {
      radius = Constant*
               Math.sin(angle*Math.PI/180)/angle;
 
      offsetX  = radius*Math.cos(angle*Math.PI/180);
      offsetY  = radius*Math.sin(angle*Math.PI/180);
      currentX = basePointX+offsetX;
      currentY = basePointY-offsetY;
      
      // alternate between red and blue
      index = Math.floor(angle/deltaAngle);
                 
      var transform = "scale("+(angle/maxAngle)+")";
  
      // append an (x,y) pair of values that
      // represent the upper-left vertex
      elems.push({x:currentX, y:currentY,
                  rw:rectWidth, rh:rectHeight,
                  tr:transform, fill:colors[index%2]});
    }
 
    return elems;
  };
});

