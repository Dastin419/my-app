import React, { useState } from 'react';

const pages = [
    {
        id: 1,
        name: 'First',
    },
    {
        id: 2,
        name: 'Second',
    },
    {
        id: 3,
        name: 'Third',
    },
    {
        id: 4,
        name: 'Fourth',
    },
];

type Page = {
    id: number;
    name: string;
};

const App = () => {
    const [page, setPage] = useState<Page>(pages[0]);
    console.log({ page });

    const handleChange = (page: Page) => {
        setPage(page);
    };

    return (
        <div>
            <div>PAGES</div>
            <div>
                {pages.map((page) => (
                    <div onClick={() => handleChange(page)} key={page.id}>
                        {page.name}
                    </div>
                ))}
            </div>
            <div>Choose {page.name}</div>
        </div>
    );
};

export default App;
