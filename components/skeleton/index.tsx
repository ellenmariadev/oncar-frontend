import S from "./styles.module.scss";

const Skeleton = () => {
  return (
    <div className={S.loader}>
      <div className={S.wrapper}>
        <div className={S.circle}></div>
        <div className={S.line1}></div>
        <div className={S.line2}></div>
        <div className={S.line3}></div>
        <div className={S.line4}></div>
      </div>
    </div>
  );
};

export default Skeleton;
