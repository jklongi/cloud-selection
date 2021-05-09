import Cloud from 'types/cloud'

export enum Provider {
    AWS = 'aws',
    AZURE = 'azure',
    GOOGLE = 'google',
    DIGITALOCEAN = 'do',
    UPCLOUD = 'upcloud',
}

export const cloudProviders = [
    {
        name: 'Amazon Web Services',
        value: Provider.AWS,
    },
    {
        name: 'Azure',
        value: Provider.AZURE,
    },
    {
        name: 'Google Cloud',
        value: Provider.GOOGLE,
    },
    {
        name: 'DigitalOcean',
        value: Provider.DIGITALOCEAN,
    },
    {
        name: 'UpCloud',
        value: Provider.UPCLOUD,
    },
]

export const filterByProvider = (clouds: Cloud[], providers: Provider[]) =>
    providers.length === 0
        ? clouds
        : clouds.filter((cloud) => {
              const [provider] = cloud.cloud_name.split('-')
              return providers.includes(provider as Provider)
          })
