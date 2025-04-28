import Image from "next/image";
import styles from "./page.module.css"; 

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Make My Trip</h1>
        <nav className={styles.nav}>
          <button>Flights</button>
          <button>Hotels</button>
          <button>Homestays & Villas</button>
          <button>Holiday Packages</button>
          <button>Buses</button>
          <button>Cabs</button>
          <button>Visa</button>
          <button>Forex Card & Currency</button>
        </nav>
      </header>

      <div className={styles.bookingForm}>
        <h2>Book international and domestic flights</h2>
        <div className={styles.inputGroup}>
          <label htmlFor="from">From</label>
          <input type="text" id="from" placeholder="Delhi" />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="to">To</label>
          <input type="text" id="to" placeholder="Bengaluru" />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="departure">Departure</label>
          <input type="date" id="departure" />
        </div>

        <button className={styles.searchButton}>SEARCH</button>
      </div>
    </div>
  );
}