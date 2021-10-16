import styles from './Details.module.scss';
import BoxImageContent from '../../components/Layouts/BoxImageContent'
import LineBreak from '../../components/LineBreak';
import CustomLink from '../../components/Elements/CustomLink';
import DetailsImage from '../../public/details.jpg'

const Details = (props) => {
    return (
        <div id={props.id} className={`${styles.sectionWrapper} container`}>
            <BoxImageContent lineContent='more details below' imgSrc={DetailsImage} arrowLink='#when-where'/>
            <div className={styles.contentWrapper}>
                <h1>We're getting married!</h1>
                <p className='fontLight centered medium'>Ben &amp; Anni - 13.08.22</p>
                <LineBreak/>
                <CustomLink content='R.S.V.P'
                  url='/rsvp' />
            </div>
        </div>
    );
}

export default Details;