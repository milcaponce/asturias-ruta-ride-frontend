import { useState, useId } from "react";
import PropTypes from "prop-types";

export default function Accordion({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);
    const contentId = useId();

    return (
        <div className="border-b border-gray-200">
            <button
                className="w-full text-left py-4 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-brandGreen"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-controls={contentId}
            >
                <span className="font-medium text-brandDarkGreen">{question}</span>
                <span className="text-brandGreen text-xl">{isOpen ? "−" : "+"}</span>
            </button>

            <div
                id={contentId}
                role="region"
                aria-hidden={!isOpen}
                className={`overflow-hidden transition-all duration-300 text-textMuted ${
                    isOpen ? "max-h-40" : "max-h-0"
                }`}
            >
                <p className="py-2 pr-4">{answer}</p>
            </div>
        </div>
    );
}

Accordion.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
};