const ROOT = process.env.NEXT_PUBLIC_API_ROOT

const request = async <T>(path: string): Promise<T | null> => {
    const url = ROOT + path

    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        const json = await response.json()
        return json
    } catch (error) {
        console.error(error)
    }

    return null
}

export default request
