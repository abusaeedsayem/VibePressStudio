import { Product } from "../types/product";

export const products: Product[] = [
  {
    id: "prod-smart-affiliate-link-cloaker",
    slug: "smart-affiliate-link-cloaker",
    name: "Smart Affiliate Link Cloaker",
    tagline: "Maximize your affiliate revenue with intelligent link cloaking and tracking.",
    description: "The ultimate WordPress plugin for FTC compliance, branded redirect cloaking, A/B split testing, geo-routing, and automatic DOM keyword linking. Built to help marketers protect their commissions and optimize conversion rates seamlessly.",
    category: "wordpress-plugin",
    icon: "Link",
    logoImage: "/images/products/smart-affiliate-link-cloaker-logo.png",
    screenshotGallery: [
      "/images/products/smart-affiliate-link-cloaker-dash.png",
      "/images/products/smart-affiliate-link-cloaker-stats.png",
      "/images/products/smart-affiliate-link-cloaker-settings.png"
    ],
    version: "2.4.1",
    changelogUrl: "https://vibepress.studio/changelog/smart-affiliate-link-cloaker",
    techStack: ["WordPress", "PHP", "React", "MySQL"],
    keyFeatures: [
      {
        title: "Branded Redirects",
        description: "Transform ugly affiliate links into clean, branded URLs that users trust.",
        iconName: "ShieldCheck",
        isPro: false,
      },
      {
        title: "FTC Compliance Automation",
        description: "Automatically append FTC disclosures to posts containing affiliate links.",
        iconName: "Scale",
        isPro: false,
      },
      {
        title: "A/B Split Testing",
        description: "Test multiple affiliate offers against each other to find the highest converter.",
        iconName: "Split",
        isPro: true,
      },
      {
        title: "Geo-Routing",
        description: "Redirect users to different URLs based on their geographic location.",
        iconName: "MapPin",
        isPro: true,
      },
      {
        title: "DOM Keyword Auto-linking",
        description: "Automatically convert specific keywords across your site into affiliate links.",
        iconName: "Highlighter",
        isPro: true,
      }
    ],
    targetAudience: [
      "Affiliate Marketers",
      "Bloggers",
      "Content Creators",
      "SEO Professionals"
    ],
    pricingTiers: [
      {
        planName: "Free",
        priceYearly: 0,
        priceLifetime: null,
        features: [
          "Basic link cloaking",
          "Click tracking",
          "FTC compliance disclosures",
          "Standard redirects (301, 302, 307)"
        ],
        checkoutUrl: "https://wordpress.org/plugins/smart-affiliate-link-cloaker/",
        isFeatured: false
      },
      {
        planName: "Pro (Yearly)",
        priceYearly: 49,
        priceLifetime: null,
        features: [
          "Everything in Free",
          "A/B Split Testing",
          "Geo-Routing",
          "Keyword Auto-linking",
          "Advanced Analytics",
          "Priority Support"
        ],
        checkoutUrl: "https://checkout.freemius.com/smart-affiliate-link-cloaker/pro-yearly",
        isFeatured: true
      },
      {
        planName: "Pro (Lifetime)",
        priceYearly: null,
        priceLifetime: 149,
        features: [
          "Everything in Pro",
          "Lifetime Updates",
          "Lifetime Support",
          "Unlimited Sites"
        ],
        checkoutUrl: "https://checkout.freemius.com/smart-affiliate-link-cloaker/pro-lifetime",
        isFeatured: false
      }
    ],
    distributionChannels: {
      wordpressOrgUrl: "https://wordpress.org/plugins/smart-affiliate-link-cloaker/",
      freemiusUrl: "https://freemius.com/profile/smart-affiliate-link-cloaker",
      appSumoUrl: "https://appsumo.com/products/smart-affiliate-link-cloaker"
    },
    documentationSections: [
      {
        title: "Getting Started",
        content: "Learn how to install and activate Smart Affiliate Link Cloaker on your WordPress site.",
        steps: [
          "Download the plugin zip file.",
          "Navigate to Plugins > Add New in your WordPress dashboard.",
          "Upload the zip file and click 'Install Now'.",
          "Click 'Activate' and navigate to the Smart Link Cloaker menu."
        ]
      },
      {
        title: "Setting up Geo-Routing",
        content: "Configure links to redirect visitors based on their country.",
        steps: [
          "Edit any existing affiliate link.",
          "Enable the 'Geo-Routing' toggle.",
          "Add country-specific destination URLs."
        ]
      }
    ]
  },
  {
    id: "prod-shelfmaster-desktop",
    slug: "shelfmaster",
    name: "ShelfMaster (LibrisCore Desktop)",
    tagline: "High-performance, offline-first library and retail operating system.",
    description: "A robust desktop application designed for modern libraries and retail stores. Featuring comprehensive cataloging, POS circulation, staff rosters, payroll, expense tracking, and native thermal/A4 printing support. Built for speed and reliability, entirely offline-first.",
    category: "desktop-app",
    icon: "Library",
    logoImage: "/images/products/shelfmaster-logo.png",
    screenshotGallery: [
      "/images/products/shelfmaster-dashboard.png",
      "/images/products/shelfmaster-pos.png",
      "/images/products/shelfmaster-catalog.png"
    ],
    version: "1.2.0",
    changelogUrl: "https://vibepress.studio/changelog/shelfmaster",
    techStack: ["Tauri v2", "React 18", "Tailwind CSS", "SQLite", "Rust", "Framer Motion"],
    keyFeatures: [
      {
        title: "Offline-First Architecture",
        description: "Zero dependency on internet connection. Your data lives securely on your device via SQLite.",
        iconName: "WifiOff",
        isPro: false,
      },
      {
        title: "POS Circulation",
        description: "Lightning-fast checkout, check-in, and point of sale functionalities.",
        iconName: "ShoppingCart",
        isPro: false,
      },
      {
        title: "Native Printing Support",
        description: "Direct hardware integration for POS thermal receipt printers and standard A4 invoice printing.",
        iconName: "Printer",
        isPro: true,
      },
      {
        title: "Staff & Payroll Management",
        description: "Manage rosters, track attendance, and automate basic payroll calculations.",
        iconName: "Users",
        isPro: true,
      },
      {
        title: "Expense Tracking",
        description: "Built-in accounting tools to monitor store or library expenses efficiently.",
        iconName: "Receipt",
        isPro: true,
      }
    ],
    targetAudience: [
      "Libraries",
      "Retail Stores",
      "Bookstores",
      "Small Business Owners"
    ],
    pricingTiers: [
      {
        planName: "Standard License",
        priceYearly: null,
        priceLifetime: 99,
        features: [
          "Offline Cataloging",
          "POS Circulation",
          "Basic Reporting",
          "Standard Community Support"
        ],
        checkoutUrl: "https://vibepress.studio/checkout/shelfmaster/standard",
        isFeatured: false
      },
      {
        planName: "Pro License",
        priceYearly: null,
        priceLifetime: 199,
        features: [
          "Everything in Standard",
          "Native Thermal/A4 Printing",
          "Staff & Payroll Management",
          "Expense Tracking",
          "1 Year Priority Support"
        ],
        checkoutUrl: "https://vibepress.studio/checkout/shelfmaster/pro",
        isFeatured: true
      }
    ],
    distributionChannels: {
      appSumoUrl: "https://appsumo.com/products/shelfmaster-libriscore",
      directDownloadUrl: "https://vibepress.studio/downloads/shelfmaster"
    },
    documentationSections: [
      {
        title: "Installation Guide",
        content: "Steps to install ShelfMaster on your local machine.",
        steps: [
          "Download the appropriate installer for your OS (Windows .exe, macOS .dmg, or Linux .AppImage).",
          "Run the installer and follow the on-screen prompts.",
          "Launch ShelfMaster and complete the initial setup wizard."
        ]
      },
      {
        title: "Configuring Thermal Printers",
        content: "Set up POS receipt printers for lightning-fast printing.",
        steps: [
          "Navigate to Settings > Hardware Integration.",
          "Select 'Thermal Printer' from the dropdown.",
          "Set the correct paper width (e.g., 80mm or 58mm).",
          "Click 'Print Test Page' to verify connectivity."
        ]
      }
    ]
  }
];
