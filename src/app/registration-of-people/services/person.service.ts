import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { environment } from "src/environments/environment";
import { Person } from "../models/person.model";
import { SimpleFilter } from "src/app/shared/models/simple-filter.model";
import { Grid } from "src/app/shared/models/generic-grid.model";

@Injectable({ providedIn: 'root' })
export class PersonService {

    public path = 'api/Person';

    constructor(private http: HttpClient) { }

    public createPerson(createPerson: Person): Observable<any> {
        const url = `${environment.URL_SIMPLE_API}/${this.path}/CreatePerson`; 
        return this.http.put(url, createPerson).pipe(take(1));
    }

    public updatePerson(createPerson: Person): Observable<any> { 
        const url = `${environment.URL_SIMPLE_API}/${this.path}/UpdatePerson`; 
        return this.http.put(url, createPerson).pipe(take(1));
    }

    public deletePerson(id: string): Observable<any> {  
        const url = `${environment.URL_SIMPLE_API}/${this.path}/${id}`;  
        return this.http.delete(url).pipe(take(1));
    }

    public getAllPersons(simpleFilter: SimpleFilter): Observable<Grid> {  
        const skip = (simpleFilter.pageIndex! - 1) * simpleFilter.pageSize!;
        const url = `${environment.URL_SIMPLE_API}/${this.path}/GetAllPersons?pageIndex=${skip}&pageSize=${simpleFilter.pageSize}&term=${simpleFilter.term}`; 
        return this.http.get(url).pipe(take(1), map((response: Grid) => response));
    }

    public getPersonById(id: string): Observable<Person> {  
        const url = `${environment.URL_SIMPLE_API}/${this.path}/GetPersonById?id=${id}`; 
        return this.http.get(url).pipe(take(1), map((response: Person) => response));
    }
}