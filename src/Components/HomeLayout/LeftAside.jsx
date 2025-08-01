import React, { Suspense } from 'react';
import Categories from '../Categories';

const LeftAside = () => {
    return (
        <div>
            <Suspense fallback=<span className="loading loading-infinity loading-xl"></span>>
                <Categories />
            </Suspense>
        </div>
    );
};

export default LeftAside;