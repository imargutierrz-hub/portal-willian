"use client"

import Link from "next/link"
import { motion } from "motion/react"
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  MapPin,
  CheckCircle2,
  Smartphone,
  Globe,
  Code2,
  Database,
  Server,
  Zap,
  Bot,
  Link2,
  Truck,
  Workflow,
} from "lucide-react"

const proyectos = [
  {
    nombre: "Landing Page",
    descripcion:
      "Sitio web corporativo moderno, limpio y completamente responsive.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    href: "#",
    tipo: "landing",
  },
  {
    nombre: "HablaPic",
    descripcion:
      "Aplicación móvil de comunicación aumentativa y alternativa para facilitar la expresión.",
    tags: ["React Native", "Expo", "TypeScript"],
    href: "/hablapic",
    tipo: "hablapic",
  },
  {
    nombre: "EFE",
    descripcion:
      "Plataforma para análisis financiero y apoyo en la toma de decisiones.",
    tags: ["Next.js", "Supabase", "TypeScript"],
    href: "/efe",
    tipo: "efe",
  },
]

const tecnologias = [
  {
    nombre: "React",
    descripcion: "Interfaces",
    icono: "⚛",
  },
  {
    nombre: "React Native",
    descripcion: "Apps móviles",
    icono: "◈",
  },
  {
    nombre: "TypeScript",
    descripcion: "Código seguro",
    icono: "TS",
  },
  {
    nombre: "JavaScript",
    descripcion: "Desarrollo web",
    icono: "JS",
  },
  {
    nombre: "Tailwind CSS",
    descripcion: "Diseño UI",
    icono: "〰",
  },
  {
    nombre: "Git & GitHub",
    descripcion: "Control de versiones",
    icono: "●",
  },
  {
    nombre: "PostgreSQL",
    descripcion: "Bases de datos",
    icono: "◇",
  },
]

const automatizaciones = [
  {
    icono: Zap,
    titulo: "Automatización de procesos",
    descripcion:
      "Conecto y automatizo tareas repetitivas para que tu negocio ahorre tiempo y reduzca procesos manuales.",
  },
  {
    icono: Bot,
    titulo: "IA + Automatización",
    descripcion:
      "Integro inteligencia artificial para analizar información, responder solicitudes y apoyar la toma de decisiones.",
  },
  {
    icono: Link2,
    titulo: "Integración de sistemas",
    descripcion:
      "Conecto aplicaciones, APIs, bases de datos y diferentes plataformas para que trabajen como un solo sistema.",
  },
  {
    icono: Truck,
    titulo: "Pedidos y logística",
    descripcion:
      "Automatizo procesos relacionados con pedidos, domicilios, tiempos de entrega y capacidad operativa.",
  },
]

function HeroGraphic() {
  return (
    <div className="relative w-full max-w-[620px] h-[520px] mx-auto">

      {/* Resplandor principal */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
        w-[360px] h-[360px] rounded-full
        bg-blue-500/20 blur-[100px]"
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.45, 0.7, 0.45],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Partículas */}
      <motion.div
        className="absolute top-[80px] left-[90px] w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_15px_rgba(103,232,249,0.9)]"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-[140px] right-[80px] w-1.5 h-1.5 rounded-full bg-blue-300 shadow-[0_0_12px_rgba(147,197,253,0.9)]"
        animate={{
          y: [0, 25, 0],
          opacity: [0.2, 1, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="absolute bottom-[120px] left-[130px] w-1.5 h-1.5 rounded-full bg-cyan-200 shadow-[0_0_12px_rgba(165,243,252,0.9)]"
        animate={{
          y: [0, -18, 0],
          opacity: [0.2, 0.9, 0.2],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      {/* Líneas tecnológicas de fondo */}
      <div className="absolute inset-0 opacity-40">

        <div className="absolute left-[8%] top-[45%] w-[180px] h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent rotate-[25deg]" />

        <div className="absolute right-[5%] top-[35%] w-[190px] h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent rotate-[-28deg]" />

        <div className="absolute left-[20%] bottom-[18%] w-[150px] h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent rotate-[-18deg]" />

        <div className="absolute right-[18%] bottom-[20%] w-[130px] h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent rotate-[20deg]" />

      </div>

      {/* Plataforma inferior */}
      <motion.div
        className="absolute left-1/2 bottom-[35px] -translate-x-1/2
        w-[420px] h-[115px]"
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >

        {/* Base */}
        <div
          className="absolute inset-0 rounded-[45%]
          bg-gradient-to-br from-slate-800 via-blue-900 to-slate-950
          border border-blue-400/30
          shadow-[0_0_50px_rgba(37,99,235,0.25)]
          transform rotate-x-[55deg] rotate-z-[-8deg]"
        />

        {/* Luz de la plataforma */}
        <div
          className="absolute left-[12%] right-[12%] top-[45%]
          h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent
          blur-[1px]"
        />

        {/* Paneles */}
        <div className="absolute left-[22%] top-[25%] w-[85px] h-[35px]
          rounded-lg border border-cyan-400/30
          bg-blue-950/70 rotate-[-8deg]"
        />

        <div className="absolute right-[20%] top-[25%] w-[75px] h-[30px]
          rounded-lg border border-blue-400/30
          bg-slate-950/80 rotate-[8deg]"
        />

      </motion.div>

      {/* Núcleo central */}
      <motion.div
        className="absolute left-1/2 top-[205px]
        -translate-x-1/2 -translate-y-1/2
        w-[250px] h-[250px]"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
      >

        {/* Anillo exterior */}
        <div
          className="absolute inset-0 rounded-full
          border border-blue-400/20
          shadow-[0_0_50px_rgba(59,130,246,0.15)]"
        />

        {/* Anillo interior */}
        <div
          className="absolute inset-[25px] rounded-full
          border border-cyan-400/20
          border-dashed"
        />

        {/* Punto superior */}
        <div
          className="absolute top-[-5px] left-1/2
          -translate-x-1/2
          w-3 h-3 rounded-full
          bg-cyan-300
          shadow-[0_0_20px_rgba(103,232,249,1)]"
        />

        {/* Punto lateral */}
        <div
          className="absolute right-[-5px] top-1/2
          -translate-y-1/2
          w-2.5 h-2.5 rounded-full
          bg-blue-300
          shadow-[0_0_18px_rgba(147,197,253,1)]"
        />

      </motion.div>

      {/* Cubo / núcleo tecnológico */}
      <motion.div
        className="absolute left-1/2 top-[190px]
        -translate-x-1/2
        w-[150px] h-[150px]"
        animate={{
          rotateY: [0, 8, -8, 0],
          rotateX: [0, -5, 5, 0],
          y: [0, -8, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          transformStyle: "preserve-3d",
          perspective: 1000,
        }}
      >

        {/* Cara frontal */}
        <div
          className="absolute inset-0
          rounded-[28px]
          border border-cyan-300/40
          bg-gradient-to-br from-blue-500/35 via-blue-900/70 to-slate-950
          shadow-[0_0_45px_rgba(34,211,238,0.25)]
          backdrop-blur-sm"
        >

          {/* Líneas internas */}
          <div className="absolute left-[20px] right-[20px] top-[25px] h-px bg-cyan-300/40" />
          <div className="absolute left-[20px] right-[40px] top-[45px] h-px bg-blue-300/30" />
          <div className="absolute left-[20px] right-[60px] top-[65px] h-px bg-cyan-300/20" />

          {/* Núcleo luminoso */}
          <motion.div
            className="absolute left-1/2 top-1/2
            -translate-x-1/2 -translate-y-1/2
            w-[55px] h-[55px]
            rounded-2xl
            bg-gradient-to-br from-cyan-300 via-blue-400 to-blue-700
            shadow-[0_0_35px_rgba(34,211,238,0.8)]"
            animate={{
              scale: [1, 1.08, 1],
              boxShadow: [
                "0 0 25px rgba(34,211,238,0.5)",
                "0 0 45px rgba(34,211,238,0.9)",
                "0 0 25px rgba(34,211,238,0.5)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >

            <div className="absolute inset-[10px] rounded-xl border border-white/50" />

            <div className="absolute left-1/2 top-1/2
              -translate-x-1/2 -translate-y-1/2
              w-3 h-3 rounded-full
              bg-white
              shadow-[0_0_15px_white]"
            />

          </motion.div>

          {/* Pequeños indicadores */}
          <div className="absolute bottom-[20px] left-[20px] flex gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(103,232,249,0.9)]" />
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            <span className="w-2 h-2 rounded-full bg-blue-500" />
          </div>

        </div>

        {/* Cara lateral */}
        <div
          className="absolute top-0 left-full
          w-[35px] h-full
          origin-left
          skew-y-[28deg]
          rounded-r-[20px]
          border border-blue-400/30
          bg-gradient-to-b from-blue-800/80 to-slate-950"
        />

        {/* Cara superior */}
        <div
          className="absolute left-0 top-[-25px]
          w-full h-[35px]
          origin-bottom
          skew-x-[28deg]
          rounded-t-[20px]
          border border-cyan-400/25
          bg-gradient-to-r from-cyan-500/20 to-blue-900/80"
        />

      </motion.div>

      {/* Tarjeta flotante izquierda */}
      <motion.div
        className="absolute left-[45px] top-[145px]
        w-[110px] h-[75px]
        rounded-2xl
        border border-blue-400/20
        bg-slate-950/80
        backdrop-blur-md
        shadow-[0_0_30px_rgba(37,99,235,0.15)]
        p-3"
        animate={{
          y: [0, -12, 0],
          rotate: [-3, 0, -3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >

        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(103,232,249,0.9)]" />
          <span className="text-[9px] text-blue-200">SYSTEM</span>
        </div>

        <div className="h-1.5 w-[65px] rounded-full bg-blue-500/40 mb-2" />
        <div className="h-1.5 w-[45px] rounded-full bg-cyan-400/30" />

      </motion.div>

      {/* Tarjeta flotante derecha */}
      <motion.div
        className="absolute right-[35px] top-[235px]
        w-[120px] h-[80px]
        rounded-2xl
        border border-cyan-400/20
        bg-slate-950/80
        backdrop-blur-md
        shadow-[0_0_35px_rgba(34,211,238,0.12)]
        p-3"
        animate={{
          y: [0, 14, 0],
          rotate: [3, 0, 3],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
      >

        <div className="flex justify-between items-center mb-3">
          <span className="text-[9px] text-cyan-200">DATA</span>
          <span className="text-[9px] text-green-300">●</span>
        </div>

        <div className="flex items-end gap-1 h-[28px]">
          <div className="w-2 h-[10px] bg-blue-500/50 rounded-sm" />
          <div className="w-2 h-[18px] bg-blue-400/60 rounded-sm" />
          <div className="w-2 h-[14px] bg-cyan-400/70 rounded-sm" />
          <div className="w-2 h-[25px] bg-cyan-300/80 rounded-sm" />
          <div className="w-2 h-[20px] bg-blue-300/70 rounded-sm" />
        </div>

      </motion.div>

      {/* Pequeño chip inferior */}
      <motion.div
        className="absolute left-[80px] bottom-[95px]
        px-4 py-2 rounded-full
        border border-blue-400/20
        bg-slate-950/70
        backdrop-blur-md"
        animate={{
          y: [0, -7, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >

        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.9)]" />
          <span className="text-[9px] tracking-[0.2em] text-blue-200">
            CREATIVE CODE
          </span>
        </div>

      </motion.div>

      {/* Chip superior derecho */}
      <motion.div
        className="absolute right-[100px] top-[85px]
        px-3 py-1.5 rounded-lg
        border border-cyan-400/20
        bg-blue-950/60
        backdrop-blur-md"
        animate={{
          y: [0, -8, 0],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      >

        <span className="text-[8px] text-cyan-200 tracking-widest">
          NEXT.JS
        </span>

      </motion.div>

    </div>
  )
}

function ProjectPreview({ tipo }: { tipo: string }) {
  if (tipo === "hablapic") {
    return (
      <div className="relative h-full w-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center gap-3">
        <div className="w-16 h-32 bg-white rounded-xl shadow-lg border border-slate-300 p-2">
          <div className="w-full h-3 bg-blue-100 rounded mb-2" />
          <div className="grid grid-cols-2 gap-1">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-md bg-slate-100 border"
              />
            ))}
          </div>
        </div>

        <div className="w-20 h-40 bg-white rounded-xl shadow-xl border border-slate-300 p-2">
          <div className="w-full h-4 bg-blue-100 rounded mb-3" />
          <div className="grid grid-cols-2 gap-1.5">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-md bg-blue-50 border border-blue-100"
              />
            ))}
          </div>
        </div>

        <div className="w-16 h-32 bg-white rounded-xl shadow-lg border border-slate-300 p-2">
          <div className="w-full h-3 bg-pink-100 rounded mb-2" />
          <div className="grid grid-cols-2 gap-1">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-md bg-pink-50 border"
              />
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (tipo === "efe") {
    return (
      <div className="h-full w-full bg-[#111827] p-5">
        <div className="flex items-center justify-between mb-5">
          <div className="h-3 w-24 bg-slate-600 rounded" />
          <div className="h-5 w-14 bg-cyan-400/50 rounded" />
        </div>

        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="h-14 bg-slate-800 rounded-lg border border-slate-700" />
          <div className="h-14 bg-slate-800 rounded-lg border border-slate-700" />
          <div className="h-14 bg-slate-800 rounded-lg border border-slate-700" />
        </div>

        <div className="h-28 bg-slate-800 rounded-lg border border-slate-700 relative overflow-hidden">
          <div className="absolute left-4 right-4 bottom-5 h-px bg-slate-700" />
          <div className="absolute left-5 bottom-6 w-12 h-12 border-t-2 border-cyan-400 rotate-[-35deg]" />
          <div className="absolute left-16 bottom-10 w-12 h-16 border-t-2 border-cyan-400 rotate-[35deg]" />
          <div className="absolute left-28 bottom-16 w-12 h-14 border-t-2 border-cyan-400 rotate-[-25deg]" />
        </div>
      </div>
    )
  }

  return (
    <div className="h-full w-full bg-gradient-to-br from-slate-100 to-white p-5">
      <div className="flex justify-between mb-5">
        <div className="h-3 w-28 bg-slate-300 rounded" />
        <div className="h-3 w-12 bg-slate-200 rounded" />
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="h-20 bg-white border rounded-lg shadow-sm" />
        <div className="h-20 bg-white border rounded-lg shadow-sm" />
        <div className="h-20 bg-white border rounded-lg shadow-sm" />
      </div>

      <div className="mt-4 h-12 bg-slate-100 rounded-lg" />
    </div>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-800">

      {/* ================= HEADER ================= */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

          <Link href="/" className="flex items-center gap-1">
            <span className="text-2xl font-bold text-white">A</span>
            <span className="text-2xl font-bold text-blue-400">G</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-[12px] font-medium text-slate-300">
            <a
              href="#inicio"
              className="hover:text-white transition"
            >
              Inicio
            </a>

            <a
              href="#sobre-mi"
              className="hover:text-white transition"
            >
              Sobre mí
            </a>

            <a
              href="#proyectos"
              className="hover:text-white transition"
            >
              Proyectos
            </a>

            <a
              href="#habilidades"
              className="hover:text-white transition"
            >
              Habilidades
            </a>

            <a
              href="#contacto"
              className="hover:text-white transition"
            >
              Contacto
            </a>
          </nav>

          <a
            href="#contacto"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2 rounded-full border border-blue-500/60 text-white text-xs font-semibold hover:bg-blue-500/10 transition shadow-[0_0_15px_rgba(59,130,246,0.15)]"
          >
            Hablemos
          </a>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section
        id="inicio"
        className="relative min-h-[650px] overflow-hidden bg-[#050b14] text-white"
      >
        {/* Glow */}
        <div className="absolute top-[-200px] right-[-100px] w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-16 min-h-[650px] grid grid-cols-1 lg:grid-cols-2 items-center gap-8">

          {/* Texto */}
          <div className="relative z-10 max-w-xl">

            <p className="text-lg sm:text-xl text-white mb-1">
              Hola, soy
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-[64px] font-bold tracking-tight leading-[1.05]">
              Andrés{" "}
              <span className="text-blue-500">
                Gutiérrez
              </span>
            </h1>

            <p className="mt-5 text-sm sm:text-base text-slate-400 max-w-lg leading-relaxed">
              Desarrollador de software apasionado por crear
              soluciones útiles, limpias y con propósito.
            </p>

            <div className="mt-7">
              <a
                href="#proyectos"
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-full text-sm font-semibold transition shadow-lg shadow-blue-600/25"
              >
                Ver mis proyectos
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="flex items-center gap-5 mt-8">

              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-white hover:text-blue-400 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.15c-3.2.7-3.88-1.54-3.88-1.54-.53-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.68.41.35.78 1.04.78 2.1v3.11c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-white hover:text-blue-400 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8h4V23h-4V8Zm6.5 0h3.83v2.05h.05c.53-1.01 1.83-2.08 3.77-2.08 4.03 0 4.77 2.65 4.77 6.1V23h-4v-7.9c0-1.88-.03-4.3-2.62-4.3-2.62 0-3.02 2.05-3.02 4.16V23H7V8Z" />
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:andresgutierrez.dev@gmail.com"
                aria-label="Correo electrónico"
                className="text-white hover:text-blue-400 transition"
              >
                <Mail className="w-5 h-5" />
              </a>

            </div>
          </div>

          {/* Gráfico */}
          <div className="relative z-10">
            <HeroGraphic />
          </div>
        </div>
      </section>

      {/* ================= SOBRE MI ================= */}
      <section
        id="sobre-mi"
        className="py-20 lg:py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div>
              <div className="flex items-center gap-2 text-blue-500 text-xs font-bold mb-3">
                <Code2 className="w-4 h-4" />
                Sobre mí
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                Desarrollo soluciones
                <br />
                pensadas para personas
              </h2>

              <p className="mt-5 text-sm text-slate-500 leading-7 max-w-xl">
                Soy desarrollador colombiano con experiencia en la
                creación de aplicaciones web y móviles. Me interesa
                transformar ideas en productos digitales claros,
                funcionales y fáciles de utilizar.
              </p>

              <p className="mt-3 text-sm text-slate-500 leading-7 max-w-xl">
                Me enfoco especialmente en crear herramientas que
                resuelvan problemas reales y que tengan un propósito
                más allá de simplemente funcionar.
              </p>

              <a
                href="#contacto"
                className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-full border border-slate-300 text-xs font-semibold text-slate-700 hover:border-blue-500 hover:text-blue-600 transition"
              >
                Conoce más sobre mí
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Tarjetas */}
            <div className="grid grid-cols-2 gap-4">

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                  <Smartphone className="w-5 h-5 text-blue-500" />
                </div>

                <h3 className="font-bold text-slate-800 text-sm">
                  Aplicaciones móviles
                </h3>

                <p className="text-xs text-slate-500 leading-5 mt-2">
                  Desarrollo de aplicaciones para Android y iOS
                  utilizando React Native y Expo.
                </p>
              </div>

              <div className="rounded-2xl bg-[#07101d] p-6 shadow-lg">
                <div className="w-11 h-11 rounded-xl bg-cyan-400/10 flex items-center justify-center mb-5">
                  <Globe className="w-5 h-5 text-cyan-300" />
                </div>

                <h3 className="font-bold text-white text-sm">
                  Plataformas web
                </h3>

                <p className="text-xs text-slate-400 leading-5 mt-2">
                  Sistemas modernos, rápidos y escalables para
                  resolver necesidades reales.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6">
                <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-5">
                  <Database className="w-5 h-5 text-blue-500" />
                </div>

                <h3 className="font-bold text-slate-800 text-sm">
                  Bases de datos
                </h3>

                <p className="text-xs text-slate-500 leading-5 mt-2">
                  Estructuras organizadas y soluciones orientadas
                  al crecimiento.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6">
                <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-5">
                  <Server className="w-5 h-5 text-blue-500" />
                </div>

                <h3 className="font-bold text-slate-800 text-sm">
                  Soluciones completas
                </h3>

                <p className="text-xs text-slate-500 leading-5 mt-2">
                  Desde la interfaz hasta la lógica y los servicios
                  necesarios.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================= PROYECTOS ================= */}
      <section
        id="proyectos"
        className="py-20 lg:py-24 bg-slate-50 border-y border-slate-100"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10">

            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-500">
                Mis trabajos
              </span>

              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-2">
                Proyectos destacados
              </h2>
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-blue-600 transition"
            >
              Ver todos los proyectos
              <ArrowUpRight className="w-4 h-4" />
            </a>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {proyectos.map((proyecto) => (
              <article
                key={proyecto.nombre}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >

                <div className="h-[210px] overflow-hidden">
                  <ProjectPreview tipo={proyecto.tipo} />
                </div>

                <div className="p-5">

                  <div className="flex items-start justify-between gap-4">

                    <div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition">
                        {proyecto.nombre}
                      </h3>

                      <p className="text-xs text-slate-500 mt-2 leading-5">
                        {proyecto.descripcion}
                      </p>
                    </div>

                    <Link
                      href={proyecto.href}
                      className="flex-shrink-0 w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>

                  </div>

                  <div className="flex flex-wrap gap-2 mt-5">
                    {proyecto.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-[10px] font-semibold text-slate-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </article>
            ))}

          </div>
        </div>
      </section>

              {/* Automatización de procesos */}
        <section
          id="automatizaciones"
          className="relative overflow-hidden bg-slate-950 py-24"
        >

          {/* Resplandor de fondo */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2
            w-[600px] h-[300px]
            rounded-full
            bg-blue-600/10
            blur-[120px]"
          />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

            {/* Encabezado */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mx-auto max-w-3xl text-center"
            >

              <div className="mb-5 inline-flex items-center gap-2
                rounded-full
                border border-blue-400/20
                bg-blue-500/10
                px-4 py-2"
              >
                <Workflow className="h-4 w-4 text-cyan-300" />

                <span className="text-sm font-medium text-blue-200">
                  Automatización inteligente
                </span>
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Automatización de{" "}
                <span className="text-blue-400">
                  procesos
                </span>
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-400">
                Diseño soluciones que conectan aplicaciones, datos e
                inteligencia artificial para convertir procesos manuales
                en sistemas más rápidos y eficientes.
              </p>

            </motion.div>

            {/* Tarjetas */}
            <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">

              {automatizaciones.map((item, index) => {
                const Icono = item.icono

                return (
                  <motion.div
                    key={item.titulo}
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.12,
                    }}
                    whileHover={{
                      y: -8,
                    }}
                    className="group relative rounded-3xl
                      border border-white/10
                      bg-white/[0.03]
                      p-7
                      backdrop-blur-sm
                      transition-all duration-300
                      hover:border-blue-400/30
                      hover:bg-white/[0.06]
                      hover:shadow-[0_20px_60px_rgba(37,99,235,0.12)]"
                  >

                    {/* Brillo */}
                    <div
                      className="absolute inset-0 rounded-3xl
                      bg-gradient-to-br
                      from-blue-500/[0.08]
                      via-transparent
                      to-cyan-400/[0.05]
                      opacity-0
                      transition-opacity duration-300
                      group-hover:opacity-100"
                    />

                    <div className="relative">

                      {/* Icono */}
                      <div
                        className="flex h-12 w-12 items-center justify-center
                        rounded-2xl
                        border border-blue-400/20
                        bg-blue-500/10
                        transition-all duration-300
                        group-hover:border-cyan-300/40
                        group-hover:bg-blue-500/20"
                      >
                        <Icono className="h-6 w-6 text-cyan-300" />
                      </div>

                      {/* Título */}
                      <h3 className="mt-6 text-lg font-semibold text-white">
                        {item.titulo}
                      </h3>

                      {/* Descripción */}
                      <p className="mt-3 text-sm leading-6 text-slate-400">
                        {item.descripcion}
                      </p>

                    </div>

                  </motion.div>
                )
              })}

            </div>

            {/* Tecnologías de automatización */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mx-auto mt-14 max-w-5xl"
            >

              <div className="rounded-3xl
                border border-blue-400/10
                bg-gradient-to-r
                from-blue-500/[0.08]
                via-white/[0.03]
                to-cyan-400/[0.06]
                px-6 py-8"
              >

                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

                  <div>
                    <p className="text-sm font-medium text-white">
                      Tecnologías
                    </p>

                    <p className="mt-1 text-sm text-slate-400">
                      Herramientas para construir automatizaciones a medida.
                    </p>
                  </div>

                  <div className="flex flex-wrap justify-center gap-3">

                    <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
                      n8n
                    </span>

                    <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
                      APIs
                    </span>

                    <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
                      IA
                    </span>

                    <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
                      Next.js
                    </span>

                    <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
                      TypeScript
                    </span>

                  </div>

                </div>

              </div>

            </motion.div>

            {/* EFE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mx-auto mt-12 max-w-5xl"
            >

              <div className="relative overflow-hidden rounded-3xl
                border border-blue-400/20
                bg-gradient-to-br
                from-blue-950/80
                via-slate-900
                to-slate-950
                p-8 md:p-10"
              >

                {/* Decoración */}
                <div className="absolute -right-20 -top-20
                  h-56 w-56 rounded-full
                  bg-blue-500/10
                  blur-3xl"
                />

                <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

                  <div className="max-w-2xl">

                    <div className="mb-4 inline-flex items-center gap-2">

                      <div className="flex h-10 w-10 items-center justify-center
                        rounded-xl
                        bg-blue-500/15
                        border border-blue-400/20"
                      >
                        <Code2 className="h-5 w-5 text-cyan-300" />
                      </div>

                      <span className="text-sm font-medium text-blue-300">
                        Proyecto en desarrollo
                      </span>

                    </div>

                    <h3 className="text-2xl font-bold text-white sm:text-3xl">
                      EFE — Gestión y automatización empresarial
                    </h3>

                    <p className="mt-4 text-base leading-7 text-slate-400">
                      Plataforma orientada a la gestión de ventas,
                      cotizaciones, créditos, deudas, proveedores y
                      procesos logísticos, con posibilidades de integración
                      mediante automatización, APIs, mapas e inteligencia
                      artificial.
                    </p>

                  </div>

                  <div className="shrink-0">

                    <a
                      href="#contacto"
                      className="inline-flex items-center gap-2 rounded-full
                        bg-blue-500
                        px-6 py-3
                        text-sm font-semibold text-white
                        transition-all duration-300
                        hover:bg-blue-400
                        hover:shadow-[0_10px_35px_rgba(59,130,246,0.3)]"
                    >
                      Hablemos de tu proyecto

                      <ArrowRight className="h-4 w-4" />

                    </a>

                  </div>

                </div>

              </div>

            </motion.div>

          </div>

        </section>

      {/* ================= TECNOLOGIAS ================= */}
      <section
        id="habilidades"
        className="py-16 lg:py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="rounded-3xl bg-slate-50 border border-slate-100 px-6 py-10">

            <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10 items-center">

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-500">
                  Tecnologías
                </span>

                <h2 className="text-2xl font-bold text-slate-900 mt-2 leading-tight">
                  Tecnologías con
                  <br />
                  las que trabajo
                </h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-5">

                {tecnologias.map((tecnologia) => (
                  <div
                    key={tecnologia.nombre}
                    className="text-center group"
                  >
                    <div className="w-14 h-14 mx-auto rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center group-hover:-translate-y-1 group-hover:shadow-md transition">

                      <span className="font-bold text-slate-500 text-lg">
                        {tecnologia.icono}
                      </span>

                    </div>

                    <p className="text-[11px] font-bold text-slate-700 mt-3">
                      {tecnologia.nombre}
                    </p>

                    <p className="text-[9px] text-slate-400 mt-1">
                      {tecnologia.descripcion}
                    </p>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACTO ================= */}
      <section
        id="contacto"
        className="py-20 lg:py-24 bg-slate-50"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div>

              <span className="text-xs font-bold uppercase tracking-widest text-blue-500">
                Contacto
              </span>

              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-2">
                ¿Tienes un proyecto
                <br />
                en mente?
              </h2>

              <p className="text-sm text-slate-500 leading-7 mt-5 max-w-lg">
                Si tienes una idea, un proyecto o simplemente quieres
                hablar sobre una solución digital, puedes escribirme.
              </p>

              <div className="mt-7 space-y-4">

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-blue-500" />
                  </div>

                  <div>
                    <p className="text-[10px] text-slate-400">
                      Email
                    </p>
                    <p className="text-sm font-medium text-slate-700">
                      andresgutierrez.dev@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-blue-500" />
                  </div>

                  <div>
                    <p className="text-[10px] text-slate-400">
                      Ubicación
                    </p>
                    <p className="text-sm font-medium text-slate-700">
                      Colombia
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  </div>

                  <p className="text-xs font-bold text-emerald-600">
                    Disponible para proyectos
                  </p>
                </div>

              </div>
            </div>

            {/* Formulario */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm"
            >

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div>
                  <label className="text-xs font-semibold text-slate-700">
                    Nombre
                  </label>

                  <input
                    type="text"
                    placeholder="Tu nombre"
                    className="mt-2 w-full h-11 px-4 rounded-xl bg-slate-50 border border-slate-200 text-xs outline-none focus:border-blue-500 focus:bg-white transition"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="tu@email.com"
                    className="mt-2 w-full h-11 px-4 rounded-xl bg-slate-50 border border-slate-200 text-xs outline-none focus:border-blue-500 focus:bg-white transition"
                  />
                </div>

              </div>

              <div className="mt-4">
                <label className="text-xs font-semibold text-slate-700">
                  Mensaje
                </label>

                <textarea
                  rows={5}
                  placeholder="Cuéntame sobre tu proyecto..."
                  className="mt-2 w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs outline-none focus:border-blue-500 focus:bg-white transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-4 w-full h-11 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition shadow-lg shadow-blue-500/20"
              >
                Hablemos →
              </button>

            </form>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#050b14] text-slate-400">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-7">

          <div className="flex flex-col sm:flex-row items-center justify-between gap-5">

            <div className="flex items-center gap-3">
              <div className="text-lg font-bold">
                <span className="text-white">A</span>
                <span className="text-blue-400">G</span>
              </div>

              <p className="text-[10px] text-slate-500">
                © {new Date().getFullYear()} Andrés Gutiérrez.
                Todos los derechos reservados.
              </p>
            </div>

            <div className="flex items-center gap-6 text-[10px] font-medium">
              <a href="#inicio" className="hover:text-white transition">
                Inicio
              </a>

              <a href="#sobre-mi" className="hover:text-white transition">
                Sobre mí
              </a>

              <a href="#proyectos" className="hover:text-white transition">
                Proyectos
              </a>

              <a href="#habilidades" className="hover:text-white transition">
                Habilidades
              </a>

              <a href="#contacto" className="hover:text-white transition">
                Contacto
              </a>
            </div>

            <a
              href="#inicio"
              className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center hover:bg-slate-800 transition"
            >
              ↑
            </a>

          </div>
        </div>
      </footer>

    </main>
  )
}