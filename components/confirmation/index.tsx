import S from "./styles.module.scss";
import {BsFillCheckCircleFill} from "react-icons/bs"

const Confirmation = () => {
  return (
    <div className={S.confirmation}>
      <BsFillCheckCircleFill />
      <p>Contato enviado com sucesso!</p>
      <p>Verifique seu e-mail</p>
    </div>
  );
};

export default Confirmation;
