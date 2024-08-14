import React from 'react'
import gitHub from './gitHub-black.svg'
import './style.css'


function BtnGitHub(props) {
	return (
		<a href={props.link} target='blank' rel='noreferrer' className="btn-outline noneSelect">
			<img src={gitHub} alt="" />
			GitHub repo
		</a>
	)
}

export default BtnGitHub