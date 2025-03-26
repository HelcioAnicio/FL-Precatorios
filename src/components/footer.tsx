import { FaLocationDot } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

export const Footer = () => {
  return (
    <footer
      className="m-auto flex w-full max-w-5xl flex-col gap-4 px-1 py-20 text-center"
      id="contact"
    >
      <p className="text-xs font-normal text-[#CF9A2A]">Fale conosco</p>
      <h2 className="text-3xl font-bold break-words">Entre em contato</h2>
      <p className="m-auto max-w-xl text-sm font-normal">
        Estamos à disposição para esclarecer todas as suas dúvidas. Entre em
        contato conosco e teremos prazer em ajudar!
      </p>
      <a
        href="https://api.whatsapp.com/send?phone=5531997948742"
        className="m-auto my-10 flex w-full max-w-80 items-center justify-center"
      >
        <button className="w-4/6 rounded-lg bg-white py-1 text-black">
          (31) 99794-8742
        </button>
        <IoLogoWhatsapp className="-ml-3 size-8 rounded-md bg-[#CF9A2A] px-2 transition-all duration-300 hover:bg-yellow-500" />
      </a>
      <p className="m-auto flex w-max gap-1 text-sm text-[#CF9A2A]">
        <FaLocationDot />
        Endereço
      </p>
      <a
        href="https://g.co/kgs/J7TjJma"
        className="decoration-gray-400 underline-offset-2 transition-all duration-300 hover:underline"
      >
        <address className="font-thin">
          Rua Dom Oscar Romero, 18 - Sobreloja - Nova Gamelei - Belo Horizonte -
          MG - 30510-080
        </address>
      </a>
      <p className="text-sm font-bold">Francisco Galvão Lessa - Advogado</p>

      <div>
        <a
          href="https://wa.link/wf54gf"
          className="cursor-pointer text-xs font-thin decoration-gray-400 transition-all duration-300 hover:underline"
        >
          Desenvolvido por Helcio Anicio
        </a>
      </div>
    </footer>
  );
};
