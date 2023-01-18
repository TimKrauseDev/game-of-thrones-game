import Board from '@common/components/elements/board/Board';
import Dialog from '@common/components/elements/dialog/Dialog';
import HeroList from '@common/components/elements/heroList/HeroList';
import Minimap from '@common/components/elements/minimap/Minimap';
import Statistics from '@common/components/elements/statistics/Statistics';
import React from 'react'

function App() {
    return (
        <div className="bg-slate-200 py-4">
            <div className="container grid grid-cols-1 px-4 mx-auto gap-4 lg:grid-cols-12">
                <div className="p-4 border border-gray-600 lg:col-span-3">
                    <Dialog />
                </div>
                <div className="p-4 border border-gray-600 lg:col-span-6">
                    <Board />
                    <Statistics />
                </div>
                <div className="p-4 border border-gray-600 lg:col-span-3">
                    <Minimap />
                    <HeroList />
                </div>
            </div>
        </div>
    )
}

export default App;
