
export const Sidebar = () => {
    return (
        <aside id="default-sidebar" className="overlay sm:shadow-none overlay-open:translate-x-0 drawer drawer-start hidden max-w-64 sm:absolute sm:z-0 sm:flex sm:translate-x-0" role="dialog" tabIndex={1} >
            <div className="drawer-body px-2 pt-4">
                <ul className="menu p-0">
                    <li>
                        <a href="#">
                            <span className="icon-[tabler--home] size-5"></span>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon-[tabler--user] size-5"></span>
                            Account
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon-[tabler--message] size-5"></span>
                            Notifications
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon-[tabler--mail] size-5"></span>
                            Email
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon-[tabler--calendar] size-5"></span>
                            Calendar
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon-[tabler--shopping-bag] size-5"></span>
                            Product
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon-[tabler--login] size-5"></span>
                            Sign In
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon-[tabler--logout-2] size-5"></span>
                            Sign Out
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    )
}
