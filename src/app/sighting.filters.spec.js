(function(){
'use strict';

  describe('filter', function() {

    beforeEach(module('sightingFilters'));

    describe('firstLetter to Cap', function() {

      it('should convert first letter of string to uppercase',
          inject(function(firstLetterCap) {
        expect(firstLetterCap('teststring')).toBe('Teststring');

      }));
    });
  });
})();
