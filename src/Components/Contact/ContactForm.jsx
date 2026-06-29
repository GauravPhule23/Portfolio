import { useState } from "react";
import { FiSend } from "react-icons/fi";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);

    // API later
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-neutral-200 rounded-3xl p-8 shadow-sm"
    >
      <h3 className="text-3xl font-bold mb-8">
        Send Me a Message
      </h3>

      <div className="grid md:grid-cols-2 gap-5">

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="border rounded-xl p-4 outline-none focus:border-black"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="border rounded-xl p-4 outline-none focus:border-black"
        />

      </div>

      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={form.subject}
        onChange={handleChange}
        className="w-full mt-5 border rounded-xl p-4 outline-none focus:border-black"
      />

      <textarea
        rows="6"
        name="message"
        placeholder="Write your message..."
        value={form.message}
        onChange={handleChange}
        className="w-full mt-5 border rounded-xl p-4 outline-none resize-none focus:border-black"
      />

      <button
        type="submit"
        className="mt-8 inline-flex items-center gap-3 bg-black text-white px-7 py-4 rounded-full hover:scale-105 transition"
      >
        Send Message

        <FiSend />
      </button>
    </form>
  );
}