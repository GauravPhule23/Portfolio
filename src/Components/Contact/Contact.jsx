import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";
import contactData from "./contactData";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-6 py-28"
    >
      <p className="uppercase tracking-[4px] text-neutral-500">
        Contact
      </p>

      <h2 className="text-5xl lg:text-7xl font-black mt-3">
        Let's Work
        <br />

        <span className="text-transparent [-webkit-text-stroke:2px_black]">
          Together.
        </span>
      </h2>

      <p className="mt-8 text-lg max-w-3xl text-neutral-600 leading-8">
        I'm currently available for internships,
        freelance projects and full-time opportunities.
        If you have an exciting idea or opportunity,
        feel free to reach out.
      </p>

      <div className="mt-16 grid lg:grid-cols-2 gap-16">

        {/* Left */}

        <div>

          <div className="grid sm:grid-cols-2 gap-6">

            {contactData.map((item) => (
              <ContactCard
                key={item.title}
                item={item}
              />
            ))}

          </div>

        </div>

        {/* Right */}

        <ContactForm />

      </div>
    </section>
  );
}