import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { toast } from "sonner";
import axios from "axios";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    for (const key of Object.keys(form)) {
      if (!form[key] || form[key].trim() === "") {
        toast.error(`Please fill the ${key} field.`);
        setLoading(false);
        return;
      }
    }

    //verifying is the email is valid or not
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      toast.error("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    //using axios

    try {
      const res = await axios.post("https://portfolio-backend-mags.vercel.app/api/contact", form, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if(res.data.success){
        toast.success(res.data.message);
      }else{
        toast.error(res.data.error || "Something went wrong");
      }
    } catch (err) {
         toast.error("Internal Server Error. Please try again later.");
    } finally {
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setLoading(false);
    }

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
        className={"mt-8 inline-flex items-center gap-3 bg-black text-white px-7 py-4 rounded-full hover:scale-105 transition" + (loading ? " opacity-50 cursor-not-allowed" : "")}
        disabled={loading}
      >
        {loading ? "Sending..." : "Send Message"}

        <FiSend />
      </button>
    </form>
  );
}