import Link from "next/link";

function About(){
    return(
        <main>

        <span className="text">About Us</span>

        <nav className="subNav">
            <ul>
                <li>
                    <Link href="/aboutus/history">Festival History </Link>
                </li>
                <li>
                    <Link href="/aboutus/info">Organizer Information </Link>
                </li>
                <li>
                    <Link href="/aboutus/previous">Previous years </Link>
                </li>
            </ul>
         </nav>
        
        </main>

    );
}

export default About;