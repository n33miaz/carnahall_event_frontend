'use client'

import { Botao } from '@/components/botao'
import { InputCampo, InputIcone, InputRaiz } from '@/components/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight, Mail, User } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useReward } from 'react-rewards'
import { z } from 'zod'

// configuração da validação do zod
const inscricaoSchema = z.object({
  nome: z.string().min(2, 'Digite seu nome completo'),
  email: z.string().email('Digite um email válido'),
})

type InscricaoSchema = z.infer<typeof inscricaoSchema>

export function FormInscricao() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InscricaoSchema>({
    resolver: zodResolver(inscricaoSchema),
  })

  // configuração do reward
  const { reward } = useReward('rewardId', 'confetti')

  function naInscricao(data: InscricaoSchema) {
    console.log(data)

    reward()
  }

  return (
    <form
      onSubmit={handleSubmit(naInscricao)}
      className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]"
    >
      <h2 className="font-heading font-semibold text-gray-200 text-xl">
        Inscrição
      </h2>
      <div className="space-y-3">
        <div className="space-y-2">
          <InputRaiz>
            <InputIcone>
              <User />
            </InputIcone>
            <InputCampo
              type="text"
              placeholder="Nome completo"
              {...register('nome')}
            />
          </InputRaiz>

          {errors.nome && (
            <p className="text-danger text-xs font-semibold">
              {errors.nome.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <InputRaiz>
            <InputIcone>
              <Mail />
            </InputIcone>
            <InputCampo
              type="email"
              placeholder="E-mail"
              {...register('email')}
            />
          </InputRaiz>

          {errors.email && (
            <p className="text-danger text-xs font-semibold">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <Botao type="submit">
        Confirmar
        {/* elemento que será a origem da animação de confete (reward) */}
        <span
          id="rewardId"
          style={{ width: '0', height: '0', position: 'static', zIndex: 1 }}
        />
        <ArrowRight className="size-6" />
      </Botao>
    </form>
  )
}
