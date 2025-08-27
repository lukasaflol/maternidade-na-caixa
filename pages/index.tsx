const WHATSAPP = "5585996448841";
const WA_MSG = encodeURIComponent("Olá! Gostaria de saber mais sobre o Maternidade na Caixa.");

function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <img src="/logo/maternidade-logo.png" alt="Maternidade na Caixa" className="h-9 w-auto" />
          <span className="sr-only">Maternidade na Caixa</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#sobre" className="hover:text-rose-600">Sobre</a>
          <a href="#beneficios" className="hover:text-rose-600">Benefícios</a>
          <a href="#servicos" className="hover:text-rose-600">Pacotes</a>
          <a href="#como-funciona" className="hover:text-rose-600">Como funciona</a>
          <a href="#galeria" className="hover:text-rose-600">Galeria</a>
          <a href="#faq" className="hover:text-rose-600">FAQ</a>
          <a href={`https://wa.me/${WHATSAPP}?text=${WA_MSG}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-rose-600 text-white hover:bg-rose-700 transition shadow">Fale no WhatsApp</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-rose-50 via-white to-white" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
            Maternidade na Caixa – <span className="text-rose-600">Sua assessoria completa para um momento único</span>
          </h1>
          <p className="mt-4 text-neutral-700 text-lg">
            Decoramos, organizamos e cuidamos de cada detalhe da maternidade para que você viva esse momento com tranquilidade, conforto e alegria.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href={`https://wa.me/${WHATSAPP}?text=${WA_MSG}`} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-2xl px-6 py-3 bg-rose-600 text-white font-medium hover:bg-rose-700 transition shadow">💬 Quero meu orçamento</a>
          </div>
        </div>
        <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
          <img src="/galeria/estante-mivia-01.jpg" alt="Mívia ao lado da estante decorada na maternidade Aurora" className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
}

function Sobre() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-semibold">O que é o Maternidade na Caixa</h2>
          <p className="mt-4 text-neutral-700 leading-relaxed">
            O <strong>Maternidade na Caixa</strong> é uma assessoria completa à maternidade, criada para que a mamãe viva esse momento único com tranquilidade, beleza e acolhimento. Nós cuidamos de cada detalhe do quarto da maternidade (hospital) para que a família receba amigos e parentes em um ambiente elegante, funcional e aconchegante – sem preocupações e com a certeza de que tudo será feito com carinho e excelência.
          </p>
          <ul className="mt-6 space-y-2 text-neutral-700">
            <li>✨ Decoração planejada – cada detalhe pensado para encantar e acolher.</li>
            <li>✨ Identidade visual personalizada – traduzindo a essência da família.</li>
            <li>✨ Assessoria de compras e logística – cuidamos de bombons, águas, flores, lembrancinhas.</li>
            <li>✨ Parcerias com fornecedores – descontos exclusivos repassados integralmente.</li>
            <li>✨ Extensão para o lar – levamos a mesma atmosfera da maternidade para sua casa.</li>
          </ul>
        </div>
        <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow">
          <img src="/galeria/ambientacao-trabalho-01.jpg" alt="Mívia ajustando flores e ambientação nas prateleiras" className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
}

function Beneficios() {
  const items = [
    { icon: "🤍", title: "Conforto e tranquilidade", desc: "Você aproveita o bebê enquanto cuidamos de tudo." },
    { icon: "🌸", title: "Beleza e acolhimento", desc: "Ambiente planejado para encantar familiares e amigos." },
    { icon: "🎨", title: "Identidade visual", desc: "Cada projeto reflete sua história e estilo." },
    { icon: "💰", title: "Economia garantida", desc: "Parcerias que permitem descontos exclusivos." },
  ];
  return (
    <section id="beneficios" className="py-20 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center">Por que contratar?</h2>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((b, i) => (
            <div key={i} className="rounded-2xl border bg-white p-6 shadow-sm text-center">
              <div className="text-3xl">{b.icon}</div>
              <h3 className="mt-2 font-medium">{b.title}</h3>
              <p className="mt-1 text-sm text-neutral-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Servicos() {
  const pacotes = [
    { nome: "Pacote Montagem", desc: "Você já tem os itens, e nós fazemos apenas a organização e decoração." },
    { nome: "Pacote Completo", desc: "Nós cuidamos de absolutamente tudo – da compra ao ambiente pronto." },
    { nome: "Pacote Extensão", desc: "Além do hospital, levamos a experiência também para sua casa." },
  ];
  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center">Pacotes disponíveis</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {pacotes.map((p) => (
            <div key={p.nome} className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">{p.nome}</h3>
              <p className="mt-2 text-sm text-neutral-700">{p.desc}</p>
              <a href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Tenho interesse no " + p.nome)}`} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center justify-center rounded-xl px-4 py-2 bg-rose-600 text-white hover:bg-rose-700 w-full">Solicitar orçamento</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComoFunciona() {
  const steps = [
    "Conversa inicial e alinhamento do estilo.",
    "Planejamento e compra dos insumos.",
    "Montagem no hospital (1h a 1h30).",
    "Visita no dia seguinte para retirada dos itens.",
    "(Opcional) Montagem estendida no lar.",
  ];
  return (
    <section id="como-funciona" className="py-20 bg-neutral-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-semibold">Como funciona na prática</h2>
        <ol className="mt-8 grid md:grid-cols-5 gap-6">
          {steps.map((s, i) => (
            <li key={i} className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className="h-10 w-10 rounded-xl bg-rose-600 text-white grid place-items-center font-semibold shadow mb-3">{i+1}</div>
              <p className="text-sm text-neutral-700">{s}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Depoimentos() {
  const depoImgs = [
    { src: "/depo/erica-01.png", alt: "Depoimento da Érica" },
    { src: "/depo/larissa-01.png", alt: "Depoimento da Larissa" },
    { src: "/depo/fehabreu-01.png", alt: "Story da Feh Abreu" },
    { src: "/depo/luana-01.png", alt: "Depoimento da Luana" },
    { src: "/depo/kezia-01.png", alt: "Depoimento da Kézia" },
    { src: "/depo/marina-01.png", alt: "Mensagem da Marina" },
  ];
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center">Depoimentos</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {depoImgs.map((d, i) => (
            <figure key={i} className="rounded-2xl border bg-white overflow-hidden shadow-sm">
              <img src={d.src} alt={d.alt} className="w-full h-auto object-cover" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Galeria() {
  const fotos = [
    { src: "/galeria/estante-mivia-01.jpg", alt: "Mívia e estante com doces, flores e lembrancinhas – projeto Aurora" },
    { src: "/galeria/ambientacao-rosa-01.jpg", alt: "Prateleiras com arranjos em tons de rosa e mesa posta" },
    { src: "/galeria/verde-estante-01.jpg", alt: "Cantinho do café/boas-vindas em paleta verde com nichos iluminados" },
    { src: "/galeria/caixas-tematicas-close-01.jpg", alt: "Caixas temáticas redondas com laço amarelo e estampa floral" },
    { src: "/galeria/kits-higiene-01.jpg", alt: "Kits de higiene com frascos personalizados ‘Liz’ e flores" },
    { src: "/galeria/consultoria-express-01.jpg", alt: "Nichos e layout azul com TV – organização e briefing do espaço" },
    { src: "/galeria/placas-etiquetas-01.jpg", alt: "Caixa com brasão ‘J’ bordado e doces organizados" },
  ];
  return (
    <section id="galeria" className="py-20 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center">Galeria de Fotos</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fotos.map((f,i)=>(
            <figure key={i} className="rounded-2xl overflow-hidden shadow-sm border bg-white">
              <img src={f.src} alt={f.alt} className="w-full h-auto object-cover" loading="lazy" />
              <figcaption className="p-3 text-xs text-neutral-600">{f.alt}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "O que é o Maternidade na Caixa?", a: "É um serviço especializado em preparar o ambiente da maternidade (hospital) para receber familiares e amigos logo após o nascimento do bebê." },
    { q: "Qual o principal benefício?", a: "Você não contrata apenas decoração: contrata conforto, segurança, qualidade e alegria." },
    { q: "Vocês oferecem algum benefício financeiro?", a: "Sim! Temos parcerias com fornecedores e repassamos integralmente os descontos." },
    { q: "O que está incluso?", a: "Planejamento, organização, itens decorativos fornecidos pela Mívia, retirada no dia seguinte." },
    { q: "A decoração é feita só no hospital?", a: "O foco é o hospital, mas oferecemos a extensão para o lar." },
    { q: "Quanto tempo dura a montagem?", a: "Entre 1h e 1h30." },
    { q: "Preciso estar presente?", a: "Não é obrigatório. Você escolhe." },
    { q: "Quais pacotes existem?", a: "Montagem, Completo e Extensão." },
    { q: "Com quanto tempo devo contratar?", a: "De preferência alguns dias antes do parto, mas também atendemos última hora." },
    { q: "Quem já contratou aprovou?", a: "Sim! Diversas famílias validaram o serviço." },
    { q: "Como saber o valor?", a: "Depende do pacote. Fale conosco no WhatsApp para orçamento rápido." },
  ];
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center">Perguntas Frequentes</h2>
        <div className="mt-8 divide-y rounded-2xl border bg-neutral-50">
          {faqs.map((f, i) => (
            <details key={i} className="p-5">
              <summary className="cursor-pointer font-medium list-none flex justify-between">{f.q}<span>+</span></summary>
              <p className="mt-3 text-sm text-neutral-700">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-20 bg-rose-600 text-white text-center">
      <h2 className="text-3xl font-bold">Viva sua maternidade com conforto e alegria</h2>
      <p className="mt-2">Nós cuidamos de cada detalhe para você</p>
      <a href={`https://wa.me/${WHATSAPP}?text=${WA_MSG}`} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center justify-center rounded-2xl px-6 py-3 bg-white text-rose-600 font-medium hover:bg-neutral-100 shadow">💬 Quero meu orçamento agora</a>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-6 items-center">
        <div>
          <img src="/logo/maternidade-logo.png" alt="Maternidade na Caixa" className="h-9 w-auto" />
          <p className="mt-2 text-sm text-neutral-600">© {new Date().getFullYear()} — Todos os direitos reservados.</p>
        </div>
        <div className="text-sm text-neutral-700">
          <p><strong>WhatsApp:</strong> +55 85 99644-8841</p>
          <p><strong>E-mail:</strong> contato@maternidadenacaixa.com</p>
          <p><strong>Instagram:</strong> @maternidadenacaixa</p>
        </div>
        <div className="md:text-right text-sm text-neutral-600">
          <p>Feito com ❤ para acolher sua família.</p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="font-sans text-neutral-900">
      <Navbar />
      <Hero />
      <Sobre />
      <Beneficios />
      <Servicos />
      <ComoFunciona />
      <Depoimentos />
      <Galeria />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
