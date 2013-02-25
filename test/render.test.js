define(['render', 'dom'],
function(render, dom) {

  describe("render", function() {
    
    it('shoud export render function', function() {
      expect(render.render).to.exist;
      expect(render.render).to.be.a('function');
      expect(render.render).to.be.equal(render);
    });
    
    it('shoud export engine function', function() {
      expect(render.engine).to.exist;
      expect(render.engine).to.be.a('function');
    });
    
    it('shoud export cache function', function() {
      expect(render.cache).to.exist;
      expect(render.cache).to.be.a('function');
    });
    
    it('shoud export loader function', function() {
      expect(render.loader).to.exist;
      expect(render.loader).to.be.a('function');
    });
    
    it('shoud export DOM utility function', function() {
      expect(render.$).to.exist;
      expect(render.$).to.be.a('function');
    });
    
  });
  
  // TODO: Add test case for DOM augmentation
  
  return { name: "test.render" }
});
