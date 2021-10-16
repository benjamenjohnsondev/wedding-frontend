import styles from './DayInfo.module.scss';
import LineBreak from '../../components/LineBreak';
import Image from 'next/image';
import WartonCrag from '../../public/Warton_Crag.jpg'
import WilliamsonPark from '../../public/Williamson_Park.jpg'

const DayInfo = (props) => {
    return (
        <div id={props.id} className={`${styles.sectionWrapper} container`}>
            <div className={styles.contentWrapper}>
                <h2>Wedding Day Info</h2>
                <LineBreak/>
                <h4>Dress Code:</h4>
                <p className='fontLight centered'>
                    This event is cocktail attire. We want you all to look dapper. We’ll be in our finery and hope you will too. The day will be magical so dress to match. Go all out. If you’re happy, we’re happy.
                </p>
                <h4>Gifts:</h4>
                <p className='fontLight centered'>
                    The most important thing to us is that you are able to celebrate with us on our wedding day. However, if you wish to give a gift we will gratefully accept a small contribution towards our honeymoon.
                </p>
            </div>
            <div className={styles.imageWrapper}>
                <div className={styles.image}>
                    <Image src={WartonCrag} sizes='(min-width: 768px) 50vw, 100vw' layout='responsive' quality={90}/>
                </div>
                <div className={styles.image}>
                    <Image src={WilliamsonPark} sizes='(min-width: 768px) 50vw, 100vw' layout='responsive' quality={90}/>
                </div>
            </div>
        </div>
    );
}

export default DayInfo;