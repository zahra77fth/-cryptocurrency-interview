export const numberFormatter = (inputNumber: number, decimalPlaces?: number): string => {
    const options: Intl.NumberFormatOptions = {
        minimumFractionDigits: decimalPlaces,
        maximumFractionDigits: decimalPlaces,
    };

    if (decimalPlaces === undefined) {
        const parts = inputNumber.toString().split('.');
        if (parts.length > 1) {
            options.minimumFractionDigits = parts[1].length;
            options.maximumFractionDigits = parts[1].length;
        }
    }

    return new Intl.NumberFormat('en-US', options).format(inputNumber);
};
