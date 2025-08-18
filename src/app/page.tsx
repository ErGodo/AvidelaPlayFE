import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* NAVBAR */}
      <header className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/LOGO.jpg"
            alt="Avidela Sport"
            width={320}
            height={320}
            sizes="(max-width: 640px) 64px, (max-width: 1024px) 120px, 192px"
            className="w-16 sm:w-20 md:w-28 lg:w-40 xl:w-48 h-auto object-contain"
            priority
          />
          <span className="ml-2 text-slate-900 font-extrabold text-base md:text-lg lg:text-xl tracking-wider uppercase">
            Avidela Sport
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a className="text-sm opacity-80 hover:opacity-100" href="#about">Acerca de</a>
          <a className="text-sm opacity-80 hover:opacity-100" href="#programs">Entrenadores</a>
          <Link href="#contact" className="rounded-xl border px-4 py-2 text-sm hover:shadow-sm">
            Contacto
          </Link>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6">
        {/* HERO */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center pt-10 md:pt-14 pb-20 md:pb-24 relative z-10">
          <div>
            <h1 className="text-[40px] leading-[1.05] md:text-6xl md:leading-[1.05] font-extrabold mb-4 uppercase">
              ENTRENADOR
              <br className="hidden md:block" /> DE CAMPEONES
            </h1>
            <p className="text-base md:text-lg text-slate-700 max-w-prose">
              Transforma tus habilidades en fútbol con entrenamiento profesional en nuestra academia.
            </p>
            <div className="mt-7 flex gap-4">
              <Link href="#programs" className="inline-block rounded-xl bg-slate-900 text-white px-6 py-3 font-medium hover:opacity-90">
                Comenzar
              </Link>
              <Link href="#contact" className="inline-block rounded-xl border border-slate-300 px-6 py-3 text-slate-700 hover:shadow-sm">
                Contáctanos
              </Link>
            </div>
          </div>

          {/* Jugador con fondo gris */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-48 h-64 sm:w-60 sm:h-72 md:w-[22rem] md:h-[26rem]">
              {/* Fondo gris redondeado */}
              <div className="absolute inset-0 rounded-3xl bg-slate-100 z-10" />

              {/* Imagen del jugador */}
              <div className="absolute z-20 -top-6 sm:-top-8 md:-top-12 -right-4 sm:-right-6 md:-right-12 pointer-events-none select-none">
                <Image
                  src="/jugador.png" // aquí va la foto que estás usando del jugador
                  alt="Jugador AVIDELA"
                  width={400}
                  height={600}
                  sizes="(max-width: 640px) 180px, (max-width: 1024px) 320px, 520px"
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </section>


        {/* ACERCA + PROGRAMAS + TESTIMONIO */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-10 py-6">
          {/* ACERCA */}
          <div id="about" className="lg:col-span-1">
            <h3 className="text-2xl font-extrabold uppercase mb-3">Acerca de la academia</h3>

            {/* Foco arriba para no cortar caras */}
            <div className="relative rounded-2xl overflow-hidden h-64 md:h-72 lg:h-80">
              <Image
                src="/niñosjugando.png"
                alt="Niños jugando"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 33vw"
                priority
              />
            </div>

            <p className="text-slate-700 mt-4">
              La Academia AVIDELA Sport se compromete a proporcionar entrenamiento
              futbolístico de primer nivel en un entorno de apoyo.
            </p>
          </div>

          {/* PROGRAMAS + TESTIMONIO */}
          <div className="lg:col-span-2">
            <div id="programs">
              <h3 className="text-2xl font-extrabold uppercase mb-2">Programas de desarrollo</h3>
              <p className="text-slate-700 mb-5 max-w-prose">
                Personal de entrenamiento altamente calificado y experimentado, dedicado al éxito de los jugadores.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center flex flex-col items-center justify-center gap-2">
                  <div className="h-16 w-16">
                    <Image src="/entrenamientojuvenil.png" alt="Entrenamiento Infantil" width={64} height={64} className="object-contain mx-auto" />
                  </div>
                  <span className="text-sm font-medium">Entrenamiento Infantil</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center flex flex-col items-center justify-center gap-2">
                  <div className="h-16 w-16">
                    <Image src="/adultos.png" alt="Entrenamiento para Adultos" width={64} height={64} className="object-contain mx-auto" />
                  </div>
                  <span className="text-sm font-medium">Entrenamiento para Adultos</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center flex flex-col items-center justify-center gap-2">
                  <div className="h-16 w-16">
                    <Image src="/tactica.png" alt="Táctica" width={64} height={64} className="object-contain mx-auto" />
                  </div>
                  <span className="text-sm font-medium">Táctica</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center flex flex-col items-center justify-center gap-2">
                  <div className="h-16 w-16">
                    <Image src="/fisica.png" alt="Preparación Física" width={64} height={64} className="object-contain mx-auto" />
                  </div>
                  <span className="text-sm font-medium">Preparación Física</span>
                </div>
              </div>
            </div>

            {/* TESTIMONIO (sin cortar cabezas) */}
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              {/* En móvil: object-contain para no recortar; en >=sm: object-cover con object-top */}
              <div className="relative w-full sm:w-48 h-56 sm:h-48 rounded-2xl overflow-hidden bg-slate-100 shrink-0">
                <Image
                  src="/yumar.png"
                  alt="Entrenador"
                  fill
                  className="object-contain sm:object-cover sm:object-top"
                  sizes="(max-width: 640px) 100vw, 12rem"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-semibold uppercase">Testimonios</h4>
                <blockquote className="mt-2 text-slate-700 leading-relaxed">
                  “El entrenamiento y apoyo en AVIDELA Sport han sido excepcionales. ¡He mejorado enormemente mi juego!”
                </blockquote>
                <p className="mt-3 font-medium">Juan Pérez</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA CONTACTO */}
        <section id="contact" className="py-10 flex justify-center">
          <Link
            href="https://wa.me/XXXXXXXXXXX?text=Hola%20AVIDELA%20quiero%20informaci%C3%B3n"
            className="rounded-xl bg-slate-900 text-white px-8 py-3 font-medium hover:opacity-90"
          >
            Contáctanos
          </Link>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t mt-10">
        <div className="mx-auto max-w-6xl px-6 py-6 text-center text-sm text-slate-600">
          © {new Date().getFullYear()} Avidela Sport — Todos los derechos reservados
        </div>
      </footer>
    </div>
  );
}
