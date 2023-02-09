import { FaWhatsapp } from "react-icons/fa";

const Budget = () => {
  return (
    <div id="sobre" className="flex flex-col items-center mt-16 mb-8">
      <p className="text-[36px] text-gray-800 mb-6">Maq Pedro- Manaus</p>
      <div className="flex flex-row gap-10 max-md:gap-5 max-md:flex-col">
        <div className="max-md:p-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!4v1675815922827!6m8!1m7!1sZKKZC-zZyrpVeBhGwzcnTw!2m2!1d-3.089807102867494!2d-59.98286063728479!3f354.0198610908134!4f1.5384422799603783!5f0.7820865974627469"
            width="600px"
            className="max-md:w-[100%]"
            height="350"
            loading="lazy"
          ></iframe>
        </div>
        <div className="flex flex-col max-md:px-14">
          <h1>Rua Santo Antônio N477- coroado</h1>
          <p>CEP: 69080-271</p>
          <p>Telefone: (92)98451-2933</p>

          <a
            href="https://api.whatsapp.com/send?phone=5592984512933&text="
            target="_blank"
          >
            <button className="bg-[#27e41b] rounded p-3 text-lg font-bold flex flex-row gap-2 mt-5 max-md:w-full max-md:justify-center">
              <FaWhatsapp size={30} /> Faça um orçamento
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Budget;
