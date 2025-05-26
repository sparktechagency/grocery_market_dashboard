import React, { useRef } from 'react'
import JoditEditor from "jodit-react";
const AboutUs = () => {
    const editor = useRef(null);
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="bg-white rounded-lg shadow p-4 w-[90%] mx-auto">
                <div className="border-b pb-4 mb-4">
                    {/* Jodit Editor includes its own toolbar */}
                    <JoditEditor
                        ref={editor}
                        config={{
                            readonly: false,
                            toolbarAdaptive: false,
                            height: 700,
                            toolbarSticky: false,
                        }}
                    />
                </div>
                <div className="flex justify-end mt-4">
                    <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded">
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AboutUs