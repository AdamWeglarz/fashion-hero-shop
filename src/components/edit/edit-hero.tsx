import Link from "next/link";
import Image from "next/image";

export function EditHero() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero/hero-1.jpg"
        alt="FH Edit Season 01"
        fill
        className="object-cover"
        priority
      />
      
      {/* Dark Gradient Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, rgba(26,26,26,0.6) 0%, rgba(26,26,26,0.3) 40%, transparent 70%)"
        }}
      />
      
      {/* Text Overlay */}
      <div className="absolute inset-0 flex items-center">
        <div className="pl-[8%] max-w-xl">
          {/* Season Label */}
          <span className="block text-[12px] font-light tracking-[0.3em] text-edit-gold uppercase mb-4">
            SEZON 01
          </span>
          
          {/* Gold Separator */}
          <span className="block w-10 h-[1px] bg-edit-gold mb-8" />
          
          {/* Main Heading */}
          <h1 className="font-serif text-[72px] leading-[1.1] text-edit-ivory mb-10">
            Wybrane.
            <br />
            Nieoczywiste.
            <br />
            Twoje.
          </h1>
          
          {/* CTA Button */}
          <Link
            href="/edit/collection"
            className="inline-block px-8 py-3 text-[12px] font-light tracking-[0.15em] text-edit-ivory border border-edit-ivory hover:border-edit-gold hover:text-edit-gold transition-colors duration-300"
          >
            ODKRYJ KOLEKCJĘ
          </Link>
        </div>
      </div>
    </section>
  );
}
