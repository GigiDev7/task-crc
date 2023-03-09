import { HttpClient } from '@angular/common/http';
import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from '../shared/interfaces';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';


@UntilDestroy()
@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {
  public user: IUser | null = null
  
  constructor(private route:ActivatedRoute, private http:HttpClient){}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: ({userId}) => {
        const id = +userId[userId.length - 1]
        this.http.get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`).pipe(untilDestroyed(this)).subscribe({
          next: (res:IUser) => {
            this.user = res
          }
        })
      }
    })
  }
}
