import { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiSettings, FiActivity, FiCreditCard, FiGrid } from 'react-icons/fi';
import { HiOutlineBuildingOffice } from 'react-icons/hi2';
import Boards from './boards';

const Sidebar = () => {
    const [isAnotherOpen, setIsAnotherOpen] = useState(false);
    const [isTestOpen, setIsTestOpen] = useState(false);
    const [boards, setBoards] = useState(true);

    return (
        <div className='flex'>
            <div className="w-64 h-full bg-gray-100 p-4">

                <div>
                    <div
                        className="flex items-center justify-between cursor-pointer py-2"
                        onClick={() => setIsAnotherOpen(!isAnotherOpen)}
                    >
                        <div className="flex items-center space-x-2">
                            <div className="bg-purple-500 p-2 rounded">
                                <HiOutlineBuildingOffice className="text-white" />
                            </div>
                            <span>another</span>
                        </div>
                        {isAnotherOpen ? <FiChevronUp /> : <FiChevronDown />}
                    </div>
                    {isAnotherOpen && (
                        <div className="pl-10 space-y-2">
                            <div className="flex items-center space-x-2 cursor-pointer py-2" >
                                <FiGrid className="text-gray-500" />
                                <span>Boards</span>

                            </div>
                            <div className="flex items-center space-x-2 cursor-pointer py-2">
                                <FiActivity className="text-gray-500" />
                                <span>Activity</span>
                            </div>
                            <div className="flex items-center space-x-2 cursor-pointer py-2">
                                <FiSettings className="text-gray-500" />
                                <span>Settings</span>
                            </div>
                            <div className="flex items-center space-x-2 cursor-pointer py-2">
                                <FiCreditCard className="text-gray-500" />
                                <span>Billing</span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Test Section */}
                <div>
                    <div
                        className="flex items-center justify-between cursor-pointer py-2 mt-4"
                        onClick={() => setIsTestOpen(!isTestOpen)}
                    >
                        <div className="flex items-center space-x-2">
                            <div className="bg-purple-500 p-2 rounded">
                                <HiOutlineBuildingOffice className="text-white" />
                            </div>
                            <span>test</span>
                        </div>
                        {isTestOpen ? <FiChevronUp /> : <FiChevronDown />}
                    </div>
                    {isTestOpen && (
                        <div className="pl-10 space-y-2">
                            <div className="flex items-center space-x-2 cursor-pointer py-2">
                                <FiGrid className="text-gray-500" />
                                <span>Boards</span>
                            </div>
                            <div className="flex items-center space-x-2 cursor-pointer py-2">
                                <FiActivity className="text-gray-500" />
                                <span>Activity</span>
                            </div>
                            <div className="flex items-center space-x-2 cursor-pointer py-2">
                                <FiSettings className="text-gray-500" />
                                <span>Settings</span>
                            </div>
                            <div className="flex items-center space-x-2 cursor-pointer py-2">
                                <FiCreditCard className="text-gray-500" />
                                <span>Billing</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div>
                {boards && (

                    <Boards />
                    // <h1>hi</h1>
                )

                }
            </div>
        </div>
    );
};

export default Sidebar;
