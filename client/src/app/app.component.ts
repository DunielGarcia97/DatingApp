import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit() 
  {
    this.getUsers();
  }
  getUsers()
  {
    this.http.get('https://localhost:5001/api/users').subscribe(response => 
    {
      this.users = response;
    },
    error=>
    {
      console.log(error);
    })
  }
  title = 'The Dating App';
  users:any;

  constructor(private http: HttpClient) // dependency injection is done with constructors in asp.net
  {
    
  }
}


