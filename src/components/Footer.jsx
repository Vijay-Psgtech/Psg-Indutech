import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
  <motion.footer
    className='text-gray-300 py-6'
    style={{ backgroundColor: 'var(--color-deep-indigo)' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
    >
        <div className='container mx-auto px-4 text-center text-md'>
            <p className='text-gray-200'>© { new Date().getFullYear()} PSG Tech's COE INDUTECH. All Rights Reserved.</p>
            <p className='text-sm mt-2 text-gray-400'>Developed by Central IT services Team</p>
        </div>
    </motion.footer>
  )
}

export default Footer