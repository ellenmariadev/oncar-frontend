import S from "./styles.module.scss";
import { Logo } from "@/assets/logo";

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className={S.header}>
      <Logo />
      <label className="sr-only" htmlFor="search">
        Pesquisar
      </label>
      {children}
    </header>
  );
};

export default Header;
