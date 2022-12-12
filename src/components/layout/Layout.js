import MainNavigation from './MainNavigation';
import './Layout.css';

function Layout(props) {
  return (
    <div className="main">
      <MainNavigation />
      <main className="childs">{props.children}</main>
    </div>
  );
}

export default Layout;
