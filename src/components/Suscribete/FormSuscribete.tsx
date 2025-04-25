import { Message } from "./Message";
import { useForm } from "../../hooks/useForm";

export const FormSuscribete = () => {
const {successMessage, errorMessage, isSubmitting, handleSubmit} = useForm();

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
                className="h-4"
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
