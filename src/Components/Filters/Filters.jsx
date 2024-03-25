import React, { useState } from 'react';

const FilterBlock = () => {
    const [keyword, setKeyword] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [searchSimilar, setSearchSimilar] = useState(false);
    const [searchType, setSearchType] = useState('all');
    const [excludedKeywords, setExcludedKeywords] = useState('');
    const [savedFilters, setSavedFilters] = useState([]);
    const [file, setFile] = useState(null);

    const handleSearch = () => {
        // Handle search functionality here
    };

    const handleFileUpload = (event) => {
        const uploadedFile = event.target.files[0];
        setFile(uploadedFile);
        // Handle file upload functionality here
    };


    return (
        <div className="filter-block">
            <input
                type="text"
                placeholder="Поиск"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                list="suggestions"

            />
            <datalist id="suggestions">
                <option value="1"/>
                    <option value="2"/>
                        <option value="3"/>
            </datalist>
            <input
                type="date"
                placeholder="Начальная дата"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
            />
            <input
                type="date"
                placeholder="Конечная дата"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
            />
            <label>
                <input
                    type="checkbox"
                    checked={searchSimilar}
                    onChange={() => setSearchSimilar(!searchSimilar)}
                />
                Search Similar
            </label>
            <select
                value={searchType}
                onChange={(e) => setSearchType(e.target.value)}
            >
                <option value="all">All</option>
                <option value="archived">Archived</option>
                <option value="current">Current</option>
            </select>
            <input
                type="text"
                placeholder="Исключащие слова"
                value={excludedKeywords}
                onChange={(e) => setExcludedKeywords(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            <input
                type="file"
                accept=".csv,.xlsx,.xls"
                onChange={handleFileUpload}
            />
            {/* Display saved filters */}
            {savedFilters.map((filter, index) => (
                <div key={index}>{filter}</div>
            ))}
        </div>
    );
};

export default FilterBlock;