import Input from './CustomFormElements/Input'
import CustomButton from '../Elements/CustomButton'

const LoginForm = () => {    
    return (
        <>
            <div className='mb-3'>
                <Input
                    id='party_name'
                    label='Party name'
                    name='party_name'
                    required
                    type='text'
                    value=''
                />
            </div>
            <div className='mb-3'>
                <Input
                    id='password'
                    label='Password'
                    name='password'
                    required
                    type='password'
                />
            </div>
            <CustomButton type='submit'
                content='Login'/>
        </>
    )
}

export default LoginForm