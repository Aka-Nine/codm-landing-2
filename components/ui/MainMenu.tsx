import Link from "next/link";

export default function MainMenu() {
    return (
        <ul>
            <li>
                <Link href="#home">
                    Home 
                   </Link>
            </li>
            <li>
                <Link href="#about">Company</Link>
            </li>
            <li className="dropdown-menu-parrent">
                <Link href="#service" className="main1">
                    Services 

                </Link>
                </li>
            <li className="dropdown-menu-parrent">
                <Link href="#case" className="main1">
                    Blog 
                </Link>
            </li>
            <li className="dropdown-menu-parrent">
                <Link className="main1" href="#contact">
                    Contact Us 
                </Link>

            </li>
        </ul>
    );
}
