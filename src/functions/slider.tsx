import { useState } from 'react'

export const Slider = (slides: string[]) => {
    const [ current, setCurrent ] = useState(0)
    return {
        prev: () => setCurrent(curr => curr === 0 ? slides.length - 1 : curr - 1 ),
        next: () => setCurrent(curr => curr === slides.length - 1 ? 0 : curr + 1),
        current
    }
}
