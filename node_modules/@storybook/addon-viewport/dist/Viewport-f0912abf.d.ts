type Styles = ViewportStyles | ((s: ViewportStyles) => ViewportStyles) | null;
interface Viewport {
    name: string;
    styles: Styles;
    type: 'desktop' | 'mobile' | 'tablet' | 'other';
}
interface ViewportStyles {
    height: string;
    width: string;
}
interface ViewportMap {
    [key: string]: Viewport;
}

export { Styles as S, ViewportMap as V, Viewport as a, ViewportStyles as b };
