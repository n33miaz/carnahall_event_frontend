import Image from 'next/image'

import medalha_1 from '../../assets/medal_1.svg'
import medalha_2 from '../../assets/medal_2.svg'
import medalha_3 from '../../assets/medal_3.svg'

export function Ranking() {
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de Indicações
      </h2>

      <div className="space-y-4">
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">1º</span> | Diego Fernandes
          </span>

          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1030
          </span>

          <Image
            src={medalha_1}
            alt="1º lugar - medalha de ouro"
            className="absolute top-0 right-8"
          />
        </div>

        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">2º</span> | Neemias Cormino
          </span>

          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            714
          </span>

          <Image
            src={medalha_2}
            alt="2º lugar - medalha de prata"
            className="absolute top-0 right-8"
          />
        </div>

        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">3º</span> | Alvares Soares
          </span>

          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            502
          </span>

          <Image
            src={medalha_3}
            alt="3º lugar - medalha de bronze"
            className="absolute top-0 right-8"
          />
        </div>
      </div>
    </div>
  )
}
