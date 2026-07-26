import { LogEvent } from "@/features/home/model";

export const INITIAL_LOGS: LogEvent[] = [
  { id: 1, time: "12:04:15", event: "Subscription created", amount: "$19.00/mo", status: "success" },
  { id: 2, time: "12:04:12", event: "Stripe webhook received", status: "info" },
  { id: 3, time: "12:03:55", event: "Invoice paid", amount: "$49.00", status: "success" },
  { id: 4, time: "12:03:10", event: "Customer activated", status: "success" },
];

export const NEW_EVENTS_POOL = [
  { event: "App Store purchase verified", amount: "$9.99/mo", status: "success" as const },
  { event: "Subscription renewed", amount: "$29.00/mo", status: "success" as const },
  { event: "Customer created", status: "info" as const },
  { event: "Trial period started", status: "info" as const },
  { event: "Google Play webhook received", status: "info" as const },
  { event: "Invoice paid", amount: "$89.00", status: "success" as const },
];

export const CLIENT_LOGOS = [
  { name: "Sworkit" },
  { name: "Fishbrain" },
  { name: "Reflectly" },
  { name: "Pillow" },
  { name: "Hiya" },
  { name: "Foodvisor" },
];

export const TESTIMONIALS_DATA = [
  {
    quote: "We have been able to iterate very fast on our conversion funnels and pricing models, leading to a 2x-3x growth of our ARPU since the first integration.",
    author: "Charles Boes",
    company: "Foodvisor",
    color: "border-border hover:border-emerald-500/30 hover:shadow-float",
    textGlow: "text-emerald-500",
    bgAccent: "from-emerald-500/5",
  },
  {
    quote: "We have gotten back so much time to focus on important features thanks to Subkit!",
    author: "Francescu",
    company: "MOJO",
    color: "border-border hover:border-amber-500/30 hover:shadow-float",
    textGlow: "text-amber-500",
    bgAccent: "from-amber-500/5",
  },
  {
    quote: "Even if you've already invested a bunch of time building your own machinery for IAP stuff, it's still worth switching to Subkit as soon as you have time.",
    author: "Christian Brink",
    company: "Audm",
    color: "border-border hover:border-blue-500/30 hover:shadow-float",
    textGlow: "text-blue-500",
    bgAccent: "from-blue-500/5",
  },
];
