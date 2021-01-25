import React from 'react'
import './MyBreadcrumb.scss'
import {Breadcrumb} from 'react-bootstrap'
import {withRouter, Link} from 'react-router-dom'
import {pathnameList, pathnameTextList} from '../../config'

function MyBreadcrumb(props) {
    const {location} = props

    const findPathnameIndex = (pathname) =>
        pathnameList.findIndex((v, i) => v === pathname)

    const formatText = (index) => {
        const textArray = pathnameTextList[index].split('/')

        const pathArray = pathnameList[index].split('/')

        const listArray = textArray.map((v, i, array) => {
            if (i === 0) return ''

            if (i === array.length - 1) {
                return (
                    <li className = "breadcrumb-item active" aria-current="page">{v}</li>
                )
            }

            return (
                <li className = "breadcrumb-item">
                    <Link to={pathArray.slice(0, i + 1).join('/')}>
                    {v}
                    </Link>
                </li>
            )
        })

        return listArray
    }

    return (
        <>
        <Breadcrumb className="memberbreadcrumb">
            <Breadcrumb.Item to="/">首頁</Breadcrumb.Item>
            {formatText(findPathnameIndex(location.pathname))}
        </Breadcrumb>
        </>
    )
}


export default withRouter(MyBreadcrumb)