import { useState } from "react";
import axios from "axios";
import "./ContactFormStyles.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // Handle input changes dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert("Please fill all fields before submitting.");
      return;
    }

    setStatus("Sending message...");

    try {
      // Backend endpoint
      const response = await axios.post("http://localhost:5000/contact", {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      });

      if (response.data.message === "Message submitted successfully") {
        setStatus("✅ Message sent successfully!");
        // Clear form
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus(response.data.error || "⚠️ Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      setStatus("⚠️ Error sending message. Please try again.");
    }
  };

  return (
    <div className="form-container">
      <h1>Send a Message</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          required
        />
        <button type="submit">Send</button>
      </form>
      {status && <p className="status-message">{status}</p>}
    </div>
  );
}

export default ContactForm;
