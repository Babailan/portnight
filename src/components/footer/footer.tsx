import styles from "./styles.module.scss";

function Footer() {
  return (
    <div className={styles.container}>
      <small>&copy;
        {`${new Date().getFullYear()} `}
        <a href="https://github.com/Babailan" target={"_blank"} rel={"noreferrer"}>Ronnel Dilao Babailan</a>
      </small>
    </div>
  );
}

export default Footer;
