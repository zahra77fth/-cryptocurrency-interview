import Markets from "@/components/markets/Markets";
import Loading from "@/app/loading";
import Error from "@/app/error";
import { getMarkets } from '@/services/marketService';
import { ApiResponse } from '@/types/api';
import { Suspense } from 'react';

const HomePage = async () => {
    try {
        const data: ApiResponse = await getMarkets();
        return (
            <div className="w-full py-4 md:px-40">
                <Markets data={data.results} />
            </div>
        );
    } catch (error) {
        console.error('Failed to fetch markets:', error);
        return <Error />;
    }
};

export default function Page() {
    return (
        <Suspense fallback={<Loading />}>
            <HomePage />
        </Suspense>
    );
}
