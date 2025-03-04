import { Radio } from 'lucide-react'
import Image from 'next/image'

import logo from '../../assets/logo.svg'
import { FormInscricao } from './form-inscricao'

export default function Home() {
  return (
    <div className="min-h-dvh flex flex-col justify-center gap-16">
      <div className="flex flex-col gap-8 w-full max-w-[405px] items-center md:items-start">
        <Image src={logo} alt="carnahall" width={108.5} height={30} />

        <h1 className="text-4xl text-center md:text-left leading-none font-heading font-medium flex flex-col md:text-7xl">
          <span className="text-blue">Carnahall</span>
          Edição 2025
        </h1>
      </div>
      <div className="flex gap-5 items-stretch flex-col md:flex-row"> {/* fix responsive */}
        <div className="flex-1 bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-heading font-semibold text-gray-200 text-xl">
              Sobre o evento
            </h2>
            <span className="text-purple font-semibold text-xs flex items-center gap-2">
              <Radio className="size-5" />
              AO VIVO
            </span>
          </div>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            Uma folia feita por pessoas apaixonadas em reggae, não fique de fora
            e venha curtir em frente a todos os nossos sistemas de som.
            <br />
            <br />
            Dias 06 a 09 de março | Das 17h ás 05h | Gratuito
          </p>
        </div>

        <FormInscricao />
      </div>
    </div>
  )
}
