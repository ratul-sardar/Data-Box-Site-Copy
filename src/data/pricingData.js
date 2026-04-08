export const pricingData = {
  businesses: {
    monthly: [
      {
        name: "Free",
        description: "Basic reporting for individuals who want visibility into key metrics.",
        price: 0,
        dataSources: "3 Data Sources included",
        cta: "Create Free Account",
        ctaType: "outline",
        featuresTitle: "Get core features like:",
        features: [
          { text: "Data updated daily", icon: "check" },
          { text: "1 Dashboard", isValue: true, value: "1" },
          { text: "3 Users", isValue: true, value: "3" },
          { text: "10 Custom metrics", isValue: true, value: "10" },
          { text: "MCP", icon: "check", badge: "New" }
        ],
        footerTitle: "Pull data from:",
        footerText: "130+ cloud services (incl. marketing, e-comm, CRM)"
      },
      {
        name: "Pro",
        description: "Business reporting & goal-tracking for teams that want easy, flexible visibility into their performance.",
        price: 199,
        dataSources: "3 Data Sources included",
        additionalPrice: "$7/mo per additional data source",
        cta: "Try It Free",
        ctaSecondary: "Book a Demo",
        ctaType: "primary",
        featuresTitle: "Everything in Free, plus:",
        features: [
          { text: "AI Analyst", icon: "sparkles", badge: "New" },
          { text: "Data updated hourly", icon: "check", highlight: true },
          { text: "Unlimited dashboards", icon: "infinity" },
          { text: "Unlimited users", icon: "infinity" },
          { text: "Unlimited custom metrics", icon: "infinity" },
          { text: "Reports", icon: "check" },
          { text: "Goals", icon: "check" },
          { text: "Professional onboarding", icon: "check" }
        ],
        footerTitle: "Additionally pull data from:",
        footerText: "Spreadsheets (Excel) and Custom Integrations"
      },
      {
        name: "Growth",
        description: "Advanced analytics and AI-generated analysis for teams that need deeper insights.",
        price: 499,
        dataSources: "3 Data Sources included",
        additionalPrice: "$7/mo per additional data source",
        cta: "Try It Free",
        ctaSecondary: "Book a Demo",
        ctaType: "primary",
        isPopular: true,
        featuresTitle: "Everything in Pro, plus:",
        features: [
          { text: "AI Analyst", icon: "sparkles", badge: "New" },
          { text: "Datasets", icon: "check", badge: "New" },
          { text: "Raw data export & drilldown", icon: "check", badge: "New" },
          { text: "Data prep (merge, filter, calculate)", icon: "check" },
          { text: "AI-performance summaries", icon: "check" },
          { text: "Forecast modeling", icon: "check" },
          { text: "Anomaly detection", icon: "check" },
          { text: "Growth onboarding", icon: "check" }
        ],
        footerTitle: "Additionally pull data from:",
        footerText: "Databases and Cloud warehouses"
      },
      {
        name: "Premium",
        description: "Enterprise-grade service and security for larger companies that need more support.",
        price: 999,
        dataSources: "50 Data Sources included",
        additionalPrice: "$7/mo per additional data source",
        cta: "Talk to us",
        ctaType: "outline-purple",
        isBestValue: true,
        featuresTitle: "Everything in Growth, plus add-ons:",
        features: [
          { text: "AI Analyst", icon: "sparkles", badge: "New" },
          { text: "White-labeling ($250 value)", icon: "check" },
          { text: "OKRs ($200 value)", icon: "check", badge: "New" },
          { text: "Advanced security ($100 value)", icon: "check" },
          { text: "15-min sync ($90 value)", icon: "check" },
          { text: "Fiscal calendar ($50 value)", icon: "check" },
          { text: "Reporting specialist ($200 value)", icon: "check" },
          { text: "Priority support ($100 value)", icon: "check" },
          { text: "Premium onboarding", icon: "check" }
        ],
        footerText: "This plan includes data sources and add-ons valued at $1,290"
      }
    ],
    annual: [
      {
        name: "Free",
        description: "Basic reporting for individuals who want visibility into key metrics.",
        price: 0,
        dataSources: "3 Data Sources included",
        cta: "Create Free Account",
        ctaType: "outline",
        featuresTitle: "Get core features like:",
        features: [
          { text: "Data updated daily", icon: "check" },
          { text: "1 Dashboard", isValue: true, value: "1" },
          { text: "3 Users", isValue: true, value: "3" },
          { text: "10 Custom metrics", isValue: true, value: "10" },
          { text: "MCP", icon: "check", badge: "New" }
        ],
        footerTitle: "Pull data from:",
        footerText: "130+ cloud services (incl. marketing, e-comm, CRM)"
      },
      {
        name: "Pro",
        description: "Business reporting & goal-tracking for teams that want easy, flexible visibility into their performance.",
        price: 159,
        dataSources: "3 Data Sources included",
        additionalPrice: "$5.6/mo per additional data source",
        cta: "Try It Free",
        ctaSecondary: "Book a Demo",
        ctaType: "primary",
        featuresTitle: "Everything in Free, plus:",
        features: [
          { text: "AI Analyst", icon: "sparkles", badge: "New" },
          { text: "Data updated hourly", icon: "check", highlight: true },
          { text: "Unlimited dashboards", icon: "infinity" },
          { text: "Unlimited users", icon: "infinity" },
          { text: "Unlimited custom metrics", icon: "infinity" },
          { text: "Reports", icon: "check" },
          { text: "Goals", icon: "check" },
          { text: "Professional onboarding", icon: "check" }
        ],
        footerTitle: "Additionally pull data from:",
        footerText: "Spreadsheets (Excel) and Custom Integrations"
      },
      {
        name: "Growth",
        description: "Advanced analytics and AI-generated analysis for teams that need deeper insights.",
        price: 399,
        dataSources: "3 Data Sources included",
        additionalPrice: "$5.6/mo per additional data source",
        cta: "Try It Free",
        ctaSecondary: "Book a Demo",
        ctaType: "primary",
        isPopular: true,
        featuresTitle: "Everything in Pro, plus:",
        features: [
          { text: "AI Analyst", icon: "sparkles", badge: "New" },
          { text: "Datasets", icon: "check", badge: "New" },
          { text: "Raw data export & drilldown", icon: "check", badge: "New" },
          { text: "Data prep (merge, filter, calculate)", icon: "check" },
          { text: "AI-performance summaries", icon: "check" },
          { text: "Forecast modeling", icon: "check" },
          { text: "Anomaly detection", icon: "check" },
          { text: "Growth onboarding", icon: "check" }
        ],
        footerTitle: "Additionally pull data from:",
        footerText: "Databases and Cloud warehouses"
      },
      {
        name: "Premium",
        description: "Enterprise-grade service and security for larger companies that need more support.",
        price: 799,
        dataSources: "50 Data Sources included",
        additionalPrice: "$5.6/mo per additional data source",
        cta: "Talk to us",
        ctaType: "outline-purple",
        isBestValue: true,
        featuresTitle: "Everything in Growth, plus add-ons:",
        features: [
          { text: "AI Analyst", icon: "sparkles", badge: "New" },
          { text: "White-labeling ($200 value)", icon: "check" },
          { text: "OKRs ($160 value)", icon: "check", badge: "New" },
          { text: "Advanced security ($80 value)", icon: "check" },
          { text: "15-min sync ($72 value)", icon: "check" },
          { text: "Fiscal calendar ($40 value)", icon: "check" },
          { text: "Reporting specialist ($160 value)", icon: "check" },
          { text: "Priority support ($80 value)", icon: "check" },
          { text: "Premium onboarding", icon: "check" }
        ],
        footerText: "This plan includes data sources and add-ons valued at $1,032"
      }
    ]
  },
  agencies: {
    monthly: [
      {
        name: "Agency Starter",
        description: "Essential reporting for small agencies that need professional, client-ready dashboards.",
        price: 99,
        dataSources: "3 Data Sources included",
        additionalPrice: "$3/mo per additional data source",
        cta: "Try It Free",
        ctaSecondary: "Book a Demo",
        ctaType: "primary-orange",
        featuresTitle: "Get core features like:",
        features: [
          { text: "Data updated hourly", icon: "check", highlight: true },
          { text: "10 Dashboards (across all accounts)", isValue: true, value: "10" },
          { text: "5 Client accounts", isValue: true, value: "5" },
          { text: "Unlimited users", icon: "infinity" },
          { text: "Unlimited custom metrics", icon: "infinity" },
          { text: "Scheduling and sharing", icon: "check" },
          { text: "Bulk operations", icon: "check" },
          { text: "Client performance overview", icon: "check" }
        ],
        footerTitle: "Pull data from:",
        footerText: "130+ cloud services (incl. marketing, e-comm, CRM)"
      },
      {
        name: "Agency Pro",
        description: "Business reporting & goal-tracking for teams that want easy, flexible visibility into their performance.",
        price: 199,
        dataSources: "3 Data Sources included",
        additionalPrice: "$3/mo per additional data source",
        cta: "Try It Free",
        ctaSecondary: "Book a Demo",
        ctaType: "primary",
        featuresTitle: "Everything in Starter, plus:",
        features: [
          { text: "AI Analyst", icon: "sparkles", badge: "New" },
          { text: "Unlimited dashboards", icon: "infinity" },
          { text: "Unlimited client accounts", icon: "infinity" },
          { text: "Reports", icon: "check" },
          { text: "Goals", icon: "check" },
          { text: "Media creatives", icon: "check" },
          { text: "Remove branding from dashboards", icon: "check" },
          { text: "Professional onboarding", icon: "check" }
        ],
        footerTitle: "Additionally pull data from:",
        footerText: "Spreadsheets (Excel) and Custom Integrations"
      },
      {
        name: "Agency Growth",
        description: "Advanced analytics and AI-generated analysis for teams that need deeper insights.",
        price: 499,
        dataSources: "3 Data Sources included",
        additionalPrice: "$3/mo per additional data source",
        cta: "Try It Free",
        ctaSecondary: "Book a Demo",
        ctaType: "primary-dark",
        featuresTitle: "Everything in Professional, plus:",
        features: [
          { text: "AI Analyst", icon: "sparkles", badge: "New" },
          { text: "AI perf. summaries & Data stories", icon: "check" },
          { text: "Metric anomalies & Smart alerts", icon: "check" },
          { text: "Datasets", icon: "check", badge: "New" },
          { text: "Raw data export & drilldown", icon: "check", badge: "New" },
          { text: "Data prep (merge, filter, calculate)", icon: "check" },
          { text: "Forecast modeling", icon: "check" },
          { text: "Growth onboarding", icon: "check" }
        ],
        footerTitle: "Additionally pull data from:",
        footerText: "Databases and Cloud warehouses"
      },
      {
        name: "Agency Premium",
        description: "Enterprise-grade service and security for larger companies that need more support.",
        price: 999,
        dataSources: "50 Data Sources included",
        additionalPrice: "$3/mo per additional data source",
        cta: "Talk to us",
        ctaType: "outline-purple",
        featuresTitle: "Everything in Growth, plus add-ons:",
        features: [
          { text: "AI Analyst", icon: "sparkles", badge: "New" },
          { text: "White-labeling ($250 value)", icon: "check" },
          { text: "OKRs ($200 value)", icon: "check", badge: "New" },
          { text: "Advanced security ($100 value)", icon: "check" },
          { text: "15-min sync ($90 value)", icon: "check" },
          { text: "Fiscal calendar ($50 value)", icon: "check" },
          { text: "Reporting specialist ($200 value)", icon: "check" },
          { text: "Priority support ($100 value)", icon: "check" },
          { text: "Premium onboarding", icon: "check" }
        ],
        footerText: "This plan includes data sources and add-ons valued at $1,090"
      }
    ],
    annual: [
      {
        name: "Agency Starter",
        description: "Essential reporting for small agencies that need professional, client-ready dashboards.",
        price: 79,
        dataSources: "3 Data Sources included",
        additionalPrice: "$2.4/mo per additional data source",
        cta: "Try It Free",
        ctaSecondary: "Book a Demo",
        ctaType: "primary-orange",
        featuresTitle: "Get core features like:",
        features: [
          { text: "Data updated hourly", icon: "check", highlight: true },
          { text: "10 Dashboards (across all accounts)", isValue: true, value: "10" },
          { text: "5 Client accounts", isValue: true, value: "5" },
          { text: "Unlimited users", icon: "infinity" },
          { text: "Unlimited custom metrics", icon: "infinity" },
          { text: "Scheduling and sharing", icon: "check" },
          { text: "Bulk operations", icon: "check" },
          { text: "Client performance overview", icon: "check" }
        ],
        footerTitle: "Pull data from:",
        footerText: "130+ cloud services (incl. marketing, e-comm, CRM)"
      },
      {
        name: "Agency Pro",
        description: "Business reporting & goal-tracking for teams that want easy, flexible visibility into their performance.",
        price: 159,
        dataSources: "3 Data Sources included",
        additionalPrice: "$2.4/mo per additional data source",
        cta: "Try It Free",
        ctaSecondary: "Book a Demo",
        ctaType: "primary",
        featuresTitle: "Everything in Starter, plus:",
        features: [
          { text: "AI Analyst", icon: "sparkles", badge: "New" },
          { text: "Unlimited dashboards", icon: "infinity" },
          { text: "Unlimited client accounts", icon: "infinity" },
          { text: "Reports", icon: "check" },
          { text: "Goals", icon: "check" },
          { text: "Media creatives", icon: "check" },
          { text: "Remove branding from dashboards", icon: "check" },
          { text: "Professional onboarding", icon: "check" }
        ],
        footerTitle: "Additionally pull data from:",
        footerText: "Spreadsheets (Excel) and Custom Integrations"
      },
      {
        name: "Agency Growth",
        description: "Advanced analytics and AI-generated analysis for teams that need deeper insights.",
        price: 399,
        dataSources: "3 Data Sources included",
        additionalPrice: "$2.4/mo per additional data source",
        cta: "Try It Free",
        ctaSecondary: "Book a Demo",
        ctaType: "primary-dark",
        featuresTitle: "Everything in Professional, plus:",
        features: [
          { text: "AI Analyst", icon: "sparkles", badge: "New" },
          { text: "AI perf. summaries & Data stories", icon: "check" },
          { text: "Metric anomalies & Smart alerts", icon: "check" },
          { text: "Datasets", icon: "check", badge: "New" },
          { text: "Raw data export & drilldown", icon: "check", badge: "New" },
          { text: "Data prep (merge, filter, calculate)", icon: "check" },
          { text: "Forecast modeling", icon: "check" },
          { text: "Growth onboarding", icon: "check" }
        ],
        footerTitle: "Additionally pull data from:",
        footerText: "Databases and Cloud warehouses"
      },
      {
        name: "Agency Premium",
        description: "Enterprise-grade service and security for larger companies that need more support.",
        price: 799,
        dataSources: "50 Data Sources included",
        additionalPrice: "$2.4/mo per additional data source",
        cta: "Talk to us",
        ctaType: "outline-purple",
        featuresTitle: "Everything in Growth, plus add-ons:",
        features: [
          { text: "AI Analyst", icon: "sparkles", badge: "New" },
          { text: "White-labeling ($200 value)", icon: "check" },
          { text: "OKRs ($160 value)", icon: "check", badge: "New" },
          { text: "Advanced security ($80 value)", icon: "check" },
          { text: "15-min sync ($72 value)", icon: "check" },
          { text: "Fiscal calendar ($40 value)", icon: "check" },
          { text: "Reporting specialist ($160 value)", icon: "check" },
          { text: "Priority support ($80 value)", icon: "check" },
          { text: "Premium onboarding", icon: "check" }
        ],
        footerText: "This plan includes data sources and add-ons valued at $872"
      }
    ]
  }
};