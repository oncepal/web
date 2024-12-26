import React, { memo } from 'react';
import Style from './Menu.module.less';
import FullLogo from 'assets/svg/assets-logo-full.svg?component';
import MiniLogo from 'assets/svg/assets-t-logo.svg?component';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'modules/store';
import { selectGlobal } from 'modules/global';

interface IProps {
  collapsed?: boolean;
}

export default memo((props: IProps) => {
  const navigate = useNavigate();
  const globalState = useAppSelector(selectGlobal);
  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className={Style.menuLogo} onClick={handleClick}>
      { globalState.collapsed?'OP':'ONCEPAL Admin'}
    </div>
  );
});
