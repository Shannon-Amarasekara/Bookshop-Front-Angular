import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css']
})
export class CreatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  accessGithub(): void{
    console.log(window.location.href)
    window.location.href = 'https://github.com/Shannon-Amarasekara/'
  }

}





