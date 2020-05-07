import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
@Injectable()

export class studentApiService{

constructor(private httpclient: HttpClient){}

//get student data method
getData(): Observable<any>{
return this.httpclient.get('https://www.hatchways.io/api/assessment/students')
}

}