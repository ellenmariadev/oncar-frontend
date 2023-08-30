import React, { useEffect, useState } from "react";
import {
  formatPhoneNumber,
  removePhoneNumberFormatting,
} from "@/helpers/formatNumber";
import { postData } from "@/hooks";

interface IForm {
  selectCard: Array<number>;
  handleConfirmation: Function;
  setOpenForm: React.Dispatch<React.SetStateAction<boolean>>;
  setConfirmation: React.Dispatch<React.SetStateAction<boolean>>;
  openForm: boolean;
}

function Form({
  selectCard,
  openForm,
  setOpenForm,
  setConfirmation,
  handleConfirmation,
}: IForm) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  const [error, setError] = useState<string>("");

  phone = removePhoneNumberFormatting(phone);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await postData({
        name,
        email,
        phone,
        vehicleid: selectCard[0],
      });
      if (response.code === 400) {
        if (response.status === "name") {
          setError("Insira seu nome corretamente.");
        } else if (response.status === "email") {
          setError("Informe um e-mail válido.");
        } else if (response.status === "phone") {
          setError("Informe um número de telefone válido.");
        }
      } else {
        setError("");
      }
      if (response.code === 200) {
        handleConfirmation();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (openForm && !event.target.closest(".form")) {
        setOpenForm(false);
        setConfirmation(false);
        setName("");
        setEmail("");
        setPhone("");
        setError("");
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [openForm]);

  return (
    <form onSubmit={handleSubmit}>
      {error.length > 0 && <p className="errorMessage">{error}</p>}
      <div className="relative">
        <input
          id="name"
          className={error === "name" ? "input error" : "input"}
          name="name"
          value={name}
          placeholder="Insira seu nome completo"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="name" className="label">
          Nome <strong>*</strong>
        </label>
      </div>
      <div className="relative">
        <input
          id="email"
          name="email"
          className={error === "email" ? "input error" : "input"}
          value={email}
          placeholder="email@contato.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="email" className="label">
          E-mail<strong> *</strong>
        </label>
      </div>
      <div className="relative">
        <input
          id="phone"
          className={error === "phone" ? "input error" : "input"}
          name="phone"
          value={formatPhoneNumber(phone)}
          placeholder="(XX) XXXXX-XXXX"
          onChange={(e) => setPhone(e.target.value)}
        />
        <label htmlFor="phone" className="label">
          Telefone<strong> *</strong>
        </label>
      </div>
      <button className="button" type="submit">
        Enviar
      </button>
    </form>
  );
}

export default Form;
