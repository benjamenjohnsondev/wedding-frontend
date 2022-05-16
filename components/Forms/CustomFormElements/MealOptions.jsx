import { Component } from 'react';
import Input from './Input';
import Select from './Select';
import styles from './MealOptions.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons';
import CustomButton from '../../Elements/CustomButton';

class MealOptions extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            guests: JSON.parse(props.initialValue),
            mealOptions: props.options
        };
    }

    handleNameChange(i, event) {
        let value = [...this.state.guests];
        value[i]['guest_name'] = event.target.value;
        this.setState({ guests: value });
    }

    handleOptionChange(i, event) {
        let value = [...this.state.guests];
        value[i][event.target.name] = event.target.value;
        this.setState({ guests: value });
    }

    addClick(){
        this.setState(prevState => ({ guests: [
            ...prevState.guests,
            {
                dessert:'',
                guest_name:'',
                main:'',
                starter:''
            }
        ]}))
    }

    removeClick(i){
        const e = event;
        e.target.disabled = true;
        setTimeout(()=>{
            let guests = [...this.state.guests];
            guests.splice(i,1);
            this.setState({ guests });
            e.target.disabled = false;
        }, 250);
    }

    createUI(){
        const MealChoice = ({options, initialValue, guest_name, onChange}) => (      
            <>
                {options.map((option,i) => {
                    return (
                    <div className={styles.field} key={i}>
                        <Select
                            id={option[0] + guest_name}
                            label={`${option[0].replace(/(^\w|\s\w)/g, m => m.toUpperCase())}:`}
                            name={option[0]}
                            initialValue={initialValue[option[0]]}
                            onChange={onChange}
                            options={option[1]}
                            key={i}
                        />
                    </div>
                )})}
            </>
        );
        return this.state.guests.map((guest, i) => 
        <div className={styles.guestWrapperOuter} key={i}>
            <h3 className={`textLeft h5 ${styles.guestTitle}`}><label htmlFor={`name-${i}`}>Guest {i+1}</label></h3>
            <div className={styles.guestWrapper} key={i}>
                <button
                    type='button'
                    className={`btn ${styles.removeButton}`}
                    value='remove' onClick={this.removeClick.bind(this, i)}>
                    Remove guest <FontAwesomeIcon icon={faSquareXmark} />
                </button>
                <div className={styles.field}>
                    <Input
                        id={`name-${i}`}
                        label='Guest name:'
                        name={`name-${i}`}
                        initialValue={guest['guest_name']||''}
                        handleChange={this.handleNameChange.bind(this, i)}
                        upstreamValue={guest['guest_name']||''} 
                        useUpstream={true}
                        required={true}
                    />
                </div>
                <MealChoice 
                    options={Object.entries(this.props.options)}
                    initialValue={guest}
                    guest_name={guest['guest_name']}
                    onChange={this.handleOptionChange.bind(this, i)}/>
                </div>          
            </div>
        )
    }

    getGuestText(){
        return this.state.guests.length > 0 ? '\+ Add another guest' : '+ Add a guest';
    }

    render() {
        return (
            <>
                <div className={styles.mealOptionsWrapper}>
                    <h2 className='h3 textLeft'>{this.props.label}</h2>
                    <div className={styles.guestsWrapperOuter}>
                        {this.createUI()}
                    </div>
                    <CustomButton type='button'
                        onClick={this.addClick.bind(this)} 
                        value={this.getGuestText()}
                        content={this.getGuestText()}
                        className={styles.addGuestButton}
                    >
                            {this.getGuestText()}
                    </CustomButton>
                </div>
                {this.props.children}
            </>
        );
    }
}

export default MealOptions;