import React, {useState,useEffect} from 'react'
import './MyCollectionTable.scss'
import ClicktoCartButton from '../ClicktoCartButton/ClicktoCartButton'
import {NavLink,useHistory,withRouter} from 'react-router-dom'
import MyCollectionNone from '../MyCollectionNone/MyCollectionNone'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import axios from 'axios'

function MyCollectionTable(props) {
    const id = props.match.params.id //會員id
    // console.log('id???',id)

    const [collections, setCollections] = useState([]) //該會員的收藏商品
    const [data, setData] = useState([]) //放商品資料
    
    // sweet alert
    const MySwal = withReactContent(Swal)


    let history = useHistory()


    async function deleteCollections(index,product_id){
        try {
            const response = await fetch(
                'http://localhost:3001/members/deleteCollections/' + index + '/' + id + '/' + product_id,
                {
                    method:'delete'
                }
            )
            if(response.ok){
                // reload data
                setCollections(response.data)
                setTimeout(()=>{
                    window.location.replace('/member/mycollections/' + id)
                },1000)
                // history.push('/member/mycollections/'+ id)
               
            } 
        } catch(error) {
            console.log('error',error)
        }
    }

    useEffect(()=>{
        getMember(id)
    },[])

    useEffect(()=>{
        getCollections()
    },[collections])

    async function getMember(id){
        try {
            const response = await fetch(
                `http://localhost:3001/members/${id}`,
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
                // data是該會員的所有資料
                console.log('data?',data)
                let datas = data.collections.map((item)=> item.product_id)
                console.log(datas)
                
                setCollections(datas)
                // console.log(datas)
            } 
        } catch(error) {
            console.log('error:',error)
        }
    }

    function getCollections() {
        const data_arr = []
            if(collections) {
                collections.forEach((item)=> {
                    axios.get(`http://localhost:3001/members/collections/${item}`)
                    .then((response) => {                  
                        data_arr.push(response.data)
                        // console.log('test',response.data)
                    }).then(()=> {
                        const product_arr = collections.length || 0
                        if(data_arr.length == product_arr) {
                            setData(data_arr)
                            console.log('final', data)
                        }
                    })
                    .catch((err)=> console.log(err))
                })
            }
            
    }


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
                            {data && data.map((v, i)=>{
            return(
                <tr>
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
                <ClicktoCartButton id={v._id} />
            </td>
            <td className="align-middle" style={{textAlign: 'center',maxWidth:100}}>
            <button
                                            type="button" 
                                            className="close w-remove" 
                                            id="w-rrrmove" 
                                            aria-label="Close" 
                                            onClick={()=>{
                                                MySwal.fire({
                                                    title: '是否移除收藏？',
                                                    icon: 'warning',
                                                    showCancelButton: true,
                                                    confirmButtonColor: '#6c8650',
                                                    cancelButtonColor: '#d33',
                                                    confirmButtonText: '是，我要移除!',
                                                    cancelButtonText: '返回'
                                                    }).then((result) => {
                                                    if (result.isConfirmed) {
                                                        Swal.fire(
                                                        '移除收藏!',
                                                        deleteCollections(i,v._id),
                                                        'success'
                                                        )
                                                    }
                                                    })
                                            }}
                                            >
                                            <span aria-hidden="true">&times;</span>
                                        </button>                    
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
        
    )


    return (
        <>
        {collections == 0 ? none : display }
        </>
    )
}

export default withRouter(MyCollectionTable)