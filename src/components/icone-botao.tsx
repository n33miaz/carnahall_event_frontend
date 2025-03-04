import { type ComponentProps, ReactNode } from 'react'

interface IconeBotaoProps extends ComponentProps<'button'> {}

export function IconeBotao(props: IconeBotaoProps) {
  return (
    <button
      type="button"
      className="p-1.5 bg-gray-500 text-blue rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900"
      {...props}
    />
  )
}
