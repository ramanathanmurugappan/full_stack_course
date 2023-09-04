import { Component,OnInit } from '@angular/core';
import { GreetingService } from '../greeting.service';

@Component({
  selector: 'app-constructor',
  templateUrl: './constructor.component.html',
  styleUrls: ['./constructor.component.css']
})


export class ConstructorComponent implements OnInit {
  greeting: string | undefined;

  constructor(private greetingService: GreetingService) {}

  ngOnInit(): void {
    this.greeting = this.greetingService.getGreeting();
  }
}