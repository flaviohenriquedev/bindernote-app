import tw from 'tailwind-styled-components'

export const SPageLayoutContainer = tw.div`
    fixed
    
    flex
    w-full
    h-full
    pt-2
`
export const SPageLayoutContent = tw.div`
    flex
    justify-center
    bg-red-400
    w-full
    h-full
    overflow-y-scroll
    scrollbar-thin
    scrollbar-thumb-primary
`

export const SPageSection = tw.section`
    p-10
`

export const STextarea = tw.textarea`
    w-[50rem]
    min-h-[60rem]
    max-h-[60rem]
    resize-none
    outline-none
    p-10
`
