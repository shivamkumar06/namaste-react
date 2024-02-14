const Grocery = () => {
    return (
        <div className="bg-gray-100 min-h-screen pt-20">
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900">Coming Soon</h1>
            <p className="mt-3 text-lg text-gray-500">Our website is under construction.</p>
        </div>
        <div className="mt-10">
            <form className="mx-auto max-w-xs">
                    <div className="flex items-center border-b border-gray-500 py-2">
                        <input type="email"
                            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                            placeholder="Enter your email" />
                        <button
                            className="flex-shrink-0 bg-cyan-500 hover:bg-cyan-700 border-cyan-500 hover:border-cyan-700 text-sm border-4 text-white py-1 px-2 rounded"
                            type="submit">
                            Notify me
                        </button>
                    </div>
                </form>
            <p className="mt-2 text-center text-gray-500 text-xs">
                We'll notify you when we launch.
            </p>
        </div>
    </div>
</div>
    );
}

export default Grocery;