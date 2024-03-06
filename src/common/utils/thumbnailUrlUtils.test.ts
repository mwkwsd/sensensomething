import { getVideoProviderAndId } from "./thumbnailUrlUtils"

describe('Get provider and id function', () => {
  it('Returns youtube with a youtube url', () => {
    // GIVEN
    const url = 'https://www.youtube.com/embed/eM9IdWWfORM?si=VtYWe9KIFGbX455o'

    // WHEN
    const [provider, id] = getVideoProviderAndId(url)

    // THEN
    expect(provider).toBe('youtube')
    expect(id).toBe('eM9IdWWfORM')
  })

  it('Returns vimeo with a vimeo url', () => {
    // GIVEN
    const url = 'https://player.vimeo.com/video/222272362'

    // WHEN
    const [provider, id] = getVideoProviderAndId(url)

    // THEN
    expect(provider).toBe('vimeo')
    expect(id).toBe('222272362')
  })

  it('Returns unknown with a bad url with a vimeo url', () => {
    // GIVEN
    const url = 'https://player.vmeo.com/video/222272362'

    // WHEN
    const [provider, id] = getVideoProviderAndId(url)

    // THEN
    expect(provider).toBe('unknown')
    expect(id).toBeNull()
  })
})
