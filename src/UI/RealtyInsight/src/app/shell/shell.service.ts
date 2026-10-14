import { Injectable, signal } from '@angular/core';
import { NavSectionItemModel } from './sidebar/models/nav-section-item-model';
import { NAV } from './navigation';

@Injectable({ providedIn: 'root' })
export class ShellService {
    appName: string = 'RealtyInsight';
    appVersion: string = 'v1.0.0';

    navigation = signal(NAV);

    activeKey = signal('dashboard');
    crumbs = signal<string[]>(['Workspace', 'Dashboard']);

    isActive(item: NavSectionItemModel): boolean {
        return this.activeKey() === item.key;
    }

    setActive(item: NavSectionItemModel) {
        if (!this.isExternalLink(item.href)) {
            this.activeKey.set(item.key);
            this.crumbs.set(['Workspace', item.text]);
        }
    }

    // Check if it's a valid URL structure and uses HTTP or HTTPS
    isExternalLink(link: string | undefined): boolean {
        if (!link) return false;

        if (URL.canParse(link)) {
            const url = new URL(link);
            return url.protocol === 'http:' || url.protocol === 'https:';
        }
        return false;
    }
}
