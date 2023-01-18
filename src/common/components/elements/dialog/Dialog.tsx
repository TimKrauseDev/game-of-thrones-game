import React from 'react'

function Dialog() {
    return (
        <div className="dialog">
            <div className="dialog__round-count">
                <p className="text-slate-700 font-bold">Round 5 / 50</p>
            </div>
            <div className="dialog__instructions space-y-4">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <ol>
                    <li>1. Option 1</li>
                    <li>2. Option 2</li>
                    <li>3. Option 3</li>
                    <li>4. Option 4</li>
                </ol>
            </div>
            <div className="dialog__user-input">
                <form>
                    <div className="mt-8 max-w-md">
                        <div className="grid grid-cols-1 gap-6">
                            <label className="block">
                                <span className="text-gray-700">User Input</span>
                                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 " placeholder="" />
                            </label>
                            <label className="block">
                                <span className="text-gray-700">Which choice would you like to make?</span>
                                <select className=" block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                    <option>Option 4</option>
                                </select>
                            </label>
                            <div>
                            <button type="submit" className="text-left border p-2 bg-slate-700 text-white rounded-md">Submit</button>

                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Dialog
