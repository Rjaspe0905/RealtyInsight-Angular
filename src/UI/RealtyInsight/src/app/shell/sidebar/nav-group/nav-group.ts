import { Component, inject, Input, signal } from '@angular/core';
import { NavSectionItemModel } from '../models/nav-section-item-model';
import { RouterLink } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  imports: [RouterLink],
  selector: 'app-nav-group',
  styleUrl: './nav-group.css',
  templateUrl: './nav-group.html',
})
export class NavGroup {
  private sanitizer = inject(DomSanitizer);

  @Input({ required: true }) itemGroup!: NavSectionItemModel;

  isOpen = signal(false);

  get iconContent() {
    return this.sanitizer.bypassSecurityTrustHtml(this.itemGroup.icon || '');
  }
  toggleGroup() {
    this.isOpen.set(!this.isOpen());
  }
}
