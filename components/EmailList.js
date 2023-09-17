
export default function EmailList() {
    return (
        <div>
            <div className='w-[300px] sm:w-[400px] bg-black text-white justify-between shadow-xl rounded-full flex justify-center items-center p-3 my-3 transition-all lg:hover:scale-110 lg:hover:shadow-2xl'>
                <input className="bg-transparent text-white"/>
                <button className="bg-red-500">
                    Subscribe
                </button>
            </div>
        </div>
    )
}