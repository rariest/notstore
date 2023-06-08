import './style/404.scss';
import { Link } from 'react-router-dom';

function NotFoundPage() {
    return (
        <div className='container'>
        <div className="page-404-wrapper">
          <div className="page-404-message__top">Page Not Found</div>
          <h2 className="page-404-message__main">404</h2>
          <div className="page-404-message__bottom">Don't worry, there is a way out! Go to the <Link to={'/'}className='special'>main page</Link></div>
        </div>
      </div>
    )
}

export default NotFoundPage;