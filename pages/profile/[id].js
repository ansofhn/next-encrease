import { Avatar } from 'antd'
import { useRouter } from 'next/router'
import React from 'react'
import LandingPageLayout from '../../layouts/LandingPageLayout'
import { userRepository } from '../../repository/user'


const UserProfile = () => {
    const router = useRouter()

    //Router Query for Detail Profile
    const {id} = router.query
    
    //Fetching Api
    const {data : dataProfile} = userRepository.hooks.getDetailUser(id)

  return (
    <div className='bg-softWhite py-24'>
        <div className='max-w-screen-sm mx-auto px-4 flex flex-col gap-y-12 md:py-24'>
            <div className='text-center'>
                <Avatar src={dataProfile?.image} size={120}/>
            </div>
            <div>
                <form>
                    <div className='flex flex-col gap-y-10'>
                        <div className='flex flex-col gap-y-2 text-background'>
                            <label className='font-semibold'>NAME :<br/></label> 
                            <input type={'text'} defaultValue={dataProfile?.name} className='user-profile-form without-ring'/>
                        </div>
                        <div className='flex flex-col gap-y-2 text-background'>
                            <label className='font-semibold'>EMAIL :<br/></label> 
                            <input type={'email'} defaultValue={dataProfile?.email} className='user-profile-form without-ring'/>
                        </div>
                        <div className='flex flex-col gap-y-2 text-background'>
                            <label className='font-semibold'>PHONE :<br/></label> 
                            <input type={'tel'} defaultValue={dataProfile?.phone} className='user-profile-form without-ring'/>
                        </div>
                        <div className='flex flex-col gap-y-2 text-background'>
                            <label className='font-semibold'>ADDRESS :<br/></label> 
                            <textarea defaultValue={dataProfile?.address} className='user-profile-form without-ring'/>
                        </div>
                        <div className='flex flex-row gap-5'>
                            <button type='submit' className='bg-background text-softWhite p-3 text-sm rounded-md hover:scale-105 duration-200'>Save Changes</button>
                            <button type='reset' className='bg-softGray text-background p-3 text-sm rounded-md hover:scale-105 duration-200'>Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default UserProfile

UserProfile.getLayout = (page) =>{
    return <LandingPageLayout children={page} title={'Profile'}/>
}