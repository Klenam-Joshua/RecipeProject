import { useEffect, useState } from 'react'
import Api from '../Components/Api/Api'

export const useFetch = (url, method="GET") => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [options, setOptions] = useState(null)

  const postData = (postData)=>{
     setOptions({
                   method:method,
                 
                  data:postData
                 
     })
  }


          useEffect(()=>{
             setIsLoading(true)
                  const fetchData = async (fetchOptions)=>{
                           try{
                               let response =  await Api(url,{fetchOptions})
                                setData(response.data)
                                console.log(response.data)
                                setIsLoading(false);
                           }
                           catch(error){
                            setIsLoading(false)
                            console.log(error)
                                    // console.log(error.response.status)
                           }
                  }

                    if(method ==="GET"){
                            fetchData()
                    }
                   if(method === "POST"  && options){
                          fetchData(options)
                    }
          },[method, options, url])

          return {data, isLoading, postData}
}


