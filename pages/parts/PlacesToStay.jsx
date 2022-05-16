import Image from 'next/image';
import styles from './PlacesToStay.module.scss'
import MidlandHotel from '../../public/places-to-stay/Midland_Hotel_1.jpg';
import Travelodge from '../../public/places-to-stay/Travelodge_Morecambe.jpg';
import Lothersdale from '../../public/places-to-stay/Lothersdale_Morecambe.jpg';
import LineBreak from '../../components/LineBreak';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const PlacesToStay = (props) => {
    return (
        <div id={props.id} className={`${styles.sectionWrapper} container centered`}>
            <h2>Places To Stay</h2>
            <p>Here's a few places close by to stay, there's also 
                <br/>plenty of places on <a target='_blank' rel='noopener' href='https://www.airbnb.co.uk/s/Morecambe/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_dates%5B%5D=april&flexible_trip_dates%5B%5D=may&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=calendar&query=Morecambe&place_id=ChIJwQFvLTFge0gRL6HHRBpaKq0&checkin=2022-08-12&checkout=2022-08-14&source=structured_search_input_header&search_type=autocomplete_click'>Airbnb</a></p>
            <p>If you're planning on staying with us at the Midland Hotel
                <br/>please call direct and let them know you're with our wedding party</p>
            <div className={styles.hotelsWrapper}>
                <div className={`${styles.hotelWrapper} ${styles.left}`}>
                    <div className={`${styles.image} ${styles.left}`}>
                        <a target='_blank' rel='noopener' href='https://midland.englishlakes.co.uk/convert/site/The%20Midland/en/results.php?checkin=2022-08-12&nights=2&currency=GBP&resultViewType=mda&viewtype=rateroom&partya=2'>
                            <Image src={MidlandHotel} width='379' height='500'/>
                        </a>
                    </div>
                    <LineBreak className={styles.lineBreak}/>
                    <a target='_blank' rel='noopener' href='https://midland.englishlakes.co.uk/convert/site/The%20Midland/en/results.php?checkin=2022-08-12&nights=2&currency=GBP&resultViewType=mda&viewtype=rateroom&partya=2'>
                        <h3>Midland Hotel</h3>
                        Visit Site <FontAwesomeIcon icon={faArrowRightFromBracket} />
                    </a>
                </div>
                <div className={`${styles.hotelWrapper} ${styles.middle}`}>
                    <div className={`${styles.image} ${styles.middle}`}>
                        <a target='_blank' rel='noopener'href='https://www.travelodge.co.uk/hotels/516/Morecambe-hotel?checkIn=12/08/2022&checkOut=14/08/2022&rooms[0][adults]=2&rooms[0][children]=0'>
                            <Image src={Travelodge} width='379' height='500'/>
                        </a>
                    </div>
                    <LineBreak className={styles.lineBreak}/>
                    <a target='_blank' rel='noopener'href='https://www.travelodge.co.uk/hotels/516/Morecambe-hotel?checkIn=12/08/2022&checkOut=14/08/2022&rooms[0][adults]=2&rooms[0][children]=0'>
                        <h3>Travelodge Morecambe</h3>
                        Visit Site <FontAwesomeIcon icon={faArrowRightFromBracket} />
                    </a>
                </div>
                <div className={`${styles.hotelWrapper} ${styles.right}`}>
                    <div className={`${styles.image} ${styles.right}`}>
                        <a target='_blank' rel='noopener' href='https://www.bestwestern.co.uk/hotels/best-western-lothersdale-hotel-84212/in-2022-08-12/out-2022-08-14/adults-2/children-0/rooms-1'>
                            <Image src={Lothersdale} width='379' height='500'/>
                        </a>
                    </div>
                    <LineBreak className={styles.lineBreak}/>
                    <a target='_blank' rel='noopener' href='https://www.bestwestern.co.uk/hotels/best-western-lothersdale-hotel-84212/in-2022-08-12/out-2022-08-14/adults-2/children-0/rooms-1'>
                        <h3>Lothersdale Hotel</h3>
                        Visit Site <FontAwesomeIcon icon={faArrowRightFromBracket} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default PlacesToStay;