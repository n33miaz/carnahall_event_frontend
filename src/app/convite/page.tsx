import { InputLinkConvite } from './input-link-convite'
import { Ranking } from './ranking'
import { Status } from './status'

export default function ConvitePagina() {
  const linkConvite = 'http://localhost:3000/convite/6546413232'

  return (
    <div className="min-h-dvh flex items-center justify-between gap-16 flex-col md:flex-row">
      <div className="flex flex-col gap-10 w-full max-w-[550px]">
        <div className="space-y-2">
          <h1 className="text-4xl font-semibold font-heading text-gray-100 leading-none mt-11.5 md:mt-0">
            Inscrição confirmada!
          </h1>
          <p className="text-gray-300">
            Fique por dentro de todas as atualizações em&nbsp;
            <span className="text-purple">
              <a
                href="https://www.instagram.com/lele_mias/"
                target="_blank"
                rel="noreferrer"
              >
                @lele_mias
              </a>
            </span>
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
              Indique e participe
            </h2>
            <p className="text-gray-300">
              Convide mais pessoas para o evento e concorra no ranking! É só
              compartilher o link abaixo e acompanhar as inscrições:
            </p>
          </div>

          <InputLinkConvite linkConvite={linkConvite} />

          <Status />
        </div>
      </div>

      <Ranking />
    </div>
  )
}
