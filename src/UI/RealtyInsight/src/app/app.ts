import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShellSidebar } from './shell/sidebar/shell-sidebar/shell-sidebar';

@Component({
  imports: [RouterOutlet, ShellSidebar],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
}
