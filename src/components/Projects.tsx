interface Project {
  name: string;
  tag: string;
  description: string;
  ios?: string;
  android?: string;
  samsung?: string;
  subLinks?: { label: string; ios: string; android: string }[];
}

const projects: Project[] = [
  {
    name: "HBL International Banking Apps",
    tag: "Fintech / Banking",
    description:
      "Maintain and enhance multiple international banking apps (UAE, Bahrain, Sri Lanka, Maldives, Bangladesh) built with React Native and environment-based flavors. Led upgrade from RN 0.63 to 0.81. Implemented encryption/decryption for secure data transmission, biometric authentication, Arabic localization, and dark theme support.",
    subLinks: [
      { label: "HBL UAE", ios: "https://apps.apple.com/us/app/hbl-mobile-uae/id1166817920", android: "https://play.google.com/store/apps/details?id=com.hblmobileinternational&hl=en" },
      { label: "HBL Bahrain", ios: "https://apps.apple.com/pk/app/hbl-mobile-bahrain/id1515683720", android: "https://play.google.com/store/apps/details?id=com.hblmobileinternational.bahrain&hl=en" },
      { label: "HBL Sri Lanka", ios: "https://apps.apple.com/br/app/hbl-mobile-sri-lanka/id1535889555?l=en-GB", android: "https://play.google.com/store/apps/details?id=com.hblmobileinternational.srilanka&hl=en" },
      { label: "HBL Maldives", ios: "https://apps.apple.com/pk/app/hbl-mobile-maldives/id1535889613", android: "https://play.google.com/store/apps/details?id=com.hblmobileinternational.maldives&hl=en" },
      { label: "HBL Bangladesh", ios: "https://apps.apple.com/pk/app/hbl-mobile-bangladesh/id1535889240", android: "https://play.google.com/store/apps/details?id=com.hblmobileinternational.bangladesh&hl=en" },
    ],
  },
  {
    name: "eTijwaal — Global Travel eSIM",
    tag: "eSIM / Travel",
    description:
      "An eSIM mobile application that allows users to purchase eSIMs and data packages from countries all over the world. Responsible for maintaining the app with latest technologies and managing weekly updates across Apple App Store, Google Play Store, and Samsung Galaxy Store.",
    ios: "https://apps.apple.com/us/app/etijwaal-global-travel-esim/id6477891978",
    android: "https://play.google.com/store/apps/details?id=com.etijwaalapp&hl=nl",
    samsung: "https://galaxystore.samsung.com/detail/com.etijwaalapp",
  },
  {
    name: "Streamline Live",
    tag: "Social Media",
    description:
      "Instagram-like social media app for a specific community. Built with React Native, GraphQL, TypeScript, and Context API.",
    ios: "https://apps.apple.com/us/app/streamline-live/id1516390303",
  },
  {
    name: "Future IT",
    tag: "E-Commerce",
    description:
      "Magento-based e-commerce mobile app built with React Native, Redux Toolkit, and React Hook Form.",
    ios: "https://apps.apple.com/us/app/future-i-t/id6448718975",
  },
  {
    name: "G-Forward",
    tag: "Grocery / Social Good",
    description:
      "Grocery donation app where people contribute to baskets for those in need. Built with Redux, Redux Saga, and Reanimated.",
    ios: "https://apps.apple.com/us/app/g-forward/id1563707189",
    android: "https://play.google.com/store/apps/details?id=com.gforward",
  },
  {
    name: "ShowAssist",
    tag: "Service Platform",
    description:
      "Connects experienced grooms with horse show staff across the U.S. and Canada for short-term horse care.",
    ios: "https://apps.apple.com/us/app/showassist/id1519697832",
    android: "https://play.google.com/store/apps/details?id=com.app.showassist",
  },
  {
    name: "Look Who's Outdoors",
    tag: "Events",
    description:
      "Event-based app with Google Maps integration and UTC timezone support. Host paid or free gatherings anywhere.",
    ios: "https://apps.apple.com/sa/app/look-whos-outdoors/id1598558959",
    android:
      "https://play.google.com/store/apps/details?id=com.look_who_outdoors.dev",
  },
  {
    name: "Journey to Bethlehem",
    tag: "Music Player",
    description:
      "Music player app for a church community with playback controls, Redux Toolkit state management, and push notifications.",
    ios: "https://apps.apple.com/in/app/journey-to-bethlehem/id6444813847",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border py-12">
      <h2 className="mb-8 text-2xl font-bold">Projects</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.name}
            className="rounded-xl border border-border bg-bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-accent"
          >
            <h3 className="text-[0.95rem] font-semibold">{project.name}</h3>
            <span className="mt-1 inline-block rounded-full bg-accent/10 px-2 py-0.5 text-xs text-accent">
              {project.tag}
            </span>
            <p className="mt-2 text-xs leading-relaxed text-text-muted">
              {project.description}
            </p>
            {project.subLinks ? (
              <div className="mt-3 space-y-1.5">
                {project.subLinks.map((sub) => (
                  <div key={sub.label} className="flex items-center gap-2">
                    <span className="text-xs text-text-muted">{sub.label}:</span>
                    <a href={sub.ios} target="_blank" rel="noopener noreferrer" className="text-xs text-accent transition-colors hover:text-accent-hover">iOS ↗</a>
                    <a href={sub.android} target="_blank" rel="noopener noreferrer" className="text-xs text-accent transition-colors hover:text-accent-hover">Android ↗</a>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-3 flex gap-3">
                {project.ios && (
                  <a href={project.ios} target="_blank" rel="noopener noreferrer" className="text-xs text-accent transition-colors hover:text-accent-hover">iOS ↗</a>
                )}
                {project.android && (
                  <a href={project.android} target="_blank" rel="noopener noreferrer" className="text-xs text-accent transition-colors hover:text-accent-hover">Android ↗</a>
                )}
                {project.samsung && (
                  <a href={project.samsung} target="_blank" rel="noopener noreferrer" className="text-xs text-accent transition-colors hover:text-accent-hover">Samsung ↗</a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
