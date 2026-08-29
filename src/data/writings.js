// Deep-dive writings.
//
// NOTE: this content includes specific figures and a key schema provided for
// publication. Review before pushing to main to confirm you're comfortable
// making these details public.
//
// Images: put files in src/elements, `import` them at the top of this file, and
// reference the imported value in a `cover` field or an { type: 'image', src }
// block. A block is one of:
//   { type: 'heading',   text }
//   { type: 'paragraph', text }
//   { type: 'list',      items: [] }
//   { type: 'code',      code, lang }
//   { type: 'image',     src, caption }   // src is an imported image (or null)

import optimisation from '../elements/optimisation.png';
import redisHashSlots from '../elements/redis_hashslots.png';
import redisRes1 from '../elements/redis_res1.jpeg';
import redisRes2 from '../elements/redis_res2.jpeg';
import redisRes3 from '../elements/redis_res3.jpeg';

export const writings = [
  {
    slug: 'redis-mget-at-scale',
    title: 'Cutting Redis Load at 200K RPM with a Single MGET',
    description:
      'How consolidating many per-request Redis reads into one MGET cut load and tail latency on a fees service running at 200K RPM peak.',
    date: '2026',
    cover: optimisation,
    blocks: [
      { type: 'heading', text: 'The setup' },
      {
        type: 'paragraph',
        text:
          'At Zepto, the fees service computes delivery fees on the hot path of every order, running at roughly 200K requests per minute at peak. Each request needs several independent pieces of data cached in Redis: the store\'s stress level, live rain and weather details, the user\'s delivery-fee MOV (minimum order value), and more.',
      },
      {
        type: 'paragraph',
        text:
          'Originally each of those values was fetched with its own Redis call. So a single incoming request fanned out into multiple separate round trips to Redis, one per piece of data.',
      },
      { type: 'heading', text: 'The problem' },
      {
        type: 'paragraph',
        text:
          'At 200K RPM, those extra round trips add up fast. Fetching each key separately meant a lot of network bandwidth occupied and heavy connection contention, which put significant load on Redis. At peak, that showed up as a spike in p99 latency, the tail stretched exactly when traffic was highest and it mattered most.',
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
        code: 'GET  u123_stress\nGET  u123_rain      →   MGET {u123}_stress {u123}_rain {u123}_mov\nGET  u123_mov           (1 round trip)\n(3 round trips)',
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
          'So the keys were structured as {id}_suffix: the entity id in braces, then the field. Every key for a given entity hashes on the same id and therefore lands on the same slot, so they can all be fetched in a single MGET.',
      },
      {
        type: 'code',
        lang: 'text',
        code: '{12345}_stress\n{12345}_rain      →  all hash on "12345" → same slot → one MGET\n{12345}_mov',
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
          'Redis read throughput dropped from ~5K to ~1.5K RPS.',
          'Redis CPU roughly halved, from ~10% to ~5%.',
          'Redis latency fell from ~1.3ms to ~0.4ms.',
        ],
      },
      { type: 'gallery', items: [redisRes1, redisRes2, redisRes3] },
    ],
  },
];

export function getWriting(slug) {
  return writings.find((w) => w.slug === slug);
}
