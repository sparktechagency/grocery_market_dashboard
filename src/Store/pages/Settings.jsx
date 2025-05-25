import React, { useState } from 'react'

const Settings = () => {
    const [logo, setLogo] = useState(null);
    const [shopName, setShopName] = useState('Mackdonalds');
    const [shopAddress, setShopAddress] = useState('Fairbanks North Star');

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setLogo({
                file,
                url: URL.createObjectURL(file),
                name: file.name,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle save logic
        alert('Saved!');
    };

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4 py-8">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md w-full max-w-3xl space-y-6 shadow">
                {/* Logo Upload */}
                <div>
                    <label className="block font-medium mb-2">Shop Logo</label>
                    <div className="flex justify-between items-center border border-gray-300 rounded-md p-2">
                        {logo?.url ? (
                            <img src={logo.url} alt="Preview" className="w-10 h-10 object-cover mr-4 rounded" />
                        ) : (
                            <div className="w-10 h-10 bg-gray-200 mr-4 rounded"></div>
                        )}
                        <div className="flex flex-col">
                            {logo?.name && <span className="text-blue-600 text-sm">{logo.name}</span>}
                            <label className="cursor-pointer text-xs text-gray-500 border px-2 py-1 rounded w-max mt-1">
                                📁 Click to Upload
                                <input type="file" className="hidden" onChange={handleFileChange} />
                            </label>
                        </div>
                    </div>
                </div>

                {/* Shop Name */}
                <div>
                    <label className="block font-medium mb-2">Shop name</label>
                    <input
                        type="text"
                        value={shopName}
                        onChange={(e) => setShopName(e.target.value)}
                        className="w-full border border-gray-300 p-2 rounded-md outline-none"
                    />
                </div>

                {/* Shop Address */}
                <div>
                    <label className="block font-medium mb-2">Shop address</label>
                    <input
                        type="text"
                        value={shopAddress}
                        onChange={(e) => setShopAddress(e.target.value)}
                        className="w-full border border-gray-300 p-2 rounded-md outline-none"
                    />
                </div>

                {/* Save Button */}
                <div className="text-right">
                    <button
                        type="submit"
                        className="bg-primary hover:bg-green-700 text-white px-6 py-2 rounded-md font-semibold"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Settings