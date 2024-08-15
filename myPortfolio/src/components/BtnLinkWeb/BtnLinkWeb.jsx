import Web from './web.png'
import './style.css'


function BtnLinkWeb(props) {
	return (
		<a href={props.link} target='blank' rel='noreferrer' className="btn-outline noneSelect">
			<img src={Web} width="24" height="24" alt="" />
			Web
		</a>
	)
}

export default BtnLinkWeb