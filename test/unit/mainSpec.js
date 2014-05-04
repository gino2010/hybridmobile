/**
 * Created by gino on 5/4/14.
 */
describe('filter', function () {
    beforeEach(module('myApp'));

    describe('reverse', function() {
        it('should reverse a string', inject(function (reverseFilter) {
            except(reverseFilter('ABCD')).toEqual('DCBA');
            except(reverseFilter('John')).toEqual('nhoJ');
        }))
    })
})
