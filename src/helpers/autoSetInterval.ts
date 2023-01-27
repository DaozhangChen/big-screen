import { remWidth } from "./remWidth"

export const autoSetInterval = (refTbody: HTMLTableSectionElement, refStartHeight: number, refHeight: number) => {
    const x = setInterval(() => {
        refTbody.scrollTo({ top: refStartHeight + 1 })
        refStartHeight += 1
        if (refStartHeight >= refHeight! - remWidth(150)) {
            const y = setInterval(() => {
                refTbody?.scrollTo({ top: refStartHeight - 1 })
                refStartHeight -= 1
                if (refStartHeight <= -30) {
                    autoSetInterval(refTbody, refStartHeight, refHeight)
                    clearInterval(y)
                }
            }, 100)
            clearInterval(x)
        }
    }, 50)
}