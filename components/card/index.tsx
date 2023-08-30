import S from "./styles.module.scss";
import { VehicleData } from "@/interfaces/vehicle";
import Carousel from "@/components/carousel";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { formattedPrice } from "@/helpers/formatPrice";

interface VehicleCard {
  data: VehicleData;
  setOpenForm: Function;
  setSelectCard: Function;
  openForm: boolean;
}

const Card = ({ data, setSelectCard, setOpenForm, openForm }: VehicleCard) => {
  const handleSelectCard = () => {
    setSelectCard([data.id, data.brand, data.model, data.price, data.year]);
    setOpenForm(true);
  };

  return (
    <div data-testid="card-component" className={S.card}>
      <div className={S.flex}>
        <div>
          <h3>Ano</h3>
          <p>{data.year}</p>
        </div>
        <p className={S.price}>{formattedPrice(+data.price)}</p>
      </div>
      <Carousel brand={data.brand} />
      <div className={S.flex}>
        <div>
          <h3>Marca</h3>
          <p>{data.brand}</p>
        </div>
        <div>
          <h3>Modelo</h3>
          <p>{data.model}</p>
        </div>
      </div>
      <button
        onClick={handleSelectCard}
        className={S.comprar}
        aria-controls="comprar-navigation"
        aria-expanded={openForm}
      >
        <LiaShoppingCartSolid /> Comprar
      </button>
    </div>
  );
};

export default Card;
