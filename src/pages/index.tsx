import { useState, useEffect } from 'react'
import Cloud from 'types/cloud'
import request from 'utils/request'
import { Coordinates, sortByDistance, getCurrentPosition } from 'utils/geolocation'
import { Provider, cloudProviders, filterByProvider } from 'utils/provider'
import List from 'containers/List'
import Select from 'containers/Select'
import Switch from 'containers/Switch'

import MuiList from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'

const Page = () => {
    const [clouds, setClouds] = useState<Cloud[]>([])
    const [providers, setProviders] = useState<Provider[]>([])
    const [position, setPosition] = useState<Coordinates>()
    const [useDistance, setUseDistance] = useState<boolean>(false)
    const [distanceFeedback, setDistanceFeedback] = useState<string>()

    useEffect(() => {
        const fetchData = async () => {
            const data = await request<{ clouds: Cloud[] }>('/clouds')
            if (data) {
                setClouds(data.clouds)
            }
        }
        fetchData()
    }, [])

    useEffect(() => {
        const getPosition = async () => {
            if (useDistance && !position) {
                setDistanceFeedback('Locating...')
                try {
                    const currentPosition = await getCurrentPosition()
                    const { latitude, longitude } = currentPosition.coords
                    setPosition({ latitude, longitude })
                    setDistanceFeedback(undefined)
                } catch (error) {
                    setUseDistance(false)
                    setDistanceFeedback('Unable to locate')
                }
            }
        }
        getPosition()
    }, [useDistance])

    return (
        <Box py={3}>
            <Select items={cloudProviders} label="Select cloud provider" onChange={setProviders} id="provider-select" />
            <Switch
                label="Sort by distance"
                checked={useDistance}
                onChange={setUseDistance}
                helperText={distanceFeedback}
            />
            <List
                Container={MuiList}
                items={sortByDistance(filterByProvider(clouds, providers), useDistance ? position : undefined)}
                renderItem={(cloud) => (
                    <Paper variant="outlined" style={{ marginBottom: 8 }} key={cloud.cloud_name}>
                        <ListItem>
                            <ListItemText primary={cloud.cloud_description} secondary={cloud.cloud_name} />
                        </ListItem>
                    </Paper>
                )}
            />
        </Box>
    )
}

export default Page
