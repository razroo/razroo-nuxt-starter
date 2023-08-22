import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'razroo-nuxt-starter-hello-card',
  templateUrl: './hello-card.component.html',
  styleUrls: ['./hello-card.component.scss'],
})
export class HelloCardComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {}

}
@NgModule({
  imports: [
    CommonModule,
    MatCardModule
  ],
  declarations: [HelloCardComponent],
  exports: [HelloCardComponent],
})
export class HelloCardComponentModule {}