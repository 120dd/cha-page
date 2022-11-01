import React, { useState } from 'react';
import mainLogo from '../asset/open.png';
import starLogo1 from '../asset/엄지척 이미지/엄지척_컬러이미지1.png';
import starLogo2 from '../asset/엄지척 이미지/엄지척_컬러이미지2.png';
import starLogo3 from '../asset/엄지척 이미지/엄지척_컬러이미지3.png';
import starLogo4 from '../asset/엄지척 이미지/엄지척_컬러이미지4.png';
import starLogo5 from '../asset/엄지척 이미지/엄지척_컬러이미지5.png';
import starLogo6 from '../asset/엄지척 이미지/엄지척_컬러이미지6.png';

const Page3 = () => {
    const [count,setCount] = useState(0);
    
    const imgArr = [starLogo1,starLogo2,starLogo3,starLogo4,starLogo5,starLogo6];
    
    setTimeout(()=>{
        setCount(count%6+1)
    },500)
    
    return (
        <section className="flex bg-yellow-300 h-[100vh]  items-center justify-center flex-col">
            <img src={mainLogo} alt="문따" className="mb-5"/>
            {/*<img src={imgArr[count-1]} alt="문따" className="mb-5 w-52"/>*/}
            <div className=" font-bold text-center text-3xl mb-12">
                고객만족도 별 다섯개 달성!<br/>
                믿고 전화주세요
            </div>
            <a href="tel:070-8144-5293" className="font-bold text-center bg-blue-900 px-10 py-3 text-white text-xl rounded-lg">즉시연결<br/><span className="text-yellow-500">070-8144-5293</span></a>
        </section>
    );
};

export default Page3;