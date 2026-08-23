// Single source of truth for portfolio content. Edit here to update the site.

export const experience = [
  {
    role: 'Software Engineer II',
    org: 'Zepto',
    dates: 'Oct 2024 – Present',
    summary:
      'Owner of Fees, Fraud & Loyalty services · systems handling up to 800K RPM at sub-30ms p99.',
    bullets: [
      'Primary technical owner for Fees and Fraud services — independently ran projects from PM requirements through technical design, implementation, rollout, and monitoring.',
      'Designed a dynamic product-limit resolution system using knapsack DP to pick optimal items to remove when users exceed weight/price/quantity limits; improved order completion of such cases by 4% in A/B testing, now live for 100% of users (7M DAU), ~$12.5K additional order revenue daily.',
      'Built async cloned-app clustering with Kafka-driven updates and DLQ handling for consumer-timeout gaps, identifying rings of users operating 500+ fraudulent accounts, saving up to $500 weekly.',
      'Redesigned loyalty data propagation using an encrypted-header mechanism and a Go SDK, letting downstream services read benefit data without calling the Loyalty service directly — adopted by 5 teams, eliminating up to 600K RPM of inter-service traffic.',
      'Built in-house currency crediting for loyalty users from scratch — handling limits, parallel orders, partial cancellations, idempotency, retries, and Kafka DLQ recovery; maintained full credit reliability through ~300 Coin Service failures via replayable recovery.',
      'Cut Fees-service Redis load by consolidating calls into MGET: read throughput 5K→1.5K RPS, CPU 10%→5%, Redis latency 1.3ms→0.4ms; parallelized external calls for a further ~10% p99 improvement.',
      "Own an in-progress MongoDB → GraphDB redesign of Fraud's user-clustering system to better model cluster relationships and avoid large-scale cluster-ID rewrites.",
      'Replaced a 30-day order-DB aggregation with a last-used-at model for user-address retrieval, cutting DB traffic by 20K RPM with no business-metric impact.',
      'Drove infrastructure cost optimization (~$3K/month savings) via legacy API migrations, database downscaling, and CPU/memory tuning; part of an ElastiCache → RedisLabs migration across production cache infrastructure.',
    ],
    tags: ['Go', 'Kafka', 'Redis', 'MongoDB', 'gRPC', 'AWS'],
  },
  {
    role: 'Software Engineer',
    org: 'Cisco',
    dates: 'Aug 2023 – Sep 2024',
    summary: 'Enterprise wireless controllers supporting 64,000 clients.',
    bullets: [
      'Worked with the client team on enterprise wireless controllers supporting 64,000 clients; implemented emerging IEEE 802.11ax (Wi-Fi 6) standards.',
    ],
    tags: ['C', 'C++', 'Linux'],
  },
  {
    role: 'Software Engineering Intern',
    org: 'Cisco',
    dates: 'Jan 2023 – Jun 2023',
    summary: 'Full-stack features on WiFi Lens.',
    bullets: [
      'Built end-to-end features on WiFi Lens (React.js, Node.js, Python, MongoDB), including network simulation, session caching, and sequence-chart comparison tooling.',
    ],
    tags: ['React', 'Node.js', 'Python', 'MongoDB'],
  },
  {
    role: 'Software Engineering Intern',
    org: 'Cisco',
    dates: 'Jun 2022 – Jul 2022',
    summary: 'Device authentication for WLAN access.',
    bullets: ['Designed a UDP-based device authentication flow gating WLAN access.'],
    tags: ['C', 'Networking'],
  },
];

export const skills = [
  { group: 'Languages', items: ['Go', 'C / C++', 'JavaScript', 'Python', 'Java'] },
  { group: 'Backend', items: ['gRPC', 'REST', 'MongoDB', 'PostgreSQL', 'Redis', 'Kafka'] },
  {
    group: 'Infrastructure',
    items: ['AWS', 'Docker', 'Jenkins', 'Argo', 'Grafana / Prometheus', 'New Relic', 'Git', 'Linux'],
  },
];

export const education = {
  school: 'Birla Institute of Technology and Science (BITS), Pilani',
  degree: 'B.E. Electrical & Electronics, Dual Degree',
  dates: 'Aug 2018 – May 2023',
};

export const contact = {
  email: 'garvit.sadh@gmail.com',
  linkedin: 'https://www.linkedin.com/in/garvit-sadhwani-8a76b016b/',
  github: 'https://github.com/GarvitSadhwani',
};
