import styles from "./PageCta.module.css";

export default function PageCta() {
  return (
    <div className={styles.PageCta}>
      <div className={styles.PageCtaGrid}>
        <div>
          <h1>Make anything happen</h1>
          <p>See Tray.io in action</p>
        </div>
        <div>
          <button>Get a demo</button>
          <button>Watch video</button>
        </div>
      </div>
    </div>
  );
}
