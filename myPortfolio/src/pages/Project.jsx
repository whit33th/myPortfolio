import { useParams } from 'react-router-dom'
import BtnGitHub from '../components/BtnGitHub/BtnGitHub'
import projects from './../helpers/projectList'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper/modules'
import SwiperVetical from '../components/Swiper/Swiper'


function Project() {

	const { id } = useParams()
	const project = projects[id]

	console.log(project)
	return (
		<main className="section">
			<div className="container">
				<div className="project-details">

					<h1 className="title-1">{project.title}</h1>


					
						<SwiperVetical project={project}/>
						
					


					<div className="project-details__desc">
						<p>{project.skills}</p>
					</div>



					{project.gitHubLink && <BtnGitHub link={project.gitHubLink} />}

				</div>
			</div>
		</main>
	)
}

export default Project