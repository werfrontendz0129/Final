import React, { useState } from 'react'
import './AccountView.scss'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom'

function AccountView() {
  return (
    <>
      <div className="w-account-view">
        <div className="w-div-title">
          <p>帳戶概覽</p>
        </div>
        <div className="w-account-view-main">
          <form action="">
            <div className="form-group row">
              <label for="" className="col-sm-4 col-form-label">
                帳號 Account
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  readonly
                  className="form-control-plaintext"
                  id=""
                  value="traveler00035@gmail.com"
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="" className="col-sm-4 col-form-label">
                姓名 Name
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  readonly
                  className="form-control-plaintext"
                  id=""
                  value="Viviana"
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="" className="col-sm-4 col-form-label">
                性別 Gender
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  readonly
                  className="form-control-plaintext"
                  id=""
                  value="不透露"
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="" className="col-sm-4 col-form-label">
                手機號碼 Phone
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  readonly
                  className="form-control-plaintext"
                  id=""
                  value="0978-221317"
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="" className="col-sm-4 col-form-label">
                出生日期 Birth Date
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  readonly
                  className="form-control-plaintext"
                  id=""
                  value="1994 - 04 - 05"
                />
              </div>
            </div>
          </form>
          <NavLink
            to="/"
            type="button"
            className="w-accounteditbutton text-center"
          >
            編輯個人檔案 Edit
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default AccountView
