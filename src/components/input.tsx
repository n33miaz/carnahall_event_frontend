import { type ComponentProps, ReactNode } from 'react'

interface InputProps extends ComponentProps<'input'> {
  error?: boolean
}

interface InputRaizProps extends ComponentProps<'div'> {
  error?: boolean
}

export function InputRaiz({ error = false, ...props }: InputRaizProps) {
  return (
    <div
      data-error={error}
      className="group bg-gray-800 h-12 border border-gray-600 rounded-xl px-4 flex items-center gap-2 focus-within:border-gray-100 data-[error=true]:border-danger"
      {...props}
    />
  )
}

interface InputIconeProps extends ComponentProps<'span'> {}

export function InputIcone(props: InputIconeProps) {
  return (
    <span
      className="text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger"
      {...props}
    />
  )
}

interface InputCampoProps extends ComponentProps<'input'> {}

export function InputCampo(props: InputCampoProps) {
  return <input className="flex-1 outline-0 placeholder-gray-400" {...props} />
}
