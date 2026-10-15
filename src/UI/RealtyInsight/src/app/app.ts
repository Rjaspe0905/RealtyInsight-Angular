import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShellSidebar } from './shell/sidebar/shell-sidebar/shell-sidebar';
import { ShellTopbar } from './shell/topbar/shell-topbar/shell-topbar';
import { ShellService } from './shell/shell.service';

@Component({
  imports: [RouterOutlet, ShellSidebar, ShellTopbar],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit {
  constructor(private shellService: ShellService) { }

  ngOnInit(): void {
    try {
      var saved = localStorage.getItem(this.shellService.STORE_KEY) as 'light' | 'dark' | null;
      var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

      this.shellService.setTheme(saved ?? (prefersDark ? 'dark' : 'light'));
    } catch (e) {
      this.shellService.setTheme('dark');
    }
  }
}
