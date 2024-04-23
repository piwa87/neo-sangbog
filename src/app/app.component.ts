import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AccordionComponent } from './accordion/accordion.component';
import { MOCK_SONGS } from './data/mock-songs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, HeaderComponent, AccordionComponent, CommonModule],
})
export class AppComponent {
  title = 'sangbog';
  allSongs = MOCK_SONGS;
  theSong = MOCK_SONGS[0];
}
