import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLine, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='w-full bg-gradient-to-b from-[#161914] to-[#0F1111] text-[#C5C5BE] py-12 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]'>
            {/* Decorative top border */}
            <div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#857C63] via-[#C5C5BE] to-[#857C63]'></div>

            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {/* Contact Section */}
                    <div className='space-y-4'>
                        <h3 className='text-xl font-bold mb-4 relative inline-block text-[#C5C5BE]'>
                            ติดต่อเรา
                            <span className='absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#857C63] to-[#C5C5BE] transform scale-x-0 hover:scale-x-100 transition-transform duration-300'></span>
                        </h3>
                        <div className='space-y-3'>
                            <div className='flex items-center space-x-3 hover:text-[#857C63] transition-colors duration-300'>
                                <FaPhone className='text-[#857C63]' />
                                <span>095-643-3948</span>
                            </div>
                            <div className='flex items-center space-x-3 hover:text-[#857C63] transition-colors duration-300'>
                                <FaEnvelope className='text-[#857C63]' />
                                <span>kittithat.dev@gmail.com</span>
                            </div>
                            <div className='flex items-center space-x-3 hover:text-[#857C63] transition-colors duration-300'>
                                <FaMapMarkerAlt className='text-[#857C63]' />
                                <span>พิษณุโลก, ประเทศไทย</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className='space-y-4'>
                        <h3 className='text-xl font-bold mb-4 relative inline-block text-[#C5C5BE]'>
                            เมนูด่วน
                            <span className='absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#857C63] to-[#C5C5BE] transform scale-x-0 hover:scale-x-100 transition-transform duration-300'></span>
                        </h3>
                        <ul className='space-y-2'>
                            {['หน้าแรก', 'เกี่ยวกับเรา', 'บริการ', 'โปรโมชั่น', 'ติดต่อเรา'].map((item, index) => (
                                <li key={index}>
                                    <a href="#" className='hover:text-[#857C63] transition-colors duration-300 flex items-center'>
                                        <span className='w-1.5 h-1.5 bg-[#857C63] rounded-full mr-2'></span>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className='space-y-4'>
                        <h3 className='text-xl font-bold mb-4 relative inline-block text-[#C5C5BE]'>
                            สมัครรับข่าวสาร
                            <span className='absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#857C63] to-[#C5C5BE] transform scale-x-0 hover:scale-x-100 transition-transform duration-300'></span>
                        </h3>
                        <p className='text-[#C5C5BE]'>รับข่าวสารและโปรโมชั่นพิเศษก่อนใคร</p>
                        <form className='space-y-3'>
                            <input
                                type="email"
                                placeholder="อีเมลของคุณ"
                                className='w-full px-4 py-2 rounded-lg bg-[#161914] border border-[#857C63] focus:border-[#C5C5BE] focus:outline-none text-[#C5C5BE] placeholder-[#857C63] transition-colors duration-300'
                            />
                            <button
                                type="submit"
                                className='w-full px-4 py-2 bg-gradient-to-r from-[#857C63] to-[#C5C5BE] rounded-lg hover:from-[#C5C5BE] hover:to-[#857C63] transform hover:scale-105 transition-all duration-300 font-medium text-[#161914]'
                            >
                                สมัครสมาชิก
                            </button>
                        </form>
                    </div>

                    {/* Social Media */}
                    <div className='space-y-4'>
                        <h3 className='text-xl font-bold mb-4 relative inline-block text-[#C5C5BE]'>
                            ติดตามเรา
                            <span className='absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#857C63] to-[#C5C5BE] transform scale-x-0 hover:scale-x-100 transition-transform duration-300'></span>
                        </h3>
                        <div className='flex space-x-4'>
                            {[
                                { icon: FaFacebook, color: 'hover:text-[#857C63]' },
                                { icon: FaTwitter, color: 'hover:text-[#C5C5BE]' },
                                { icon: FaInstagram, color: 'hover:text-[#857C63]' },
                                { icon: FaLine, color: 'hover:text-[#C5C5BE]' }
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className={`text-2xl transform hover:scale-110 transition-all duration-300 ${social.color}`}
                                >
                                    <social.icon />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className='mt-12 pt-8 border-t border-[#857C63] text-center text-[#857C63]'>
                    <p>© {new Date().getFullYear()} ZEnd All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer