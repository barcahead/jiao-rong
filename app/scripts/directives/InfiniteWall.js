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
        var width = scope.width, height = scope.height, N = 3;
        var cache = {};
    
        
        function create_tile(el, format) {
          var t = format.top, l = format.left;

          if (_.isUndefined(cache[t]))
            cache[t] = {};
          
          if (_.isUndefined(cache[t][l])) {
            cache[t][l] = true;

            var $e = $draggable.append('<div><img src="../../images/' + el.n + '"/></div>');
            var $new_tile = $e.children(":last");

            $new_tile.css(_.extend({
              position: "absolute",
            }, format));
          }
     
        }
              
        function update_tiles() {
          var $this = $draggable;
          var $parent = $this.parent();

          var pos = {
            left: -$this.offset().left + $parent.offset().left,
            top: -$this.offset().top + $parent.offset().top
          }

          for (var i = 0; i<N; i++) {
            for (var j =0; j<N; j++) {
              _.forEach(tilts, function(el) {
                var format = _.clone(el.format);
                format.left += j*width;
                format.top += i*height;
                if (contain(format, pos)) {
                  create_tile(el, format);
                }
              });
            }
          }
        };
              
        function contain(format, pos) {
          var tl = format.left, tt = format.top, tw = format.width, th = format.height,
              vl = pos.left, vt = pos.top, vw = $viewport.width(), vh = $viewport.height();
          if ((tl>=vl&&tl<=vl+vw&&tt>=vt&&tt<=vt+vh) ||
              (tl>=vl&&tl<=vl+vw&&tt+th>=vt&&tt+th<=vt+vh) ||
              (tl+tw>=vl&&tl+tw<=vl+vw&&tt>=vt&&tt<=vt+vh) ||
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