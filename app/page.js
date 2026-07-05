'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Ticket, ArrowDown, ArrowUpRight, MessageCircle } from 'lucide-react';
import { templates } from './components/templates-data';

const WA = 'https://wa.me/6281339908765?text=Halo%2C%20saya%20tertarik%20aplikasi%20reservasi%20di%20PortalReservasi';

export default function PortalReservasi() {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-40 border-b-2 border-navy bg-kremr/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="/" className="flex items-center gap-2 font-display text-xl font-extrabold uppercase tracking-wide">
            <span className="grid h-9 w-9 place-items-center rounded-lg border-2 border-navy bg-oranyer text-white shadow-[3px_3px_0_var(--color-navy)]"><Ticket size={17} /></span>
            PortalReservasi
          </a>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="rounded-lg border-2 border-navy bg-navy px-5 py-2 font-display text-sm font-bold uppercase tracking-wide text-kremr transition hover:bg-oranyer">
            Booking Demo
          </a>
        </nav>
      </header>

      {/* Hero — departure board */}
      <section className="px-4 pt-14 pb-12 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
            <span className="inline-block rounded-full border-2 border-navy bg-white px-4 py-1.5 text-xs font-bold shadow-[3px_3px_0_var(--color-navy)]">
              5 aplikasi · 5 paradigma booking
            </span>
            <h1 className="mt-6 font-display text-5xl font-extrabold uppercase leading-[0.95] sm:text-7xl">
              Antri itu <span className="text-oranyer">kuno</span>.<br />Reservasi itu <span className="text-oranyer">sekarang</span>.
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-mutedr">
              Meja restoran, kamar hotel, antrian klinik, lapangan futsal, sampai kursi bioskop — lima cara booking, semuanya tanpa drama.
            </p>
          </motion.div>

          {/* Papan keberangkatan */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }} className="board mx-auto mt-10 max-w-2xl overflow-hidden rounded-xl border-2 border-navy shadow-[6px_6px_0_rgba(16,32,63,0.2)]">
            <div className="flex items-center justify-between border-b border-kremr/20 px-5 py-2.5 text-[11px] uppercase">
              <span>■ Papan Reservasi</span><span className="blinkr text-oranyer">● LIVE</span>
            </div>
            <div className="divide-y divide-kremr/10 text-sm">
              {templates.map((t, i) => (
                <motion.a key={t.kode} href={`#${t.name.toLowerCase()}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 + i * 0.12 }} className="flex items-center justify-between px-5 py-2.5 transition hover:bg-kremr/10">
                  <span className="text-oranyer">{t.kode}</span>
                  <span className="font-bold uppercase">{t.name}</span>
                  <span className="hidden text-kremr/60 sm:block">{t.paradigma}</span>
                  <span className="text-emerald-400">OPEN ▸</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <div className="mt-8 text-center">
            <a href="#tiket" className="inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wide text-navy underline-offset-4 hover:underline">
              Ambil tiketmu <ArrowDown size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* Tiket cards */}
      <section id="tiket" className="scroll-mt-20 px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-6xl space-y-10">
          {templates.map((t, i) => (
            <motion.article
              key={t.kode}
              id={t.name.toLowerCase()}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="tiket grid md:grid-cols-[1.15fr_0.85fr]"
            >
              {/* Preview (badan tiket) */}
              <a href={t.url} className="group relative block overflow-hidden rounded-t-[0.9rem] border-b-2 border-dashed border-navy/35 md:rounded-l-[0.9rem] md:rounded-tr-none md:border-b-0 md:border-r-2" aria-label={`Demo ${t.name}`}>
                <div className="relative aspect-[16/10] md:h-full md:min-h-[290px]">
                  <Image src={t.image} alt={`Preview aplikasi ${t.name}`} fill sizes="(max-width:768px) 100vw, 55vw" className="object-cover object-top transition duration-500 group-hover:scale-[1.02]" priority={i === 0} />
                </div>
                <span className="absolute left-4 top-4 rounded-md border-2 border-navy bg-oranyer px-2.5 py-1 font-display text-xs font-bold uppercase text-white">{t.emoji} {t.name}</span>
              </a>

              {/* Stub tiket */}
              <div className="flex flex-col justify-between p-6 md:p-7">
                <div>
                  <div className="flex items-center justify-between text-[11px] uppercase text-mutedr">
                    <span>{t.kode}</span><span>Boarding · Web App</span>
                  </div>
                  <h2 className="mt-2 font-display text-3xl font-extrabold uppercase">{t.name}</h2>
                  <p className="font-bold text-oranyer">{t.paradigma}</p>
                  <p className="mt-3 text-sm leading-relaxed text-mutedr">{t.description}</p>
                  <div className="mt-4 grid grid-cols-2 gap-3 text-center">
                    {[t.detail.kolom1, t.detail.kolom2].map(([k, v]) => (
                      <div key={k} className="rounded-lg border border-navy/20 bg-kremr px-3 py-2">
                        <p className="text-[10px] uppercase text-mutedr">{k}</p>
                        <p className="font-display text-lg font-extrabold">{v}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="perf mt-5 flex items-center justify-between pt-4">
                  <div className="flex gap-1" aria-hidden="true">
                    {Array.from({ length: 14 }).map((_, k) => <span key={k} className={`inline-block w-1 rounded ${k % 3 ? 'h-6 bg-navy' : 'h-6 bg-navy/40'}`} />)}
                  </div>
                  <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-lg bg-navy px-4 py-2 font-display text-xs font-bold uppercase tracking-wide text-kremr transition hover:bg-oranyer">
                    Pesan <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="board border-t-2 border-navy px-4 py-16 text-center sm:px-6">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mx-auto max-w-xl">
          <p className="text-xs uppercase tracking-[0.3em] text-oranyer">Now boarding</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold uppercase leading-tight md:text-5xl">Bisnismu berikutnya yang dipanggil</h2>
          <p className="mt-4 text-sm text-kremr/60">Sistem reservasi custom untuk usahamu — mulai dari template ini.</p>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-oranyer px-8 py-4 font-display text-sm font-bold uppercase tracking-wide text-white transition hover:scale-[1.03] active:scale-95">
            <MessageCircle size={16} /> Chat WhatsApp
          </a>
        </motion.div>
      </section>

      <footer className="board px-4 py-5 text-center text-[11px] text-kremr/40">
        © {new Date().getFullYear()} PortalReservasi · Sanzystore Dev — no show, no cry.
      </footer>
    </div>
  );
}
