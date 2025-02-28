import style from "./HeaderProfile.module.css"
import logoBG from "../../../123/images/logoBG.png";

function HeaderProfile() {
  return (
    <div className={style.header}>
      <img className={style.imgLogo} src={logoBG} />
      <div className={style.navMenu}>
        <nav>
          <ul className={style.navBar}>
            <button>Home</button>
            <button>About</button>
            <button>Blog</button>
            <button>Pages</button>
            <button>Contact</button>
            <button>Cart</button>
            <button className={style.quote}>Get a quote</button>
          </ul>
        </nav>
      </div>
      <div className={style.announceContainer}>
        <div className={style.announceH1}>
          <p>We provide effective contracting services</p>
          <p className={style.bottomAnnou}>
            Oh my God, how beautiful this text is, how well it fits the theme of
            this website, oh God, yes!
          </p>
          <button className={style.quoteTwo}>Get a quote</button>
          <button className={style.services}>Our services</button>
        </div>
      </div>
    </div>
  )
}

export default HeaderProfile