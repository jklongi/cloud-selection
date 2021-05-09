import { filterByProvider, Provider } from './provider'

const clouds = [
    {
        cloud_description: 'United States, Nevada - Google Cloud: Las Vegas',
        cloud_name: 'google-us-west4',
        geo_latitude: 36.11,
        geo_longitude: -115.17,
        geo_region: 'north america',
    },
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
]

describe('provider', () => {
    describe('filterByProvider', () => {
        it('returns all with no selected providers', () => {
            const filtered = filterByProvider(clouds, [])
            expect(filtered).toHaveLength(4)
        })
        it('returns one with single provider', () => {
            const filtered = filterByProvider(clouds, [Provider.AWS])
            expect(filtered).toHaveLength(1)
        })
        it('returns two with two providers', () => {
            const filtered = filterByProvider(clouds, [Provider.AWS, Provider.DIGITALOCEAN])
            expect(filtered).toHaveLength(2)
        })
        it('returns all with all providers', () => {
            const filtered = filterByProvider(clouds, [
                Provider.AWS,
                Provider.DIGITALOCEAN,
                Provider.AZURE,
                Provider.GOOGLE,
                Provider.UPCLOUD,
            ])
            expect(filtered).toHaveLength(4)
        })
    })
})
