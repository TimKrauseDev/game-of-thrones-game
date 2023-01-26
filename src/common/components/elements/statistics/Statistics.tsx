import React from 'react'

function Statistics() {
    return (
        <div className="statistics space-y-2">
            <p className="font-bold">Statistics</p>
            <div className="bg-slate-300 rounded-md p-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="hero-statistics space-y-2">
                    <h2>Hero Statistics</h2>
                    <div>
                        <p><span className="font-bold">Name:</span> Tim Krause</p>
                        <p><span className="font-bold">Money:</span> $1000</p>
                        <p><span className="font-bold">Influence:</span> 100</p>
                        <p><span className="font-bold">Army Size</span>: 2,000</p>
                        <p><span className="font-bold">Points:</span> 3,035</p>
                        <p><span className="font-bold">Ship:</span> Yes</p>
                        <p><span className="font-bold">Percent of Spaces Controlled:</span> 0.15%</p>
                    </div>
                </div>
                <div className="worrior-statistics col-span-2 space-y-2">
                    <h2>Worrior statistics</h2>
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                        <div className="border border-slate-700 rounded-md p-2 shadow-lg">
                            <p><span className="font-bold">Name:</span> Worrior 1</p>
                            <p><span className="font-bold">Strength:</span> 120</p>
                            <p><span className="font-bold">Loyalty:</span> 120</p>
                            <p><span className="font-bold">Ship:</span> Yes</p>
                            <p><span className="font-bold">Strength:</span> 120</p>
                            <p><span className="font-bold">Loyalty:</span> 120</p>
                        </div>
                        <div className="border border-slate-700 rounded-md p-2 shadow-lg">
                            <p><span className="font-bold">Name:</span> Worrior 2</p>
                            <p><span className="font-bold">Strength:</span> 120</p>
                            <p><span className="font-bold">Loyalty:</span> 120</p>
                            <p><span className="font-bold">Ship:</span> Yes</p>
                            <p><span className="font-bold">Strength:</span> 120</p>
                            <p><span className="font-bold">Loyalty:</span> 120</p>
                        </div>
                        <div className="border border-slate-700 rounded-md p-2 shadow-lg">
                            <p><span className="font-bold">Name:</span> Worrior 3</p>
                            <p><span className="font-bold">Strength:</span> 120</p>
                            <p><span className="font-bold">Loyalty:</span> 120</p>
                            <p><span className="font-bold">Ship:</span> Yes</p>
                            <p><span className="font-bold">Strength:</span> 120</p>
                            <p><span className="font-bold">Loyalty:</span> 120</p>
                        </div>
                        <div className="border border-slate-700 rounded-md p-2 shadow-lg">
                            <p><span className="font-bold">Name:</span> N/a</p>
                            <p><span className="font-bold">Strength:</span> N/a</p>
                            <p><span className="font-bold">Loyalty:</span> N/a</p>
                            <p><span className="font-bold">Ship:</span> N/a</p>
                            <p><span className="font-bold">Strength:</span> N/a</p>
                            <p><span className="font-bold">Loyalty:</span> N/a</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Statistics;
