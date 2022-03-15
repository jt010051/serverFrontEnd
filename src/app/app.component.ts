import { catchError } from 'rxjs/operators';
import { map, Observable, of, startWith } from 'rxjs';
import { ServerService } from './service/server.service';
import { Component, OnInit } from '@angular/core';
import { AppState } from './Interface/app-status';
import { CustomResponse } from './Interface/custon.response';
import { DataState } from './enum/data-state.enums';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  appState$: Observable<AppState<CustomResponse>>;
constructor(private serverService: ServerService){}  

ngOnInit(): void{
this.appState$ = this.serverService.servers$
  .pipe(

map(response =>{
  return{ dataState: DataState.LOADED_STATE, appData: response}
}),
startWith({dataState: DataState.LOADING_STATE }),
catchError((error: string)  =>{

return of({dataState: DataState.ERROR_STATE, error})

})

  );


}


}
