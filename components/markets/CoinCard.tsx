import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../layout/Button';

interface CoinCardProps {
    title: string;
    id: number;
    title_fa: string;
    code: string;
    tradable: boolean;
    for_test: boolean;
    image: string;
}

const CoinCard: React.FC<CoinCardProps> = ({ id, title, title_fa, code, tradable, for_test, image }) => {
    return (
        <div className="bg-[--primary-bg] p-4 m-2 rounded-lg shadow-md flex items-center space-x-4">
            <div className="w-12 h-12 relative mx-2">
                <Image
                    src={image}
                    alt={`${title} logo`}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-full"
                />
            </div>
            <div className="flex-1">
                <p>{title_fa}</p>
                <p className="text-sm text-gray-400">{code}</p>
            </div>
            <Button size="md" disabled={!tradable} >
            <Link href={`/orders/${id}`} passHref>
                <p className="text-black hover:underline">خرید / فروش</p>
            </Link>
            </Button>
        </div>
    );
};

export default CoinCard;
