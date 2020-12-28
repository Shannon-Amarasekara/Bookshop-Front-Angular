import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  accessGithub(): void{
    console.log(window.location.href)
    window.location.href = 'https://github.com/Shannon-Amarasekara/'
  }

}





