import { IoLogoWhatsapp } from "react-icons/io";

export default function PrivacyPolicy() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 pb-16">
      <h1 className="mb-4 text-3xl font-bold">Política de Privacidade</h1>
      <p className="mb-4">
        A sua privacidade é importante para nós. É política da Unipromotora
        respeitar a sua privacidade em relação a qualquer informação que
        possamos coletar no site unipromotora.com.br.
      </p>

      <h2 className="mt-6 mb-2 text-xl font-semibold">
        1. Informações que coletamos
      </h2>
      <p className="mb-4">
        Coletamos informações pessoais e de navegação com o objetivo de oferecer
        uma melhor experiência.
      </p>

      <h2 className="mt-6 mb-2 text-xl font-semibold">
        2. Uso das Informações
      </h2>
      <p className="mb-4">
        Utilizamos os dados para comunicação, melhorias no site e exibição de
        anúncios personalizados.
      </p>

      <h2 className="mt-6 mb-2 text-xl font-semibold">3. Cookies</h2>
      <p className="mb-4">
        Cookies são usados para armazenar informações de navegação. Você pode
        desativá-los no seu navegador.
      </p>

      <h2 className="mt-6 mb-2 text-xl font-semibold">
        4. Direitos do Usuário
      </h2>
      <p className="mb-4">
        Você pode solicitar acesso, correção ou exclusão dos seus dados
        pessoais.
      </p>

      <h2 className="mt-6 mb-2 text-xl font-semibold">5. Contato</h2>
      <p className="flex items-center">
        Em caso de dúvidas, entre em contato:{" "}
        <a
          href="https://wa.me/5531971426893"
          className="my-10 flex w-full max-w-80 cursor-pointer items-center justify-center"
        >
          <button className="w-4/6 cursor-pointer rounded-lg bg-white py-1 text-black">
            (31) 97142-6893
          </button>
          <IoLogoWhatsapp className="-ml-3 size-8 rounded-md bg-[#CF9A2A] px-2 transition-all duration-300 hover:bg-yellow-500" />
        </a>
      </p>
    </div>
  );
}
