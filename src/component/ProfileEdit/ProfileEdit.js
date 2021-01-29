import React, {useState, useEffect} from 'react'
import './ProfileEdit.scss'
import {withRouter,useHistory} from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
// 測試data
// import data from '../../data/users'

function ProfileEdit(props) {
    // console.log('hihi',props)
    // 目前只取id=1的會員
    const _id = props.match.params.id;

    const [members, setMembers] = useState('ProfileEdit')
    // console.log('members:',members)
    const [member, setMember] = useState('')
    // console.log('member:',member)

    const [member_Account, setMember_Account] = useState('')
    const [member_Name, setMember_Name] = useState('')
    const [member_Gender, setMember_Gender] = useState('')
    const [member_Phone, setMember_Phone] = useState('')
    const [member_Birthdate, setMember_Birthdate] = useState('')
    const [member_Address, setMember_Address] = useState('')

    // let {id} = useParams()
    let history = useHistory()

    // sweet alert
    const MySwal = withReactContent(Swal)

    async function updateMember(id) {
        const newMember = {
            member_account: member_Account,
            member_name: member_Name,
            member_gender: member_Gender,
            member_phone: member_Phone,
            member_birthdate: member_Birthdate,
            member_address: member_Address,
        }
        try {
            console.log(newMember)
            const response = await fetch(
                'http://localhost:3001/members/update/' + id,
                {
                    method:'put',
                    body:JSON.stringify(newMember),
                    headers: {
                        // Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                }
            )
            if(response.ok) {
                const data = await response.json()
                console.log(data)
                
                if(data.id) alert('ok')
                history.push('/member/'+ _id) 
            }
        } catch(error) {
            console.log('error:',error)
        }
    }

    // async function getMembers() {
    //     try {
    //         const response = await fetch(
    //             'http://localhost:3001/members',
    //             {
    //                 method:'get',
    //                 headers: {
    //                     Accept: 'application/json',
    //                     'Content-Type': 'application/json',
    //                 },
    //             }
    //         )
    //         if(response.ok) {
    //             const data = await response.json()
    //             console.log('?',data)

    //             setMembers(data)
    //         }
    //     } catch(error) {
    //         alert('no data, try later')
    //     }
    // }

    async function getMember(id) {
        try {
            const response = await fetch(
                'http://localhost:3001/members/get/' + id,
                {
                    method:'get',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                }
            )
            if(response.ok) {
                const data = await response.json()
                setMember_Account(data.member_account)
                setMember_Name(data.member_name)
                setMember_Gender(data.member_gender)
                setMember_Phone(data.member_phone)
                setMember_Birthdate(data.member_birthdate)
                setMember_Address(data.member_address)
            }
        } catch(error) {
            console.log('error:',error)
        }
    }

    useEffect(()=>{
        // getMembers()
        getMember(_id)
    },[])

    return (
        <>
                <div>
                <div className="w-editfile">
                <div className="w-div-title">
                    <p>編輯個人檔案</p>
                </div>
                <div className="w-editfile-main">
                    <form className="w-editfile-form" action="">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">帳號 Account</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="exampleFormControlInput1"
                                Value={member_Account}
                                onChange={(e)=>(setMember_Account(e.target.value))}
                                 />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput2">姓名 Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="exampleFormControlInput2"
                                Value={member_Name}
                                onChange={(e)=>(setMember_Name(e.target.value))} 

                                />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">性別 Gender</label>
                            <input 
                                className="form-control" 
                                id="exampleFormControlSelect1"
                                Value={member_Gender}
                                readonly
                                disabled
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput3">手機 Phone</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="exampleFormControlInput3"
                                Value={member_Phone}
                                onChange={(e)=>(setMember_Phone(e.target.value))} 
                                />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput4">出生日期 Birth Date</label>
                            <input 
                                className="form-control" 
                                id="exampleFormControlSelect1"
                                Value={member_Birthdate}
                                readOnly="readonly"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput5">地址 Address</label>
                            <input 
                                type="text" 
                                className="form-control"
                                id="exampleFormControlInput5"
                                Value={member_Address}
                                onChange={(e)=>(setMember_Address(e.target.value))} 
                                />
                        </div>
                    </form>
                    <button 
                        type="button" 
                        className="btn w-editsavebutton"
                        onClick={()=>{
                            MySwal.fire({
                                title: '確定修改?',
                                icon: 'warning',
                                showCancelButton: true,
                                confirmButtonColor: '#6c8650',
                                cancelButtonColor: '#d33',
                                confirmButtonText: '是，我要修改!',
                                cancelButtonText: '返回'
                                }).then((result) => {
                                if (result.isConfirmed) 
                                {
                                    Swal.fire(
                                    '已儲存!',
                                    updateMember(1),
                                    'success'
                                    )
                                }
                                })
                            }} 
                        >儲存修改 Save</button>
                   
                </div>
            </div>
            </div>

        </>
    )
}

export default withRouter(ProfileEdit)