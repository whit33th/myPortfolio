import telegram from '../assets/img/icons/telegram.svg'
import gitHub from '../assets/img/icons/gitHub.svg'
import linkedIn from '../assets/img/icons/linkedIn.svg'

function Footer() {
	return (
		<footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item"><a href="https://github.com/whit33th"><img src={gitHub} alt="Link"/></a></li>
                    <li className="social__item"><a href="https://www.linkedin.com/in/whit33th"><img src={linkedIn} alt="Link"/></a></li>
                    <li className="social__item"><a href="https://t.me/whit33th"><img style={{width: '38px', height: '38px', filter: 'invert(1)'}} src={telegram} alt="Link"/></a></li>
                </ul>           
            </div>
        </div>
    </footer>
	)
}

export default Footer