import { Card } from "./card";
import background from "/background.png";
import { AiOutlineDollar } from "react-icons/ai";
import { PiClockCountdownBold } from "react-icons/pi";
import { FaCheck, FaRegStar } from "react-icons/fa";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { useState } from "react";

export const Main = () => {
  const [colorActived, setColorActived] = useState<number | null>(null);
  const diplomas = [
    "Precatórios alimentares",
    "Pensões e aposentadorias",
    "Indenização por morte ou invalidez",
    "Indenização de salários",
    "Desapropriação",
    "Danos morais, materiais e fiscais (compensação de dividas tributárias)",
  ];
  return (
    <main className="h-full w-full">
      <section
        className="m-auto h-dvh max-w-5xl bg-cover bg-center bg-no-repeat px-4 py-40"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="max-w-sm space-y-15">
          <p className="text-sm font-bold text-[#CF9A2A]">Precatório</p>
          <h1 className="text-2xl font-bold">
            Venda seu Precatório com Agilidade e Segurança
          </h1>
          <p className="text-sm font-normal">
            <span className="font-light">
              Receba seu dinheiro sem burocracia!
            </span>{" "}
            <br />
            Cansado da longa espera? Antecipe seu precatório com rapidez,
            segurança e as melhores condições do mercado, sem sair de casa.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=5531997948742"
            aria-label="Entrar em contato pelo WhatsApp"
          >
            <button className="cursor-pointer rounded-md bg-[#CF9A2A] px-5 py-2 text-xs font-semibold transition-all duration-300 hover:bg-white hover:text-[#CF9A2A] active:bg-orange-200">
              Entrar em contato
            </button>
          </a>
        </div>
      </section>
      <section className="m-auto max-w-5xl px-4 py-20" id="precatórios">
        <p className="mb-7 text-sm font-bold text-[#CF9A2A]">
          Precatórios que compramos
        </p>
        <div className="flex flex-wrap">
          <h2 className="max-w-52 text-2xl font-semibold lg:max-w-72">
            Quais precatórios compramos?
          </h2>
          <div className="m-auto flex max-w-lg flex-wrap justify-center gap-5 py-10 sm:py-0">
            {diplomas.map((diploma, index) => (
              <p
                key={index}
                className={`flex items-center gap-2 rounded-3xl border border-[#CF9A2A] px-2 py-2 text-center text-sm font-normal transition-all duration-500 hover:bg-[#CF9A2A] ${colorActived === index ? "bg-[#CF9A2A]" : ""}`}
                onClick={() =>
                  setColorActived(colorActived === index ? null : index)
                }
              >
                <FaCheck />
                {diploma}
              </p>
            ))}
          </div>
        </div>
        <p className="text-sm font-normal md:-mt-20 md:max-w-56">
          Adquirimos precatórios federais a partir de R$ 100.000,00, oferecendo
          a assessoria mais adequada ao seu caso, tornando o processo mais
          rápido e eficiente.
        </p>
      </section>

      <section className="bg-white" id="benefits">
        <div className="m-auto max-w-5xl space-y-8 px-4 py-20 text-black">
          <div className="space-y-1">
            <p className="text-sm font-bold text-[#CF9A2A]">
              Vantagens de vender conosco
            </p>
            <h2 className="text-2xl font-bold">
              Por que vender seu precatório conosco?
            </h2>
          </div>
          <div className="flex w-full flex-wrap items-center justify-evenly gap-x-4 gap-y-8 px-16 py-10 lg:px-0">
            <Card
              icon={<IoShieldCheckmarkOutline />}
              number={1}
              heading={"Processo rápido e transparente"}
            />
            <Card
              icon={<AiOutlineDollar />}
              number={2}
              heading={"Melhores condições de pagamento"}
            />
            <Card
              icon={<PiClockCountdownBold />}
              number={3}
              heading={"Evite a longa espera na fila do governo"}
            />
            <Card
              icon={<FaRegStar />}
              number={4}
              heading={"Acompanhamento Completo e Suporte Jurídico"}
            />
          </div>
        </div>
      </section>
    </main>
  );
};
