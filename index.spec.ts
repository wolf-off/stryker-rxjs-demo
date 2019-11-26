import {Demo} from './index';

describe('Demo', () => {
    it('should create', () => {
        var demo = new Demo();
        expect(demo).toBeTruthy();
    });
    
    it('should have default value', () => {
        var demo = new Demo();
        expect(demo.value).toEqual(0);
    })
})