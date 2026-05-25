import React from "react";
import { Music, Mic2, SlidersHorizontal, Radio, Headphones, ArrowRight, Mail, Phone } from "lucide-react";

export default function PWTProductionsHomepage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
  <div className="flex items-center gap-3">
    <img
      src="/pwtplogo.jpg"
      alt="Poor White Trash Productions Logo"
      className="h-28 w-auto"
    />
  </div>
          
          

          <nav className="hidden items-center gap-8 text-sm font-bold uppercase tracking-wider md:flex">
            <a className="text-red-500" href="#home">Home</a>
            <a className="text-white/80 transition hover:text-white" href="#services">Services</a>
            <a className="text-white/80 transition hover:text-white" href="#about">About</a>
            <a className="text-white/80 transition hover:text-white" href="#team">Team</a>
            <a className="text-white/80 transition hover:text-white" href="#media">Media</a>
            <a className="text-white/80 transition hover:text-white" href="#contact">Contact</a>
          </nav>

          <a href="#contact" className="hidden rounded-none border border-red-500 px-6 py-3 text-sm font-black uppercase tracking-wider text-red-400 transition hover:bg-red-500 hover:text-white md:inline-flex">
            Book Now
          </a>
        </div>
      </header>

      <section id="home" className="relative min-h-screen overflow-hidden pt-24">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=2400&q=85')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-6rem)] max-w-7xl items-center px-6 py-24">
          <div className="max-w-3xl">
            <div className="mb-6 h-1 w-16 bg-red-500" />
            <h1 className="text-6xl font-black uppercase leading-[0.9] tracking-tight sm:text-7xl md:text-8xl">
              Real Sound.<br />
              Real Work.<br />
              Real Results.
            </h1>
            <p className="mt-8 max-w-xl text-xl leading-8 text-white/80">
              Recording, mixing, production, and artist support for musicians who want their sound to hit harder and feel honest.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
<a
  href="#contact"
  className="inline-flex items-center justify-center gap-3 bg-red-600 px-8 py-4 text-sm font-black uppercase tracking-wider transition-all duration-300 hover:bg-red-500 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(255,0,0,0.35)]"
>
  Book a Session <ArrowRight className="h-4 w-4" />
</a>

<a
  href="#media"
  className="inline-flex items-center justify-center border border-white/25 px-8 py-4 text-sm font-black uppercase tracking-wider text-white transition-all duration-300 hover:scale-[1.02] hover:border-red-500 hover:text-red-500"
>
  Hear the Work
</a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="border-y border-white/10 bg-black px-6 py-24">
  <div className="mx-auto max-w-7xl">
    <div className="mb-14 max-w-3xl">
      <p className="text-sm font-black uppercase tracking-[0.35em] text-red-500">
        Services
      </p>
      <h2 className="mt-4 text-4xl font-black uppercase tracking-tight sm:text-5xl">
        Production services with a raw, real-world edge.
      </h2>
      <p className="mt-6 text-lg leading-8 text-white/70">
        From music and video to design and promotion, Poor White Trash Productions helps artists and creators bring their projects to life.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <div className="border border-white/10 bg-zinc-950 p-8 transition hover:border-red-500/60">
        <Mic2 className="mb-6 h-10 w-10 text-red-500" />
        <h3 className="text-2xl font-black uppercase">Audio Production</h3>
        <p className="mt-4 leading-7 text-white/65">
          Recording, mixing, editing, and production for artists, bands, podcasts, and creative projects.
        </p>
      </div>

      <div className="border border-white/10 bg-zinc-950 p-8 transition hover:border-red-500/60">
        <Radio className="mb-6 h-10 w-10 text-red-500" />
        <h3 className="text-2xl font-black uppercase">Video Production</h3>
        <p className="mt-4 leading-7 text-white/65">
          Music videos, promo clips, event footage, behind-the-scenes content, and visual storytelling.
        </p>
      </div>

      <div className="border border-white/10 bg-zinc-950 p-8 transition hover:border-red-500/60">
        <SlidersHorizontal className="mb-6 h-10 w-10 text-red-500" />
        <h3 className="text-2xl font-black uppercase">Graphic Design</h3>
        <p className="mt-4 leading-7 text-white/65">
          Cover art, flyers, logos, digital graphics, merch concepts, and promotional visuals.
        </p>
      </div>

      <div className="border border-white/10 bg-zinc-950 p-8 transition hover:border-red-500/60">
        <Headphones className="mb-6 h-10 w-10 text-red-500" />
        <h3 className="text-2xl font-black uppercase">Marketing</h3>
        <p className="mt-4 leading-7 text-white/65">
          Artist promotion, release support, ad graphics, brand direction, and content planning.
        </p>
      </div>
    </div>
  </div>
</section>
<section
  id="team"
  className="mx-auto max-w-7xl px-6 py-24"
>
  <div className="mb-14 text-center">
    <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-red-500">
      Meet The Team
    </p>

    <h2 className="mx-auto max-w-4xl text-4xl font-black uppercase leading-tight md:text-5xl">
      The People Behind The Sound
    </h2>

    <p className="mx-auto mt-6 max-w-2xl text-white/70">
      Producers, engineers, creatives, and artists working together
      to build authentic sound and unforgettable sessions.
    </p>
  </div>

  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

    <div className="overflow-hidden border border-white/10 bg-white/5">
      <img
        src="/team3.png"
        alt="Team Member"
        className="h-80 w-full object-cover"
      />

      <div className="p-6">
        <h3 className="text-2xl font-bold uppercase">
          Jeff Jones
        </h3>

        <p className="mt-2 text-red-500 uppercase text-sm tracking-widest">
          chief founding officer
        </p>

        <p className="mt-4 text-sm text-white/70">
        Chief Financial Officer specializing in financial strategy, operational management, and organizational growth. Proven expertise in budgeting, forecasting, risk management, and financial leadership with a strong commitment to driving profitability, efficiency, and long-term stability.
        </p>
      </div>
    </div>
    <div className="overflow-hidden border border-white/10 bg-white/5">
      <img
        src="/team2.png"
        alt="Team Member"
        className="h-80 w-full object-cover"
      />

      <div className="p-6">
        <h3 className="text-2xl font-bold uppercase">
          Jake Jones
        </h3>

        <p className="mt-2 text-red-500 uppercase text-sm tracking-widest">
          chief executive officer
        </p>

        <p className="mt-4 text-sm text-white/70">
          Chief Executive Officer specializing in strategic marketing, brand development, and business growth. Proven leadership in creative media, promotions, and digital engagement with a strong focus on innovation, operational excellence, and long-term brand success.
        </p>
      </div>
    </div>
        <div className="overflow-hidden border border-white/10 bg-white/5">
      <img
        src="/team1.png"
        alt="Team Member"
        className="h-80 w-full object-cover object-top"
      />

      <div className="p-6">
        <h3 className="text-2xl font-bold uppercase">
          francesca Marie        </h3>

        <p className="mt-2 text-red-500 uppercase text-sm tracking-widest">
          Director of Marketing
        </p>

        <p className="mt-4 text-sm text-white/70">
        Strategic marketing leader with expertise in brand development, integrated marketing campaigns, and digital media strategy. Experienced in leading high-performing teams and executing innovative campaigns that strengthen brand presence.
        </p>
      </div>
    </div>
        <div className="overflow-hidden border border-white/10 bg-white/5">
      <img
        src="/Team4.png"
        alt="Team Member"
        className="h-80 w-full object-cover"
      />

      <div className="p-6">
        <h3 className="text-2xl font-bold uppercase">
          Brandon Garcia
        </h3>

        <p className="mt-2 text-red-500 uppercase text-sm tracking-widest">
          Event & Promotions Manager
        </p>

        <p className="mt-4 text-sm text-white/70">
       Experienced Event & Promotions Manager specializing in strategic event planning, promotional marketing, and audience development. Proven ability to manage large-scale events, oversee cross-functional coordination, and execute innovative campaigns that strengthen brand presence and enhance customer engagement.
        </p>
      </div>
    </div>
    <div className="overflow-hidden border border-white/10 bg-white/5">

  <img
    src="/team5.png"
    alt="Team Member"
    className="h-80 w-full object-cover"
  />

  <div className="p-6">
    <h3 className="text-2xl font-bold uppercase">
      Andy Payne
    </h3>

    <p className="mt-2 text-red-500 uppercase text-sm tracking-widest">
      Lead Audio & Recording Engineer
    </p>

    <p className="mt-4 text-sm text-white/70">
      Lead Audio & Recording Engineer with a degree in Audio Engineering and extensive experience in studio recording, mixing, sound design, and music production. Dedicated to delivering professional, high-quality audio while helping artists refine their sound through creative direction, technical precision, and a passion for authentic music production.
    </p>
  </div>

</div>
<div className="overflow-hidden border border-white/10 bg-white/5">

  <img
    src="/team6.png"
    alt="Team Member"
    className="h-80 w-full object-cover"
  />

  <div className="p-6">
    <h3 className="text-2xl font-bold uppercase">
      Michael Tellez
    </h3>

    <p className="mt-2 text-red-500 uppercase text-sm tracking-widest">
      Head of Acquisitions
    </p>

    <p className="mt-4 text-sm text-white/70">
      Head of Acquisitions specializing in professional audio hardware, studio technology, and production infrastructure. Experienced in sourcing high-end recording equipment, evaluating emerging audio technologies, and building strategic partnerships that support innovative music production, studio development, and high-quality sound engineering environments.
    </p>
  </div>

</div>
<div className="overflow-hidden border border-white/10 bg-white/5">

  <img
    src="/team7.png"
    alt="Team Member"
    className="h-80 w-full object-cover"
  />

  <div className="p-6">
    <h3 className="text-2xl font-bold uppercase">
      Daniel Jones
    </h3>

    <p className="mt-2 text-red-500 uppercase text-sm tracking-widest">
      Executive Engineer
    </p>

    <p className="mt-4 text-sm text-white/70">
      Executive Engineer specializing in IT infrastructure, cybersecurity, studio hardware integration, and professional audio systems. Experienced in managing secure production environments, optimizing recording technology, maintaining high-performance hardware, and implementing reliable technical solutions that support advanced audio production and studio operations.
    </p>
  </div>

</div>
<div className="overflow-hidden border border-white/10 bg-white/5">

  <img
    src="/team8.png"
    alt="Team Member"
    className="h-80 w-full object-cover"
  />

  <div className="p-6">
    <h3 className="text-2xl font-bold uppercase">
      Sarah Jones
    </h3>

    <p className="mt-2 text-red-500 uppercase text-sm tracking-widest">
      Creative Director of Artist Wellness & Styling
    </p>

    <p className="mt-4 text-sm text-white/70">
      Creative Director of Artist Wellness & Styling specializing in artist image development, personal branding, health and wellness coordination, makeup and wardrobe styling, and overall creative presentation. Dedicated to helping artists build confidence, maintain professional appearance standards, and develop a strong visual identity that aligns with their music, lifestyle, and brand.
    </p>
  </div>

</div>
  </div>
  
</section>
   <section id="about" className="bg-zinc-950 px-6 py-28">
  <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">

    <div className="max-w-xl">
      <p className="text-sm font-black uppercase tracking-[0.35em] text-red-500">
        About
      </p>

      <h2 className="mt-5 text-5xl font-black uppercase leading-none tracking-tight">
        Built from independent hustle and real creative passion.
      </h2>

      <div className="mt-8 h-1 w-24 bg-red-500" />

      <p className="mt-8 text-lg leading-8 text-white/75">
        Poor White Trash Productions was built to help artists turn ideas into finished work that actually connects with people.
      </p>

      <p className="mt-6 text-lg leading-8 text-white/75">
        From recording and video production to graphic design, promotion, and artist development, we focus on helping creators build something authentic instead of chasing trends.
      </p>

      <p className="mt-6 text-lg leading-8 text-white/75">
        Our studio may be independent and homegrown, but it's packed with the tools, experience, and creative energy needed to produce professional results without losing personality.
      </p>

      <p className="mt-6 text-lg leading-8 text-white/75">
        We're not here just to watch the clock run. We care about the final product and the people behind it.
      </p>
    </div>

    <div className="relative overflow-hidden rounded-2xl border border-zinc-800 shadow-2xl">
      <img
        src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1200&auto=format&fit=crop"
        alt="Recording studio"
        className="h-[520px] w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      <div className="absolute bottom-0 left-0 p-8">
        <p className="text-sm font-black uppercase tracking-[0.35em] text-red-500">
          Est. 2015
        </p>

        <h3 className="mt-3 text-3xl font-black uppercase">
          Real artists. Real work.
        </h3>
      </div>
    </div>

  </div>
</section>
<section
  id="work"
  className="border-t border-zinc-900 bg-black px-6 py-24 text-white"
>
  <div className="mx-auto max-w-7xl">
    <p className="text-sm font-black uppercase tracking-[0.35em] text-red-500">
      Featured Work
    </p>

    <h2 className="mt-5 max-w-4xl text-5xl font-black uppercase leading-none md:text-7xl">
      Real projects.
      <br />
      Real creativity.
    </h2>

    <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
      A collection of music, visuals, branding, and production work created
      through Poor White Trash Productions.
    </p>

    <div className="mt-16 grid gap-8 md:grid-cols-2">
      <div className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-[0_0_30px_rgba(255,0,0,0.15)]">
        <img
          src="/Unbroken.jpg"
          alt="Studio session"
          className="h-[420px] w-full object-contain bg-black transition duration-500 group-hover:scale-105"
        />

        <div className="p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-red-500">
            Audio Production
          </p>

          <h3 className="mt-3 text-3xl font-black uppercase">
            Recording & Mixing
          </h3>

          <p className="mt-4 text-white/70">
            Professional recording sessions, mixing, vocal production, and
            mastering support for artists and creators.
          </p>
        </div>
      </div>

      <div className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
        <img
          src="/Workstation.png"
          alt="Video production"
          className="h-[320px] w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-red-500">
            Visual Production
          </p>

          <h3 className="mt-3 text-3xl font-black uppercase">
            Video & Content
          </h3>

          <p className="mt-4 text-white/70">
            Music videos, promotional visuals, artist branding, social content,
            and creative storytelling.
          </p>
        </div>
      </div>
    </div>
    
  </div>
</section>
      <section id="media" className="bg-black px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-red-500">Media</p>
          <h2 className="mt-4 text-5xl font-black uppercase tracking-tight">Hear the difference.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Add embedded tracks, videos, testimonials, or before-and-after mix samples here.
          </p>
          <div className="mt-12 rounded-2xl border border-zinc-800 bg-zinc-950 p-8 text-left">
  <p className="text-sm uppercase tracking-[0.3em] text-red-500">
    Featured Single
  </p>

  <h3 className="mt-3 text-3xl font-black uppercase text-white">
    Left Behind (Ft. Jrod the problem)
  </h3>

  <p className="mt-4 text-white/70">
    Stream the featured release directly from Poor White Trash Productions.
  </p>

  <audio
    controls
    className="mt-6 w-full"
  >
    <source src="/leftbehind.mp3" type="audio/mpeg" />
    Your browser does not support the audio element.
  </audio>
  <div className="mt-10 grid gap-6 md:grid-cols-3">
  <div className="rounded-xl border border-zinc-800 bg-black p-4 transition duration-300 hover:border-red-500/40">
    <p className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-red-500">
      Spotify
    </p>

    <iframe
      src="https://open.spotify.com/embed/album/0K9BDWVhuEsMrOBC0Rz9d2?utm_source=generator"
      width="100%"
      height="352"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      className="rounded-xl"
    ></iframe>
  </div>

  <div className="rounded-xl border border-zinc-800 bg-black p-4 transition duration-300 hover:border-red-500/40">
  <p className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-red-500">
    Apple Music
  </p>

  <iframe
    allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
    height="352"
    style={{
      width: "100%",
      overflow: "hidden",
      borderRadius: "12px",
    }}
    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
    src="https://embed.music.apple.com/us/album/walking-dead-lp/1845828291"
  ></iframe>
</div>

  <div className="rounded-xl border border-zinc-800 bg-black p-4 transition duration-300 hover:border-red-500/40">
    <p className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-red-500">
      YouTube
    </p>

   <iframe
  className="aspect-video w-full rounded-xl"
  src="https://www.youtube.com/embed/4j6saKI4n9A?si=Vsuznrc1po24i38J"
  title="YouTube video player"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
></iframe>
  </div>

</div>
</div>
        </div>
      </section>
      <div className="mx-auto max-w-5xl">
<div className="mt-8 rounded-xl border border-zinc-800 bg-black p-4 transition duration-300 hover:border-red-500/40">
  <p className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-red-500">
    Featured 
Song by Poor White Trash Productions.
Official video created by Epidemic Media.
  </p>

  <iframe
    className="aspect-video w-full rounded-xl"
    src="https://www.youtube.com/embed/hTzztSRwRgg?si=sSrRSdvyfabS9vk0"
    title="Featured music video"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  ></iframe>
</div>
</div>
<section id="buy" className="border-t border-zinc-900 bg-black px-6 py-24 text-white">
  <div className="mx-auto max-w-7xl">
    <p className="text-sm font-black uppercase tracking-[0.35em] text-red-500">
      Buy Now
    </p>

    <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-950 p-10 transition-all duration-300 hover:border-red-500/40 hover:shadow-[0_0_30px_rgba(255,0,0,0.15)]">
      <h2 className="text-5xl font-black uppercase leading-none md:text-7xl">
        Merch drop
        <br />
        
      </h2>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
        Shirts, music releases, and limited-run merch are currently sold out.
        New drops are coming soon.
      </p>

      <a
        href="#contact"
        className="mt-10 inline-flex bg-red-600 px-8 py-4 text-sm font-black uppercase tracking-wider text-white transition-all duration-300 hover:bg-red-500 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(255,0,0,0.35)]"
      >
        Get notified
      </a>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
  <div className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-[0_0_30px_rgba(255,0,0,0.15)]">
    <img
      src="/merch1.png"
      alt="Sold out merch"
      className="h-[320px] w-full object-cover transition duration-500 group-hover:scale-105"
    />

    <div className="p-6">
      <p className="text-sm font-black uppercase tracking-[0.3em] text-red-500">
        Sold Out
      </p>

      <h3 className="mt-3 text-2xl font-black uppercase">
        Poor White Trash Production Tee
      </h3>

      <p className="mt-3 text-white/70">
        Limited first-run release from the PWT archive collection.
      </p>
    </div>
  </div>

  <div className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-[0_0_30px_rgba(255,0,0,0.15)]">
    <img
      src="/merch2.jpg"
      alt="Sold out merch"
      className="h-[320px] w-full object-cover transition duration-500 group-hover:scale-105"
    />

    <div className="p-6">
      <p className="text-sm font-black uppercase tracking-[0.3em] text-red-500">
        Sold Out
      </p>

      <h3 className="mt-3 text-2xl font-black uppercase">
        Jake Jones Tee (Black)
      </h3>

      <p className="mt-3 text-white/70">
        Limited first-run release from the PWT archive collection.
      </p>
    </div>
  </div>

  <div className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-[0_0_30px_rgba(255,0,0,0.15)]">
    <img
      src="/merch3.png"
      alt="Sold out merch"
      className="h-[320px] w-full object-cover transition duration-500 group-hover:scale-105"
    />

    <div className="p-6">
      <p className="text-sm font-black uppercase tracking-[0.3em] text-red-500">
        Sold Out
      </p>

      <h3 className="mt-3 text-2xl font-black uppercase">
        Jake Jones Tee (White)
      </h3>

      <p className="mt-3 text-white/70">
        Exclusive promotional artwork from past releases.
      </p>
    </div>
  </div>
</div>
    </div><div className="mt-10 grid gap-6 md:grid-cols-3">
  <div className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-[0_0_30px_rgba(255,0,0,0.15)]">
    <img
      src="/cd1.jpg"
      alt="Sold out CD"
      className="h-[320px] w-full object-contain bg-black p-2 transition duration-500 group-hover:scale-105"
    />

    <div className="p-6">
      <p className="text-sm font-black uppercase tracking-[0.3em] text-red-500">
        Sold Out
      </p>

      <h3 className="mt-3 text-2xl font-black uppercase">
        Walking Dead LP (Physical)
      </h3>

      <p className="mt-3 text-white/70">
        Limited physical CD release from the original drop.
      </p>
    </div>
  </div>

  <div className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-[0_0_30px_rgba(255,0,0,0.15)]">
    <img
      src="/cd2.jpg"
      alt="Sold out CD"
      className="h-[320px] w-full object-contain bg-black p-2 transition duration-500 group-hover:scale-105"
    />

    <div className="p-6">
      <p className="text-sm font-black uppercase tracking-[0.3em] text-red-500">
        Sold Out
      </p>

      <h3 className="mt-3 text-2xl font-black uppercase">
        Pain Is Beauty (Physical)
      </h3>

      <p className="mt-3 text-white/70">
        Collector's edition CD with limited artwork packaging.
      </p>
    </div>
  </div>

  <div className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-[0_0_30px_rgba(255,0,0,0.15)]">
    <img
      src="/cd3.jpg"
      alt="Sold out CD"
      className="h-[320px] w-full object-contain bg-black p-2 transition duration-500 group-hover:scale-105"
    />

    <div className="p-6">
      <p className="text-sm font-black uppercase tracking-[0.3em] text-red-500">
        Sold Out
      </p>

      <h3 className="mt-3 text-2xl font-black uppercase">
        Red Dot Society (Physical)
      </h3>

      <p className="mt-3 text-white/70">
        Rare independent CD release from the archive vault.
      </p>
    </div>
  </div>
</div>
  </div>
</section>
      <section id="contact" className="border-t border-white/10 bg-zinc-950 px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-red-500">Contact</p>
            <h2 className="mt-4 text-5xl font-black uppercase tracking-tight">Ready to build something?</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Tell us what you're working on, what stage it's in, and what kind of sound you’re chasing.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black p-8">
            <div className="space-y-5 text-white/80">
              <div className="flex items-center gap-4">
  <Mail className="h-5 w-5 text-red-500" />
  <span>poorwhitetrashproductions@gmail.com</span>
</div>

<div className="flex items-center gap-4">
  <Phone className="h-5 w-5 text-red-500" />
  <span>(520) 420-6050</span>
</div>
            </div>
<a
  href="mailto:poorwhitetrashproductions@gmail.com"
  className="mt-8 block w-full bg-red-600 px-8 py-4 text-center text-sm font-black uppercase transition hover:bg-red-700"
>
  Book a Session
</a>

          </div>
        </div>
      </section>
      <footer className="border-t border-zinc-900 bg-black px-6 py-14 text-white">
  <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
    <div className="flex items-center gap-4">
      <img
        src="/pwtplogo.jpg"
        alt="Poor White Trash Productions Logo"
        className="h-20 w-auto"
      />

      <div>
        <p className="text-sm font-black uppercase tracking-[0.25em]">
          Poor White Trash Productions LLC
        </p>
        <p className="mt-1 text-sm text-white/50">
          Audio. Video. Design. Promotion.
        </p>
      </div>
    </div>

    <div className="flex flex-col items-center gap-2 text-sm text-white/50 md:items-end">
      <a
        href="mailto:poorwhitetrashproductions@gmail.com"
        className="transition hover:text-red-500"
      >
        poorwhitetrashproductions@gmail.com
      </a>

      <p>(520) 420-6050</p>

      <p>© 2026 Poor White Trash Productions. All rights reserved.</p>
    </div>
  </div>
</footer>
    </main>
  );
}
