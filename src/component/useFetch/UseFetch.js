function useFetch(url,method,result,err){
    const response = new fetch(url,{
        method:method,
        headers:{
            Accept:'application/json',
            'Content-Type': 'application/json',
        }
    });
    if(response.ok){
        return result = response.json()
    }else{
       return err = {message:"something wrong"}
    }
}

export default useFetch