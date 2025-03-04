import { type ComponentProps, ReactNode } from 'react'

interface BotaoProps extends ComponentProps<'button'> {}

export function Botao(props: BotaoProps) {
  return (
    <button
      type="button"
      className="flex justify-between items-center px-5 h-12 bg-gray-500 text-blue font-semibold rounded-xl w-full cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900"
      {...props}
    />
  )
}
