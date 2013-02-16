define(['render'],
function(render) {

  describe("render", function() {
    
    it('shoud export DOM utility function', function() {
      expect(render.$).to.exist;
      expect(render.$).to.be.a('function');
    });
    
    it('shoud export render function', function() {
      expect(render.render).to.exist;
      expect(render.render).to.be.a('function');
    });
    
  });
  
  return { name: "test.render" }
});
