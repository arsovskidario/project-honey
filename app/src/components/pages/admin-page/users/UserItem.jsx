export default function UserItem({
    username,
    fullName
}) {
    return (
        <div
            className="mt-2 w-1/2 py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" alt="User Face" />
            <div className="text-center space-y-2 sm:text-left">
                <div className="space-y-0.5">
                    <p className="text-lg text-black font-semibold overflow-clip">
                        {username}
                    </p>
                    <p className="text-slate-500 font-medium">
                        {fullName}
                    </p>
                </div>
                <button className="px-4 py-1 text-sm font-semibold rounded-full text-white bg-cfb491 hover:bg-btnHover hover:border-transparent focus:outline-none">Contact</button>
            </div>
        </div>
    )
}