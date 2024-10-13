


const ConfirmDelete = ({ handleDeletePost, handleCancelDelete }) => {



    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 ">
            <div className="bg-zinc-700 p-5 rounded shadow-lg">
                <h2 className=" text-white mb-4">Are you sure you want to delete ?</h2>
                <div className="flex space-x-4">
                    <button
                        className="bg-red-500 text-white text-xs px-3 py-1 rounded"
                        onClick={handleDeletePost}

                    >
                        Yes, Delete
                    </button>
                    <button
                        className="bg-gray-500 text-white text-xs  px-3 py-1 rounded"
                        onClick={handleCancelDelete}

                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>


    )
}

export default ConfirmDelete;