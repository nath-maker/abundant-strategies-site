export const metadata = {
  title: "Testimonials | Abundant Strategies",
  description: "What leaders say about working with Nathalie Salles.",
};

const testimonials = [
  // CEO/President Tier
  {
    quote: "I've worked in industry for almost 30 years. I have had the privilege to work with thousands of people on 5 continents. I have rarely encountered anyone as value driven, as committed to delivery, and as able to make a difference wherever she goes.",
    name: "Christina Sistrunk",
    title: "Former President and CEO, Aera Energy LLC",
    tier: "executive",
  },
  {
    quote: "If you are looking for an executive leader who has deep coaching intuition and skills and the ability to lead change in the midst of complexity, Nathalie is the best I have ever seen.",
    name: "Twanya Hood Hill, MBA",
    title: "Fractional CHRO",
    tier: "executive",
  },
  {
    quote: "Nathalie has a remarkable way of helping me think through complex leadership situations without handing me the answers. A large component of my early success is directly attributable to her skill and knowledge.",
    name: "Dr. Michael R. Jaff",
    title: "President, Newton-Wellesley Hospital; Professor, Harvard Medical School",
    tier: "executive",
  },
  {
    quote: "This warm and humble coach packs a powerful punch! I have seen her engage and transform the way in which some of the toughest leaders I know think, feel and act.",
    name: "Dale Herold",
    title: "CEO | Board | President | COO",
    tier: "executive",
  },
  {
    quote: "There was no better investment I made than the time and money spent with Nathalie and her team.",
    name: "Murat Armbruster",
    title: "CEO",
    tier: "executive",
  },
  // Long-term relationships
  {
    quote: "On countless occasions over the past 20 years, I have witnessed Nathalie's listening, business acumen and empathy create a safety that encourages individuals and teams to dare to surface even the most unnamable challenges.",
    name: "Carole Joy Berkson-Ross",
    title: "Change Leadership Consultant",
    relationship: "20 years",
    tier: "long-term",
  },
  {
    quote: "I have had the privilege of working with Nathalie several times during the past 15 years. With warmth, compassion, thoughtful inquiry, and marvelous insight, she helps to clarify what is most important in life as well as work.",
    name: "Mike Rauth CFP®, RICP®, MBA",
    title: "President, North Haven Financial",
    relationship: "15 years",
    tier: "long-term",
  },
  {
    quote: "She is truly one of the most remarkable people that I have met in my life. This took great leadership and courage on her part. The Geismar site delivers world class results.",
    name: "Glenn Bucholtz",
    title: "GM, Shell Scotford & Geismar Plants",
    tier: "operations",
  },
  // Tech Leaders
  {
    quote: "Working with Nathalie has had a profound, meaningful impact on my work and career. She facilitates this not by following an agenda, but by acting as a thought partner who anticipates where I need to go.",
    name: "Steven Nickel",
    title: "Director, Consumer Hardware Operations, Google",
    tier: "tech",
  },
  {
    quote: "She's honest and not afraid to share candid feedback. She can also be a huge anchor of support during complicated moments and has a wealth of business context and expertise.",
    name: "Leah Belsky",
    title: "Education, OpenAI",
    tier: "tech",
  },
  {
    quote: "Nathalie's intellectual horsepower and 'mad scientist' approach to problem-solving were truly impressive. She is an extraordinary practitioner and leader.",
    name: "Tina Richards",
    title: "Co-Founder at Collabic, Executive Coach",
    tier: "peer",
  },
  // Life-changing impact
  {
    quote: "Nathalie has had a profound influence on my life. Through the tools and techniques she has shared, I have become a more complete person—not only as a leader at work but as a father, husband, and friend.",
    name: "Shaun Fuller",
    title: "CFO | Strategic Business Executive",
    tier: "executive",
  },
  {
    quote: "Her insight has been a game-changer for me. Together, we developed solutions that I could put into place immediately. Extremely professional, exceptionally effective.",
    name: "Dana Rutland",
    title: "CHRO | M&A | Cultural Transformation",
    tier: "executive",
  },
  {
    quote: "Nathalie helped me greatly with my transition from an academic researcher into my role as CTO. She taught me leadership and management skills in a very practical and tangible way.",
    name: "Dr. Meike Herget",
    title: "CTO & Cofounder, Avails Medical | Stanford GSB Mentor",
    tier: "tech",
  },
  // Innovation & DEI
  {
    quote: "What sets Nathalie apart is her innovative approach to Diversity, Equity, and Inclusion. Even without a traditional DEI background, she built one of the most forward-thinking DEI solutions I have ever seen.",
    name: "Hasan Rafiq PCC",
    title: "Senior Org Culture Executive | C-Suite Coach",
    tier: "peer",
  },
  {
    quote: "Few people, in my over 25 years of DEI work, have embodied inclusion in their leadership style and general being like I have experienced with Nathalie. Her legacy lives on wherever she has spent time.",
    name: "James Childs",
    title: "Talent Development Executive",
    tier: "peer",
  },
];

export default function Testimonials() {
  const executiveQuotes = testimonials.filter(t => t.tier === "executive");
  const techQuotes = testimonials.filter(t => t.tier === "tech");
  const longTermQuotes = testimonials.filter(t => t.tier === "long-term");
  const otherQuotes = testimonials.filter(t => ["peer", "operations"].includes(t.tier));

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="px-6 py-24 md:py-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-[--ink] mb-8">
            What they say.
          </h1>
          <p className="text-xl text-[--stone] leading-relaxed max-w-2xl">
            15+ years of working with leaders across industries.
            These are their words, not mine.
          </p>
        </div>
      </section>

      {/* Executive Leaders */}
      <section className="px-6 py-16 bg-[--cloud]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm tracking-widest text-[--mist] uppercase mb-12">
            Executive Leaders
          </h2>
          <div className="space-y-16">
            {executiveQuotes.map((t, i) => (
              <blockquote key={i} className="relative">
                <p className="text-xl md:text-2xl font-light text-[--ink] leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="text-[--stone]">
                  <cite className="not-italic font-medium">{t.name}</cite>
                  <span className="block text-sm text-[--mist] mt-1">{t.title}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Leaders */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm tracking-widest text-[--mist] uppercase mb-12">
            Tech Leaders
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {techQuotes.map((t, i) => (
              <blockquote key={i} className="relative">
                <p className="text-lg text-[--slate] leading-relaxed mb-4">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="text-[--stone]">
                  <cite className="not-italic font-medium text-sm">{t.name}</cite>
                  <span className="block text-xs text-[--mist] mt-1">{t.title}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Long-term Relationships */}
      <section className="px-6 py-16 bg-[--paper]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm tracking-widest text-[--mist] uppercase mb-12">
            Long-term Partnerships
          </h2>
          <div className="space-y-12">
            {longTermQuotes.map((t, i) => (
              <blockquote key={i} className="relative border-l-2 border-[--mist] pl-6">
                <p className="text-lg text-[--slate] leading-relaxed mb-4">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="text-[--stone]">
                  <cite className="not-italic font-medium text-sm">{t.name}</cite>
                  <span className="block text-xs text-[--mist] mt-1">
                    {t.title} · {t.relationship}
                  </span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Peers & Colleagues */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm tracking-widest text-[--mist] uppercase mb-12">
            Colleagues & Peers
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {otherQuotes.map((t, i) => (
              <blockquote key={i} className="relative">
                <p className="text-lg text-[--slate] leading-relaxed mb-4">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="text-[--stone]">
                  <cite className="not-italic font-medium text-sm">{t.name}</cite>
                  <span className="block text-xs text-[--mist] mt-1">{t.title}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Logos */}
      <section className="px-6 py-16 bg-[--cloud]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm tracking-widest text-[--mist] uppercase mb-8">
            Leaders from
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 text-[--stone]">
            <span className="text-lg font-light">Meta</span>
            <span className="text-lg font-light">Google</span>
            <span className="text-lg font-light">Shell</span>
            <span className="text-lg font-light">NASA</span>
            <span className="text-lg font-light">LinkedIn</span>
            <span className="text-lg font-light">OpenAI</span>
            <span className="text-lg font-light">Harvard</span>
          </div>
        </div>
      </section>
    </div>
  );
}
