import detectDarkMode from '../../utils/detectDarkMode'
import sun from "../../assets/img/icons/sun.svg"
import moon from "../../assets/img/icons/moon.svg"
import './style.css'
import { useEffect, useRef } from 'react'
import { useLocalStorage } from '../../utils/useLocalStorage'

function DarkModeBtn() {

	const refBtn = useRef(null)

	const [darkMode, setDarkMode] = useLocalStorage(
		'darkMode',
		detectDarkMode()
	)
	function darkActive() {

		setDarkMode((currentValue) =>
			currentValue === "light" ? "dark" : "light"
		)
		console.log(darkMode)

	}

	useEffect(() => {

		if (darkMode === "dark") {
			document.body.classList.add("dark")
			refBtn.current.classList.add("dark-mode-btn--active")
		}
		else {
			document.body.classList.remove("dark")
			refBtn.current.classList.remove("dark-mode-btn--active")
		}

	}, [darkMode])


	return (
		<button ref={refBtn} className="dark-mode-btn" onClick={darkActive}>
			<img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
			<img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
		</button>
	)
}

export default DarkModeBtn