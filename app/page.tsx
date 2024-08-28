import Markets from "@/components/markets/Markets";
import Loading from "@/app/loading";
import Error from "@/app/error";
import { getMarkets } from '@/services/marketService';
import { ApiResponse } from '@/types/api';

const HomePage = async () => {
    let data: ApiResponse | null = null;
    let loading = true;

    try {
        data = await getMarkets();
        loading = false;
    } catch (err) {
        console.error('Failed to fetch markets:', err);
        loading = false;
    }

    if (loading) {
        return <Loading />;
    }

    if (!data) {
        return <Error />;
    }

    return (
        <div className="w-full py-4 md:px-40">
            <Markets data={data.results} />
        </div>
    );
};

export default HomePage;
