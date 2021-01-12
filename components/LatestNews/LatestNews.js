import React from 'react'
import './LatestNews.scss'
import { BsChevronRight } from "react-icons/bs"

function LatestNews() {
    return (
        <>
            <div className="w-latestnews">
                <div className="w-div-title">
                    <p>最新消息</p>
                </div>
                <div className="w-news-main">
                    <p>【帳戶通知】您在2020年12月1日修改了個人檔案
                    <BsChevronRight className="w-iconright" size="20" />
                    </p>
                    <hr/>
                    <p>【訂單通知】您在2020年12月1日訂購了琴葉榕大型植栽
                    <BsChevronRight className="w-iconright" size="20" />
                    </p>
                    <hr/>
                    <p>【預約通知】您在2020年12月1日預約了雞蛋花手作課程
                    <BsChevronRight className="w-iconright" size="20" />
                    </p>
                </div>
            </div>
        </>
    )
}

export default LatestNews