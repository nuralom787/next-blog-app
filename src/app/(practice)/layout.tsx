import Link from 'next/link';
import React from 'react';

const PracticeLayout = ({
    children,
    marketingSlot,
    salesSlot
}: {
    children: React.ReactNode,
    marketingSlot: React.ReactNode,
    salesSlot: React.ReactNode,
}) => {
    return (
        <div className='w-96 mx-auto'>
            <div className='space-x-3.5'>
                <Link href={"/development"}>Development</Link>
                <Link href={"/marketings"}>Marketings</Link>
                <Link href={"/marketings/settings"}>Settings</Link>
                <Link href={"/sales"}>Sales</Link>
            </div>
            <div className='h-48 w-48 border border-red-500 p-52'>
                <div className='flex'>
                    {marketingSlot}
                    {salesSlot}
                </div>
                {children}
            </div>
        </div>
    );
};

export default PracticeLayout;