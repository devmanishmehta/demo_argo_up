import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const FaqSection = () => <div className="faq_section">
    <div className="container p-3">
        <div className="heading h2">Frequently Asked Questions</div>
        <div className="sub_heading"> Empowering You with Information: <span>FAQs That Deliver the Answers You Need. </span> </div>

        <div className="main_con">
            <div className="image">
                <img src="/faq.png" alt="" />
            </div>
            <div className="faqs">
                <Faq
                    question="I don't have any technical knowledge, can I attend this masterclass?"
                    answer="Absolutely YES! You don't need to have any coding or technical knowledge. Any novice can do this."
                />
                <Faq
                    question="I don't have any technical knowledge, can I attend this masterclass?"
                    answer="Absolutely YES! You don't need to have any coding or technical knowledge. Any novice can do this."
                />
                <Faq
                    question="I don't have any technical knowledge, can I attend this masterclass?"
                    answer="Absolutely YES! You don't need to have any coding or technical knowledge. Any novice can do this."
                />
                <Faq
                    question="I don't have any technical knowledge, can I attend this masterclass?"
                    answer="Absolutely YES! You don't need to have any coding or technical knowledge. Any novice can do this."
                />
                <Faq
                    question="I don't have any technical knowledge, can I attend this masterclass?"
                    answer="Absolutely YES! You don't need to have any coding or technical knowledge. Any novice can do this."
                />
            </div>
        </div>
    </div>
</div>;


const Faq = ({ question, answer }: any) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return <div className={`faq shadow-sm rounded ${isExpanded ? 'expanded' : ''}`}>
        <div className="faq_question p-3" onClick={() => setIsExpanded(prev => !prev)}>
            {question}
            <div className="icon_toggler" ><FiChevronDown size={25} /></div>
        </div>
        <div className="faq_answer p-3">{answer}</div>
    </div>
}
export default FaqSection;