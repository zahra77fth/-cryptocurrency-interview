export type Tag = {
    id: number;
    name: string;
    name_en: string;
    has_chart: boolean;
};

export interface Order {
    amount: string;
    price: string;
    remain: string;
    value: string;
}

export interface Transaction {
    match_amount: string;
    match_id: string;
    price: string;
    time: number;
    type: "buy" | "sell" | "transaction";
    value: string;
}

export interface OrderType {
    type: "buy" | "sell" | "transaction";
}

export interface OrderApiResponse {
    orders: Order[];
    // any other fields in the API response
}


export type Currency = {
    id: number;
    title: string;
    title_fa: string;
    code: string;
    tradable: boolean;
    for_test: boolean;
    image: string;
    decimal: number;
    decimal_amount: number;
    decimal_irt: number;
    color: string;
    high_risk: boolean;
    show_high_risk: boolean;
    withdraw_commission: string;
    tags: Tag[];
    etf: boolean;
    for_binvest: boolean;
    for_loan: boolean;
    for_stake: boolean;
    recommend_for_deposit_weight: number;
};

export type Data = {
    id: number;
    currency1: Currency;
    currency2: Currency;
    tradable: boolean;
    otc_tradable: boolean;
    coming_soon: boolean;
    for_test: boolean;
    otc_sell_percent: string;
    otc_buy_percent: string;
    otc_max_buy_amount: string;
    otc_max_sell_amount: string;
    order_book_info: {
        created_at: string | null;
        price: string;
        change: number;
        min: string;
        max: string;
        time: string;
        mean: string;
        value: string;
        amount: string;
    };
    internal_price_info: {
        created_at: number;
        price: string;
        change: number;
        min: string;
        max: string;
        time: string | null;
        mean: string | null;
        value: string | null;
        amount: string | null;
    };
    price_info: {
        created_at: number;
        price: string;
        change: number;
        min: string;
        max: string;
        time: string | null;
        mean: string | null;
        value: string | null;
        amount: string | null;
    };
    price: string;
    title: string;
    code: string;
    title_fa: string;
    trading_view_source: string;
    trading_view_symbol: string;
    otc_market: boolean;
    text: string;
    volume_24h: string;
    market_cap: string;
    circulating_supply: string;
    all_time_high: string;
    popularity_weight: number;
    freshness_weight: number;
    price_increment: string | null;
};

export type ApiResponse = {
    count: number;
    results: Data[];
};
