import Image from 'next/image';
import styles from './WhenWhere.module.scss'
import MidlandHotel from '../../public/Midland_Hotel.jpg'
import WilliamsonPark1 from '../../public/Williamson_Park_1.jpg'
import CustomLink from '../../components/Elements/CustomLink'

const WhenWhere = (props) => {
    return (
        <div id={props.id} className={`${styles.sectionWrapper} container`}>
            <h2 className='textLeft'>When &amp; Where</h2>
        
            <div className={styles.cardWrapper}>
                <div className={`${styles.card} ${styles.ceremony}`}>
                    <div className={styles.imageWrapper}>
                        <Image src={WilliamsonPark1} 
                            sizes='(min-width: 900px) 500px, (min-width: 768px) 768px, 100vw'
                            layout='responsive'/>
                    </div>
                    <div className={`${styles.contentWrapper} ${styles.left} centered`}>
                        <h3>Ceremony</h3>
                        <h4>Arrive <span>from:</span> 1:30PM</h4>
                        <h4>Ceremony <span>starts:</span> 2:00PM</h4>
                        <h4>Location:</h4>
                        <p>Williamson Park,
                            Quernmore Road,
                            Lancaster,
                        <br/>
                        <a href='https://goo.gl/maps/y8aEtEDCUmkgh8Av5' target='_blank' rel='noopener'>LA1 1UX</a></p>
                    </div>
                </div>
                
                <div className={`${styles.card} ${styles.reception}`}>
                    <div className={styles.imageWrapper}>
                        <Image src={MidlandHotel}
                        sizes='(min-width: 900px) 500px, (min-width: 768px) 768px, 100vw'
                        layout='responsive'/>
                    </div>
                    <div className={`${styles.contentWrapper} ${styles.left} centered`}>
                        <h3>Reception</h3>
                        <h4>From: 4.00PM</h4>
                        <p>Help us celebrate the day with live music, and a three course meal. Confirm your dinner choices:</p>
                        <CustomLink
                            url='/rsvp'
                            content='R.S.V.P'/>
                        <h4>Location:</h4>
                        <p>The Midland Hotel,
                        Marine Road West,
                        Morecambe,
                        <br/>
                        <a href='https://goo.gl/maps/naxdJmvTUFxNWXyNA' target='_blank' rel='noopener'>LA4 4BU</a></p>
                    </div>
                </div>
            </div>

            <div className={`${styles.card} ${styles.parking}`}>
                <h4>Parking: <span>Both venues have on site parking available. Please access Williamson's Park via Quernmore Road for reserved parking.</span></h4>
            </div>
        </div>
    );
}

export default WhenWhere;