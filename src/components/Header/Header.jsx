import SwitchTheme from '../SwitchTheme/SwitchTheme';
import './Header.scss';

export default function Header() {
  return (
    <header className="header container">
      <div className="header__inner container__row">
        <div className="header__title"> Случайные цитаты!</div>
        <SwitchTheme />
      </div>
    </header>
  );
}
