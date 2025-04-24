import { useState } from "react";

export const Suscribete = () => {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append('access_key', '143f12d9-6167-43c7-be4a-12c65b82899e');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': "application/json",
        },
      });
      const data = await response.json();

      if (data.success) {
        setSuccessMessage("¡Gracias por suscribirte! Hemos recibido tu correo.");
        setErrorMessage(null);
        form.reset();
      } else {
        setErrorMessage("Hubo un error al enviar el formulario. Inténtalo de nuevo.");
        setSuccessMessage(null);
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setErrorMessage("Hubo un error al enviar el formulario. Inténtalo de nuevo.");
      setSuccessMessage(null);
    }
  };

  return (
    <article className="bg-dark-purple p-4 mx-6 mt-2 rounded-[30px] flex gap-4 text-soft-blue-green mb-6 items-center justify-center sm:mx-10 sm:p-8 sm:rounded-[50px] lg:mx-30 lg:rounded-[64px]">
      <img
        className="w-[40%] max-w-[250px] object-contain"
        src="images/ui/banners/banner_suscribete.webp"
        alt="Carta con logo de la empresa"
      />
      <div className="relative w-[60%] max-w-[450px]">
        <h2 className="text-2xl font-bold">¡Suscríbete!</h2>
        <p className="text-sm">
          Registra tu correo para recibir nuestras últimas ofertas y eventos
        </p>
        <form className="mt-2" onSubmit={handleSubmit}>
          <div className="flex gap-2 bg-soft-blue-green rounded-2xl py-1 px-2">
            <label className="bg-white rounded-xl w-full ">
              <span className="sr-only">Correo electrónico</span>
              <input
                className="outline-0 text-dark-purple px-2"
                type="email"
                name="email"
              />
            </label>
            <button type="submit" className="cursor-pointer" disabled={successMessage? true : false}>
              <img
                className="h-4 w-auto"
                src="images/ui/iconos/enviar.webp"
                alt="botón de enviar formulario"
              />
            </button>
          </div>
        </form>

        {successMessage && (
          <p className="absolute mt-2 text-soft-blue-green text-sm font-bold">{successMessage}</p>
        )}

        {errorMessage && (
          <p className="absolute mt-2 text-intense-rose text-sm font-bold">{errorMessage}</p>
        )}
      </div>
    </article>
  );
};
