window.App = angular.module('App', []);

App.controller('MyCtrl', function($scope){
  $scope.getElems = function(){
    var basePointX  = 450, basePointY = 350;
    var currentX    = 0, currentY     = 0;
    var offsetX     = 0, offsetY      = 0;
    var radius      = 0, spiralCount  = 4;
    var Constant    = 200, angle      = 0;
    var deltaAngle  = 1, maxAngle     = 721;
    var radius      = 0, sine         = 0;
    var cosine      = 0, factor       = 1;
    var modulusX    = 0, modulusY     = 0;
    var stripCount  = 10, stripWidth  = Math.floor(maxAngle/stripCount);
    var currStrip   = 0, index        = 0; 
    var scaleFactor = 1, scaleFactors = [0.5, 1.0];
    
    var offsetX=0, offsetY=0, index=0;
    var majorAxis=40, minorAxis=60, elems=[], color="";
    var majorAxisScaled=0, minorAxisScaled=0;
    var colors=["#FF0000","#0000FF","#FF00FF","#FF0000"];
  
    for(angle=0; angle<maxAngle; angle+=deltaAngle) {
      radius   = Constant*Constant/angle;
      offsetX  = radius*Math.cos(angle*Math.PI/180);
      offsetY  = radius*Math.sin(angle*Math.PI/180);
      currentX = basePointX+offsetX;
      currentY = basePointY-offsetY;
      modulusX = angle % majorAxis;
      modulusY = angle % minorAxis;
  
      // alternate between red and blue
      index = Math.floor(angle/deltaAngle);
  
      currStrip = Math.floor(angle/stripWidth);
      if(currStrip % 2 == 0) {
        scaleF = scaleFactors[0];
      } else {
        scaleF = scaleFactors[1];
      }
  
      majorAxisScaled = majorAxis*scaleF;
      minorAxisScaled = minorAxis*scaleF;
  
      var transform = "scale("+(angle/maxAngle)+")";
  
      // append an (x,y) pair of values that
      // represent the upper-left vertex
      elems.push({cx:currentX,  cy:currentY,
                  rx:majorAxisScaled, ry:minorAxisScaled,
                  tr:transform, fill:colors[index%2]});
    }
  
    return elems;
  };
});

