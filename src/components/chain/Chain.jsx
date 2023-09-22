import React, { useEffect, useState } from "react"
import { useIntersectionObserver } from 'react-intersection-observer-hook'
import './chain.css'


const Chain = ( {content} ) => {
    const [animationPadding, setAnimationPadding] = useState(0)
    const [ref, { entry }] = useIntersectionObserver()
    const isVisible = entry && entry.isIntersecting


    const onScrollLogic = (position) => {
        setAnimationPadding(position)
    }


    useEffect(() => {
        // console.log(`The component is ${isVisible ? 'visible' : 'not visible'}.`)
        
        if(isVisible) {
            let ticking = false;
            let lastKnownScrollPosition = 0

            const handleScroll = () => {
                lastKnownScrollPosition = window.scrollY

                if (!ticking) {
                    window.requestAnimationFrame(() => {
                        onScrollLogic(lastKnownScrollPosition)
                        ticking = false
                    })

                    ticking = true
                }
            }

            document.addEventListener("scroll", handleScroll)

            return () => {
                document.removeEventListener("scroll", handleScroll)
            }
        }
        
    }, [isVisible])

    return ( 
        <section ref={ref} className="chain">
            <div className="gradient-text">
                <div 
                    className="chain_content" 
                    style={{
                        marginLeft: '-2000px',
                        paddingLeft: animationPadding
                    }} >
                    { Array
                        .from({length: 15}, (_, i) => i)
                        .map((id) => <span key={ id }> { content } </span> ) }
                </div>
            </div>
        </section>
     );
}
 
export default Chain;