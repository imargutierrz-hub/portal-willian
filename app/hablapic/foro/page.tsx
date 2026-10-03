import type { Metadata } from "next"

import HablaPicShell from "@/components/HablaPicShell"
import MuroTerminos from "@/components/foro/MuroTerminos"
import ForoLista from "@/components/foro/ForoLista"

export const metadata: Metadata = {
  title: "Foro de papás | HablaPic",
  description:
    "Preguntas, consejos y experiencias compartidas entre familias que usan comunicación con pictogramas.",
}

export default function ForoPage() {
  return (
    <HablaPicShell>
      <MuroTerminos>
        <ForoLista />
      </MuroTerminos>
    </HablaPicShell>
  )
}