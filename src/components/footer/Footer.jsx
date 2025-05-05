import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='w-11/12 mx-auto mt-4 lg:mt-10 text-center text-xs md:text-sm py-10 md:py-8 lg:py-16'>
            <div className='my-6'>
                <h2 className='text-2xl font-bold my-2'>Gadgetorium</h2>
                <p>Explore & Find Your Perfect Tech Match</p>
            </div>
            <hr className='text-gray-300 w-8/12 mx-auto'/>
            <div className='flex gap-6 lg:gap-20 justify-center my-6 text-gray-500'>
                <div className=' flex flex-col gap-1.5 md:gap-2'>
                    <Link><h3 className='text-black font-semibold'>Services</h3></Link>
                    <Link><p className='hover:text-gray-800 hover:underline transition'>Product Support</p></Link>
                    <Link><p className='hover:text-gray-800 hover:underline transition'>Order Tracking</p></Link>
                    <Link><p className='hover:text-gray-800 hover:underline transition'>Shipping & Delivery</p></Link>
                    <Link><p className='hover:text-gray-800 hover:underline transition'>Returns</p></Link>
                </div>
                <div className=' flex flex-col gap-1.5 md:gap-2'>
                    <Link><h3 className='text-black font-semibold'>Company</h3></Link>
                    <Link><p className='hover:text-gray-800 hover:underline transition'>About Us</p></Link>
                    <Link><p className='hover:text-gray-800 hover:underline transition'>Careers</p></Link>
                    <Link><p className='hover:text-gray-800 hover:underline transition'>Contact</p></Link>
                </div>
                <div className=' flex flex-col gap-1.5 md:gap-2'>
                    <Link><h3 className='text-black font-semibold'>Legal</h3></Link>
                    <Link><p className='hover:text-gray-800 hover:underline transition'>Terms of Service</p></Link>
                    <Link><p className='hover:text-gray-800 hover:underline transition'>Privacy Policy</p></Link>
                    <Link><p className='hover:text-gray-800 hover:underline transition'>Cookie Policy</p></Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;