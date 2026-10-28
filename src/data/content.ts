export type Accent = [string, string];

export const content = {
  brand: {
    name: "Brijesh",
    initial: "B",
    fullName: "Brijesh Bhikadiya",
    title: "React Native Developer",
    location: "India",
    availability: "Open to remote",
  },

  links: {
    email: "brijeshbhikadiya27@gmail.com",
    linkedin: { url: "https://www.linkedin.com/in/brijesh-bhikadiya27/", label: "brijesh-bhikadiya27" },
    github: { url: "https://github.com/brijeshbhikadiya", username: "brijeshbhikadiya", label: "@brijeshbhikadiya" },
    resume: "https://drive.google.com/file/d/1JjgLocuL5xP1q9xncaaHfTCIcRMZQnBg/view?usp=drive_link",
  },

  hero: {
    badge: "Available for new projects",
    greeting: "Hi, I'm Brijesh 👋",
    headlineLine1: "React Native",
    headlineLine2: "Developer",
    subtext:
      "Building modern, scalable and high-performance mobile applications with React Native and TypeScript.",
    stack: ["React Native", "TypeScript", "JavaScript", "Redux", "REST API", "Firebase"],
    floatCards: [
      { title: "60 FPS", subtitle: "Smooth animations", icon: "bolt" },
      { title: "iOS · Android · Web", subtitle: "One codebase", icon: "monitor" },
    ],
    codePill: { keyword: "const", name: "app", value: "<Expo />" },
  },

  about: {
    pill: "ABOUT ME",
    heading: "Crafting mobile experiences people love to use",
    subheading:
      "React Native Developer | 3+ Years of Professional Experience | Cross-Platform Mobile App Development",
    paragraphs: [
      "I am a React Native Developer with 3+ years of professional experience building scalable, high-performance mobile applications for iOS and Android. I specialize in React Native, TypeScript, JavaScript, state management, API integration, and reusable component architecture, with a strong focus on clean code, performance optimization, and user experience.",
      "I have worked on projects across healthcare, fitness, fintech, transportation, and AI-powered applications, implementing features such as push notifications, real-time tracking, payment integrations, authentication, deep linking, and AI chatbot functionality. I enjoy solving complex technical challenges, learning new technologies, and collaborating with teams to deliver reliable, production-ready mobile applications, from the first screen to the store release.",
    ],
    stats: [
      { value: "3+", label: "Years Experience" },
      { value: "10+", label: "Apps Delivered" },
      { value: "4", label: "Store Releases" },
      { value: "100%", label: "Cross-platform" },
    ],
    services: [
      { icon: "smartphone", title: "Mobile App Development", description: "Production apps with React Native for iOS and Android, built for real users." },
      { icon: "layers", title: "Cross-platform", description: "One codebase shipping to iOS and Android with native-feeling performance." },
      { icon: "plug", title: "API Integration", description: "REST APIs, Axios, WebSockets and resilient error handling." },
      { icon: "workflow", title: "State Management", description: "Redux, Zustand and Context API with clean, reusable architecture." },
      { icon: "flame", title: "Firebase & Cloud", description: "Auth, push notifications, analytics and real-time services." },
      { icon: "cpu", title: "Native Features", description: "Maps, tracking, deep linking, in-app purchases and third-party SDKs." },
      { icon: "rocket", title: "App Deployment", description: "Release builds, debugging and publishing to the App Store and Google Play." },
      { icon: "gauge", title: "Performance & Testing", description: "Profiling, optimization and Jest testing for reliable apps." },
    ],
  },

  skills: {
    pill: "SKILLS",
    heading: "A toolkit built for shipping",
    subheading: "The technologies I use every day to design, build and release high-quality mobile apps.",
    groups: [
      {
        icon: "smartphone",
        title: "Mobile App Development",
        description: "Building scalable, high-performance cross-platform mobile applications.",
        items: ["React Native", "React Native CLI", "TypeScript", "JavaScript", "Android / iOS"],
      },
      {
        icon: "braces",
        title: "State Management & Architecture",
        description: "Designing maintainable applications with reusable components and clean architecture.",
        items: ["Redux", "Zustand", "Context API", "React Hooks", "MVVM"],
      },
      {
        icon: "api",
        title: "APIs & Backend Integration",
        description: "Integrating APIs, authentication, real-time features, and cloud services.",
        items: ["REST APIs", "Axios", "Firebase", "Node.js", "WebSockets"],
      },
      {
        icon: "puzzle",
        title: "Native Features & Integrations",
        description: "Implementing platform-specific features and third-party SDK integrations.",
        items: ["Native Modules", "Push Notifications", "Deep Linking", "In-App Purchases", "Maps & Tracking"],
      },
      {
        icon: "wrench",
        title: "Testing, Tools & Deployment",
        description: "Debugging, optimizing, testing, and publishing applications to production.",
        items: ["Git", "Jest", "Xcode", "Android Studio", "App Store & Play Store Deployment"],
      },
    ],
  },

  experience: {
    pill: "EXPERIENCE",
    heading: "Where I've been building",
    subheading: "Hands-on experience across the full mobile lifecycle, from first commit to store release.",
    highlightCard: {
      label: "CURRENT ROLE",
      role: "React Native Developer",
      bigNumber: "3+",
      bigLabel: "3+ Years Experience",
      bullets: ["iOS & Android releases", "APIs, Firebase & push notifications", "Performance & quality"],
    },
    jobs: [
      {
        role: "React Native Developer",
        company: "Hyperlink Infosystem",
        type: "Full-time",
        mode: "On-site",
        range: "Jan 2024 — Present",
        summary:
          "Developing and maintaining cross-platform mobile applications for iOS and Android across healthcare, fitness, fintech, transportation, and AI-powered solutions.",
        bullets: [
          "Developed and maintained cross-platform mobile applications using React Native, JavaScript, TypeScript, and reusable UI components.",
          "Integrated REST APIs, authentication flows, Firebase services, push notifications, and deep linking to deliver reliable app experiences.",
          "Implemented advanced features including real-time location tracking, maps integration, payment workflows, OCR-based scanning, and AI chatbot functionality.",
          "Worked on application performance optimization, debugging, third-party SDK integration, and resolving iOS and Android build issues.",
          "Supported end-to-end app delivery, including testing, release preparation, and publishing builds to the Apple App Store and Google Play Store.",
        ],
        tech: ["React Native", "TypeScript", "JavaScript", "REST APIs", "Firebase"],
      },
    ],
  },

  projects: {
    featured: {
      pill: "FEATURED WORK",
      heading: "Featured Projects",
      subheading: "A selection of apps I've built and shipped, from idea to the stores.",
      items: [
        {
          no: "01",
          meta: "HEALTHCARE · REACT NATIVE · IOS & ANDROID",
          title: "Healthcare Management Platform",
          description:
            "A cross-platform healthcare solution featuring dedicated patient and nurse applications. The platform supports medical service workflows, testing processes, and communication between patients and healthcare providers.",
          highlights: [
            "Developed patient and nurse mobile application features.",
            "Integrated authentication, REST APIs, and push notifications.",
            "Implemented medical testing and payment-related workflows.",
          ],
          tech: ["React Native", "TypeScript", "REST APIs", "Firebase", "Push Notifications"],
          accent: ["#0D9488", "#22C55E"] as Accent,
          phoneTitle: "Healthcare",
          screenshot: "",
          links: { playStore: "", appStore: "", github: "", demo: "" },
        },
        {
          no: "02",
          meta: "FINTECH · SOCIAL NETWORKING · REACT NATIVE",
          title: "Stock Market Social Network",
          description:
            "A social investing platform focused on the US stock market, where users can connect with investors, follow or unfollow profiles, and share market-related posts.",
          highlights: [
            "Developed investor follow/unfollow functionality.",
            "Implemented a social feed for stock-market-related posts.",
            "Built cross-platform mobile experiences for an investor community.",
          ],
          tech: ["React Native", "TypeScript", "REST APIs", "Social Feeds", "User Profiles"],
          accent: ["#2563EB", "#06B6D4"] as Accent,
          phoneTitle: "Stocks",
          screenshot: "",
          links: { playStore: "", appStore: "", github: "", demo: "" },
        },
        {
          no: "03",
          meta: "PERSONAL · GENERATIVE AI · PRODUCTIVITY · MOBILE",
          title: "QuickMail AI Email Writer",
          description:
            "An AI-powered email writing application that simplifies professional email composition through GPT/Gemini integration and multilingual support. The app achieved significant user adoption and was successfully commercialized through a client sale.",
          highlights: [
            "Integrated GPT/Gemini-powered email generation.",
            "Implemented multilingual support across 7 languages.",
            "Achieved 10,000+ Google Play downloads and successfully sold the application to a client.",
          ],
          tech: ["React Native", "Firebase", "GPT/Gemini", "REST APIs", "JavaScript"],
          accent: ["#7C3AED", "#EC4899"] as Accent,
          phoneTitle: "QuickMail",
          screenshot: "",
          links: { playStore: "", appStore: "", github: "", demo: "" },
        },
      ],
    },

    more: {
      heading: "More Projects",
      subheading: "Side projects, experiments and client work.",
      items: [
        {
          meta: "TRANSPORTATION · LOCATION SERVICES · MOBILE",
          title: "Ride Discovery & Driver Matching Platform",
          description:
            "A ride-matching application that helps drivers discover locations and connect with customers looking for a ride through location-based discovery.",
          tech: ["React Native", "Maps & Location", "REST APIs"],
          accent: ["#2563EB", "#F97316"] as Accent,
          phoneTitle: "Rides",
          button: { label: "Private Project · Demo on Request", href: "#contact", type: "contact" },
        },
        {
          meta: "FITNESS · GENERATIVE AI · HEALTH TECHNOLOGY",
          title: "AI Fitness & Workout Planner",
          description:
            "An AI-powered fitness application that generates personalized workout plans and exercise routines, helping users organize their fitness activities through a mobile experience.",
          tech: ["React Native", "LLM Integration", "Health APIs"],
          accent: ["#16A34A", "#84CC16"] as Accent,
          phoneTitle: "Fitness",
          button: { label: "Private Project · Demo on Request", href: "#contact", type: "contact" },
        },
        {
          meta: "EDTECH · GENERATIVE AI · MOBILE",
          title: "MyClassGPT — AI Learning Assistant",
          description:
            "An AI-assisted learning application designed to make educational support more accessible through a mobile-first experience.",
          tech: ["React Native", "AI APIs", "REST APIs"],
          accent: ["#2563EB", "#7C3AED"] as Accent,
          phoneTitle: "MyClassGPT",
          button: { label: "View Project · Demo on Request", href: "#contact", type: "contact" },
        },
      ],
    },

    published: {
      pill: "IN THE STORES",
      heading: "Published Apps",
      subheading: "Real apps, used by real people, available on Google Play.",
      items: [
        {
          name: "QuickMail AI Email Writer",
          icon: "/app-icons/quickmail.png",
          category: "Productivity",
          downloads: "10,000+",
          description:
            "AI-powered email writing assistant that generates professional emails using GPT/Gemini and supports 7 languages.",
          playStore: "",
          playStoreFallback: "https://play.google.com/store/search?q=QuickMail%20AI%20Email%20Writer&c=apps",
          appStore: "",
        },
      ],
    },

    github: {
      pill: "OPEN SOURCE",
      heading: "On GitHub",
      subheading: "Libraries, starters and experiments I share with the community.",
      username: "brijeshbhikadiya",
      count: 6,
    },
  },

  contact: {
    pill: "CONTACT",
    heading: "Let's build something great together.",
    subheading:
      "Have a project in mind, a role to fill or just want to say hi? My inbox is always open.",
    replyLine: "Usually replies within 24 hours · India · Open to remote",
  },

  footer: {
    description:
      "Building modern, scalable and high-performance mobile apps with React Native and TypeScript.",
  },
};
