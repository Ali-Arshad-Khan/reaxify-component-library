import githubIcon from '../icons/github.svg'
import '../styles/header.css'

export default function Header() {
    return (
        <div className="header">
            <h2>Reaxify-Component-Library</h2>
            <a href="https://github.com/Ali-Arshad-Khan/reaxify-component-library" target='_blank'>
            <img src={githubIcon} alt="" />
            </a>
        </div>
    )
}