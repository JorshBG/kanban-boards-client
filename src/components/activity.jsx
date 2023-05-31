import {HiUsers} from 'react-icons/hi'
import {FaExchangeAlt} from 'react-icons/fa'

export default function Activity() {
  return (
    
    <div className="card">

        <div className="card__header">
        </div>
        <div className="card__body body">

            <div className="body__title title">
                <p className="title__p"></p>
            </div>

            <div className="body__options options">

                <FaExchangeAlt className='options__icon'/>

                <HiUsers className='options__icon'/>

            </div>

        </div>

    </div>

  )
}
