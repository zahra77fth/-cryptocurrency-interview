import React from 'react';

interface Column<T> {
    header: string;
    accessor: keyof T | ((row: T) => React.ReactNode);
    className?: string;
}

interface TableProps<T> {
    data: T[];
    columns: Column<T>[];
}

const Table = <T,>({ data, columns }: TableProps<T>) => {

    const renderCellContent = (value: any): React.ReactNode => {
        if (typeof value === 'string' || typeof value === 'number' || typeof value === 'bigint' || typeof value === 'boolean') {
            return value.toString();
        }

        if (React.isValidElement(value)) {
            return value;
        }

        return null;
    };

    const generateKey = (row: T, index: number): React.Key => {
        const firstColumnValue = typeof columns[0].accessor === 'function'
            ? columns[0].accessor(row)
            : row[columns[0].accessor as keyof T];

        return `${index}-${firstColumnValue}`;
    };

    return (
        <div className="overflow-x-auto w-full">
            <table className="min-w-full border-collapse">
                <thead>
                <tr>
                    {columns.map((column, index) => (
                        <th
                            key={index}
                            className={`px-6 py-3 text-center text-xs font-medium text-[--primary-text] uppercase tracking-wider ${column.className}`}
                        >
                            {column.header}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={generateKey(row, rowIndex)}>
                        {columns.map((column, index) => {
                            const cellValue = typeof column.accessor === 'function'
                                ? column.accessor(row)
                                : row[column.accessor as keyof T];

                            return (
                                <td
                                    key={index}
                                    className={`px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-[--text-color] ${column.className}`}
                                >
                                    {renderCellContent(cellValue)}
                                </td>
                            );
                        })}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
