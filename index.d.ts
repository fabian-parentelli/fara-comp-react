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

    // Propiedades de Tooltip
    export interface TooltipProps {
        text?: string;
        children: React.ReactNode;
        position?: 'top' | 'bottom' | 'left' | 'right' | 'none';
        backgroundColor?: string;
        color?: string;
        cursor?: string;
    }

    export const Tooltip: React.FC<TooltipProps>;
}