import './UserDataElement.css';
import Text from "../../../Components/atoms/Text";
import { UserDataElementProps } from './UserDataElementType';

const UserDataElement = ({userDataLabel, userData}: UserDataElementProps) => {
    
  return (
    <div className='userData-element'>
        <Text
            text={userDataLabel}
            type= 'paragraph'
            color='#000000'
        />
        <Text
            text={userData}
            type= 'paragraph'
            color='#000000'
        />
    </div>
  )
}

export default UserDataElement