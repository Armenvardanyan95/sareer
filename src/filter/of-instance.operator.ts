import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

type Constructor<ClassInstance = any> = new () => ClassInstance;

export function ofInstance<T>(classType: Constructor<T>) {
    return function(source: Observable<T>): Observable<InstanceType<typeof classType>> {
        return source.pipe(filter(instance => instance instanceof classType));
    }
}
