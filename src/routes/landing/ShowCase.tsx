import { TbArrowBigRightFilled } from "react-icons/tb";

const ShowCase = () => <div className="showcase_sec">

    <style jsx>{`
        .showcase_sec::before{
            background: url('/feature-bg-2.png');
            background-size: 100% 100%;
            opacity:0.2;
            background-attachment:fixed;
            background-repeat:no-repeat;
        }
        `}</style>

    <div className="container">
        <div className="m_heading">Here's What You Will Learn</div>
        <div className="sub_heading">— Inside The <span>Lakhs Per Week</span>  Course Build Workshop —</div>
        <div className="main_con">
            <div className="sc_list">
                <div className="sc_list_item ">
                    <div className="sc_list_item_icon">
                        <TbArrowBigRightFilled />
                    </div>
                    <div>
                        How easy it is to <u>build an Own Course without having any skills</u>  and still be able to scale it so that it makes you a minimum of even <b>3.5 Lakhs rupees per week or more than that</b>
                    </div>
                </div>
                <div className="sc_list_item">
                    <div className="sc_list_item_icon">
                        <TbArrowBigRightFilled />
                    </div>
                    <div>
                        How easy it is to <u>build an Own Course without having any skills</u>  and still be able to scale it so that it makes you a minimum of even <b>3.5 Lakhs rupees per week or more than that</b>
                    </div>
                </div>
                <div className="sc_list_item">
                    <div className="sc_list_item_icon">
                        <TbArrowBigRightFilled />
                    </div>
                    <div>
                        How easy it is to <u>build an Own Course without having any skills</u>  and still be able to scale it so that it makes you a minimum of even <b>3.5 Lakhs rupees per week or more than that</b>
                    </div>
                </div>
            </div>
            <img className="sc_profile_mockup" src="/pic.png" alt="" />
        </div>
    </div>



</div>



export default ShowCase;