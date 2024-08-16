/** @jsxImportSource @emotion/react */

import { Theme } from '../../styles/themes';
import * as tokens from '../../styles/tokens';
import { useMemo } from 'react';
import { ComponentBaseProps, Themed } from '../props';
import { useThemedCSS, useTheme, useCSS, useThemedProps, useThemeTextColor } from '../../styles/hooks';

type LinkProps = ComponentBaseProps & {
  indicatorColor?: Themed<string>;
  primary?: boolean;
  indicatorSize?: string;
  indicatorAction?: 'always' | 'none' | 'hover';
  noIndicator?: boolean;
  textColor?: Themed<string>;
  external?: boolean;
  disabled?: boolean;
  backTop?: boolean;
  to?: string;
  download?: string;
};

/**
 * Links allow users to navigate to a different location. 
 * 
 * They can be presented inline inside a paragraph or as standalone text.
 * @examples
 * ```
 * <Link href='#' indicatorAction='none' color='green'>
      customr link
   </Link>
 * ```
 * 
 * @param indicatorColor link's underline color.
 * @param textColor link's text color.
 * @param indicatorAction link's underline triger way.
 * @param indicatorSize link's underline coarseness.
 * @param external open url with new window.
 * @param backTop click to return the top of page.
 * @param download change open way to download & set file name by download value.
 * @param to destination url.
 * @returns <a> tag 
 */
const Link = ({
  disabled,
  indicatorColor,
  noIndicator,
  indicatorAction = 'always',
  textColor,
  primary,
  external = false,
  to,
  indicatorSize = '1px',
  css,
  backTop,
  children,
  ...props
}: LinkProps) => {
  const theme = useTheme();
  const indicatorStyles = noIndicator
    ? {}
    : indicatorAction == 'always'
    ? {
        borderBottom: `${indicatorSize} solid 
  ${
    useThemedProps(theme, indicatorColor) ||
    (primary ? theme.colors.primary : useThemeTextColor(theme) )
  }`,
      }
    : indicatorAction == 'hover'
    ? {
        ':hover': {
          borderBottom: `${indicatorSize} solid 
  ${
    useThemedProps(theme, indicatorColor) ||
    (primary ? theme.colors.primary :useThemeTextColor(theme))
  }`,
        },
      }
    : {};

  const styles = useCSS({
    cursor: !disabled ? 'pointer' : 'initial',
    color:
      useThemedProps(theme, textColor) ||
      (primary ? theme.colors.primary : useThemeTextColor(theme)),
    ...indicatorStyles,
    opacity: disabled ? 0.25 : 1,
    ...useThemedCSS(theme, css),
  });

  return (
    <a {...(!disabled && { target: external ? '_blank' : '_self', href: backTop ? '#' : to })} css={styles} {...props}>
      {children}
    </a>
  );
};

export default Link;
