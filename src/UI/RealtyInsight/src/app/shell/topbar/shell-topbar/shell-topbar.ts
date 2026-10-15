import { Component } from '@angular/core';
import { ShellService } from '../../shell.service';

@Component({
  imports: [],
  selector: 'app-shell-topbar',
  styleUrl: './shell-topbar.css',
  templateUrl: './shell-topbar.html',
})
export class ShellTopbar {
  constructor(private shellService: ShellService) { }

  get renderCrumbs(): string {
    var crumbs = this.shellService.crumbs();
    return crumbs.join(' » ').toString();
  }

  toggleTheme() {
    const next = this.shellService.dataTheme() === 'dark' ? 'light' : 'dark';
    this.shellService.setTheme(next);
  }
}
