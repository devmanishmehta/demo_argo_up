import { AiFillClockCircle } from 'react-icons/ai';
import { BsFillCalendarCheckFill } from 'react-icons/bs';
import { FaRegDotCircle } from 'react-icons/fa';

const BottomBanner = () => <div className="bottom_banner">
    <div className="container d-flex">
        <div className="list d-flex">
            <div className="item">
                <AiFillClockCircle />
                3 Hour Workshop
            </div>
            <div className="item">
                <FaRegDotCircle />
                Live
            </div>
            <div className="item">
                <BsFillCalendarCheckFill />
                100% Practical
            </div>
        </div>
        <div className="button animate__animated animate__tada animate__slower animate__infinite">
            <a href="#">Reserve Your Seat @ 9/-</a>
        </div>
    </div>
</div>
export default BottomBanner;