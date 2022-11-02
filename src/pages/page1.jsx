import React, { useState } from 'react';
import mainLogo from '../asset/open.png';
import starLogo1 from "../asset/엄지척 이미지/엄지척_컬러이미지1.png";
import starLogo2 from "../asset/엄지척 이미지/엄지척_컬러이미지2.png";
import starLogo3 from "../asset/엄지척 이미지/엄지척_컬러이미지3.png";
import starLogo4 from "../asset/엄지척 이미지/엄지척_컬러이미지4.png";
import starLogo5 from "../asset/엄지척 이미지/엄지척_컬러이미지5.png";
import starLogo6 from "../asset/엄지척 이미지/엄지척_컬러이미지6.png";

const Page1 = () => {
    const [count,setCount] = useState(1);
    
    const imgArr = [starLogo1,starLogo2,starLogo3,starLogo4,starLogo5,starLogo6];
    
    setTimeout(()=>{
        setCount(count%6+1)
    },500)
    return (
        <section className="flex bg-yellow-100  items-center justify-center flex-col">
            <img src={mainLogo} alt="문따" className="mb-5 mt-20"/>
            <img src={imgArr[count-1]} alt="문따" className="mb-5 w-52"/>
            <div className=" font-bold text-center text-2xl mb-14 font-poor">
                24시 <strong className=" text-red-500 text-4xl">문따</strong> 드립니다 <br/>
                도어락 수리/설치, 차키 복사도 OK~!
            </div>
            <a href="tel:070-8144-5293" className="bg-blue-900 px-10 py-3 font-poor text-white text-xl rounded-lg text-center mb-12">서울 / 경기 / 인천<br/>24시 즉시출동</a>
        </section>
    );
};

export default Page1;