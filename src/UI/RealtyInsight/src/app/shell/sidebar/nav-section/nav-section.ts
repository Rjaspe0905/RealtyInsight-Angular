import { Component, Input } from '@angular/core';
import { type NavSectionModel } from '../models/nav-section.model';
import { NavGroup } from '../nav-group/nav-group';
import { NavLink } from '../nav-link/nav-link';

@Component({
  imports: [NavGroup, NavLink],
  selector: 'app-nav-section',
  styleUrl: './nav-section.css',
  templateUrl: './nav-section.html',
})
export class NavSection {
  @Input({ required: true }) section!: NavSectionModel;
}
