// import { Repository } from './repository';
// import { User } from './user';
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http'; 
// import { environment} from '../environments/environment';


// @Injectable({
//   providedIn: 'root'
// })
// export class ProfileService {
//   user:User;
//   repo:Repository;
  
//   constructor(private http:HttpClient) { 
//     this.user = new User ("", "", "", 0, 0,0, "", new Date() );
//     this.repo = new Repository ("", "", "", new Date());
//   }

//   // 
//   searchUsers(searchTerm:string){
//     console.log(searchTerm)
//     interface ApiResponse {
//     name:string;
//     username:string;
//     avatarUrl:string;
//     followers:number;
//     following:number;
//     repositories: number;
//     profileUrl: string;
//     date:Date;
//     }
//     let searchPoint = 'https://api.github.com/users/' + searchTerm + '?access_token=' + environment.GITAPIKEY;
//     console.log(searchPoint);

//     let promise = new Promise((resolve, reject) => {

//       this.http.get<ApiResponse>(searchPoint).toPromise().then(
//         (results) => {

//           console.log(results);
//           this.user = results;
//           console.log(this.user);

//           resolve();
//         },
//         (error) => {
//           console.log(error);
//           reject();
//         }
//       );
//     });
//     return promise;
//   }

//   getRepos(searchTerm) {

//     interface ApiResponse {
//      name: string;
//      description: string;
//      htmlUrl: string;
//      date:Date;
     
//     }

//     let searchPoint = 'https://api.github.com/users/' + searchTerm + '/repos?access_token=' + environment.GITAPIKEY;

//     let promise = new Promise((resolve, reject) => {
//       this.http.get<ApiResponse>(searchPoint).toPromise().then(
//         (repoResults) => {
//           console.log(repoResults);
//           this.repo = repoResults;
//           resolve();
//         },
//         (error) => {
//           console.log(error);
//           reject();
//         }
//       );
//     });
//     return promise;
//   }
// }
