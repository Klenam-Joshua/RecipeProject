import { useState } from "react";
import Api from "../Components/Api/Api";


export const usePostData = (url,data) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [isError, setIsError] = useState(false);



         const postData =  (url ,data)=>{
            setIsLoading(true);
        
               Api.post(url,data).then((response)=>{
                    setIsLoading(false);
                    setIsSent(true)
                  }).catch((error)=>{
                        setIsError(true);
                        console.log(error)
                        setIsLoading(false)
                  })
                     

               return {isLoading, isSent}   
         }

 
        



         return   {postData}  ;
}


