/** @jsxImportSource @emotion/react */

import { Theme } from '../../styles/themes';
import { ComponentBaseProps } from '../props';

import { useThemedCSS, useCSS, useTheme } from '../../styles/hooks';
import { createContext, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {DialogProps } from './types';
export const transition = { type: 'tween', duration: 0.2 };
type DialogScrimProps = Pick<DialogProps, 'closeOnClickScrim' | 'blur' | 'onClose'>;

const DialogScrim = ({ closeOnClickScrim, blur, onClose, ...props }: DialogScrimProps) => {
  const theme = useTheme();

  const styles = useCSS({
    touchAction: 'none',
    position: 'fixed',
    zIndex: theme.dialog.zIndex,
    inset: 0,
    backdropFilter: blur ? 'blur(4px)' : '',
    background: theme.isDarkMode?theme.colors.darkScrim:theme.colors.lightScrim,
  });

  const handleClickScrim = (e: any) => {
    closeOnClickScrim && onClose?.();
  };

  return (
    <motion.aside
      css={styles}
      transition={transition}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleClickScrim}
    />
  );
};

export default DialogScrim;
