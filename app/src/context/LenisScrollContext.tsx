import { createContext, useContext } from 'react'
import type { RefObject } from 'react'
import Lenis from 'lenis'

const LenisScrollContext = createContext<RefObject<Lenis | null>>({ current: null })

export const useLenis = () => useContext(LenisScrollContext)

export default LenisScrollContext
