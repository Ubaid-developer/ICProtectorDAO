import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ic from 'ic0';

import logo from '/logoo.png';
import icp from '/icp.png';
import { useTheme } from '../contexts/ThemeContext';

const HomeContent = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [proposalId, setProposalId] = useState("1"); // Set default or dynamic based on use case
  const [loading, setLoading] = useState(false);
  const [proposalData, setProposalData] = useState(null);

 


    const myStyle = {
        translate: 'none',
        rotate: 'none',
        scale: 'none',
        opacity: 1,
        transform: 'translate(0px, 0px)'
    };
    const gradientClass = darkMode ? 'bg-gradient-to-r from-gray-950 to-gray-950' : 'bg-gradient-to-b from-orange-200 to-orange-500';
    const buttonClass = darkMode ? 'bg-gradient-to-r from-red-600 to-red-900' : 'bg-gradient-to-r from-red-400 to-red-600';


    return (
        <>
        
            <section className="section7 h-[90vh]">
                <div className="mx-auto flex h-full flex-col items-start justify-center md:w-[1120px] md:flex-row md:items-center">

                    <div className="section7-line mx-[15px] mt-[20px] text-center text-[#000] md:mt-0 md:w-[50%] md:pl-[40px] md:text-left" style={myStyle}>
                        <div className="font-montserrat text-[20px] leading-[30px] md:text-[24px] dark:text-white">Cypherspace as Cloud</div>
                        <div className="mt-[20px] font-montserrat-bold text-[25px] leading-[36px] md:text-[40px] md:leading-[50px] dark:text-white">ICP Protector dao is created to alert the Community, by the Community about scams, frauds & rugpulls</div>
                    </div> <div className="section7-img mx-auto flex items-center justify-center md:ml-0 md:w-[50%] md:justify-end" style={myStyle}>
                        <img src={logo} className="w-[50%]  md:w-full" alt="" />
                    </div>
                </div>
            </section>

            <section className="section2 flex h-[60vh] flex-col items-center justify-center">
                <div className="section2-line titleLinear mb-[30px] max-w-[1120px] text-[32px] leading-[50px] text-[#000] md:mb-0 md:h-[170px] md:text-[64px] md:leading-[70px] dark:text-white" >When we stick together, we can build a safer environment for everyone.</div>
            </section>
            <section className="section10 flex flex-col items-center justify-center pt-[50px] md:h-[100vh] md:items-start md:pt-0">
                <div className="section10-line1 mx-[15px] items-center justify-center rounded-[30px] bg-[#fff] dark:bg-gray-950 dark:border-2 dark:border-white p-[20px] md:mx-auto md:flex md:w-[1120px] md:p-[50px]" style={myStyle}>
                    <div className="flex flex-1 flex-col items-center justify-center md:w-[50%] md:items-start md:text-left">
                        <div className="mb-[20px] w-full font-montserrat-regular text-[18px] leading-[30px] text-[#000] md:text-[24px] dark:text-white">First Contributor of the Protocol</div>
                        <div className="mb-[15px] w-full font-montserrat-bold text-[26px] leading-[36px] text-[#000] md:mb-[30px] md:text-left md:text-[40px] md:leading-[50px] dark:text-white">Insights into the Foundation</div>
                        <div className="w-full">
                            <div className="text-left text-[16px] leading-[24px] text-[#000] md:text-[20px] md:leading-[30px] dark:text-white">The ICP Protector DAO stands as a vigilant guardian within the community, tirelessly scanning the vast digital landscape for signs of deception and malpractice. Its inception stems from a collective commitment to safeguard the integrity of the community against the looming threats of scams, frauds, and rugpulls. With unwavering dedication, this decentralized autonomous organization serves as a beacon of warning, promptly alerting its members to potential risks and empowering them with knowledge to make informed decisions. Through collaborative efforts and a shared sense of responsibility, the ICP Protector DAO embodies the ethos of unity and resilience, fortifying the community's defenses against nefarious actors seeking to exploit trust and sow discord.</div>
                        </div>
                    </div>
                    <div className="mt-[30px] flex w-full items-center justify-center md:ml-[5%] md:mt-0 md:w-[30%]">
                        <img src={icp} className="w-[40%] md:w-[75%] h-[500px]" alt="" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeContent;
