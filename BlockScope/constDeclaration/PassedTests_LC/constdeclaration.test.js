describe('`const` is like `let` plus read-only', () => {
  describe('scalar values are read-only', () => {
    it('e.g. a number', () => {
      const constNum = 0;
      assert.equal(constNum, 0);
    });
    it('or a string', () => {
      const constString = 'I am a const';
      assert.equal(constString, 'I am a const');
    });
  });
  const notChangeable = 23;
  it('const scope leaks too', () => {
    assert.equal(notChangeable, 23);
  });
  describe('complex types are NOT fully read-only', () => {
    it('array`s items can be changed', () => {
      const arr = [];
      arr[0] = 0;
      assert.equal(arr[0], 0);
    });
    it('object`s can be modified', () => {
      const obj = { x: 1 };
      obj.x = 2;
      assert.equal(obj.x, 2);
    });
  });
});