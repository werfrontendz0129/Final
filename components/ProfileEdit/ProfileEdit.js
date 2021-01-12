import React from 'react'
import './ProfileEdit.scss'

function ProfileEdit() {
    return (
        <>
            <div className="w-editfile">
                <div className="w-div-title">
                    <p>編輯個人檔案</p>
                </div>
                <div className="w-editfile-main">
                    <form className="w-editfile-form" action="">
                        <div className="form-group">
                            <label for="exampleFormControlInput1">帳號 Account</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1"
                                placeholder="traveler00035@gmail.com" />
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">姓名 Name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1"
                                placeholder="Viviana" />
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlSelect1">性別 Gender</label>
                            <select className="form-control" id="exampleFormControlSelect1">
                                <option>不透露</option>
                                <option>男</option>
                                <option>女</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">手機 Phone</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1"
                                placeholder="0900000000" />
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">出生日期 Birth Date</label>
                            <div className="d-flex">
                                <select className="form-control" id="exampleFormControlSelect1">
                                    <option>日</option>
                                </select>
                                <select className="form-control" id="exampleFormControlSelect1">
                                    <option>月</option>
                                </select>
                                <select className="form-control" id="exampleFormControlSelect1">
                                    <option>年</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">地址 Address</label>
                            <div className="d-flex">
                                <select className="form-control" id="exampleFormControlSelect1">
                                    <option>縣/市</option>
                                </select>
                                <select className="form-control" id="exampleFormControlSelect1">
                                    <option>市/區/鄉/鎮</option>
                                </select>
                            </div>
                            <select className="form-control" id="exampleFormControlSelect1">
                                <option>路/街/號/樓</option>
                            </select>
                        </div>
                    </form>
                    <button type="button" className="btn w-editsavebutton">儲存修改 Save</button>
                </div>
            </div>

        </>
    )
}

export default ProfileEdit