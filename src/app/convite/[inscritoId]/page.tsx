import { InputLinkConvite } from './input-link-convite'
import { Ranking } from './ranking'
import { Status } from './status'
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

interface ConvitePaginaProps {
  params: Promise<{
    inscritoId: string
  }>
}

export default async function ConvitePagina(props: ConvitePaginaProps) {
  let inscritoId: string;

  try {
     const params = await props.params;
     inscritoId = params.inscritoId;

    if (!inscritoId || typeof inscritoId !== 'string') { //valida o tipo do parametro
      notFound();
      return; // early return para evitar execução adicional
    }

    // adicionado um cast para string, já que validamos o tipo acima
  } catch (error) {    
      notFound(); // ou outra lógica de tratamento de erro, como exibir uma mensagem
      return null; // evita que o restante da página seja renderizado em caso de erro
  }

  const linkConvite = `http://localhost:3333/convites/${inscritoId}`

  return (
    <div className="min-h-dvh flex items-center justify-between gap-16 flex-col md:flex-row">
      <div className="flex flex-col gap-10 w-full max-w-[550px]">
        <div className="space-y-2">
          <h1 className="text-4xl font-semibold font-heading text-gray-100 leading-none mt-11.5 md:mt-0">
            Inscrição confirmada!
          </h1>
          <p className="text-gray-300 text-justify">
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
            <p className="text-gray-300 text-justify">
              Convide mais pessoas para o evento e concorra no ranking! É só
              compartilher o link abaixo e acompanhar as inscrições:
            </p>
          </div>

          <InputLinkConvite linkConvite={linkConvite} />

          <Status inscritoId={inscritoId} />
        </div>
      </div>

      <Suspense fallback={<p>Carregando ranking...</p>}>
        <Ranking />
      </Suspense>
    </div>
  )
}
