import React from 'react';
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";

const Main = () => {
    return (
        <main className="bg-yellow-100 w-[100vw] ">
            <Page1 />
            <Page2 />
            <Page3 />
        </main>
    );
};

export default Main;