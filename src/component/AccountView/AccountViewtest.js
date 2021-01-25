import React, {useState,useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import './AccountView.scss'
import {useParams,useHistory} from 'react-router-dom'

// 此頁為測試資料
// 
function AccountViewtest(props) {
    const [members, setMembers] = useState('AccountViewtest')
    // 是否連到members資料?
    console.log('members?:',members); 

    const [member, setMember] = useState('')

    
    // const initialMember = {
    //     member_Account:"",
    //     member_Name:"",
    //     member_Gender:"",
    //     member_Phone:"",
    //     member_Birthdate:"",
    //     member_Address:""
    // }
    

    // const [member_Account, setMember_Account] = useState('')
    // const [member_Name, setMember_Name] = useState('')
    // const [member_Gender, setMember_Gender] = useState('')
    // const [member_Phone, setMember_Phone] = useState('')
    // const [member_Birthdate, setMember_Birthdate] = useState('')
    // const [member_Address, setMember_Address] = useState('')

    // let {id} = useParams()

    async function getMembers() {
        try {
            const response = await fetch(
                'http://localhost:3001/members',
                {
                    method:'get',
                }
            )
            if(response.ok) {
                const data = await response.json()
                console.log('data:',data)

                setMembers(data)
            }
        } catch(error) {
            console.log(error)
        }
    }

    // 無法取得特定id會員
    // async function getMember(id) {
    //     try {
    //         const response = await fetch(
    //             'http://localhost:3001/members/' + id,
    //             {
    //                 method:'get',
    //             }
    //         )
    //         if(response.ok) {
    //             const data2 = await response.json()
    //             console.log('?:',data2) 
                
    //             setMember(data2)
    //             // console.log('???:',data);
    //         }
    //     } catch(error) {
    //         alert('no data, try later')
    //     }
    // }

    useEffect(()=>{
        getMembers()
    },[])
    
    return (
        <>
            
                {/* 目前是取members第1筆會員 */}
                
                <div className="w-account-view">
                <div className="w-div-title">
                    <p>帳戶概覽</p>
                </div>
                <div className="w-account-view-main">
                    <form action="">
                        <div className="form-group row">
                            <label htmlFor="" className="col-sm-4 col-form-label">帳號 Account</label>
                            <div className="col-sm-8">
                                <input 
                                    type="email" readonly 
                                    className="form-control-plaintext" 
                                    value={members[0].member_account} 
                                    />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="" className="col-sm-4 col-form-label">姓名 Name</label>
                            <div className="col-sm-8">
                                <input 
                                    type="text" readonly 
                                    className="form-control-plaintext" 
                                    value={members[0].member_name}
                                    />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="" className="col-sm-4 col-form-label">性別 Gender</label>
                            <div className="col-sm-8">
                                <input 
                                    type="text" readonly 
                                    className="form-control-plaintext" 
                                    value={members[0].member_gender}
                                    />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="" className="col-sm-4 col-form-label">手機號碼 Phone</label>
                            <div className="col-sm-8">
                                <input 
                                    type="text" readonly 
                                    className="form-control-plaintext" 
                                    value={members[0].member_phone}
                                    />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="" className="col-sm-4 col-form-label">出生日期 Birth Date</label>
                            <div className="col-sm-8">
                                <input 
                                    type="text" readonly 
                                    className="form-control-plaintext" 
                                    value={members[0].member_birthdate}
                                    />
                            </div>
                        </div>
                    </form>
                    {/* bug~~~跳轉到編輯個人檔案的頁面有問題，需要重新整理才會跑出會員檔案 */}
                    <NavLink to="/memberedit" className="w-accounteditbutton">編輯個人檔案 Edit</NavLink>
                </div>
            </div>
        </>
    )
}

export default AccountViewtest