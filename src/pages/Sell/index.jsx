import React from 'react'

export default function Sell() {
    // Apaya Apalah Masa Iya


    return (
        <div className="py-16 px-64">
            <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                    <p>Add Title*</p>
                </div> 
                <div className="col-span-6 sm:col-span-3">
                    <p>Category</p>
                </div> 
            </div>

            <div className="py-4">
                <div className="border-2 border-dashed py-32 bah bg-recandy-gray-50 border-black w-1/2">
                    <div className="text-center flex flex-col justify-center items-center">
                    <p>Drag and Drop</p>
                    <p>Your File Hire</p>
                    </div>
                </div>
                <input type="file" className="py-2" />
            </div>

            <div className="py-4">
                <p>Add Description*</p>
                <textarea className="border border-gray-400 w-full h-48 rounded-sm"></textarea>
            </div>

            <div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Upload</button>
            </div>
        </div>
    )
}