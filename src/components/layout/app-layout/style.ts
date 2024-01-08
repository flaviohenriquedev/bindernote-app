import tw from 'tailwind-styled-components'

export const SAppLayoutContainer = tw.header`
    flex
    flex-col
    w-screen
    h-screen
`
export const SAppLayoutHeader = tw.header`
    fixed
    
    flex
    items-center
    justify-between
    px-10
    w-full
    min-h-[4rem]
    max-h-[4rem]
    bg-primary
    text-primary-content
`

export const SAppLayoutContent = tw.div`
    w-full
    h-full
    pt-[4rem]
`
