import { useEffect, useState } from 'react';
import { FiChevronDown, FiChevronUp, FiSettings, FiActivity, FiCreditCard, FiGrid } from 'react-icons/fi';
import { HiOutlineBuildingOffice } from 'react-icons/hi2';
import Boards from './boards';
import MyProjects from './myprojects';
import SharedProjects from './sharedprojects';
import CompletedProjects from './completedProjects';
import { apiConst } from '../../../constants/api.constants';
import { useNavigate } from 'react-router-dom';


const Sidebar = () => {

    const [show, setShow] = useState("boards");
    const [isAnotherOpen, setIsAnotherOpen] = useState(true);
    const [isTestOpen, setIsTestOpen] = useState(true);
    const navigate = useNavigate();

    const handleClick = (id) => {
        console.log("id", id)
        const url = apiConst.BoardPage.replace(':id', id);
        navigate(url);
    };

    return (
        <div className='flex min-h-screen'>
            {/* Sidebar */}
            <div className="min-w-64 bg-gray-900 text-white p-4">
                <div>
                    <div
                        className="flex items-center justify-between cursor-pointer py-2"
                        onClick={() => setIsAnotherOpen(!isAnotherOpen)}
                    >
                        <div className="flex items-center space-x-2">
                            <div className="bg-cyan-800 p-2 rounded">
                                <HiOutlineBuildingOffice className="text-white" />
                            </div>
                            <span>DashBoard</span>
                        </div>
                        {isAnotherOpen ? <FiChevronUp /> : <FiChevronDown />}
                    </div>
                    {isAnotherOpen && (
                        <div className="pl-10 space-y-2">
                            <div className="flex items-center space-x-2 cursor-pointer py-2"
                                onClick={() => setShow("boards")}
                            >
                                <FiGrid className="text-gray-500" />
                                <span>Boards</span>
                            </div>
                            <div className="flex items-center space-x-2 cursor-pointer py-2"
                                onClick={() => setShow("MyProjects")}
                            >
                                <FiActivity className="text-gray-500" />
                                <span>My Projects</span>
                            </div>
                            <div className="flex items-center space-x-2 cursor-pointer py-2"
                                onClick={() => setShow("SharedProjects")}
                            >
                                <FiSettings className="text-gray-500" />
                                <span>Shared Projects</span>
                            </div>
                            <div className="flex items-center space-x-2 cursor-pointer py-2"
                                onClick={() => setShow("CompletedProjects")}
                            >
                                <FiCreditCard className="text-gray-500" />
                                <span>Completed Projects</span>
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
                            <div className="bg-cyan-800 p-2 rounded">
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

            {/* Main Content */}
            <div className="flex-1 p-8">
                {show === "boards" && <Boards />}
                {show === "MyProjects" && <MyProjects handleClick={handleClick} />}
                {show === "SharedProjects" && <SharedProjects handleClick={handleClick} />}
                {show === "CompletedProjects" && <CompletedProjects handleClick={handleClick} />}
            </div>
        </div>


    );
};

export default Sidebar;




