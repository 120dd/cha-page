import React from 'react';
import mainLogo from '../asset/open.png';

const Page1 = () => {
    return (
        <section className="flex bg-yellow-100 h-[80vh]  items-center justify-center flex-col">
            <img src={mainLogo} alt="문따" className="mb-5"/>
            <div className=" font-bold text-center text-2xl mb-14">
                24시 <strong className=" text-red-500 text-4xl">문따</strong> 드립니다 <br/>
                도어락 수리/설치, 차키 복사도 ok~!
            </div>
            <a href="tel:070-8144-5293" className="bg-blue-900 px-10 py-3 text-white text-xl rounded-lg">서울/경기/인천<br/>24싱 즉시출동</a>
        </section>
    );
};

export default Page1;