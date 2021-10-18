import { useState, useCallback } from "react";

const useUI = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const saveScore = useCallback( async (requestConfig) => { 
        setIsLoading(true)
        setError(null)

        try {
            const response = await fetch('/ranking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestConfig)
            })

            if(!response.ok){
                throw new Error('Request failed!')
            }
        }
        catch(error){
            setError(error.message || "An error occurred")
        }

        setIsLoading(false)
    }, [])

    const getRanking = useCallback( async (applyData)=>{
        setIsLoading(true)
        setError(null)

        try {
            const response = await fetch('/ranking')

            if(!response.ok){
                throw new Error('Request failed!')
            }

            const data = await response.json()

            applyData(data)
        }
        catch(error){
            setError(error.message || "An error occurred")
        }

        setIsLoading(false)
    }, [])
    return {
        isLoading,
        error,
        saveScore,
        getRanking
    }
}

export default useUI