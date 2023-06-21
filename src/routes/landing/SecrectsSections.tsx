import { TbArrowBigRightFilled } from 'react-icons/tb';

const SecrectsSections = () => <div className="secrects_section">
    <div className="container py-4">
        <div className="ss_heading text-center ">Here Are The <span className="text-light" >3 Major Secrets</span> Revealed Inside The Workshop</div>
        <div className="d-flex">
            <img className="image" src="/envelope.svg" alt="" />
            <div className="list">
                <div className="item" style={{ transform: "rotate(-4deg)" }} >
                    <div className="item_heading"  >Secret #1</div>
                    <div className="desc">What Is A “No-Skill Agency” And How It Has Created <u>517+ Millionaires</u> Within A Few Weeks And That Too With <u>Zero Investment</u></div>
                </div>
                <div className="item" style={{ transform: "rotate(3deg)" }} >
                    <div className="item_heading">Secret #2</div>
                    <div className="desc">What Is A “No-Skill Agency” And How It Has Created <u>517+ Millionaires</u> Within A Few Weeks And That Too With <u>Zero Investment</u></div>
                </div>
                <div className="item" style={{ transform: "rotate(4deg)" }} >
                    <div className="item_heading">Secret #3</div>
                    <div className="desc">What Is A “No-Skill Agency” And How It Has Created <u>517+ Millionaires</u> Within A Few Weeks And That Too With <u>Zero Investment</u></div>
                </div>
            </div>
        </div>
    </div>
</div>

export default SecrectsSections;