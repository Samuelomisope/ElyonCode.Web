import screenshot1 from "./assets/screenshot-1.jpg";
import screenshot2 from "./assets/screenshot-2.jpg";
import screenshot3 from "./assets/screenshot-3.svg";

const stats = [
  { title: "Fast delivery", description: "Quick launch-ready websites." },
  { title: "Affordable pricing", description: "Clear packages for small businesses." },
  { title: "Mobile-friendly design", description: "Optimized for phones and tablets." }
];

const services = [
  { name: "Business Website", price: "₦20,000" },
  { name: "Landing Page", price: "₦10,000" },
  { name: "Website Redesign", price: "₦15,000" }
];

const portfolio = [
  {
    title: "Healthy Bites Co.",
    description: "Clean menu site for a local restaurant.",
    image: screenshot1
  },
  {
    title: "Akure Salon",
    description: "Modern booking landing page.",
    image: screenshot2
  },
  {
    title: "Village Market",
    description: "Responsive storefront for a small shop.",
    image: screenshot3
  }
];

const testimonials = [
  {
    quote: "Sample project for a boutique business, designed for faster customer bookings.",
    author: "Demo showcase"
  },
  {
    quote: "Demo design for a local café with a clean menu and strong call to action.",
    author: "Practice project"
  }
];

const processSteps = [
  {
    title: "You tell me about your business",
    description: "Share your goals, services, and what makes your business unique."
  },
  {
    title: "I design a clean, high-converting website for your business",
    description: "A clean, professional site built to attract customers and look great on mobile."
  },
  {
    title: "You get it live in 2–3 days",
    description: "Fast delivery so your business can start growing online quickly."
  }
];

const whatsappNumber = "2349056296658";
const whatsappLink = `https://wa.me/${whatsappNumber}`;
const whatsappDisplay = "+234 905 629 6658";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-50 via-white to-slate-100 text-slate-900">
      <div className="mx-auto max-w-6xl px-6 py-8 sm:px-8 lg:px-10">
        <header className="flex flex-col gap-8 pt-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-600">ElyonCode</p>
            <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl">
              Get More Customers With a Simple Business Website
            </h1>
            <p className="mt-4 max-w-xl text-lg text-slate-600">
              We build fast, affordable websites that help your business grow online.
            </p>
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-brand-600 px-8 py-4 text-sm font-semibold text-white transition hover:bg-brand-700"
          >
            Get Your Website on WhatsApp
          </a>
        </header>

        <section className="mt-14 rounded-3xl bg-white/90 p-8 shadow-xl shadow-slate-200/80 ring-1 ring-slate-200 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-brand-600 font-semibold">Helping small businesses get online</p>
              <div className="mt-6 grid gap-5 sm:grid-cols-3">
                {stats.map((item) => (
                  <div key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                    <p className="font-semibold text-slate-900">{item.title}</p>
                    <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-5 rounded-3xl bg-brand-600 p-8 text-white shadow-lg shadow-brand-500/20">
              <p className="text-sm uppercase tracking-[0.28em] text-brand-100/90">Trust your website launch</p>
              {testimonials.map((item) => (
                <blockquote key={item.author} className="rounded-3xl bg-white/10 p-5">
                  <p className="text-sm leading-6">“{item.quote}”</p>
                  <footer className="mt-4 text-sm font-semibold text-brand-100">{item.author}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16 space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-brand-600">Services</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-950">Clear packages for your business</h2>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <div key={service.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-950">{service.name}</h3>
                <p className="mt-4 text-3xl font-bold text-brand-600">{service.price}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-3xl bg-white p-8 shadow-xl shadow-slate-200/80 ring-1 ring-slate-200 sm:p-10">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-600">How it works</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950">Get your business online in 3 simple steps</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {processSteps.map((step) => (
              <div key={step.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-lg font-bold text-white">
                  {processSteps.indexOf(step) + 1}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-950">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 space-y-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-brand-600">Portfolio</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950">Screenshot previews</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolio.map((item) => (
              <div key={item.title} className="group relative overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1">
                <div className="relative overflow-hidden rounded-t-3xl bg-slate-950">
                  <img src={item.image} alt={`${item.title} screenshot`} className="h-48 w-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-950/65 opacity-0 transition duration-300 group-hover:opacity-100">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand-700 shadow-lg shadow-slate-900/10"
                    >
                      Chat about this design
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-[0.25em] text-brand-600">Screenshot</div>
                  <h3 className="mt-4 text-xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center justify-center rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700"
                  >
                    View Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-3xl bg-white p-8 shadow-xl shadow-slate-200/80 ring-1 ring-slate-200 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-brand-600">About ElyonCode</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-950">Simple web design for growing businesses</h2>
              <p className="mt-4 max-w-xl text-lg leading-8 text-slate-600">
                ElyonCode helps small businesses build a strong online presence with clean and affordable websites that convert visitors into customers.
              </p>
            </div>
            <div className="grid gap-4 rounded-3xl bg-brand-50 p-8">
              <div className="rounded-3xl bg-white p-5 shadow-sm">
                <p className="font-semibold text-slate-950">Fast launch</p>
                <p className="mt-2 text-sm text-slate-600">Get your website online quickly without extra complexity.</p>
              </div>
              <div className="rounded-3xl bg-white p-5 shadow-sm">
                <p className="font-semibold text-slate-950">Focused design</p>
                <p className="mt-2 text-sm text-slate-600">A premium look using one main brand color and crisp spacing.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 rounded-3xl bg-brand-600 p-10 text-white shadow-xl shadow-brand-500/20">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-brand-100/80">Ready to grow your business online?</p>
              <h2 className="mt-4 text-3xl font-bold">Start Your Website Today</h2>
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex max-w-max items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-brand-700 transition hover:bg-slate-100"
            >
              Chat Now to Get Started
            </a>
          </div>
        </section>

        <section className="mt-16 grid gap-8 rounded-3xl bg-white p-8 shadow-xl shadow-slate-200/80 ring-1 ring-slate-200 sm:p-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-brand-600">Contact</p>
            <h2 className="mt-3 text-2xl font-bold text-slate-950">Let’s talk about your website</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="font-semibold text-slate-950">WhatsApp</p>
              <a href={whatsappLink} className="mt-3 block text-brand-600">{whatsappDisplay}</a>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="font-semibold text-slate-950">Phone</p>
              <p className="mt-3 text-slate-600">{whatsappDisplay}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="font-semibold text-slate-950">Location</p>
              <p className="mt-3 text-slate-600">Akure, Nigeria</p>
            </div>
          </div>
        </section>
      </div>

      <div className="fixed bottom-6 right-6 z-50 rounded-full bg-brand-600 shadow-2xl shadow-brand-600/30">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 rounded-full px-5 py-4 text-sm font-semibold text-white transition hover:bg-brand-700"
        >
          <span className="text-lg">💬</span>
          Chat Now to Get Started
        </a>
      </div>

      <footer className="border-t border-slate-200 bg-slate-950 py-8 text-white">
        <div className="mx-auto max-w-6xl px-6 text-center sm:px-8 lg:px-10">
          <p className="text-sm font-semibold">ElyonCode</p>
          <p className="mt-3 text-sm text-slate-400">© 2026 · Building websites that grow businesses</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
