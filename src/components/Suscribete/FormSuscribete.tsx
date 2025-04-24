import { Message } from "./Message";
import { useState } from "react";

export const FormSuscribete = () => {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    //válidación del correo
    if (
      !formData.get("email") ||
      !/\S+@\S+\.\S+/.test(formData.get("email") as string)
    ) {
      setErrorMessage("Por favor, ingresa un correo válido.");
      return;
    }

    formData.append("access_key", import.meta.env.VITE_ACCESS_KEY || "");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      const data = await response.json();

      if (data.success) {
        setSuccessMessage(
          "¡Gracias por suscribirte! Hemos recibido tu correo."
        );
        setErrorMessage(null);
        form.reset();
        setTimeout(() => setSuccessMessage(null), 5000); //Restablece el formulario
      } else {
        if (data.message) {
          setErrorMessage(data.message); //Mensaje del servidor
        } else {
          setErrorMessage(
            "Hubo un error al enviar el formulario. Inténtalo de nuevo."
          );
          setSuccessMessage(null);
        }
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setErrorMessage(
        "Hubo un error al enviar el formulario. Inténtalo de nuevo."
      );
      setSuccessMessage(null);
    }

    setIsSubmitting(false);
  };

  return (
    <>
      <form className="mt-2" onSubmit={handleSubmit}>
        <div className="flex gap-2 bg-soft-blue-green rounded-2xl py-1 px-2">
          <label className="bg-white rounded-xl w-full ">
            <span className="sr-only">Correo electrónico</span>
            <input
              className="outline-0 text-dark-purple px-2"
              type="email"
              name="email"
              required
              aria-label="Correo electrónico"
            />
          </label>
          <button
            aria-label="Enviar formulario"
            type="submit"
            className="cursor-pointer"
            disabled={isSubmitting || successMessage ? true : false}
          >
            {isSubmitting ? (
              <div className="loader"></div>
            ) : (
              <img
                className="h-4 w-auto"
                src="images/ui/iconos/enviar.webp"
                alt="botón de enviar formulario"
              />
            )}
          </button>
        </div>
      </form>

      {successMessage && <Message text={successMessage} type={true} />}
      {errorMessage && <Message text={errorMessage} type={false} />}
    </>
  );
};
