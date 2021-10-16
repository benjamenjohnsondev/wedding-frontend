import useUser from '../../lib/useUser'
import Input from './CustomFormElements/Input'
import Select from './CustomFormElements/Select'
import MealOptions from './CustomFormElements/MealOptions'
import Loading from '../Loading'
import styles from './RSVPForm.module.scss'
import CustomButton from '../Elements/CustomButton'

const RSVPForm = (props) => {  
    const { user } = useUser({ redirectTo: '/' }),
    userDetails = user.details;

    if (!user || user.isLoggedIn === false) {
        return <Loading/>
    }

    return (
        <div className={styles.rsvpWrapperOuter}>
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
                <MealOptions 
                    id='meal_choice'
                    label='Meal Options'
                    name='meal_choice'
                    options=
                    {{
                        'starter': [
                            {value: '', label: 'Select option' },
                            {value:'1', label: 'Option 1'},
                            {value:'2', label: 'Option 2'},
                            {value:'3', label: 'Option 3'},
                        ],
                        'main': [
                            {value: '', label: 'Select option' },
                            {value:'1', label: 'Option 1'},
                            {value:'2', label: 'Option 2'},
                            {value:'3', label: 'Option 3'},
                        ],
                        'dessert': [
                            {value: '', label: 'Select option' },
                            {value:'1', label: 'Option 1'},
                            {value:'2', label: 'Option 2'},
                            {value:'3', label: 'Option 3'},
                        ]
                    }}
                    initialValue={userDetails.meal_choice}
                />
            </div>
            <div className={styles.jukebox}>
                <h2 className='h3 textLeft'>Jukebox</h2>
                <p>Add some songs to the list that you would love to hear on our wedding day:</p>
                <Input
                    id='song_recommendations'
                    label='Song recommendations:'
                    name='song_recommendations'
                    initialValue={userDetails.song_recommendations}
                    type='textarea'
                />
            </div>
            <CustomButton type='submit' loading={props.loading} className={styles.saveButton} content='Save Details'/>
        </div>
    )
}

export default RSVPForm