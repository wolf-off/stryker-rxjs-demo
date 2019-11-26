import {Demo} from './index';

describe('Demo', () => {
    it('should create', () => {
        var demo = new Demo();

        expect(demo).toBeTruthy();
    });

    it('should have default value', done => {
        var demo = new Demo();

        demo.filtered$.subscribe(e => {
            expect(e).toEqual(0);
            done();
        })
    })

    it('should change value', done => {
        var demo = new Demo();

        demo.update(2)

        demo.filtered$.subscribe(e => {
            expect(e).toEqual(3);
            done();
        })
    })
})