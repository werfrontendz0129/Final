import React, {useState, useEffect} from 'react'
import './MemberContent.scss'
import {Accordion, Button, Card, ListGroup} from 'react-bootstrap'
import { BsChevronUp } from "react-icons/bs"
import { Link } from 'react-router-dom'
import axios from 'axios'

function MemberContent(props) {
  // console.log('test', props)
  // const {data, setData} = useState([])
  // console.log(data)
//   useEffect(() => {
//     //取該會員的資料
//         axios.get(`http://localhost:3001/members/${props.id}`)
//         .then((response)=> {
//             // console.log(response)

//             //有資料的話
//             if(response.data){
//                 setData(response.data)
//             }
//         }).catch((err) => console.log(err))
    
// },[])

    return (
        <>
        <Accordion defaultActiveKey="0">
        <Card className="w-card">
          <Card.Header
          style={{background:'#e6e9da', height:'50px'}}>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        <p className="w-cardlistp d-inline">
                          會員中心
                          <BsChevronUp className="w-iconup" size="20" />
                      </p> 
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
            <ListGroup.Item as="li"><Link to={`/member/${props.id}`}>帳戶資訊</Link></ListGroup.Item>
                      <ListGroup.Item as="li" ><Link to={props && `/member/memberedit/${props.id}`}>編輯個人檔案</Link></ListGroup.Item>
                      <ListGroup.Item as="li"><Link to={props && `/member/notifications/${props.id}`}>訊息通知</Link></ListGroup.Item>
                      <ListGroup.Item as="li"><Link to={props && `/member/mycollections/${props.id}`}>我的收藏</Link></ListGroup.Item>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className="w-card">
          <Card.Header style={{background:'#e6e9da'}}>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
            <p className="w-cardlistp d-inline">
                          訂單管理
                          <BsChevronUp className="w-iconup" size="20" />
                      </p> 
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
            <ListGroup.Item as="li"><Link to={`/member/rentalorder/${props.id}`}>租賃訂單管理</Link></ListGroup.Item>
              <ListGroup.Item as="li"><Link to={`/member/purchaseorder/${props.id}`}>選購訂單管理</Link></ListGroup.Item>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className="w-card">
          <Card.Header style={{background:'#e6e9da'}}>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
            <p className="w-cardlistp d-inline">
                          課程管理
                          <BsChevronUp className="w-iconup" size="20" />
                      </p>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
            <ListGroup.Item as="li"><Link to={`/member/lesson/${props.id}`}>課程預約管理</Link></ListGroup.Item>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        </Accordion>
        </>
    )
}

export default MemberContent