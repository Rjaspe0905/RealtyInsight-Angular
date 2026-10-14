import { Component } from '@angular/core';
import { ShellService } from '../../shell.service';
import { NavSection } from '../nav-section/nav-section';

@Component({
  imports: [NavSection],
  selector: 'app-shell-sidebar',
  styleUrl: './shell-sidebar.css',
  templateUrl: './shell-sidebar.html',
})
export class ShellSidebar {

  constructor(private shellService: ShellService) { }

  get appName(): string {
    return this.shellService.appName;
  }

  get appVersion(): string {
    return this.shellService.appVersion;
  }

  get navigation() {
    return this.shellService.navigation;
  }
}
