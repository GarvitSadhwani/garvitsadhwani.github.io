// Deep-dive writings — general system-design write-ups (no company-specific or
// confidential data). Review before pushing to main.
//
// Images: put files in src/elements, `import` them at the top of this file, and
// reference the imported value in a `cover` field or an { type: 'image', src }
// block. A block is one of:
//   { type: 'heading',   text }
//   { type: 'paragraph', text }
//   { type: 'list',      items: [] }
//   { type: 'code',      code, lang }
//   { type: 'image',     src, caption }   // src is an imported image (or null)
//   { type: 'gallery',   items: [] }      // click-to-expand grid of images

import optimisation from '../elements/optimisation.png';
import redisHashSlots from '../elements/redis_hashslots.jpg';

export const writings = [
  {
    slug: 'redis-mget-at-scale',
    title: 'Cutting Redis Load at Scale with a Single MGET',
    description:
      'How consolidating many per-request Redis reads into one MGET cuts load and tail latency for a high throughput service.',
    date: '2026',
    cover: optimisation,
    blocks: [
      { type: 'heading', text: 'The setup' },
      {
        type: 'paragraph',
        text:
          'Assume a service that, on the hot path of every request, needs several independent pieces of data cached in Redis, each value stored under its own key. And assume it runs at roughly 200K requests per minute at peak.',
      },
      {
        type: 'paragraph',
        text:
          'Originally each of those values is fetched with its own Redis call, so a single incoming request fans out into multiple separate round trips to Redis, one per piece of data.',
      },
      { type: 'heading', text: 'The problem' },
      {
        type: 'paragraph',
        text:
          'At 200K RPM, those extra round trips add up fast. Fetching each key separately means a lot of network bandwidth occupied and heavy connection contention, which puts significant load on Redis. At peak, that may show up as a spike in p99 latency, the tail stretches exactly when traffic is highest and it matters most.',
      },
      { type: 'heading', text: 'The fix: one MGET instead of many GETs' },
      {
        type: 'paragraph',
        text:
          'The reads for a request are independent, so there is no reason to pay for a round trip each. Consolidating them into a single MGET returns every value in one command and one round trip: fewer syscalls, far less bandwidth overhead, and much less connection contention.',
      },
      {
        type: 'code',
        lang: 'text',
        code: 'GET  user123_data1\nGET  user123_data2   →   MGET {user123}_data1 {user123}_data2 {user123}_data3\nGET  user123_data3       (1 round trip)\n(3 round trips)',
      },
      { type: 'heading', text: 'Making MGET efficient in a clustered setup' },
      {
        type: 'paragraph',
        text:
          'In Redis Cluster, MGET is only efficient if every key in the batch lives on the same hash slot. If the keys are scattered across slots, the client has to split the request across nodes, which defeats the purpose. Redis picks the slot from the part of the key inside curly braces, the hash tag, rather than the whole key.',
      },
      {
        type: 'paragraph',
        text:
          'So the keys are structured as {id}_suffix: the entity id in braces, then the field. Every key for a given entity hashes on the same id and therefore lands on the same slot, so they can all be fetched in a single MGET.',
      },
      {
        type: 'code',
        lang: 'text',
        code: '{user123}_data1\n{user123}_data2   →  all hash on "user123" → same slot → one MGET\n{user123}_data3',
      },
      {
        type: 'image',
        src: redisHashSlots,
        caption: 'Grouping an entity\'s keys onto one hash slot so a single MGET stays intra-shard.',
      },
      { type: 'heading', text: 'The results' },
      {
        type: 'list',
        items: [
          'Redis read throughput reduction by 70%',
          'Redis CPU usage roughly halved.',
          'Improvement in Redis latency ~70%',
          'Adding any new datapoint in future has no effect on read throughput, network bandwidth or connections',
        ],
      },
    ],
  },
];

export function getWriting(slug) {
  return writings.find((w) => w.slug === slug);
}
