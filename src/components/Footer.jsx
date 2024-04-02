import './Footer.css';
import facebook from '../assets/icons/fill_facebook_icon.svg';
import twitter from '../assets/icons/fill_twitter_icon.svg';
import youtube from '../assets/icons/fill_youtube_icon.svg';
import instagram from '../assets/icons/fill_instagram_icon.svg';

function Footer() {
  return (
    <footer>
      <div className="footer_wrap">
        <div className="copyright">
          <p>©codeit-2023</p>
        </div>
        <div className="privacy_fnq_wrap">
          <a href="/privacy/" target="_blank" rel="noreferrer">
            Privacy Policy
          </a>
          <a href="/faq/" target="_blank" rel="noreferrer">
            FAQ
          </a>
        </div>
        <div className="sns_fill_wrap">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="https://twitter.com/?lang=ko" target="_blank" rel="noreferrer">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="https://www.youtube.com/?gl=KR&hl=ko" target="_blank" rel="noreferrer">
            <img src={youtube} alt="youtube" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img src={instagram} alt="instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
