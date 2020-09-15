import { Component , Input} from '@angular/core';

@Component({
selector : 'app-post-list',
templateUrl : './post-list.component.html',
styleUrls : ['./post-list.component.css']

})

export class PostListComponent {

  // posts = [
    // {title : "first post ", content : "this is first post's component"},
    // {title : "second post ", content : "this is second post's component"},
    // {title : "third post ", content : "this is third post's component"},
  // ]
  @Input() posts=[]


}
