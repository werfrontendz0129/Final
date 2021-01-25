import React, {useState,useEffect} from 'react'
import './MyCollectionTable.scss'
import ClicktoCartButton from '../ClicktoCartButton/ClicktoCartButton'
import {Modal, Button} from 'react-bootstrap'
import {NavLink,useHistory,withRouter} from 'react-router-dom'
import MyCollectionNone from '../MyCollectionNone/MyCollectionNone'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

// 測試data
// import data from '../../data/collectionsdata'

function MyCollectionTable(props) {
    const [collections, setCollections] = useState([])
    // console.log('collections:',collections)

    //
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // sweet alert
    const MySwal = withReactContent(Swal)

    let history = useHistory()

    // const _id = 1

    async function deleteCollections(index){
        const member_id = 1
        try {
            const response = await fetch(
                'http://localhost:3001/members/deleteCollections/' + index + '/' + member_id,
                {
                    method:'delete'
                }
            )
            if(response.ok){
                // reload data
                // const data = await response.json()
                // const datas = data[0].collections

                // setCollections(datas)
                // window.location.reload()
                getCollections()
                history.push('/MyCollections')
               
            } 
        } catch(error) {
            console.log('error',error)
        }
    }



    async function getCollections(){
        try {
            const response = await fetch(
                'http://localhost:3001/members',
                {
                    method:'get',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                }
            )
            if(response.ok){
                const data = await response.json()
                // data是所有會員資料
                console.log('data?:',data)
                // 測試
                const datas = data[0].collections
                // datas是第1個會員的所有收藏資料
                console.log('datas?:',datas)

                setCollections(datas)
            } 
        } catch {
            alert('no data')
        }
    }

    // async function getMember(id){
    //     try {
    //         const response = await fetch(
    //             'http://localhost:3001/members/' + id,
    //             {
    //                 method:'get',
    //                 headers: {
    //                     Accept: 'application/json',
    //                     'Content-Type': 'application/json',
    //                 },
    //             }
    //         )
    //         if(response.ok){
    //             const data = await response.json()
    //             const datas = data[0].collections
                
    //             console.log(data)
    //             setCollections(datas)
                
                
    //         } 
    //     } catch(error) {
    //         console.log('error',error)
    //     }
    // }

    useEffect(()=>{
        getCollections()
        // getMember(_id)
    },[])

    const display = (
        <>
            <table className="table" style={{width: 900}}>
                        <thead className="w-mycollect-tablehead" style={{backgroundColor: '#E6E9DA'}}>
                            <tr>
                                <th scope="col" style={{width: 180}}></th>
                                <th scope="col" style={{width: 270}}>商品</th>
                                <th scope="col" style={{width: 150}}>價格</th>
                                <th scope="col" style={{width: 200}}>加入購物車</th>
                                <th scope="col" style={{width: 100}}>移除收藏</th>
                            </tr>
                        </thead>
                        <tbody className="w-mycollect-tablebody">
                            {collections.map((v, i)=>{
            return(
                <tr key={i}>
            <td className="align-middle">
                <img className="w-collect-pics" src={v.product_img} alt="" />                    
            </td>                                        
            <td className="align-middle">
                <div className="w-collect-prod d-inline-block">
                    <span>{v.product_name}</span>
                    <p>{v.product_info}</p>                 
                </div>                    
            </td>                    
            <td className="align-middle" style={{color: '#E58F80'}}>
                <p>NT$ {v.product_price}</p>
            </td>
            <td className="align-middle d-flex justify-content-center">
                <ClicktoCartButton />
            </td>
            <td className="align-middle" style={{textAlign: 'center',maxWidth:100}}>
            <button
                                            type="button" 
                                            className="close w-remove" 
                                            id="w-rrrmove" 
                                            aria-label="Close" 
                                            onClick={()=>{
                                                MySwal.fire({
                                                    title: '是否刪除收藏？',
                                                    icon: 'warning',
                                                    showCancelButton: true,
                                                    confirmButtonColor: '#3085d6',
                                                    cancelButtonColor: '#d33',
                                                    confirmButtonText: '是，我要刪除!'
                                                    }).then((result) => {
                                                    if (result.isConfirmed) {
                                                        Swal.fire(
                                                        'Deleted!',
                                                        deleteCollections(v.index),
                                                        'success'
                                                        )
                                                    }
                                                    })
                                            }}
                                            >
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                {/* <button 
                    type="button" 
                    className="close w-remove" 
                    id="w-rrrmove" 
                    aria-label="Close"               
                    onClick={handleShow}>                        
                    <span aria-hidden="true">&times;</span>
                    </button>
                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                        <Modal.Title>刪除收藏？</Modal.Title>
                                        </Modal.Header>
                                            <Modal.Body>
                                            <button 
                                            type="button" 
                                            className="close w-remove" 
                                            aria-label="Close" 
                                            onClick={()=>{deleteCollections(v.index)}}>
                                            <span aria-hidden="true">是，刪除收藏！</span>
                                            </button>
                                            </Modal.Body>
                                            <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose}>
                                                否，回到我的收藏
                                            </Button>
                                            </Modal.Footer>
                                        </Modal> */}
                                        
            </td>
        </tr>
            )
        })}
                        </tbody>
                    </table>
        </>
    )

    const none = (
        <MyCollectionNone />
        // <MyCollectionNone>
        // <div className="w-collect-none">
        //     <p>目前還沒有收藏商品，快去選購吧</p>
        //     <div className="d-flex">
        //         <NavLink to="/member" className="w-btn-viewlesson">植物租賃</NavLink>                
        //         <NavLink to="/member" className="w-btn-viewlesson">植物選購</NavLink>  
        //     </div>   
        // </div>
        // </MyCollectionNone>
    )


    return (
        <>
        {collections == 0 ? none : display }
        {/* <table className="table" style={{width: 900}}>
                        <thead className="w-mycollect-tablehead" style={{backgroundColor: '#E6E9DA'}}>
                            <tr>
                                <th scope="col" style={{width: 180}}></th>
                                <th scope="col" style={{width: 270}}>商品</th>
                                <th scope="col" style={{width: 150}}>價格</th>
                                <th scope="col" style={{width: 200}}>加入購物車</th>
                                <th scope="col" style={{width: 100}}>移除收藏</th>
                            </tr>
                        </thead>
                        <tbody className="w-mycollect-tablebody">
                            {collections.map((v, i)=>{
            return(
                <tr key={i}>
            <td className="align-middle">
                <img className="w-collect-pics" src={v.product_img} alt="" />                    
            </td>                                        
            <td className="align-middle">
                <div className="w-collect-prod d-inline-block">
                    <span>{v.product_name}</span>
                    <p>{v.product_info}</p>                 
                </div>                    
            </td>                    
            <td className="align-middle" style={{color: '#E58F80'}}>
                <p>NT$ {v.product_price}</p>
            </td>
            <td className="align-middle d-flex justify-content-center">
                <ClicktoCartButton />
            </td>
            <td className="align-middle" style={{textAlign: 'center',maxWidth:100}}>
                <button 
                    type="button" 
                    className="close w-remove" 
                    id="w-rrrmove" 
                    aria-label="Close"               
                    onClick={handleShow}>                        
                    <span aria-hidden="true">&times;</span>
                    </button>
                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                        <Modal.Title>刪除收藏？</Modal.Title>
                                        </Modal.Header>
                                            <Modal.Body>
                                            <button 
                                            type="button" 
                                            className="close w-remove" 
                                            aria-label="Close" 
                                            onClick={()=>{deleteCollections({i})}}>
                                            <span aria-hidden="true">刪除收藏！</span>
                                            </button>
                                            </Modal.Body>
                                            <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose}>
                                                否，回到我的收藏
                                            </Button>
                                            </Modal.Footer>
                                        </Modal>
                                        
            </td>
        </tr>
            )
        })}
                        </tbody>
                    </table> */}
        </>
    )
}

export default withRouter(MyCollectionTable)