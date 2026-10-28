import {
  Smartphone, Layers, Plug, Workflow, Flame, Cpu, Rocket, Gauge, Braces, Webhook,
  Puzzle, Wrench, Zap, MonitorSmartphone, Sparkles, Atom, Terminal, FileCode2, FileCode, Boxes,
  Database, Share2, Anchor, LayoutGrid, Code2, Server, Radio, Bell, Link2, ShoppingBag, MapPin,
  GitBranch, FlaskConical, Hammer, AppWindow, Stethoscope, TrendingUp, Mail, Car, Dumbbell,
  GraduationCap, type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  smartphone: Smartphone, layers: Layers, plug: Plug, workflow: Workflow, flame: Flame,
  cpu: Cpu, rocket: Rocket, gauge: Gauge, braces: Braces, api: Webhook, puzzle: Puzzle,
  wrench: Wrench, bolt: Zap, monitor: MonitorSmartphone,
};

const skillMap: Record<string, LucideIcon> = {
  "React Native": Atom, "React Native CLI": Terminal, TypeScript: FileCode2, JavaScript: FileCode,
  "Android / iOS": Smartphone, Redux: Boxes, Zustand: Database, "Context API": Share2,
  "React Hooks": Anchor, MVVM: LayoutGrid, "REST APIs": Webhook, Axios: Code2, Firebase: Flame,
  "Node.js": Server, WebSockets: Radio, "Native Modules": Cpu, "Push Notifications": Bell,
  "Deep Linking": Link2, "In-App Purchases": ShoppingBag, "Maps & Tracking": MapPin, Git: GitBranch,
  Jest: FlaskConical, Xcode: Hammer, "Android Studio": AppWindow, "App Store & Play Store Deployment": Rocket,
};

const projectMap: Record<string, LucideIcon> = {
  Healthcare: Stethoscope, Stocks: TrendingUp, QuickMail: Mail, Rides: Car, Fitness: Dumbbell,
  MyClassGPT: GraduationCap,
};

export function ProjectIcon({ name, size = 16 }: { name: string; size?: number }) {
  const C = projectMap[name] ?? Sparkles;
  return <C size={size} aria-hidden />;
}

export function SkillIcon({ name, size = 16, className }: { name: string; size?: number; className?: string }) {
  const C = skillMap[name] ?? Sparkles;
  return <C size={size} className={className} aria-hidden />;
}

export function Icon({ name, size = 20, className }: { name: string; size?: number; className?: string }) {
  const C = map[name] ?? Sparkles;
  return <C size={size} className={className} aria-hidden />;
}
