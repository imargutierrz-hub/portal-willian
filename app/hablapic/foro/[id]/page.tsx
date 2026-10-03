import type { Metadata } from "next"

import HablaPicShell from "@/components/HablaPicShell"
import MuroTerminos from "@/components/foro/MuroTerminos"
import ForoHilo from "@/components/foro/ForoHilo"

export const metadata: Metadata = {
  title: "Publicación | Foro HablaPic",
}

export default function HiloPage() {
  return (
    <HablaPicShell>
      <MuroTerminos>
        <ForoHilo />
      </MuroTerminos>
    </HablaPicShell>
  )
}