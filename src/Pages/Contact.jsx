import React, { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [popup, setPopup] = useState({ show: false, message: "", type: "" });

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_q4h1fwd",    // your EmailJS service ID
        "template_0krema4",   // your EmailJS template ID
        formRef.current,
        "e2m9r4Gb8s8U3p-LM"   // your EmailJS user/public key
      )
      .then(
        () => {
          formRef.current.reset();
          setPopup({ show: true, message: "Message sent successfully!", type: "success" });
        },
        () => {
          setPopup({ show: true, message: "Failed to send. Please try again.", type: "error" });
        }
      );
  };

  // Auto-hide popup after 2 seconds
  useEffect(() => {
    if (!popup.show) return;
    const timer = setTimeout(() => setPopup(p => ({ ...p, show: false })), 2000);
    return () => clearTimeout(timer);
  }, [popup.show]);

  return (
    <section id="contact" className="relative py-20 px-4 bg-white dark:bg-gray-900 overflow-hidden">
      {/* Inline bubble animation style */}
      <style>{`
        @keyframes bubble {
          0% {
            transform: translateY(0);
            opacity: 0.6;
          }
          100% {
            transform: translateY(-600px);
            opacity: 0;
          }
        }
        .animate-bubble {
          animation-name: bubble;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>

      {/* Bubble Background */}
      <div className="bubble-container absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="bubble rounded-full bg-[#24CFA6] absolute bottom-[-150px] opacity-60 animate-bubble"
            style={{
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Popup Notification */}
      {popup.show && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <div className={`px-6 py-4 rounded-md text-white ${popup.type === "success" ? "bg-green-600" : "bg-red-600"}`}>
            {popup.message}
          </div>
        </div>
      )}

      {/* Form Content */}
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-3xl font-bold text-indigo-600 dark:text-[#24CFA6] mb-6">Contact Me</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          I'm open to freelance, full-time, or collaboration opportunities. Let's connect!
        </p>

        <form ref={formRef} onSubmit={sendEmail} className="space-y-4" noValidate>
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            aria-label="Your Name"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            aria-label="Your Email"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="4"
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            aria-label="Your Message"
          />
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
