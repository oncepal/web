import { ComponentBaseProps } from "../props";

export type DialogProps = ComponentBaseProps & {
    isOpened: boolean;
    notScrim?: boolean;
    loading?: boolean;
    notCloser?: boolean;
    notCenter?: boolean;
    width?: string;
    fullScreen?: boolean;
    closeOnClickScrim?: boolean;
    blur?: boolean;
    radius?: string;
    animationType?: 'none' | 'slide' | 'fade' | string;
    onClose?: () => void;
  };