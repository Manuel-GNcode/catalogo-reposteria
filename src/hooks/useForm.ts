import { useState } from "react"

export const useForm = ()=>{
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
  return {successMessage, errorMessage, isSubmitting, handleSubmit};
}