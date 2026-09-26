// Single source of truth for portfolio content. Edit here to update the site.

export const resumeUrl =
  'https://drive.google.com/file/d/1dTXfoC6s2E9YHBdQL8jebvdsF-CLNZNR/view?usp=sharing';

// About section: current work + a personal line.
export const summary = `I'm a backend engineer who enjoys taking complicated problems and turning them into simple, reliable systems. I'm currently a Software Engineer II at Zepto, working across Fees, Fraud, and Loyalty. I spend most of my time thinking about scalability, performance, and how to build systems that don't just work, but actually move the needle for the business. I enjoy owning problems end to end, from figuring out what needs to be built to designing, shipping, and making sure it works in the real world. I studied Electrical & Electronics Engineering at BITS Pilani and am now based in Bengaluru. \n\n I'm naturally curious and a bit of a critical thinker. I'm interested in technology beyond just the code, particularly how good engineering can translate into better products and better business outcomes. I'd love to eventually work on problems that are increasingly global in scale. When I'm not coding, I'm usually playing football, gaming, reading, or looking for an excuse to plan another trip. Preferably somewhere with a beach :)`;

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
