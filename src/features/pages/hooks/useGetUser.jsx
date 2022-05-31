import { useState } from "react"

export function useGetUser() {
    const [data, setData] = useState({});

    async function getUser() {
        try {
            const user = await fetch('https://api.github.com/users/julianasinnott');
            const result = await user.json()
            if(result?.id) {
                setData(result)
            }
        } catch(err) {
            console.log('error: ', err)
        }
    }

    return {
        data,
        getUser,
    }
}