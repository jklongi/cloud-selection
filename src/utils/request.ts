export const ROOT = process.env.API_ROOT

const request = async <T>(path: string): Promise<T | null> => {
    const url = ROOT + path

    try {
        const response = await fetch(url)
        if (!response.ok) {
            return null
        }
        const json = await response.json()
        return json
    } catch (error) {
        console.log(error)
    }

    return null
}

export default request
