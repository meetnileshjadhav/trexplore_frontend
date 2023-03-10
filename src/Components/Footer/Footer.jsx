import './Footer.css'
import fb from './SocialIcons/fb.png';
import gmail from './SocialIcons/gmail.png';
import telegram from './SocialIcons/telegram.png';
import twitter from './SocialIcons/twitter.png';

const Footer = () =>{
    return (
       
        <div className='mt-4'>
            <div className="footer">
                <p className='footer-space'>
                    <span>
                        <span><img src={telegram} alt="fb" className='social-icon'/></span>
                        <span><img src={fb} alt="fb" className='social-icon'/></span>
                        <span><img src={gmail} alt="fb" className='social-icon'/></span>
                        <span><img src={twitter} alt="fb" className='social-icon'/></span>
                    </span> 
                    <span> All rights are reserved <span className='copyright-footer'>@Project Group:28</span> </span>
                </p>
            </div>

        </div>

    );
}

export default Footer;