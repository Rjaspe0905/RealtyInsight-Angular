import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShellSidebar } from './shell/sidebar/shell-sidebar/shell-sidebar';
import { ShellTopbar } from './shell/topbar/shell-topbar/shell-topbar';

@Component({
  imports: [RouterOutlet, ShellSidebar, ShellTopbar],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
}
