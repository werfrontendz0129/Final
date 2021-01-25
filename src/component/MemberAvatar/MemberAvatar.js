import React, {useEffect, useState} from 'react'
import './MemberAvatar.scss' 

function MemberAvatar(props) {
    const [members, setMembers] = useState()
    console.log('members?')
    
    // async function getMembers() {
    //     try {
    //         const response = await fetch(
    //             'http://localhost:3001/members',
    //             {
    //                 method:'get',
    //             }
    //         )
    //         if(response.ok) {
    //             const data = await response.json()
    //             console.log('data:',data)

    //             setMembers(data)
    //         }
    //     } catch(error) {
    //         console.log(error)
    //     }
    // }

    // useEffect(()=>{
    //     getMembers()
    // },[])

    return (
        <>
            <div className="w-card-avatar">
                <img className="w-avatar" src="images/member/default-avatar.jpg" alt="" />
                <p className="w-card-text">Cody</p>
            </div>
        </>
    )
}

export default MemberAvatar