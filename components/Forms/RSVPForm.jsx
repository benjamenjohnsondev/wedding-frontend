import { useEffect, useState, useRef, useCallback } from 'react'
import useUser from '../../lib/useUser'
import Input from './CustomFormElements/Input'
import Select from './CustomFormElements/Select'
import MealOptions from './CustomFormElements/MealOptions'
import Loading from '../Loading'
import styles from './RSVPForm.module.scss'
import CustomButton from '../Elements/CustomButton'
import { faL } from '@fortawesome/free-solid-svg-icons'

const RSVPForm = (props) => {  
    const { user } = useUser({ redirectTo: '/' }),
    [isSticky, setIsSticky] = useState(false),
    rsvp = useRef(null),
    userDetails = user.details;

    if (!user || user.isLoggedIn === false) {
        return <Loading/>
    }

    const toggleSticky = useCallback(
        ({ top, bottom }) => {
            if (top -250 <= 0 && bottom > 59) {
                !isSticky && setIsSticky(true);
                // window.removeEventListener('scroll', handleScroll);
            } else {
                isSticky && setIsSticky(false);
            }
        },[isSticky]
    );

    const handleScroll = () => {
        toggleSticky(rsvp.current.getBoundingClientRect());
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [toggleSticky]);

    return (
        <div className={styles.rsvpWrapperOuter} ref={rsvp}>
            <h1 className='textLeft'>My RSVP</h1>
            <p>Manage your meal options, let us know you're attending and add your songs to our jukebox!</p>
            <p>If you have any dietary requirements please get in touch.</p>
            <p>Save your settings at the bottom of the page.</p>
            <div className={styles.rsvpWrapper}>
                <h1 className='textLeft'>Attendance</h1>
                <div className={styles.rsvpWrapperInner}>
                    <div className={styles.field}>
                        <Select
                            id='rsvp'
                            label='Attending?'
                            name='rsvp'
                            initialValue={userDetails.rsvp}
                            options={
                                [
                                    { value: '', label: 'Please select' },
                                    { value: '1', label: 'Yes' },
                                    { value: '0', label: 'No' },
                                ]
                                
                            }
                        />
                    </div>
                    <div className={styles.field}>
                        <Select
                            id='plus_one'
                            label='Plus one?'
                            name='plus_one'
                            initialValue={userDetails.plus_one}
                            options={
                                [
                                    { value: '', label: 'Select option' },
                                    { value: '1', label: 'Yes' },
                                    { value: '0', label: 'No' },
                                ]
                                
                            }
                        />
                    </div>
                    <div className={styles.field}>
                        <Select
                            id='total_attending'
                            label='Total Attending?'
                            name='total_attending'
                            initialValue={userDetails.total_attending}
                            options={
                                [
                                    { value: '', label: 'Select option' },
                                    { value: '1', label: '1' },
                                    { value: '2', label: '2' },
                                    { value: '3', label: '3' },
                                    { value: '4', label: '4' },
                                    { value: '5', label: '5' },
                                    { value: '6', label: '6' },
                                    { value: '8', label: '8' },
                                    { value: '9', label: '9' },
                                    { value: '10+', label: '10+' },
                                ]
                                
                            }
                        />
                    </div>
                </div>
            </div>
            <div className='mb-3'>
                <div className={`${styles.menuOptions} ${styles.contentWrapper} textLeft`}>
                    <h2 className='h3 textLeft'>Wedding Breakfast Menu</h2>
                    <p className='textLeft medium'>To Start...</p>
                    <ul>
                        <li>Port of Lancaster smoked salmon, crab and dill mayonnaise, celery and grape salad, grape vinaigrette</li>
                        <li>Duck and pork terrine, beetroot and apple relish, toasted local artisan rye bread, curly endive salad</li>
                        <li>Five Mile Town goat’s cheese and leek pressing, potato and truffle vinaigrette <span className={styles.vege}>(v)</span></li>
                    </ul>
                    <p className='textLeft medium'>To Follow...</p>
                    <ul>
                        <li>Fillet of beef with slow braised blade of beef potato cake, roast root vegetables and red wine sauce</li>
                        <li>Herb crusted loin of Cumbrian lamb, pickled red cabbage, dauphinoise potatoes, shallot purée, mint jus</li>
                        <li>Baked onion tart, mustard dressing, minted potatoes, market vegetables <span className={styles.vege}>(v)</span></li>
                    </ul>
                    <p className='textLeft medium'>To Finish...</p>
                    <ul>
                        <li>Dark chocolate marquise, raspberry sorbet, raspberries <span className={styles.vege}>(v)</span></li>
                        <li>Sticky toffee pudding with butterscotch sauce and vanilla ice cream <span className={styles.vege}>(v)</span></li>
                    </ul>
                </div>
                <MealOptions 
                    id='meal_choice'
                    label='Meal Options'
                    name='meal_choice'
                    options=
                    {{
                        'starter': [
                            {value: '', label: 'Select option' },
                            {value:'salmon', label: 'Smoked Salmon'},
                            {value:'porkDuck', label: 'Pork and Duck Tarrine'},
                            {value:'cheeseLeekPressing', label: 'Goat’s Cheese and Leek Pressing,'},
                        ],
                        'main': [
                            {value: '', label: 'Select option' },
                            {value:'beef', label: 'Fillet of Beef'},
                            {value:'lamb', label: 'Loin of Lamb'},
                            {value:'onionTart', label: 'Baked Cheese Onion Tart'},
                        ],
                        'dessert': [
                            {value: '', label: 'Select option' },
                            {value:'chocolateMarquise', label: 'Dark Chocolate Marquise'},
                            {value:'stickyToffeePudding', label: 'Sticky Toffee Pudding'},
                        ]
                    }}
                    initialValue={userDetails.meal_choice}
                >
                </MealOptions>
            </div>
            <div className={styles.jukebox}>
                <h2 className='h3 textLeft'>Jukebox</h2>
                <p>Add some songs to our list that you would love to hear on our wedding day:</p>
                <Input
                    id='song_recommendations'
                    label='Song recommendations:'
                    name='song_recommendations'
                    initialValue={userDetails.song_recommendations}
                    type='textarea'
                />
            </div>
            <div className={`${styles.saveContentWrapper} ${isSticky ? styles.isSticky : ''}`}>
                <CustomButton type='submit' loading={props.loading} className={`${styles.saveButton}`} content='Save Details'/>
            </div>
        </div>
    )
}

export default RSVPForm