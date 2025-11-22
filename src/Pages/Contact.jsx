import React, { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";

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
    <section id="contact" className="relative py-20 px-4 bg-gradient-to-br from-slate-950 via-cyan-950/20 to-slate-950 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-teal-900/20 via-transparent to-transparent"></div>

      {/* Floating Particles Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              background: `radial-gradient(circle, ${
                i % 3 === 0 
                  ? 'rgba(34, 211, 238, 0.4)' 
                  : i % 3 === 1 
                  ? 'rgba(20, 184, 166, 0.4)' 
                  : 'rgba(6, 182, 212, 0.4)'
              }, transparent)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 12}s`,
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
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12 space-y-4"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <Mail className="w-10 h-10 text-cyan-400 animate-pulse" />
          </div>
          <motion.h2 
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(34,211,238,0.5)]"
            animate={{ 
              textShadow: [
                "0 0 20px rgba(34,211,238,0.5)",
                "0 0 40px rgba(34,211,238,0.8)",
                "0 0 20px rgba(34,211,238,0.5)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Contact Me
          </motion.h2>
          <p className="text-gray-300 text-lg">
            I'm open to freelance, full-time, or collaboration opportunities. Let's connect!
          </p>
        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 bg-gradient-to-br from-cyan-900/20 to-teal-900/20 backdrop-blur-sm p-8 rounded-3xl border border-cyan-500/20 shadow-[0_0_30px_rgba(34,211,238,0.1)]"
          noValidate
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full px-6 py-4 rounded-xl border-2 border-cyan-500/30 bg-slate-900/50 text-white placeholder:text-gray-400 focus:border-cyan-500/60 focus:outline-none focus:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300"
            aria-label="Your Name"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full px-6 py-4 rounded-xl border-2 border-cyan-500/30 bg-slate-900/50 text-white placeholder:text-gray-400 focus:border-cyan-500/60 focus:outline-none focus:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300"
            aria-label="Your Email"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="6"
            className="w-full px-6 py-4 rounded-xl border-2 border-cyan-500/30 bg-slate-900/50 text-white placeholder:text-gray-400 focus:border-cyan-500/60 focus:outline-none focus:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300 resize-none"
            aria-label="Your Message"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white text-lg font-bold rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] flex items-center justify-center gap-2"
          >
            <Send className="w-5 h-5 animate-pulse" />
            <span>Send Message</span>
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
