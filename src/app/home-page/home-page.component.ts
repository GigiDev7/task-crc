import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {IUser} from '../shared/interfaces'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  public users:IUser[] | null = null

  constructor(private http:HttpClient){}


  ngOnInit(){
    this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users').pipe(untilDestroyed(this)).subscribe({
      next:(value) => {
        this.users = value
      },
    })
  }
}
