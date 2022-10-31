import React from 'react';
import doorLogo from '../asset/0007-removebg-preview.png';
import lockLogo from '../asset/0003-removebg-preview (1).png';
import carLogo from '../asset/0006-removebg-preview.png';


const Page2 = () => {
    return (
        <section className="flex bg-yellow-200  items-center justify-center flex-col">
            <img src={doorLogo} alt="" className="w-80"/>
            <div className="font-bold text-center text-4xl mb-2">잠긴문</div>
            <div className="font-bold text-center text-xl">
                열쇠 전문가 즉시 출동!
            </div>
            <img src={lockLogo} alt="" className="w-80 ml-16"/>
            <div className="font-bold text-center text-4xl mb-2">도어락 수리/설치</div>
            <div className="font-bold text-center text-xl">
                열쇠 전문가 즉시 출동!
            </div>
            <img src={carLogo} alt="" className="w-80"/>
            <div className="font-bold text-center text-4xl mb-2">차키 수리 및 복사</div>
            <div className="font-bold text-center text-xl mb-20">
                폴딩키, 스마트키 모두 OK
            </div>
        </section>
    );
};

export default Page2;