
export const Footer = () => {

    return (
        <footer id='footer' className='w-full bg-[#222831] text-white py-6'>
            
            <div className='max-w-7xl mx-auto px-12 py-8 flex flex-col md:flex-row justify-between md:items-center gap-4'>

                <div>
                    <h2 className='text-2xl font-bold'>PC Build Recommender</h2>
                    <p className='text-white/70'>Build the perfect PC for your needs and budget</p>
                </div>

                <div>
                    <p className="text-sm">&#169; 2025 EzPc. All rights reserved.</p>
                </div>

            </div>
            
        </footer>
    );
}