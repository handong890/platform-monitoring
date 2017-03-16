import {scaledPoints} from '../../src/helpers/graphicHelpers'

describe('graphicHelpers', () => {
  describe('#scaledPoints', () => {
    it('translates points into coordinates', () => {
      expect(scaledPoints([0, 1, 2], 100, 0, 100, 0)).toEqual('0,100 50,50, 100,0')
      expect(scaledPoints([1, 2], 100, 0, 100, 0)).toEqual('0,100 100,0')

      const res = scaledPoints([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 100, 0, 100, 0);
      expect(res).toEqual('0,100 10,90 20,80 30,70 40,60 50,50 60,40 70,30 80,20 90,10 100,0')
    })
  })
})