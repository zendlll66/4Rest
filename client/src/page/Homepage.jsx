import React, { useState } from 'react'
import VideoBackground from '../components/common/VideoBackground'
import Cardblog from '../components/common/Cardblog'
import Navbar from '../components/common/Navbar'
import WeatherWidget from '../components/common/WeatherWidget'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSearch, FiMapPin, FiStar, FiMail } from 'react-icons/fi'

const Homepage = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedRegion, setSelectedRegion] = useState('all')
    
    const blogs = [
        {
            image: 1,
            title: 'กิ่วลม ดอยม่อนจอง, เชียงใหม่',
            description: 'จุดกางเต็นท์ท่ามกลางขุนเขาและลมหนาวที่เงียบสงบสุด ๆ เหมาะกับสายธรรมชาติแบบแท้จริง',
            date: '2025-01-01'
        },
        {
            image: 2,
            title: 'ปางอุ๋ง, แม่ฮ่องสอน',
            description: 'ทะเลสาบบนดอยที่ล้อมรอบด้วยป่าสน บรรยากาศเงียบสงบโรแมนติกเหมือนอยู่ต่างประเทศ',
            date: '2025-01-02'
        },
        {
            image: 3,
            title: 'บ้านแม่กำปอง, เชียงใหม่',
            description: 'หมู่บ้านกลางหุบเขาที่สามารถตั้งแคมป์หรือพักโฮมสเตย์ได้ บรรยากาศสงบและชุมชนอบอุ่น',
            date: '2025-01-03'
        },
        {
            image: 4,
            title: 'อ่างเก็บน้ำหุบเขาวง, ราชบุรี',
            description: 'แม้จะอยู่ใกล้ภาคกลาง แต่บรรยากาศเหมือนอยู่เหนือ! เงียบสงบ กางเต็นท์ริมน้ำสบายมาก',
            date: '2025-01-04'
        },
        // {
        //     image: 5,
        //     title: 'ภูลังกา, พะเยา',
        //     description: 'จุดชมทะเลหมอกในยามเช้า กางเต็นท์กลางดอยแบบเงียบสงบ เหมาะกับคนรักธรรมชาติ',
        //     date: '2025-01-05'
        // },
        // {
        //     image: 6,
        //     title: 'ภูชี้ดาว, เชียงราย',
        //     description: 'จุดชมวิวที่เงียบกว่าภูชี้ฟ้า เหมาะกับคนที่ต้องการความสงบและธรรมชาติที่สวยงาม',
        //     date: '2025-01-06'
        // },
        // {
        //     image: 7,
        //     title: 'ดอยเสมอดาว, น่าน',
        //     description: 'หนึ่งในจุดชมดาวและหมอกยอดนิยม แต่มีโซนเงียบให้แคมป์ด้วยนะ บรรยากาศดีสุด ๆ',
        //     date: '2025-01-07'
        // },
        // {
        //     image: 8,
        //     title: 'ทุ่งกิ๊ก แคมป์, ลำปาง',
        //     description: 'ลานกางเต็นท์สงบในป่าลึก มีลำธารและธรรมชาติรายล้อม เหมาะกับคนรักความเป็นส่วนตัว',
        //     date: '2025-01-08'
        // },
        // {
        //     image: 9,
        //     title: 'ภูบักได, เลย',
        //     description: 'จุดแคมป์เล็ก ๆ ที่ไม่พลุกพล่าน วิวพาโนรามาบนหน้าผา มีเส้นทางเดินเท้าแบบชิล ๆ',
        //     date: '2025-01-09'
        // },
        // {
        //     image: 10,
        //     title: 'อุทยานแห่งชาติขุนสถาน, น่าน',
        //     description: 'ลานกางเต็นท์กลางป่าสนที่เงียบสงบ ผู้คนน้อย วิวหมอกยามเช้าสวยมาก',
        //     date: '2025-01-10'
        // }
    ]

    const regions = [
        { id: 'all', name: 'ทุกภูมิภาค' },
        { id: 'north', name: 'ภาคเหนือ' },
        { id: 'northeast', name: 'ภาคอีสาน' },
        { id: 'central', name: 'ภาคกลาง' },
        { id: 'south', name: 'ภาคใต้' }
    ]

    const testimonials = [
        {
            name: 'คุณสมชาย',
            location: 'ดอยม่อนจอง',
            rating: 5,
            comment: 'บรรยากาศดีมาก เงียบสงบ เหมาะกับการพักผ่อนสุดๆ',
            avatar: '/assets/images/avatar1.jpg'
        },
        {
            name: 'คุณสมหญิง',
            location: 'ปางอุ๋ง',
            rating: 5,
            comment: 'วิวสวยมาก ตื่นเช้ามาเจอทะเลหมอกแบบนี้คุ้มค่าจริงๆ',
            avatar: '/assets/images/avatar2.jpg'
        },
        {
            name: 'คุณสมศักดิ์',
            location: 'บ้านแม่กำปอง',
            rating: 4,
            comment: 'ชุมชนน่ารัก บรรยากาศดี อาหารอร่อย',
            avatar: '/assets/images/avatar3.jpg'
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    }

    const popularLocations = ['ดอยม่อนจอง', 'ปางอุ๋ง', 'บ้านแม่กำปอง']

    return (
        <div className="relative min-h-screen">



            {/* Hero Section with Video Background */}
            <div className="relative h-screen">
                <VideoBackground />
                <div className="absolute inset-0 bg-black/40 z-10"></div>

                {/* Hero Content */}
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold text-center mb-4"
                    >
                        ธรรมชาติไม่ได้หายไปไหน แค่คุณยังไม่มาหามัน
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-xl md:text-2xl text-center max-w-2xl px-4"
                    >
                        ออกเดินทางไปกับเรา
                    </motion.p>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#161914] pointer-events-none z-30"></div>
            </div>

            {/* Search and Filter Section */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-[#161914] py-16 px-4"
            >
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                        <div className="relative flex-1 max-w-xl">
                            <input
                                type="text"
                                placeholder="ค้นหาจุดหมายปลายทาง..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-4 py-3 pl-12 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-green-500"
                            />
                            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60" />
                        </div>
                        <select
                            value={selectedRegion}
                            onChange={(e) => setSelectedRegion(e.target.value)}
                            className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-green-500"
                        >
                            {regions.map(region => (
                                <option key={region.id} value={region.id} className='text-white bg-[#161914]'>{region.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </motion.div>

            {/* Weather Widget Section */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="py-20 px-4 bg-[#161914]"
            >
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        variants={itemVariants}
                        className="text-white text-center text-4xl font-bold mb-16"
                    >
                        สภาพอากาศวันนี้
                    </motion.h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {popularLocations.map((location, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <WeatherWidget location={location} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Main Content Section */}
            <div className="bg-[#161914] w-full min-h-screen relative">
                {/* Topographic Map Background */}
                <div className="absolute inset-0 opacity-10 bg-[url('/topo-map.svg')] bg-repeat text-white"></div>

                <div className="relative z-10 md:p-40 p-10">
                    {/* Featured Destinations */}
                    <img src="assets/images/topo-top-left.webp" alt="" className='absolute z-[-10] top-0 left-0' />
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="mb-32"
                    >
                        <motion.h2
                            variants={itemVariants}
                            className="text-white text-center text-4xl font-bold mb-16"
                        >
                            บทความล่าสุด
                        </motion.h2>
                        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
                            {blogs.map((blog, index) => (
                                <motion.div key={index} variants={itemVariants}>
                                    <Cardblog
                                        image={blog.image}
                                        title={blog.title}
                                        description={blog.description}
                                        date={blog.date}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Featured Story Section */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="mb-32"
                    >
                        <motion.div variants={itemVariants} className="bg-white/5 rounded-2xl overflow-hidden">
                            <div className="grid md:grid-cols-2 gap-8 p-8">
                                <div className="relative h-[400px] rounded-xl overflow-hidden">
                                    <img
                                        src="/assets/images/forest.jpg"
                                        alt="Featured Story"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <motion.span
                                        variants={itemVariants}
                                        className="text-green-400 font-semibold mb-4"
                                    >
                                        บทความแนะนำประจำเดือน
                                    </motion.span>
                                    <motion.h3
                                        variants={itemVariants}
                                        className="text-3xl font-bold text-white mb-4"
                                    >
                                        การเดินป่าครั้งแรกของฉัน: จากมือใหม่สู่การผจญภัย
                                    </motion.h3>
                                    <motion.p
                                        variants={itemVariants}
                                        className="text-gray-300 mb-6"
                                    >
                                        บันทึกประสบการณ์การเดินป่าครั้งแรก พร้อมคำแนะนำสำหรับมือใหม่ที่อยากเริ่มต้นการผจญภัยในธรรมชาติ...
                                    </motion.p>
                                    <motion.div variants={itemVariants}>
                                        <button className="px-6 py-3 bg-white text-[#161914] rounded-lg font-semibold hover:bg-white/90 transition-colors">
                                            อ่านเพิ่มเติม
                                        </button>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Seasonal Recommendations */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="mb-32"
                    >
                        <motion.h2 variants={itemVariants} className="text-4xl font-bold text-center mb-16 text-white">
                            แนะนำตามฤดูกาล
                        </motion.h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <motion.div variants={itemVariants} className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
                                        <span className="text-2xl">🌞</span>
                                    </div>
                                    <h3 className="text-2xl font-semibold text-white">ฤดูร้อน</h3>
                                </div>
                                <ul className="text-gray-300 space-y-2">
                                    <li>• น้ำตกที่ควรไปในช่วงฤดูร้อน</li>
                                    <li>• เส้นทางเดินป่าที่มีร่มเงา</li>
                                    <li>• แคมป์ปิ้งริมน้ำที่เย็นสบาย</li>
                                </ul>
                            </motion.div>
                            <motion.div variants={itemVariants} className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                                        <span className="text-2xl">❄️</span>
                                    </div>
                                    <h3 className="text-2xl font-semibold text-white">ฤดูหนาว</h3>
                                </div>
                                <ul className="text-gray-300 space-y-2">
                                    <li>• จุดชมทะเลหมอกยอดนิยม</li>
                                    <li>• เส้นทางเดินป่าหน้าหนาว</li>
                                    <li>• แคมป์ปิ้งบนดอยที่อากาศเย็นสบาย</li>
                                </ul>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Categories Section */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-white mb-32"
                    >
                        <motion.h2 variants={itemVariants} className="text-4xl font-bold text-center mb-16">
                            หมวดหมู่บทความ
                        </motion.h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <motion.div variants={itemVariants} className="text-center p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                                <h3 className="text-2xl font-semibold mb-4">เส้นทางเดินป่า</h3>
                                <p>รวมเส้นทางเดินป่าที่สวยงามและปลอดภัย พร้อมคำแนะนำสำหรับมือใหม่</p>
                            </motion.div>
                            <motion.div variants={itemVariants} className="text-center p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                                <h3 className="text-2xl font-semibold mb-4">จุดกางเต็นท์</h3>
                                <p>แนะนำลานกางเต็นท์สวยๆ พร้อมข้อมูลสิ่งอำนวยความสะดวกและสภาพอากาศ</p>
                            </motion.div>
                            <motion.div variants={itemVariants} className="text-center p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                                <h3 className="text-2xl font-semibold mb-4">เทคนิคการเดินทาง</h3>
                                <p>เคล็ดลับและประสบการณ์การเดินทางเชิงธรรมชาติจากนักเดินทางตัวจริง</p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Community Section */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="mb-32"
                    >
                        <motion.h2 variants={itemVariants} className="text-4xl font-bold text-center mb-16 text-white">
                            ชุมชนนักเดินทาง
                        </motion.h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <motion.div variants={itemVariants} className="bg-white/5 rounded-xl p-6 text-center">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                                    <span className="text-3xl">📸</span>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">แชร์ประสบการณ์</h3>
                                <p className="text-gray-300">แบ่งปันภาพและเรื่องราวการเดินทางของคุณ</p>
                            </motion.div>
                            <motion.div variants={itemVariants} className="bg-white/5 rounded-xl p-6 text-center">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-500/20 flex items-center justify-center">
                                    <span className="text-3xl">👥</span>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">พบปะนักเดินทาง</h3>
                                <p className="text-gray-300">เข้าร่วมกิจกรรมและพบปะเพื่อนร่วมทาง</p>
                            </motion.div>
                            <motion.div variants={itemVariants} className="bg-white/5 rounded-xl p-6 text-center">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-500/20 flex items-center justify-center">
                                    <span className="text-3xl">💡</span>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">แลกเปลี่ยนไอเดีย</h3>
                                <p className="text-gray-300">แบ่งปันเคล็ดลับและคำแนะนำการเดินทาง</p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Testimonials Section */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="py-20 px-4 bg-[#161914]"
                    >
                        <div className="max-w-6xl mx-auto">
                            <motion.h2
                                variants={itemVariants}
                                className="text-white text-center text-4xl font-bold mb-16"
                            >
                                เสียงจากนักเดินทาง
                            </motion.h2>
                            <div className="grid md:grid-cols-3 gap-8">
                                {testimonials.map((testimonial, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors"
                                    >
                                        <div className="flex items-center gap-4 mb-4">
                                            <img
                                                src={testimonial.avatar}
                                                alt={testimonial.name}
                                                className="w-12 h-12 rounded-full object-cover"
                                            />
                                            <div>
                                                <h4 className="text-white font-semibold">{testimonial.name}</h4>
                                                <div className="flex items-center gap-1 text-yellow-400">
                                                    {[...Array(testimonial.rating)].map((_, i) => (
                                                        <FiStar key={i} className="fill-current" />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-gray-300 mb-2">{testimonial.comment}</p>
                                        <div className="flex items-center text-green-400 text-sm">
                                            <FiMapPin className="mr-1" />
                                            {testimonial.location}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Newsletter Section */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="py-20 px-4 bg-[#161914] relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-[url('/topo-map.svg')] opacity-5"></div>
                        <div className="max-w-4xl mx-auto relative z-10">
                            <motion.div
                                variants={itemVariants}
                                className="text-center mb-8"
                            >
                                <h2 className="text-white text-4xl font-bold mb-4">ติดตามข่าวสารและโปรโมชั่น</h2>
                                <p className="text-gray-300">รับข่าวสารและโปรโมชั่นพิเศษก่อนใคร</p>
                            </motion.div>
                            <motion.div
                                variants={itemVariants}
                                className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto"
                            >
                                <div className="relative flex-1">
                                    <input
                                        type="email"
                                        placeholder="อีเมลของคุณ"
                                        className="w-full px-4 py-3 pl-12 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-green-500"
                                    />
                                    <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60" />
                                </div>
                                <button className="px-8 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors">
                                    สมัครรับข่าวสาร
                                </button>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Homepage