describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect( split( [1, 2, 3, 4, 5] )).toEqual( [[1, 2], [3, 4, 5]] );
  });
});

describe('Merge function', function() {
  it('is able to merge two sorted arrays into one sorted array', function() {
    expect( merge( [1, 4], [3, 7] )).toEqual( [1, 3, 4, 7]);
    expect( merge( [1, 3], [2, 4, 5] )).toEqual( [1, 2, 3, 4, 5]);
    expect( merge( [5], [1] )).toEqual( [1, 5]);
  });
});