import { motion, useReducedMotion } from 'framer-motion'
import heroGraphic from '../assets/hashim.png'

function HeroVisual({ alt }) {
  const reduceMotion = useReducedMotion()

  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div
        aria-hidden="true"
        className="absolute inset-4 translate-x-3 translate-y-3 border border-line md:inset-6"
      />
      <div className="relative border border-line bg-ink">
        <motion.img
          src={heroGraphic}
          alt={alt}
          className="mx-auto h-auto w-[78%] py-10 md:py-14"
          animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
          transition={
            reduceMotion
              ? undefined
              : { duration: 6, repeat: Infinity, ease: 'easeInOut' }
          }
        />
      </div>
    </div>
  )
}

export default HeroVisual
