define(['render'],
function(sail) {

  describe("sail", function() {
    
    it('shoud export DOM utility function', function() {
      expect(sail.$).to.exist;
      expect(sail.$).to.be.a('function');
    });
    
    it('shoud export render function', function() {
      expect(sail.render).to.exist;
      expect(sail.render).to.be.a('function');
    });
    
  });
  
  return { name: "test.render" }
});
