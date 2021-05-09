import { getCurrentPosition, sortByDistance } from './geolocation'

const mockGeolocation = {
    getCurrentPosition: jest.fn(),
}

Object.defineProperty(navigator, 'geolocation', { value: mockGeolocation, writable: true })

const clouds = [
    {
        cloud_description: 'United States, New York - DigitalOcean: New York',
        cloud_name: 'do-nyc',
        geo_latitude: 40.7,
        geo_longitude: -70,
        geo_region: 'north america',
    },
    {
        cloud_description: 'United States, New York - UpCloud: New York',
        cloud_name: 'upcloud-us-nyc',
        geo_latitude: 40.73,
        geo_longitude: -73.94,
        geo_region: 'north america',
    },
    {
        cloud_description: 'United States, Ohio - Amazon Web Services: Ohio',
        cloud_name: 'aws-us-east-2',
        geo_latitude: 40.24,
        geo_longitude: -82.88,
        geo_region: 'north america',
    },
    {
        cloud_description: 'Europe, Finland - Google Cloud: Finland',
        cloud_name: 'google-europe-north1',
        geo_latitude: 60.5693,
        geo_longitude: 27.1878,
        geo_region: 'europe',
    },
]

describe('geolocation', () => {
    describe('getCurrentPosition', () => {
        it('returns promise', () => {
            const position = getCurrentPosition()
            expect(position).toBeInstanceOf(Promise)
        })
    })
    describe('sortByDistance', () => {
        it('should return same array without coordinates', () => {
            const sorted = sortByDistance(clouds, undefined)
            expect(sorted).toEqual(clouds)
        })
        it('should prioritize google with Helsinki coordinates', () => {
            const [first] = sortByDistance(clouds, { latitude: 60.1733244, longitude: 24.9410248 })
            expect(first.cloud_name).toEqual('google-europe-north1')
        })
        it('should prioritize upcloud with exact coordinates', () => {
            const [first] = sortByDistance(clouds, { latitude: 40.73, longitude: -73.94 })
            expect(first.cloud_name).toEqual('upcloud-us-nyc')
        })
    })
})
