import { useEffect } from 'react'
import StoreDetails from '../../store/StoreDetails';
import BusinessDetails from '../businessDetails/BusinessDetails';
import ServiceClient from '../serviceClient/ServiceClient'
import { observer } from 'mobx-react'


const User = observer(() => {
  useEffect(() => {
    localStorage.removeItem('isLogin');
    StoreDetails.initialBusinessDetails();
  }, [])


  return (
    <>
      <header className='header'>
      <BusinessDetails></BusinessDetails>
      </header>
   <ServiceClient></ServiceClient>
   
    </>
  )
}
)
export default User