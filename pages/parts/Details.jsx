import styles from './Details.module.scss';
import BoxImageContent from '../../components/Layouts/BoxImageContent'
import LineBreak from '../../components/LineBreak';
import CustomLink from '../../components/Elements/CustomLink';
import DetailsImage from '../../public/details.jpg'
import useUser from '../../lib/useUser';
import Loading from '../../components/Loading';
import Layout from '../../components/Layout';

const Details = (props) => {
    const { user } = useUser();
    if (!user || user.isLoggedIn === false || !user.details) {
        return (
            <Layout>
                <Loading/>
            </Layout>
        )
    }

    let content;

    if (user.details) {
        content = (
            <>
                <p className='fontLight centered'>Hi, {user.details.greeting_name}!</p>
                <p className='fontLight centered'>This is your personal RSVP, please fill in the details on the R.S.V.P. page as soon as you're able.</p>
                <p className='fontLight centered'>If you have any questions, please get in touch, thank you!</p>
            </>
        );
    }

    return (
        <div id={props.id} className={`${styles.sectionWrapper} container`}>
            <BoxImageContent lineContent='more details below' imgSrc={DetailsImage} arrowLink='#when-where'/>
            <div className={styles.contentWrapper}>
                <h1>We're getting married!</h1>
                <p className='fontLight centered medium'>Ben &amp; Anni - 13.08.22</p>
                {content}
                <LineBreak/>
                <CustomLink content='R.S.V.P'
                  url='/rsvp' />
            </div>
        </div>
    );
}

export default Details;