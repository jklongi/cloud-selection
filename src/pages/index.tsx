import { useState, useEffect } from 'react'
import Cloud from 'types/cloud'
import request from 'utils/request'
import List from 'containers/List'
import MuiList from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const Page = () => {
    const [clouds, setClouds] = useState<Cloud[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await request<{ clouds: Cloud[] }>('/clouds')
            if (data) {
                setClouds(data.clouds)
            }
        }
        fetchData()
    }, [])

    return (
        <List
            Container={MuiList}
            items={clouds}
            renderItem={(cloud) => (
                <ListItem key={cloud.cloud_name}>
                    <ListItemText primary={cloud.cloud_name} secondary={cloud.cloud_description} />
                </ListItem>
            )}
        />
    )
}

export default Page
