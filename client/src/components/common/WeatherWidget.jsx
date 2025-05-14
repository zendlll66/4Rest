import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiSun, FiCloud, FiCloudRain, FiWind } from 'react-icons/fi'

const WeatherWidget = ({ location }) => {
    const [weather, setWeather] = useState(null)
    const [loading, setLoading] = useState(true)

    // Mock weather data for demonstration
    useEffect(() => {
        const mockWeatherData = {
            'ดอยม่อนจอง': { temp: 18, condition: 'sunny', humidity: 65, wind: 5 },
            'ปางอุ๋ง': { temp: 20, condition: 'cloudy', humidity: 70, wind: 3 },
            'บ้านแม่กำปอง': { temp: 22, condition: 'rainy', humidity: 80, wind: 4 }
        }

        // Simulate API call
        setTimeout(() => {
            setWeather(mockWeatherData[location] || mockWeatherData['ดอยม่อนจอง'])
            setLoading(false)
        }, 500)
    }, [location])

    const getWeatherIcon = (condition) => {
        switch (condition) {
            case 'sunny':
                return <FiSun className="w-8 h-8 text-yellow-400" />
            case 'cloudy':
                return <FiCloud className="w-8 h-8 text-gray-400" />
            case 'rainy':
                return <FiCloudRain className="w-8 h-8 text-blue-400" />
            default:
                return <FiSun className="w-8 h-8 text-yellow-400" />
        }
    }

    if (loading) {
        return (
            <div className="bg-white/5 rounded-xl p-6 animate-pulse">
                <div className="h-8 bg-white/10 rounded w-3/4 mb-4"></div>
                <div className="h-24 bg-white/10 rounded mb-4"></div>
                <div className="h-4 bg-white/10 rounded w-1/2"></div>
            </div>
        )
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors"
        >
            <h3 className="text-white font-semibold mb-4">{location}</h3>
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                    {getWeatherIcon(weather.condition)}
                    <div>
                        <div className="text-3xl font-bold text-white">{weather.temp}°C</div>
                        <div className="text-gray-400 text-sm">
                            {weather.condition === 'sunny' && 'ท้องฟ้าแจ่มใส'}
                            {weather.condition === 'cloudy' && 'มีเมฆบางส่วน'}
                            {weather.condition === 'rainy' && 'มีฝนตก'}
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2 text-gray-300">
                    <FiWind className="text-green-400" />
                    <span>ความเร็วลม {weather.wind} km/h</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                    <FiCloud className="text-green-400" />
                    <span>ความชื้น {weather.humidity}%</span>
                </div>
            </div>
        </motion.div>
    )
}

export default WeatherWidget 