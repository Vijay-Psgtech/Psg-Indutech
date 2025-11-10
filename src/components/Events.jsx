import React from 'react';
import { motion } from 'framer-motion';

const events = [
    {
        title: "Workshop on FESEM 3D Profilometer",
        date: "Sep 25 2023",
        link: "#"
    },
    {
        title: "Tender for Supply of Lab Equipments",
        date: "Oct 3 2024",
        link: "#"
    },
    {
        title: "Seminar on Technical Textile Innovations",
        date: "Nov 20 2024",
        link: "#"
    }
];

const Events = () => {
  return (
    <section className='bg-white py-16'>
        <div className='container mx-auto px-4 md:px-8'>
            <motion.h2
                className='text-2xl font-bold text-center text-blue-900 mb-10'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                Upcoming Events
            </motion.h2>
            <div className='grid md:grid-cols-3 gap-6'>
                {events.map((event, idx) =>(
                    <motion.div
                        key={idx}
                        className='p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2'
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className='font-semibold text-lg text-blue-800 mb-2'>
                            {event.title}
                        </h3>
                        <p className='text-gray-600 text-sm'>{event.date}</p>
                        <a 
                            href={event.link}
                            className='text-blue-600 mt-3 inline-block text-sm font-medium hover:underline'
                        >
                            Learn more →
                        </a>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Events