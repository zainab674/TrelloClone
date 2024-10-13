const SuccessModal = ({ message, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className=" p-8 rounded shadow-lg text-center bg-zinc-700">
                <h2 className=" mb-4 font-semibold text-white">{message}</h2>
                <button
                    className="bg-red-700 text-sm text-white px-3 py-1 rounded"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
}

export default SuccessModal;
