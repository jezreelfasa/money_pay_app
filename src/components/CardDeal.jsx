import { card } from "../assets"
import styles, { layout } from "../style"
import Button from "./Button"

function CardDeal() {
    return (
        <section className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>Find a better card deal<br className="sm:block hiden" /> in few easy steps.</h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>All you need to do is to register and get started then you are on your way
                    to the best ever customer service experience you ever had.
                </p>
                <Button styles="mt-10" />
            </div>
            <div className={layout.sectionImg}>
                <img src={card} alt="card" className="w-100%] h-[100%]" />
            </div>

        </section>
    )
}

export default CardDeal

