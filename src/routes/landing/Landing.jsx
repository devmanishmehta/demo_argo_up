import BottomBanner from "./BottomBanner";
import FaqSection from "./FaqSection";
import SecrectsSections from "./SecrectsSections";
import ShowCase from "./ShowCase";
import TopIntroSection from "./TopIntroSection";
import ClientReview from "./ClientReview";

const Landing = () => {
    return <div style={{ marginBottom: "70px" }}>
        <div className="landing_page py-5">
            <div className="container">
                <TopIntroSection />
            </div>
        </div>
        <SecrectsSections />
        <ShowCase />
        <FaqSection />
        <ClientReview />
        <BottomBanner />
    </div>
}
export default Landing;

