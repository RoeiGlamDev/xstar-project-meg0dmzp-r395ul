import { useEffect, useRef } from 'react';

/
 * Custom hook to handle animations for luxury LRP cosmetics.
 * This hook provides elegant animations for a high-end user experience,
 * utilizing 3D designs and effects that reflect the luxury cosmetics industry.
 * 
 * @returns {Object} - Object containing animation control functions.
 */
export const useAnimation = () => {
    const elementRef = useRef<HTMLDivElement | null>(null);

    /
     * Initializes the luxury animation effect.
     * This function adds a 3D rotation effect to the element 
     * when it comes into view, enhancing the luxurious feel of the brand.
     */
    const initAnimation = () => {
        if (elementRef.current) {
            const element = elementRef.current;
            element.style.transition = 'transform 0.6s ease-in-out, opacity 0.6s ease-in-out';
            element.style.opacity = '0';
            element.style.transform = 'rotateY(20deg) translateZ(30px)';
            
            const handleScroll = () => {
                const rect = element.getBoundingClientRect();
                const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
                if (isVisible) {
                    element.style.opacity = '1';
                    element.style.transform = 'rotateY(0deg) translateZ(0)';
                    window.removeEventListener('scroll', handleScroll);
                }
            };

            window.addEventListener('scroll', handleScroll);
            handleScroll(); // Check visibility on initial load
        }
    };

    useEffect(() => {
        initAnimation();
        return () => {
            window.removeEventListener('scroll', initAnimation);
        };
    }, []);

    return { elementRef };
}; 

/
 * Interface for our luxury LRP cosmetics animation properties.
 * This interface defines the structure for the animation state 
 * utilized across different components of the website.
 */
export interface AnimationProps {
    elementRef: React.RefObject<HTMLDivElement>;
}

/
 * Exports the useAnimation hook for use in luxury LRP cosmetics components.
 */
export default useAnimation;