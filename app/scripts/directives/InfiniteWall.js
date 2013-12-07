angular.module('jiaoRongApp')
  .directive('infiniteWall', function() {
    return {
      restrict: 'E',
      replace: true,
      template: '<div id="viewport"><div id="wall"></div></div>',
      constroller: ['$scope', '$element', function($scope, $element) {

      }],
      link: function(scope, iElement) {
        var $viewport = iElement;
        var $draggable = iElement.children().first();
        var tilts = scope.tilts;
        var width = scope.width, height = scope.height, N = scope.repeat;
        var cache = {};
    
        
        function create_tile(el, format) {
          var t = format.top, l = format.left;

          var $e = $draggable.append('<div><img src="../../images/' + el.n + '"/></div>');
          var $new_tile = $e.children(":last");

          $new_tile.css(_.extend({
            position: "absolute",
          }, format));
     
        }
              
        function update_tiles() {
          var $this = $draggable;
          var $parent = $this.parent();

          var pos = {
            left: -$this.offset().left + $parent.offset().left,
            top: -$this.offset().top + $parent.offset().top
          }

          var x_lower_bound = (pos.left / width);
          var x_upper_bound = (pos.left + $viewport.width()) / width;
          var y_lower_bound = pos.top / height;
          var y_upper_bound = (pos.top + $viewport.height()) / height;

          for (var i = ~~x_lower_bound; i<=~~x_upper_bound; i++) {
            for (var j =~~y_lower_bound; j<=~~y_upper_bound; j++) {
              if (_.isUndefined(cache[i]))
                cache[i] = {};
          
              if (_.isUndefined(cache[i][j])) {
                cache[i][j] = true;
                _.forEach(tilts, function(el) {
                  var format = _.clone(el.format);
                  format.left += i*width;
                  format.top += j*height;
                  create_tile(el, format);
                });
              }
            }
          }
        };
              
        function contain(format, pos) {
          var tl = format.left, tt = format.top, tw = format.width, th = format.height,
              vl = pos.left, vt = pos.top, vw = $viewport.width(), vh = $viewport.height();
          if ((tl>=vl&&tl<=vl+vw&&tt>=vt&&tt<=vt+vh) ||
              (tl>=vl&&tl<=vl+vw&&tt+th>=vt&&tt+th<=vt+vh) ||
              (tl+tw>=vl&&tl+tw<=vl+vw&&tt>=vt&&tt<=vt+vh) ||Ï
              (tl+tw>=vl&&tl+tw<=vl+vw&&tt+th>=vt&&tt+th<=vt+vh))
            return true;
          return false;
        }
        // Setup
        //--------
        

        $draggable.offset({
          left: ($viewport.width() - width*N) / 2,
          top: ($viewport.height() - height*N) / 2
        });

        update_tiles();

        // The drag event handler.
        $draggable.css({
          position: "relative",
          cursor: "move"
        });

        _do = {
          'drag': function(e, ui) {
            update_tiles();
          }
        };
        
        $draggable.draggable(_do);

        // $draggable.draggable('option', 'containment', [
        //     (width*N - $viewport.width()) / 2,
        //     (height*N - $viewport.height()) / 2,
        //     (-width*N + $viewport.width()) / 2 + width*N,
        //     (-height*N + $viewport.height()) / 2 + height*N,
        //   ]);
      }
    }
  });