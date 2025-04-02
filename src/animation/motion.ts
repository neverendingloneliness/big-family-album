export const slideUpAnimation = {
    initial: {
        opacity:0,
        y: 100
    },
    animate: (index: number) => ({
        opacity:1,
        y: 0,
        transition: {
            delay: 0.5 * index
        }
    })
}

export const opacityAnimation = {
    initial: {
        opacity:0,
    },
    animate: (index: number) => ({
        opacity:1,
        transition: {
            delay: 0.5 * index
        }
    })
}

export const slideUpAnimationReversed = {
    initial: {
        opacity:0,
        y: -100
    },
    animate: (index: number) => ({
        opacity:1,
        y: 0,
        transition: {
            delay: 0.5 * index
        }
    })
}

export const scaleRotateLeftAnimation = {
    initial: {
        opacity:0,
        y: 100,
        rotateZ: -20, 
    },
    animate: (index: number) => ({
        opacity:1,
        y: 0,
        rotateZ: 6, 
        transition: {
            delay: 0.5 * index,
        }
    })
}


export const scaleRotateRightAnimation = {
    initial: {
        opacity:0,
        y:100,
        rotateZ: 20, 
    },
    animate: (index: number) => ({
        opacity:1,
        y:0,
        rotateZ: -6, 
        transition: {
            delay: 0.5 * index,
        }
    })
}
