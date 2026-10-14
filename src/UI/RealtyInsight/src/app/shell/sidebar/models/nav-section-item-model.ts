export interface NavSectionItemModel {
    key: string;
    text: string;
    href?: string;
    icon?: string;
    badge?: { kind: string, text: string };
    children?: NavSectionItemModel[];
}