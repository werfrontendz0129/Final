import React, {useEffect, useState} from 'react'
import './MemberAvatar.scss'
import {devUrl} from '../../config/index'
import {withRouter} from 'react-router-dom'

function MemberAvatar(props) {
    const id = props.match.params.id
    console.log(id)

    const [member_name,setMember_name] = useState('')
    const [member_avatar,setMember_avatar] = useState('')

    async function getMembers() {
        try {
            const response = await fetch(
                `http://localhost:3001/members/${id}`,
                {
                    method:'get',
                }
            )
            if(response.ok) {
                const data = await response.json()
                console.log('data:',data)

                setMember_name(data.member_name)
                setMember_avatar(data.member_avatar)
            }
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getMembers()
    },[])

    return (
        <>
            <div className="w-card-avatar">
                <img className="w-avatar" src={devUrl + '/images/images/avatar.jpg'} alt="" />
                <p className="w-card-text">{member_name}</p>
            </div>
        </>
    )
}

export default withRouter(MemberAvatar)