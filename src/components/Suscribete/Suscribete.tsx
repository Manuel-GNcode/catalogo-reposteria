import { FormSuscribete } from "./FormSuscribete";

export const Suscribete = () => {
  return (
    <article className="bg-dark-purple p-4 pb-8 mx-6 mt-2 rounded-[30px] flex flex-wrap gap-4 mb-6 items-center justify-center sm:mx-10 sm:rounded-[50px] lg:mx-30 lg:rounded-[64px] lg:gap-10">
      <img
        className="w-[150px] object-contain lg:w-[200px]"
        src="images/ui/banners/banner_suscribete.webp"
        alt="Carta con logo de la empresa"
      />
      <div className="relative max-w-[400px] min-w-[200px] text-soft-blue-green">
        <h2 className="text-2xl font-bold">¡Suscríbete!</h2>
        <p className="text-sm">
          Registra tu correo para recibir nuestras últimas ofertas y eventos
        </p>
        <FormSuscribete></FormSuscribete>
      </div>
    </article>
  );
};
