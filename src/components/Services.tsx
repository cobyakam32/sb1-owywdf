import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileText, Palette, Globe, BarChart3 } from 'lucide-react';

const services = [
  {
    title: 'Professional Writing Services',
    icon: FileText,
    description: 'Crafting compelling CVs, Statements of Purpose, Cover Letters, and Application Letters that make you stand out.',
    samples: [
      {
        title: 'Executive CV Redesign',
        image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070',
        description: 'Complete professional profile makeover'
      },
      {
        title: 'Academic SOP',
        image: 'https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=2069',
        description: 'Graduate school application statement'
      },
      {
        title: 'Cover Letter',
        image: 'https://images.unsplash.com/photo-1506784926709-22f1ec395907?q=80&w=2068',
        description: 'Tech industry application letter'
      }
    ]
  },
  {
    title: 'Creative Design Solutions',
    icon: Palette,
    description: 'Bringing your vision to life with stunning graphic designs, including logos, flyers, banners, and more.',
    samples: [
      {
        title: 'Brand Identity',
        image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=2064',
        description: 'Complete brand package'
      },
      {
        title: 'Event Flyer',
        image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071',
        description: 'Modern event promotion'
      },
      {
        title: 'Social Media Kit',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2074',
        description: 'Cohesive social presence'
      }
    ]
  },
  {
    title: 'Web Development',
    icon: Globe,
    description: 'Building modern, responsive websites that represent your brand.',
    samples: [
      {
        title: 'E-Commerce Platform',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015',
        description: 'Full-featured online store'
      },
      {
        title: 'Portfolio Website',
        image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055',
        description: 'Creative showcase platform'
      },
      {
        title: 'Corporate Website',
        image: 'https://images.unsplash.com/photo-1480694313141-fce5e697ee25?q=80&w=2070',
        description: 'Professional business presence'
      }
    ]
  },
  {
    title: 'Power BI & Data Analytics',
    icon: BarChart3,
    description: 'Turning data into insights with interactive dashboards and reports to drive business decisions.',
    samples: [
      {
        title: 'Sales Dashboard',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070',
        description: 'Real-time sales tracking'
      },
      {
        title: 'Marketing Analytics',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015',
        description: 'Campaign performance metrics'
      },
      {
        title: 'Financial Reports',
        image: 'https://images.unsplash.com/photo-1554774853-719586f82d77?q=80&w=2070',
        description: 'Interactive financial analysis'
      }
    ]
  }
];

export default function Services() {
  return (
    <div id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          Our Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.1
            });

            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-all"
              >
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-blue-500 mr-3" />
                  <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-400 mb-6">{service.description}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {service.samples.map((sample, sampleIndex) => (
                    <div key={sampleIndex} className="group relative overflow-hidden rounded-lg">
                      <img 
                        src={sample.image} 
                        alt={sample.title}
                        className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 p-4">
                          <h4 className="text-white font-semibold">{sample.title}</h4>
                          <p className="text-gray-300 text-sm">{sample.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}