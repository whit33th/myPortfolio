import { Swiper as Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'

function SwiperVertical({ project }) {
	return (
		<Swiper
			direction={'horizontal'}
			pagination={{
				clickable: true,
			}}
			modules={[Pagination]}
			className="mySwiper"
		>
			{project.img.map((img, index) => (
				<SwiperSlide key={index}><img src={img} alt="Slide 1" /></SwiperSlide>
			))}



		</Swiper>
	)
}

export default SwiperVertical
