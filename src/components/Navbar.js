import { ArrowRightIcon, BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React, { useState, useEffect } from "react";
import { skills } from "../data";

export default function Navbar() {
  const [showContactModal, setShowContactModal] = useState(false);
  const [showSkillsModal, setShowSkillsModal] = useState(false);

  // Toggle modal visibility
  const toggleContactModal = () => setShowContactModal(!showContactModal);
  const toggleSkillsModal = () => setShowSkillsModal(!showSkillsModal);

  // Close modal when pressing Escape key
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setShowContactModal(false);
      setShowSkillsModal(false);
    }
  };

  // Focus on modal when it's shown
  useEffect(() => {
    if (showContactModal || showSkillsModal) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
      window.addEventListener('keydown', handleKeyDown); // Listen for escape key
    } else {
      document.body.style.overflow = ''; // Re-enable scrolling
      window.removeEventListener('keydown', handleKeyDown); // Remove escape key listener
    }

    return () => window.removeEventListener('keydown', handleKeyDown); // Cleanup listener on unmount
  }, [showContactModal, showSkillsModal]);

  return (
    <>
      {/* Navbar */}
      <header className="bg-gray-800 md:sticky top-0 z-10">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="title-font font-medium text-white mb-4 md:mb-0">
            <a href="#about" className="ml-3 text-xl">
              Alexie Leanne Ramos
            </a>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
            <a href="#projects" className="mr-5 hover:text-white">
              Past Work
            </a>
            <a
              href="#skills"
              onClick={toggleSkillsModal}
              className="mr-5 hover:text-white cursor-pointer"
              role="button"
              aria-haspopup="dialog"
              aria-expanded={showSkillsModal ? 'true' : 'false'}
            >
              Skills
            </a>

            {/* Open Contact modal */}
            <a
              href="#"
              onClick={toggleContactModal}
              className="mr-5 hover:text-white cursor-pointer"
              role="button"
              aria-haspopup="dialog"
              aria-expanded={showContactModal ? 'true' : 'false'}
            >
              Contacts
            </a>
          </nav>

          {/* Hire Me button */}
          <a
            href="#contact"
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
          >
            Hire Me
            <ArrowRightIcon className="w-4 h-4 ml-1" />
          </a>
        </div>
      </header>

      {/* Contact Modal */}
      {showContactModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20"
          role="dialog"
          aria-labelledby="contact-modal-title"
          aria-hidden={!showContactModal}
          tabIndex="-1"
          id="contact-modal"
        >
          <div className="bg-white text-gray-800 p-6 rounded-lg w-96">
            <h2
              id="contact-modal-title"
              className="text-xl font-medium mb-4 text-center"
            >
              <b>Contact Information</b>
            </h2>
            <p className="text-center"><b>Email:</b></p>
            <p className="text-center">ramos2105463@ceu.edu.ph</p>
            <p className="text-center"><b>Phone:</b></p>
            <p className="text-center">127-326-1026</p>
            <button
              onClick={toggleContactModal}
              className="mt-4 bg-indigo-500 text-white py-2 px-4 rounded w-full"
              aria-label="Close Modal"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
