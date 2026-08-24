// Single source of truth for portfolio content. Edit here to update the site.

export const resumeUrl =
  'https://drive.google.com/file/d/1yka2k0ufyEsrwtQ0FlAAqYsOaExUxR88/view?usp=sharing';

// About section: current work + a personal line.
export const summary = `I'm a Software Engineer II at Zepto, where I own the Fees, Fraud, and Loyalty backend services, systems that run at up to 800K requests per minute with sub-30ms p99 latency, serving 7M daily users. I take projects end to end: from PM requirements and technical design through implementation, rollout, and monitoring. Recent work includes a knapsack-DP engine for resolving cart limits that added ~$12.5K in daily revenue, async fraud-account clustering over Kafka that surfaced rings of 1500+ fake accounts, and a Go SDK that removed 600K RPM of inter-service traffic. I care most about latency, reliability, and cost.`;

export const aboutPersonal = `I did my dual degree in Electrical & Electronics Engineering at BITS Pilani and I'm currently based in Bengaluru. Away from the keyboard you'll find me playing football, gaming, reading, or planning the next trip, a beach person all the way.`;

// Grouped, summarised roles (Cisco full-time + internships).
export const experience = [
  {
    tabLabel: 'Zepto',
    role: 'Software Engineer II',
    org: 'Zepto',
    dates: 'Oct 2024 – Present',
    bullets: [
      'Own the Fees, Fraud, and Loyalty backend services end to end — systems running at up to 800K RPM with sub-30ms p99 latency, serving 7M daily users.',
      'Designed a knapsack-DP engine to resolve cart limit violations; +4% order completion in A/B testing, now at 100% rollout (~$12.5K in additional daily revenue).',
      'Built async fraud-account clustering over Kafka with DLQ recovery, surfacing rings of 1500+ fraudulent accounts.',
      'Shipped a Go SDK and encrypted-header mechanism for loyalty data propagation — adopted by 5 teams, removing ~600K RPM of inter-service traffic.',
      'Built in-house currency crediting from scratch (idempotency, retries, partial cancellations, Kafka DLQ recovery), holding full reliability through ~300 downstream failures.',
      'Cut Fees-service Redis load via MGET consolidation (latency 1.3ms → 0.4ms) and drove ~$3K/month in infrastructure savings.',
    ],
    tags: ['Go', 'Kafka', 'Redis', 'MongoDB', 'gRPC', 'AWS'],
  },
  {
    tabLabel: 'Cisco',
    role: 'Software Engineer',
    org: 'Cisco',
    dates: 'Aug 2023 – Sep 2024',
    bullets: [
      'Worked with the client team on enterprise wireless controllers supporting 64,000 clients.',
      'Implemented emerging IEEE 802.11ax (Wi-Fi 6) standards.',
    ],
    tags: ['C', 'C++', 'Linux', 'Networking'],
  },
  {
    tabLabel: 'Cisco (Intern)',
    role: 'Software Engineering Intern',
    org: 'Cisco',
    dates: '2022 – 2023',
    bullets: [
      'Built end-to-end features on WiFi Lens (React, Node.js, Python, MongoDB): network simulation, session caching, and sequence-chart comparison tooling.',
      'Designed a UDP-based device authentication flow gating WLAN access.',
    ],
    tags: ['React', 'Node.js', 'Python', 'MongoDB'],
  },
];

// Projects. `image` is optional — a styled placeholder is shown when absent.
export const projects = [
  {
    title: 'Stift',
    desc:
      'A full-stack dashboard (React · Node/Express · PostgreSQL) for building and running strategies: defining indicators, scheduling jobs, and monitoring results from a single view.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    repo: 'https://github.com/GarvitSadhwani/stift',
    image: 'stift.jpg',
  },
  {
    title: 'Task Management App',
    desc:
      'A full-stack task manager built with Go and PostgreSQL. User authentication for each account, with tasks ordered by their scheduled time and added or deleted dynamically.',
    tags: ['Go', 'PostgreSQL'],
    repo: 'https://github.com/GarvitSadhwani/todoApp',
    image: 'simplitask1.jpg',
  },
  {
    title: 'Hand Gesture Sensing',
    desc:
      'A C++ / OpenCV console app that automates simple desktop tasks through hand gestures: volume control, screen capture, and restart; with a calibration interface for tuning sensitivity.',
    tags: ['C++', 'OpenCV'],
    repo: 'https://github.com/GarvitSadhwani/HandGesture',
    image: 'handgest.jpg',
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
  instagram: 'https://www.instagram.com/garvit.sdh/',
};
