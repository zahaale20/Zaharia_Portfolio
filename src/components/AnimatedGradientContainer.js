import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import { PageContainer } from './PageContainer'; // Ensure this path is correct.

const AnimatedGradientContainer = () => {
    const gradientRef = useRef(null);

    useEffect(() => {
        anime({
            targets: {}, // Empty object because we're manually updating styles
            duration: 15000,
            easing: 'linear',
            loop: true,
            direction: 'alternate',
            gradOneXPos: [20, 60],
            gradOneYPos: [20, 80],
            gradTwoXPos: [80, 40],
            gradTwoYPos: [20, 80],
            gradThreeXPos: [20, 60],
            gradThreeYPos: [80, 40],
            gradFourXPos: [80, 40],
            gradFourYPos: [80, 40],
            update: function(anim) {
                // Iterate over all animations to find and update the corresponding CSS variable
                anim.animations.forEach(({ property, currentValue }) => {
                    gradientRef.current.style.setProperty(`--${property}`, `${currentValue}%`);
                });
            }
        });
    }, []);

    return <PageContainer ref={gradientRef} />;
};

export default AnimatedGradientContainer;