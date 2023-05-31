import kanban_image from "../../assets/landing.jpg"
import { FaHandPointRight, FaHandPointLeft } from 'react-icons/fa'
import { MdKeyboardDoubleArrowDown } from 'react-icons/md'
import './styles.css'

export default function Landing() {
  return (
    <div className="card grid">
        <div className="card__body body">
            <div className="body__heading heading">
                <p className="heading__p">
                    Welcome to<br/>Kanban Web App
                </p>
            </div>
            <div className="body__message message">
                <button className="message__button">
                    Get Start!
                </button>
            </div>
            <div className="card__icon icon">
                <MdKeyboardDoubleArrowDown className="icon__row"/>
            </div>
            <div className="card__options grid">
                <FaHandPointRight className="grid__icon icon"/>
                <a className="grid__a one" href="/signin">Sign In</a>
                <a className="grid__a two" href="/signup">Sign Up</a>
                <FaHandPointLeft className="grid__icon icon"/>
            </div>
        </div>
        <div className="card__image image grid">
            <img src={kanban_image} className="image__img" alt="image of kanban" />
        </div>
    </div>
  )
}
