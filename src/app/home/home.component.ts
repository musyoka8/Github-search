import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Repository } from '../repository';
import { GitHttpServiceService } from '../git-http-service.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:User;
  repo:Repository;
  practicleJs:any;

  constructor(public gitHttpService:GitHttpServiceService) { }

  searchUser(searchTerm){
    this.gitHttpService.searchUsers(searchTerm).then(
      (success)=>{
        this.user=this.gitHttpService.user;
        console.log(this.user);
      },
      (error)=>{
        console.log(error)
      }
    )
    this.gitHttpService.getRepos(searchTerm).then(
      (success)=>{
        this.repo=this.gitHttpService.repo;
        console.log(this.repo);
      },
      (error)=>{
        console.log(error)
      }
    )

  }

  ngOnInit(){
    this.searchUser("musyoka");
  }

}
