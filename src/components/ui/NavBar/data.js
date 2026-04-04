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
