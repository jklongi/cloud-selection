import request from './request'

const mockFetch = jest.fn()

mockFetch.mockImplementation(() =>
    Promise.resolve({
        json: () => Promise.resolve([]),
        ok: true,
    }),
)

window.fetch = mockFetch

describe('request', () => {
    it('calls fetch', () => {
        request('/clouds')
        expect(mockFetch).toHaveBeenCalled()
    })
    it('returns json', async () => {
        const response = await request('/clouds')
        expect(response).toEqual([])
    })
    it('null when rejected', async () => {
        mockFetch.mockImplementationOnce(() => Promise.reject('error'))
        const response = await request('/clouds')
        expect(response).toEqual(null)
    })
    it('null when status !ok', async () => {
        mockFetch.mockImplementation(() =>
            Promise.resolve({
                json: () => Promise.resolve([]),
                ok: false,
            }),
        )
        const response = await request('/clouds')
        expect(response).toEqual(null)
    })
})
