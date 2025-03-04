'use client'

import { IconeBotao } from '@/components/icone-botao'
import { InputCampo, InputIcone, InputRaiz } from '@/components/input'
import { Copy, Link } from 'lucide-react'

interface InputLinkConviteProps {
  linkConvite: string
}

export function InputLinkConvite({ linkConvite }: InputLinkConviteProps) {
  function copiarLinkConvite() {
    navigator.clipboard.writeText(linkConvite)
    alert('Link copiado!')
  }

  return (
    <InputRaiz>
      <InputIcone>
        <Link className="size-5" />
      </InputIcone>

      <InputCampo readOnly defaultValue={linkConvite} />

      <IconeBotao className="-mr-2" onClick={copiarLinkConvite}>
        <Copy />
      </IconeBotao>
    </InputRaiz>
  )
}
