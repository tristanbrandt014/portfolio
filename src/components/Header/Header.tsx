import * as React from 'react';
import CloseIcon from '../CloseIcon/CloseIcon';
import './Header.css';

interface IProps {
  dark?: boolean;
  icon?: 'menu' | 'close';
}

const Header: React.SFC<IProps> = props => (
  <div className="header">
    <CloseIcon />
  </div>
);

export default Header;
