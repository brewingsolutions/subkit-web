export const NAV_LINKS = [
  { name: "Integrations", href: "/#integrations" },
  { name: "Roadmap", href: "/roadmap" },
  { name: "Pricing", href: "/pricing" },
];

export const NAV_DEV_DROPDOWN = [
  {
    name: "Documentation",
    description: "Quickstart guides & SDK setups",
    href: "/docs",
    icon: "BookOpen",
    iconColor: "text-blue-500",
  },
  {
    name: "API Reference",
    description: "REST API specs & references",
    href: "/docs",
    icon: "Terminal",
    iconColor: "text-purple-500",
  },
  {
    name: "System Status",
    description: "Current reported availability",
    href: "/docs",
    icon: "Activity",
    iconColor: "text-emerald-500",
  },
] as const;

export const NAV_MORE_DROPDOWN = [
  { name: "FAQ", href: "/#faq" },
  { name: "Contact Us", href: "/contact" },
] as const;

export const FOOTER_LINKS = {
  Product: [
    { name: "Integrations", href: "/#integrations" },
    { name: "Roadmap", href: "/roadmap" },
    { name: "Pricing", href: "/pricing" },
    { name: "API Reference", href: "/docs" },
    { name: "System Status", href: "/docs" },
  ],
  Developers: [
    { name: "Documentation", href: "/docs" },
    { name: "iOS SDK", href: "/docs" },
    { name: "Android SDK", href: "/docs" },
    { name: "Flutter SDK", href: "/docs" },
    { name: "React Native SDK", href: "/docs" },
  ],
  Support: [
    { name: "About Us", href: "/about" },
    { name: "GDPR Compliance", href: "/gdpr" },
    { name: "Data Processing Addendum (DPA)", href: "/dpa" },
    // { name: "Blog", href: "#blog" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Contact Us", href: "/contact" },
  ],
};
