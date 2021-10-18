import { useState, useCallback } from "react";

const useCommands = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const startGame = useCallback( async (applyData) => { 
        setIsLoading(true)
        setError(null)

        try {
            const response = await fetch('/game')

            if(!response.ok){
                throw new Error('Request failed!')
            }

            const data = await response.json()
            //console.log(data)
            applyData(data)
        }
        catch(error){
            setError(error.message || "An error occurred")
        }

        setIsLoading(false)
    }, [])

    const sendCommand = useCallback( async (requestConfig, applyData) => {
        setIsLoading(true)
        setError(null)
        
        try {
            const response = await fetch('/game', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestConfig)
            })

            if(!response.ok){
                throw new Error('Request failed!')
            }

            const data = await response.json()
            console.log(data)
            applyData(data)
        }
        catch(error){
            setError(error.message || "An error occurred")
        }

    }, [] )

    return {
        isLoading,
        error,
        startGame,
        sendCommand
    }
}

export default useCommands