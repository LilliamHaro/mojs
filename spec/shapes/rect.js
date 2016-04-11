(function() {
  var Bit, Rect, ns, rect, svg;

  Rect = mojs.shapesMap.getShape('rect');

  Bit = mojs.shapesMap.getShape('bit');

  ns = 'http://www.w3.org/2000/svg';

  svg = typeof document.createElementNS === "function" ? document.createElementNS(ns, "svg") : void 0;

  rect = new Rect({
    ctx: svg
  });

  describe('Rect ->', function() {
    it('should extend Bit', function() {
      return expect(rect instanceof Bit).toBe(true);
    });
    describe('defaults ->', function() {
      it('should have shape of "rect"', function() {
        return expect(rect._defaults.shape).toBe('rect');
      });
      return it('should have ratio of 1.43', function() {
        return expect(rect._defaults.ratio).toBe(1.43);
      });
    });
    describe('draw ->', function() {
      it('should add properties to el', function() {
        var height, rx, ry, width, x, y;
        svg = typeof document.createElementNS === "function" ? document.createElementNS(ns, "svg") : void 0;
        rect = new Rect({
          ctx: svg,
          radius: 20,
          x: 50,
          y: 100,
          rx: 10,
          ry: 20
        });
        width = rect.el.getAttribute('width');
        height = rect.el.getAttribute('height');
        x = rect.el.getAttribute('x');
        y = rect.el.getAttribute('y');
        rx = rect.el.getAttribute('rx');
        ry = rect.el.getAttribute('ry');
        expect(width).toBe('40');
        expect(height).toBe('40');
        expect(x).toBe('30');
        expect(y).toBe('80');
        expect(rx).toBe('10px');
        return expect(ry).toBe('20px');
      });
      it('should work with radiusX/radiusY props', function() {
        var height, width, x, y;
        svg = typeof document.createElementNS === "function" ? document.createElementNS(ns, "svg") : void 0;
        rect = new Rect({
          ctx: svg,
          radiusY: 50,
          radiusX: 40,
          x: 100,
          y: 200
        });
        width = rect.el.getAttribute('width');
        height = rect.el.getAttribute('height');
        expect(width).toBe('80');
        expect(height).toBe('100');
        x = rect.el.getAttribute('x');
        y = rect.el.getAttribute('y');
        expect(x).toBe('60');
        return expect(y).toBe('150');
      });
      return it('should call super method', function() {
        svg = typeof document.createElementNS === "function" ? document.createElementNS(ns, "svg") : void 0;
        rect = new Rect({
          ctx: svg
        });
        spyOn(Rect.__super__, 'draw');
        rect.draw();
        return expect(Rect.__super__.draw).toHaveBeenCalled();
      });
    });
    return describe('getLength method', function() {
      it('should calculate total length of the path', function() {
        var bit, radius;
        radius = 100;
        bit = new Rect({
          ctx: document.createElementNS(ns, 'svg'),
          radius: radius
        });
        return expect(bit.getLength()).toBe(400);
      });
      return it('should calculate total length of the with different radiusX/Y', function() {
        var bit, radiusX, radiusY;
        radiusX = 100;
        radiusY = 50;
        bit = new Rect({
          ctx: document.createElementNS(ns, 'svg'),
          radiusX: radiusX,
          radiusY: radiusY
        });
        return expect(bit.getLength()).toBe(2 * radiusX + 2 * radiusY);
      });
    });
  });

}).call(this);
