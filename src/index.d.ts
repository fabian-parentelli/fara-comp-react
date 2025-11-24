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

    // Propiedades de Loader
    export interface LoaderProps {
        loading?: boolean;
        color?: string;
        text?: string;
    }

    export const Loader: React.FC<LoaderProps>;

    // Propiedades de Spinner
    export interface SpinnerProps {
        color?: string;
        size?: string;
    }

    export const Spinner: React.FC<SpinnerProps>;

    // Propiedades de Snackbar
    export interface SnackbarProps {
        snack: {
            open: boolean;
            status: string;
            message: string;
        };
        duration?: number;
    }

    export const Snackbar: React.FC<SnackbarProps>;

    // Propiedades de ProgressBar
    export interface ProgressBarProps {
        progress: {
            open: boolean;
            background: string;
        };
    }

    export const ProgressBar: React.FC<ProgressBarProps>;

    // Propiedades de ScrollToTop
    export interface ScrollToTopProps {
        children: React.ReactNode;
    }

    export const ScrollToTop: React.FC<ScrollToTopProps>;

    // Propiedades de AutoComplete
    export interface AutoCompleteProps {
        options?: { id: string | number;[key: string]: any }[];
        labelKey?: string;
        setData?: (item: any) => void;
        style?: React.CSSProperties;
        selectedId?: string | number | null;
    }

    export const AutoComplete: React.FC<AutoCompleteProps>;

    // Propiedades de Badge
    export interface BadgeProps {
        options?: string;
        name?: string | number;
        backgroundColor?: string;
        size?: number;
    }

    export const Badge: React.FC<BadgeProps>;

    // Propiedades de CheckBoxes
    export interface CheckBoxesProps {
        labels: { _id: string; name: string }[];
        selecteds?: { _id: string; name: string }[];
        multiSelect?: boolean;
        direction?: 'row' | 'column';
        setType?: (item: any) => void;
        accentColor?: string;
    }

    export const CheckBoxes: React.FC<CheckBoxesProps>;

    // Propiedades de CheckBoxes
    export interface CloudFileProps {
        onChange?: (item: any) => void;
        folderName?: string;
        contClass?: string;
        id?: string;
    }

    export const CloudFile: React.FC<CloudFileProps>;

    // Propiedades de Copy
    export interface CopyProps {
        text?: string;
        size?: number;
        color?: string;
        duration?: number;
    }

    export const Copy: React.FC<CopyProps>;

    // Propiedades de Downpdf
    export interface DownpdfProps {
        url?: string;
        position?: number;
        color?: string;
    }

    export const Downpdf: React.FC<DownpdfProps>;

    // Propiedades de ImgHover
    export interface ImgHoverProps {
        img?: string;
        border?: boolean;
        objectFit?: string;
        pointer?: boolean;
    }

    export const ImgHover: React.FC<ImgHoverProps>;

    // Propiedades de Modal
    export interface ModalProps {
        children: React.ReactNode;
        open?: boolean;
        onClose?: (item: any) => void;
        btn?: boolean;
        btnName?: string;
        btnBackColor?: string;
        btnColor?: string;
    }

    export const Modal: React.FC<ModalProps>;

    // Propiedades de Pager
    export interface PagerProps {
        docs?: {
            docs: any[];
            totalDocs: number;
            limit: number;
            totalPages: number;
            page?: number;
            pagingCounter?: number;
            hasPrevPage?: boolean;
            hasNextPage?: boolean;
            prevPage?: number | null;
            nextPage?: number | null;
        };
        setQuery?: (item: any) => void;
        backgroundColor?: string;
        top?: string;
    }

    export const Pager: React.FC<PagerProps>;

    // Propiedades de Print
    export interface PrintProps {
        color?: string;
        size?: string;
        position?: string;
        useref?: React.RefObject<HTMLElement>;
        bodyClass?: string;
    }

    export const Print: React.FC<PrintProps>;

    // Propiedades de SpinnerH
    export interface SpinnerHProps {
        color?: string;
    }

    export const SpinnerH: React.FC<SpinnerHProps>;

    // Propiedades de Switch
    export interface SwitchProps {
        values?: any;
        setValues?: (item: any) => void;
        pre?: boolean;
        name?: string;
        activeColor?: string;
        setChange?: (item: any) => void;
        label?: string;
        statusFalse?: string;
        statusTrue?: string;
    }

    export const Switch: React.FC<SwitchProps>;

    // Propiedades de CharacterCounter
    export interface CharacterCounterProps {
        min?: number;
        max?: number;
        text?: string;
    }

    export const CharacterCounter: React.FC<CharacterCounterProps>;

    // Propiedades del Accordion
    export interface AccordionProps {
        title: string;
        children: React.ReactNode;
        styles?: {
            backColHeader?: string;
            colorHeader?: string;
            backColContent?: string;
            colorContent?: string;
            paddingHeader?: string;
            paddingContent?: string;
            borderAcordion?: string;
            iconBold?: boolean;
            iconColor?: string;
            iconSize?: string;
            iconType?: string;
            heightHeader?: string;
        };
    }

    export const Accordion: React.FC<AccordionProps>;

    // Propiedades del Popup
    export interface PopupProps {
        text?: string;
        icon?: string;
        children?: React.ReactNode;
        styles?: {
            color?: string;
            size?: string;
            position?: string;
            width?: string;
        };
    }

    export const Popup: React.FC<PopupProps>;
}