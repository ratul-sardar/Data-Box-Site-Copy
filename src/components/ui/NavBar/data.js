import {
  Layers,
  LineChart,
  Target,
  Bot,
  FileText,
  Database,
  Activity,
  Flag,
  MessageSquare,
  Cloud,
  Megaphone,
  Briefcase,
  Users,
  BarChart,
  DatabaseZap,
  TableProperties,
  ArrowRight,
  Puzzle,
  Plug,
  Search,
  TrendingUp,
  Lightbulb,
  Share2,
} from "lucide-react";

export const menuData = {
  product: {
    items: [
      {
        title: "Product overview",
        description: "Explore how Databox supports every step of your data journey.",
        icon: Layers,
      },
      {
        title: "Genie - AI Analyst",
        description: "Analyze performance and uncover insights faster with AI.",
        icon: Bot,
        badge: "New",
      },
      {
        title: "Metrics & KPIs",
        description: "Create, track, and forecast the metrics that matter.",
        icon: Activity,
      },
      {
        title: "Dashboards",
        description: "Visualize performance and monitor your most important metrics in real-time.",
        icon: LineChart,
      },
      {
        title: "Reports",
        description: "Create and automate reports to share insights with stakeholders.",
        icon: FileText,
      },
      {
        title: "Goals",
        description: "Align your team and track progress towards your goals.",
        icon: Target,
      },
      {
        title: "OKRs",
        description: "Align your team and track progress towards your goals.",
        icon: Flag,
      },
      {
        title: "Data preparation",
        description: "Prepare and standardize your data for deeper analysis (datasets).",
        icon: Database,
      },
      {
        title: "MCP",
        description: "Chat with your data, anywhere.",
        icon: MessageSquare,
        badge: "New",
      },
    ],
  },
  solutions: {
    industry: [
      {
        title: "SaaS",
        description: "Accelerate growth by aligning finance, product, and go-to-market data so teams make smarter decisions.",
        icon: Cloud,
        link: "#",
      },
      {
        title: "Agencies & Consultants",
        description: "Win and retain more clients by turning ad, CRM, and web data into automated, ROI-driven reports.",
        icon: Megaphone,
        link: "#",
      },
    ],
    role: [
      {
        title: "Functional Leaders",
        description: "Monitor team performance and guide priorities.",
        icon: Users,
        link: "#",
      },
      {
        title: "Executives",
        description: "Track high-level KPIs and align the business.",
        icon: Briefcase,
        link: "#",
      },
      {
        title: "Business Analysts",
        description: "Help teams use data to make better decisions.",
        icon: BarChart,
        link: "#",
      },
    ],
    problems: [
      {
        title: "Centralize",
        description: "Integrate data from all your tools.",
        icon: Plug,
        color: "text-green-500"
      },
      {
        title: "Prepare",
        description: "Clean, merge, and structure raw data for deeper analysis.",
        icon: Database,
        color: "text-gray-500"
      },
      {
        title: "Visualize",
        description: "Build interactive dashboards anyone can understand.",
        icon: LineChart,
        color: "text-blue-400"
      },
      {
        title: "Analyze",
        description: "Spot trends and uncover insights faster.",
        icon: Search,
        color: "text-yellow-500"
      },
      {
        title: "Report & Automate",
        description: "Share performance updates automatically, in any format.",
        icon: FileText,
        color: "text-orange-500"
      },
      {
        title: "Plan",
        description: "Manage performance deliberately against goals and objectives.",
        icon: Target,
        color: "text-emerald-500"
      }
    ],
    whyDatabox: [
      { text: "Measure what matters most", icon: Activity },
      { text: "Understand performance instantly", icon: TrendingUp },
      { text: "Draw better conclusions", icon: Lightbulb },
      { text: "Empower your entire team to self-serve data", icon: Users },
      { text: "Make better decisions, together", icon: Share2 }
    ]
  },
  integrations: {
    columns: [
      {
        title: "Cloud Integrations",
        icon: Cloud,
        items: [
          "HubSpot Marketing",
          "HubSpot CRM",
          "Google Ads",
          "Shopify",
          "Facebook Ads",
          "Facebook Pages",
          "Google Analytics 4",
          "LinkedIn Ads",
          "Stripe",
          "QuickBooks",
          "Salesforce CRM",
          "Pipedrive CRM",
        ],
      },
      {
        title: "Databases & Warehouses",
        icon: DatabaseZap,
        items: [
          "Google BigQuery",
          "MySQL",
          "PostgreSQL",
          "Snowflake",
          "Microsoft Azure",
          "Google Cloud",
        ],
      },
      {
        title: "Spreadsheets & Automations",
        icon: TableProperties,
        items: ["Excel", "Google Sheets", "Zapier", "Make", "Dataddo"],
      },
    ],
  },
  resources: {
    columns: [
      {
        title: "Tools & Templates",
        icon: Briefcase, // using generic icon
        items: [
          "Dashboard Templates",
          "Report Templates",
          "Metric Library",
          "How-To Guides",
        ],
      },
      {
        title: "Product Help",
        icon: Puzzle,
        items: [
          "Help Center",
          "Community",
          "API Documentation",
          "Product Updates",
        ],
      },
      {
        title: "Education",
        icon: FileText,
        items: [
          "Blog",
          "Research Reports",
          "Newsletter",
          "Predictable Scale Certification",
          "Customer Stories",
        ],
      },
      {
        title: "Partner",
        icon: Users,
        items: [
          "Become a Solutions Partner",
          "Partner Directory",
          "Affiliate Program",
        ],
      },
    ],
  },
};
