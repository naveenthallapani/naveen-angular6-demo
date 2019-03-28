import { Injectable } from '@angular/core';
import { HttpClient } from'@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
 
  constructor(private http:HttpClient) { }
  //get users
  listUsers(){
  	let url = 'http://api.qshore.com/users';
  	return this.http.get(url)
  }
  //post user apiform fields
  addUser(user){
    let url ="http://api.qshore.com/add-user"
    return this.http.post(url, user)
  }
  //get users
  listUsers1(){
  	let url = 'http://api.qshore.com/users';
  	return this.http.get(url)
  }
  //post user api form
  adduser1(user1){
    let url="http://api.qshore.com/add-user"
    return this.http.post(url,user1)
  }
  //delete user
  deleteUser(id){
    let url ="http://api.qshore.com/delete-user/" + id
    return this.http.delete(url)
  }
  //view user
  viewUser(id){
    let url ="http://api.qshore.com/view-user/"+id
    return this.http.get(url)
  }
  //edituser
  editUser(id,newdata){
    let url ="http://api.qshore.com/edit-user/"+id
    return this.http.put(url,newdata)
  }
}
