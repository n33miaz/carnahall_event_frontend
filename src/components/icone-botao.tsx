import { type ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface IconeBotaoProps extends ComponentProps<'button'> {}

export function IconeBotao({ className, ...props }: IconeBotaoProps) {
  return (
    <button
      type="button"
      className={twMerge(
        'p-1.5 bg-gray-500 text-blue rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900',
        className
      )}
      {...props}
    />
  )
}
