import { Injectable, signal } from '@angular/core';
import { NavSectionItemModel } from './sidebar/models/nav-section-item-model';
import { NAV } from './navigation';

@Injectable({ providedIn: 'root' })
export class ShellService {
    appName: string = 'RealtyInsight';
    appVersion: string = 'v1.0.0';

    navigation = signal(NAV);
    STORE_KEY = 'dash26-theme';
    activeKey = signal('dashboard');
    crumbs = signal<string[]>(['Workspace', 'Dashboard']);
    dataTheme = signal<'light' | 'dark'>('dark');

    isActive(item: NavSectionItemModel): boolean {
        return this.activeKey() === item.key;
    }

    setActive(sectionName: string, item: NavSectionItemModel, subItemName?: string) {
        if (!this.isExternalLink(item.href)) {
            this.activeKey.set(item.key);
            this.crumbs.set([sectionName, item.text]);
            if (subItemName) {
                this.crumbs.update((crumbs) => [...crumbs, subItemName]);
            }
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

    setTheme(theme: 'light' | 'dark') {
        this.dataTheme.set(theme);
        document.documentElement.setAttribute('data-theme', theme);
        try { localStorage.setItem(this.STORE_KEY, theme); } catch { /* localStorage may be unavailable */ }
    }
}
