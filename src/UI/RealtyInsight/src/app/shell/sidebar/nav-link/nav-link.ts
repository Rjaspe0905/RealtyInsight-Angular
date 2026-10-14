import { Component, inject, Input } from '@angular/core';
import { NavSectionItemModel } from '../models/nav-section-item-model';
import { ShellService } from '../../shell.service';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  imports: [RouterLink],
  selector: 'app-nav-link',
  styleUrl: './nav-link.css',
  templateUrl: './nav-link.html',
})
export class NavLink {
  constructor(private shellService: ShellService) { }
  private sanitizer = inject(DomSanitizer);

  @Input({ required: true }) item!: NavSectionItemModel;
  
  get iconContent(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.item.icon || '');
  }
  get isActive(): boolean {
    return this.shellService.isActive(this.item);
  }

  SetActive() {
    this.shellService.setActive(this.item);

    //For those external links, we will open them in a new tab
    if (this.shellService.isExternalLink(this.item.href)) {
      window.open(this.item.href, '_blank');
    }
  }
}
