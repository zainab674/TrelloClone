import React from "react";

const ProjectHeader = ({ project, users }) => {
    console.log("Project data:", project, "Users:", users);

    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">

            <div
                className="h-40 bg-cover bg-center"
                style={{
                    backgroundImage: 'url("https://grants.gettyimages.com/images/grants/GettyImages-1229275252.png")',
                }}
            >

            </div>



            <div className="p-4 flex justify-between items-center">

                <div className="flex items-center">
                    <span className="text-2xl">🧑‍💻</span>
                    <h1 className="ml-2 text-xl font-semibold">{project.title}</h1>
                </div>


                <div className="flex items-center">
                    <div className="flex -space-x-2">

                        {users.slice(0, 3).map((user, index) => (
                            <div key={index} className="flex items-center">
                                <img
                                    className="w-8 h-8 rounded-full border-2 border-white"
                                    src={user.photoURL || "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"}
                                    alt={`Avatar of ${user.displayName}`}
                                />

                            </div>
                        ))}


                        {users.length > 3 && (
                            <span className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium border-2 border-white">
                                +{users.length - 3}
                            </span>
                        )}
                    </div>

                    {/* Share Button */}
                    <button className="ml-4 bg-blue-500 text-white rounded-full px-4 py-2 font-medium hover:bg-blue-600">
                        Edit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectHeader;
