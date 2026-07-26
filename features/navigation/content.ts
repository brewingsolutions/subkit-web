export const NAV_LINKS = [
  { name: "Architecture", href: "/#features" },
  { name: "Roadmap", href: "/roadmap" },
  { name: "Pricing", href: "/pricing" },
];

export const NAV_DEV_DROPDOWN = [
  {
    name: "Documentation",
    description: "SDK design previews and project status",
    href: "/docs",
    icon: "BookOpen",
    iconColor: "text-blue-500",
  },
  {
    name: "Contract Preview",
    description: "Current and planned REST contract boundaries",
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
    { name: "Architecture", href: "/#features" },
    { name: "Roadmap", href: "/roadmap" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contract Preview", href: "/docs" },
    { name: "System Status", href: "/docs" },
  ],
  Developers: [
    { name: "Documentation", href: "/docs" },
    { name: "SDK Roadmap", href: "/roadmap" },
    { name: "Subkit on GitHub", href: "https://github.com/brewingsolutions/subkit" },
    { name: "Subkit Core", href: "https://github.com/brewingsolutions/subkit-core" },
  ],
  Support: [
    { name: "About Us", href: "/about" },
    { name: "Privacy & Data Control", href: "/gdpr" },
    { name: "DPA Status", href: "/dpa" },
    // { name: "Blog", href: "#blog" },
    { name: "Privacy Notice", href: "/privacy" },
    { name: "Website Terms", href: "/terms" },
    { name: "Contact Us", href: "/contact" },
  ],
};
