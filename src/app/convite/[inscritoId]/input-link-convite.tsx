'use client'

import { IconeBotao } from '@/components/icone-botao'
import { InputCampo, InputIcone, InputRaiz } from '@/components/input'
import { Copy, Link } from 'lucide-react'
import { useReward } from 'react-rewards'

interface InputLinkConviteProps {
  linkConvite: string
}

export function InputLinkConvite({ linkConvite }: InputLinkConviteProps) {
  // configuração do reward
  const { reward } = useReward('rewardId', 'confetti')

  function copiarLinkConvite() {
    navigator.clipboard.writeText(linkConvite)
    // dispara a animação de confete após copiar o link
    reward()
  }

  return (
    <InputRaiz>
      <InputIcone>
        <Link className="size-5" />
      </InputIcone>

      <InputCampo readOnly defaultValue={linkConvite} />

      <IconeBotao className="-mr-2" onClick={copiarLinkConvite}>
        <Copy />

        {/* elemento que será a origem da animação de confete */}
        <span
          id="rewardId"
          style={{
            width: '0',
            height: '0',
            position: 'absolute',
            zIndex: 1,
          }}
        />
      </IconeBotao>
    </InputRaiz>
  )
}
