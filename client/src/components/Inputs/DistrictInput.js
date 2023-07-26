import React from 'react';

const DistrictInput = ({ districts, divisionId, onChange }) => {
    const filteredDistricts = districts.filter(district => district.division_id === divisionId);
    filteredDistricts.unshift({
        id: '64',
        name: 'All',
        bn_name: 'All',
        url: ''
    });

    return (
        <div>
            <label htmlFor="division">District:</label>
            <select
                className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
                onChange={e => onChange(e.target.value)}>
                <option>Select District</option>
                {filteredDistricts.map(district => (
                    <option key={district.id} value={district.id}>
                        {district.name}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default DistrictInput;