type OutlineStyle = 'dotted' | 'dashed' | 'solid' | 'double';
declare const highlightStyle: (color?: string, style?: OutlineStyle) => string;
declare const highlightObject: (color: string) => {
    outline: string;
    outlineOffset: number;
    boxShadow: string;
};

export { highlightObject, highlightStyle };
