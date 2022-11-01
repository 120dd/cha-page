import React  from 'react';
import mainLogo from '../asset/open.png';

const Page3 = () => {
    
    return (
        <section className="flex bg-yellow-300 h-[100vh]  items-center justify-center flex-col">
            <img src={mainLogo} alt="문따" className="mb-5"/>
            <div className=" font-bold text-center text-3xl mb-12">
                고객만족도 별 다섯개 달성!<br/>
                믿고 전화주세요
            </div>
            <a href="tel:070-8144-5293" className="font-bold text-center bg-blue-900 px-10 py-3 text-white text-xl rounded-lg">즉시연결<br/><span className="text-yellow-500">070-8144-5293</span></a>
        </section>
    );
};

export default Page3;