describe('Person', () => {
  it('should report name', () => {
    expect(new Person('John').name).toEqual('John');
  });
});


describe('Node', () => {
  it('should have node support', () => {
    expect(require('http')).not.toBeUndefined();
  });

  it('should have FS support', () => {
    expect(require('fs')).not.toBeUndefined();
  });
});
