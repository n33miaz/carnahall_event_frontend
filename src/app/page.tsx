import { ArrowRight, Copy } from 'lucide-react'
import { Botao } from "@/components/botao"
import { IconeBotao } from '@/components/icone-botao';
import { InputCampo, InputIcone, InputRaiz } from '@/components/input';
import { Mail } from 'lucide-react'

export default function Home() {
  return (
    <main>
      <Botao type='submit'>
        Enviar
        <ArrowRight/>
      </Botao>

      <IconeBotao>
        <Copy/>
      </IconeBotao>

      <div>
        <InputRaiz>
          <InputIcone>
            <Mail />
          </InputIcone>

            <InputCampo/>
        </InputRaiz>
      </div>
      
    </main>
  );
}
