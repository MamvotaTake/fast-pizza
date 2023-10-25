import React from "react";


export default function Tooltip({ message, children }) {
    return (
        <div className="group absolute left-0 top-0 flex max-w-max flex-col items-center justify-center">
            {children}
            <div className="absolute left-20 top-3 ml-auto mr-auto min-w-max -translate-x-1/3 scale-0 transform rounded-lg px-3 py-2 text-xs font-medium transition-all duration-500 group-hover:scale-100">
                <div className="flex max-w-xs flex-col items-center shadow-lg">
                    {/* <div className="clip h-2 w-4 bg-gray-800"></div> */}
                    <div className="rounded bg-gray-800 p-2 text-center text-xs text-white">
                        {message}
                    </div>
                </div>
            </div>
        </div>
    );
}
