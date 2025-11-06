export default function Pillars() {
  const pillars = [
    {
      title: 'CLASS',
      description: 'Premium visual language rooted in elegance and professional finesse',
      quote: 'We believe in quality that speaks for itself'
    },
    {
      title: 'TECHNOLOGY', 
      description: 'Advanced digital tools redefining creative possibilities',
      quote: 'We leverage cutting-edge technology to enhance, not replace, human creativity'
    },
    {
      title: 'FUTURE',
      description: 'Forward-thinking creativity anticipating market trends and evolving needs',
      quote: 'We\'re not just keeping up - we\'re paving the way'
    }
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 font-playfair">
          Our Three Pillars
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <div key={index} className="text-center p-6 border border-[#D4AF37] rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-[#D4AF37]">{pillar.title}</h3>
              <p className="text-gray-300 mb-4">{pillar.description}</p>
              <blockquote className="text-sm italic text-[#D4AF37]">
                "{pillar.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}