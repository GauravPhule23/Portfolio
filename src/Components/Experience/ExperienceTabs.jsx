export default function ExperienceTabs({ activeTab, setActiveTab }) {
  const tabs = [
    {
      id: "fulltime",
      label: "Full Time",
    },
    {
      id: "internship",
      label: "Internship",
    },
  ];

  return (
    <div className="inline-flex p-1 rounded-full bg-neutral-100 border border-neutral-200 mb-12">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-300
            ${
              activeTab === tab.id
                ? "bg-black text-white shadow-lg"
                : "text-neutral-600 hover:text-black"
            }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}