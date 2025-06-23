
export const Loading = () => {
    return (
        <section className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-teal-600 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-gray-700 font-medium">Generating your perfect build...</p>
            </div>
        </section>
    );
}