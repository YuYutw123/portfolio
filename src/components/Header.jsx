const Header = () => {
    return (
        <div className="w-full bg-slate-600 h-16 shadow-lg">
            <div className="text-white text-lg justify-between py-4 px-[10vw] w-full flex font-notoTC">
                <div className="flex">
                    <p className="font-bold align-center">
                        YuYutw123's Portfolio
                    </p>
                </div>
                {/* <div className="flex">
                    <p className=" pr-8">
                        程式作品
                    </p>    
                    <p>
                        翻譯作品

                    </p>
                </div> */}
            </div>
        </div>
    );
}

export default Header;
