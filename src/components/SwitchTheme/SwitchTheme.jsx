import * as cx from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import './SwitchTheme.scss';
import { set } from '../../redux/slice/theme';

import { useEffect } from 'react';

export default function SwitchTheme() {
  const theme = useSelector((state) => state.theme);

  const dispatch = useDispatch();
  //const classTheme = cx(theme === 'dark' ? 'light' : 'dark');
  useEffect(() => {
    //устанавливаем на html датта атрибут
    document.documentElement.dataset.theme = theme;
    //устанавливаем значение в localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handelChange = () => dispatch(set(theme === 'dark' ? 'light' : 'dark'));

  return (
    <div className="toggleWrapper">
      <input type="checkbox" className="dn" id="dn" onClick={handelChange} />
      <label htmlFor="dn" className="toggle">
        <span className="toggle__handler">
          <span className="crater crater--1"></span>
          <span className="crater crater--2"></span>
          <span className="crater crater--3"></span>
        </span>
        <span className="star star--1"></span>
        <span className="star star--2"></span>
        <span className="star star--3"></span>
        <span className="star star--4"></span>
        <span className="star star--5"></span>
        <span className="star star--6"></span>
      </label>
    </div>
  );
}
