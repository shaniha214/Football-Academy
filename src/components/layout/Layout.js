import MainNavigation from './MainNavigation';
import './Layout.css';

function Layout(props) {
  return (
    <div className="main">
      <main>{props.children}</main>
      <MainNavigation />
    </div>
  );
}

export default Layout;
