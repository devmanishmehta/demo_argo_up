import { Typewriter } from 'react-simple-typewriter'
import { BsFillCalendarEventFill } from 'react-icons/bs';
import { BiTimer } from 'react-icons/bi';
import { FaUserAlt } from 'react-icons/fa';
import Countdown from './Countdown';


const TopIntroSection = () => {

    const targetDate = '2023-05-10T00:00:00';

    return <div className="top_intro_section">
        <style jsx global>{`
        .landing_page::before{
            background: url('/features-bg.png');
            background-attachment: fixed;
            background-size: 100% 100%;
            background-repeat:no-repeat;
        }
        `}</style>

        <div className="p-2 top_stripe">If you are on this page, then chances are that whatever you have tried to earn online hasn't worked, otherwise you wouldn't have come on this page
        </div>

        <div className="h-1 info_heading my-4">Discover “
            <Typewriter
                words={
                    [
                        'My Step by step Formula',
                        
                        
                    ]
                }
                loop={true}
                typeSpeed={50}
                deleteSpeed={1}
                delaySpeed={10000}
            />
            ” that i used to <u>generate 1.4 Crores</u>   in 360 Day by selling online course
        </div>

        <div className='info_tagline' >Earn 2.5 Lakh Per Month by Creating Courses
</div>



        <div className="d-flex my-3 event">
            <a className="video p-3" href='#'>
                <img src="/build.png" alt="" />
            </a>

            <div className="p-3">
                <div className="event_info p-3">
                    <div className="d-flex mt-3" style={{ columnGap: "10px" }} >
                        <div className="comp date"><BsFillCalendarEventFill /> 25th Jun 2023</div>
                        <div className="comp time"><BiTimer />7:00 PM IST</div>
                    </div>
                    <div className="comp host mt-4"><FaUserAlt /> <b>Host:</b> Piyush Kant & Anuj</div>
                    <div className="text-center mt-3 text-secondary">Workshop Starts In</div>
                  
                    <Countdown targetDate={targetDate} />
                    <br />
                    <br />
                </div>
            </div>
            
        </div>
        <div className="join_text">Join Me Live Inside The Workshop</div>

        <div className="animate__animated animate__headShake animate__slower animate__infinite  main_btn_con" >
            <div className="main_btn ">
                <div className="heading">I Want to Learn something great in only ₹9 <span>₹400</span></div>
                <div className="desc">And Get Bonuses Worth ₹17,000/- For Absolutely FREE 🎉</div>
            </div>
        </div>

        <div className="money_back">(100% Money Back Guarantee… No Question Asked! 💯)</div>

        <div className="announcement">
            <AnnouncementIcon />
            Join Now… We Have Just 90 Seats!!!
            <br />
            (<u>As Of May 5, 2023</u>) And <span>Only 7 Slots Are Left…</span>
        </div>

    </div>
}


const AnnouncementIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="#BE1931" d="M12.908 30.75c-.276 2.209-2.291 3-4.5 3s-3.776-1.791-3.5-4l1-9c.276-2.209 2.291-4 4.5-4s6.468 0 3.5 4-1 10-1 10z" /><path fill="#CCD6DD" d="M35.825 14.75c0 6.902-1.544 12.5-3.45 12.5-1.905 0-20.45-5.598-20.45-12.5 0-6.903 18.545-12.5 20.45-12.5 1.906 0 3.45 5.597 3.45 12.5z" /><ellipse fill="#66757F" cx="32.375" cy="14.75" rx="3.45" ry="12.5" /><path fill="#DD2E44" d="M17.925 21.75l-14-1c-5 0-5-12 0-12l14-1c-3 3-3 11 0 14z" /><ellipse fill="#99AAB5" cx="31.325" cy="14.75" rx="1.5" ry="4.348" /></svg>;


export default TopIntroSection;