declare module 'fara_comp_react' {

    // Propiedades para los Iconos
    export interface IconProps {
        color?: string;
        size?: string;
        onClick?: () => void;
        backCol?: string;
        bold?: string;
        type?: string;
        hover?: boolean;
    }

    export const Icons: React.FC<IconProps>;
}