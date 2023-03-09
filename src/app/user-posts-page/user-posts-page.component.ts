import { HttpClient } from '@angular/common/http';
import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost } from '../shared/interfaces';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-user-posts-page',
  templateUrl: './user-posts-page.component.html',
  styleUrls: ['./user-posts-page.component.css']
})
export class UserPostsPageComponent implements OnInit {
  public posts: IPost[] | null = null

  constructor(private route:ActivatedRoute, private http:HttpClient){}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: ({userId}) => {
        const id = +userId[userId.length - 1]
        this.http.get<IPost[]>(`https://jsonplaceholder.typicode.com/users/${id}/posts`).pipe(untilDestroyed(this)).subscribe({
          next: (res) => {
            this.posts = res
          }
        })
      }
    })
  }
}
