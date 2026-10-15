import { Component, inject, input, Input, signal } from '@angular/core';
import { NavSectionItemModel } from '../models/nav-section-item-model';
import { RouterLink } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { ShellService } from '../../shell.service';

@Component({
  imports: [RouterLink],
  selector: 'app-nav-group',
  styleUrl: './nav-group.css',
  templateUrl: './nav-group.html',
})
export class NavGroup {
  constructor(private shellService: ShellService) { }
  private sanitizer = inject(DomSanitizer);

  @Input({ required: true }) itemGroup!: NavSectionItemModel;
  @Input({ required: true }) sectionName!: string;

  isOpen = signal(false);

  get iconContent() {
    return this.sanitizer.bypassSecurityTrustHtml(this.itemGroup.icon || '');
  }

  toggleGroup() {
    this.isOpen.set(!this.isOpen());
  }

  setActive(subItemName: string) {
    this.shellService.setActive(this.sectionName, this.itemGroup, subItemName);
  }
}
