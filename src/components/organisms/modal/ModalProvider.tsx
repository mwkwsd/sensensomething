import { ReactNode, createContext, useState } from 'react'

type ModalContextType = {
  videoUrl: string | null
  showModal: (videoUrl: string) => void
  hideModal: () => void
}
export const ModalContext = createContext<ModalContextType>({
  videoUrl: null,
  showModal: () => {},
  hideModal: () => {},
})

type ModalProviderProps = {
  children?: ReactNode
}

export function ModalProvider({ children }: ModalProviderProps) {
  const [videoUrl, setVideoUrl] = useState<string | null>(null)

  function showModal(videoUrl: string) {
    setVideoUrl(videoUrl)
  }

  function hideModal() {
    setVideoUrl(null)
  }
  return (
    <ModalContext.Provider
      value={{
        videoUrl,
        showModal,
        hideModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}
