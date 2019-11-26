import {BehaviorSubject, pipe, Observable} from 'rxjs';
import {map, filter} from 'rxjs/operators';

export class Demo {
    value$ = new BehaviorSubject(0);

    filtered$: Observable<number> = this.value$.pipe(
        filter(e => e % 2 === 0),
        map(e => e / 2 * 3)
    );

    update(newValue: number) {
        this.value$.next(newValue);
    }
}