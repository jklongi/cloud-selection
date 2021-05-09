import { getDistance } from 'geolib'
import Cloud from 'types/cloud'

export type Coordinates = {
    longitude: number
    latitude: number
}

export const getCurrentPosition = () => {
    return new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        })
    })
}

export const sortByDistance = (clouds: Cloud[], position?: Coordinates) =>
    position === undefined
        ? clouds
        : [...clouds].sort((a, b) => {
              const distanceToA = getDistance(position, { latitude: a.geo_latitude, longitude: a.geo_longitude })
              const distanceToB = getDistance(position, { latitude: b.geo_latitude, longitude: b.geo_longitude })
              return distanceToA - distanceToB
          })
