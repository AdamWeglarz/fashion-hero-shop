import { Metadata } from "next";

export const metadata: Metadata = {
  title: "O FH Edit — Nie wszystko co piękne jest łatwe do znalezienia",
  description:
    "FH Edit to miejsce dla tych, które wiedzą czego szukają — ale nie chcą szukać długo. Wybraliśmy dla Ciebie.",
};

export default function AboutEditPage() {
  return (
    <main className="bg-edit-ivory min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-8 text-center">
        <p className="text-[11px] font-edit font-light tracking-[0.3em] text-edit-gold uppercase mb-6">
          FH Edit
        </p>
        <h1 className="font-serif text-[42px] md:text-[56px] leading-[1.15] text-edit-graphite max-w-3xl mx-auto text-balance">
          Nie wszystko co piękne jest łatwe do znalezienia.
        </h1>
      </section>

      {/* Czym jest FH Edit */}
      <section className="py-16 px-8 border-t border-edit-gold/20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[11px] font-edit font-medium tracking-[0.25em] text-edit-gold uppercase mb-6">
            Czym jest FH Edit
          </h2>
          <p className="font-edit text-[15px] font-light leading-[1.8] text-edit-graphite mb-6">
            FH Edit to miejsce dla tych, które wiedzą czego szukają — ale nie
            chcą szukać długo.
          </p>
          <p className="font-edit text-[15px] font-light leading-[1.8] text-edit-graphite/80 mb-6">
            Wybraliśmy dla Ciebie. Spośród czterech tysięcy sprzedawców
            FashionHero — niezależnych projektantów, małych marek, rzemieślników
            — zebraliśmy tych, którzy robią rzeczy warte zatrzymania się. Nie
            dlatego że są najdrożsi. Dlatego że są najlepsi w tym co robią.
          </p>
          <p className="font-serif text-[22px] text-edit-graphite italic">
            FH Edit to nie algorytm. To decyzja.
          </p>
        </div>
      </section>

      {/* Select — kim są nasi sprzedawcy */}
      <section className="py-16 px-8 bg-edit-card-bg">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[11px] font-edit font-medium tracking-[0.25em] text-edit-gold uppercase mb-6">
            Select — kim są nasi sprzedawcy
          </h2>
          <p className="font-edit text-[15px] font-light leading-[1.8] text-edit-graphite/80 mb-6">
            Każdy sprzedawca w FH Edit przeszedł przez nasz proces selekcji.
            Sprawdzamy jakość produktów, sposób opisu, historię zwrotów, to jak
            odpowiadają na pytania klientek. Nie certyfikujemy wielkości —
            certyfikujemy staranność.
          </p>
          <p className="font-edit text-[15px] font-light leading-[1.8] text-edit-graphite">
            Gdy widzisz oznaczenie{" "}
            <span className="text-edit-gold font-medium">FH Edit — Select</span>
            , wiesz że ktoś przed Tobą zadał sobie trud, żebyś Ty nie musiała.
          </p>
        </div>
      </section>

      {/* Dla kogo */}
      <section className="py-16 px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[11px] font-edit font-medium tracking-[0.25em] text-edit-gold uppercase mb-6">
            Dla kogo
          </h2>
          <p className="font-edit text-[15px] font-light leading-[1.8] text-edit-graphite/80 mb-6">
            Dla kobiet, które kupują rzadziej — ale lepiej. Które wolą jedną
            dobrze skrojoną marynarkę niż pięć przeciętnych. Które czytają skład
            materiału i sprawdzają kto to uszyj. Które wróciły do butiku po
            sukienkę i żałowały że nie pamiętają nazwy sprzedawcy.
          </p>
          <p className="font-serif text-[22px] text-edit-graphite italic">
            FH Edit pamięta za Ciebie.
          </p>
        </div>
      </section>

      {/* Complete the Look */}
      <section className="py-16 px-8 bg-edit-card-bg">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[11px] font-edit font-medium tracking-[0.25em] text-edit-gold uppercase mb-6">
            Complete the Look
          </h2>
          <p className="font-edit text-[15px] font-light leading-[1.8] text-edit-graphite/80">
            Dobry strój to rzadko jeden produkt. Dlatego przy każdym centerpiece
            z FH Edit znajdziesz propozycję dopełnienia — buty, torebkę,
            biżuterię — dobrane nie przez system rekomendacji, ale na podstawie
            tego, co klientki faktycznie nosiły razem i zatrzymały. Nie teoria
            stylizacji. Praktyka.
          </p>
        </div>
      </section>

      {/* Drobny druk */}
      <section className="py-16 px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[11px] font-edit font-medium tracking-[0.25em] text-edit-gold uppercase mb-6">
            Drobny druk, który warto przeczytać
          </h2>
          <p className="font-edit text-[15px] font-light leading-[1.8] text-edit-graphite/80 mb-6">
            FH Edit jest częścią FashionHero. Oznacza to że za każdym produktem
            stoi niezależny sprzedawca — prawdziwy człowiek, który pakuje
            zamówienie własnoręcznie. Kupując w Edit, kupujesz od kogoś, nie od
            magazynu.
          </p>
          <p className="font-edit text-[14px] font-light text-edit-graphite/60">
            Darmowe zwroty. Dostawa 2–3 dni. Żadnych niespodzianek.
          </p>
        </div>
      </section>

      {/* Closing */}
      <section className="py-24 px-8 text-center border-t border-edit-gold/20">
        <div className="max-w-2xl mx-auto">
          <p className="font-serif text-[28px] md:text-[36px] leading-[1.3] text-edit-graphite mb-4 text-balance">
            Nie wszystko co piękne jest łatwe do znalezienia.
          </p>
          <p className="font-edit text-[15px] font-light text-edit-gold tracking-wide">
            My już to zrobiliśmy.
          </p>
        </div>
      </section>
    </main>
  );
}
