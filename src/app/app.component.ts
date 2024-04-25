import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccordionComponent } from './accordion/accordion.component';
import { SONGS } from './db/all-songs';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, HeaderComponent, AccordionComponent, CommonModule],
})
export class AppComponent {
  allSongs = SONGS;
}
