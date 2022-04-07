import { deleteDuplicateItemsInArray } from './deleteDuplicate';

describe('deleteDuplicateItemsInArray', () => {
  test('Remove items duplicate in array, in array simple', () => {
    const array = [0, 1, 2, 3, 4, 0];
    const arrayNoDuplicate = deleteDuplicateItemsInArray(array);
    expect([0, 1, 2, 3, 4]).toEqual(arrayNoDuplicate);
  });

  test('Remove items duplicate in array of object item equal', () => {
    const array = [
      {
        RouteFrameCode: 'AAA111',
        SOT: 100,
        WeePart: 'MONDAY',
        time: 1,
      },
      {
        RouteFrameCode: 'AAA111',
        SOT: 100,
        WeePart: 'MONDAY',
        time: 1,
      },
    ];
    const arrayNoDuplicate = deleteDuplicateItemsInArray(array);
    expect([
      {
        RouteFrameCode: 'AAA111',
        SOT: 100,
        WeePart: 'MONDAY',
        time: 1,
      },
    ]).toEqual(arrayNoDuplicate);
  });

  test('should not be removed when an element changes only in one data element', () => {
    const array = [
      {
        RouteFrameCode: 'AAA111',
        SOT: 100,
        WeePart: 'MONDAY',
        time: 1,
      },
      {
        RouteFrameCode: 'AAA222',
        SOT: 100,
        WeePart: 'MONDAY',
        time: 1,
      },
      {
        RouteFrameCode: 'AAA111',
        SOT: 100,
        WeePart: 'FRIDAY',
        time: 1,
      },
    ];
    const arrayNoDuplicate = deleteDuplicateItemsInArray(array);
    expect(array).toEqual(arrayNoDuplicate);
  });
});
