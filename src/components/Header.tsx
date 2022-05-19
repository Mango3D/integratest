import React, {useEffect, useState} from "react";

// Import component
import Logo from "./Logo";

const Header = () => {
    const [scrolled, setScrolled] = useState<boolean>(false);
    const [active, setActive] = useState<string>("");

    useEffect(() => {
        const scrollLimitChange = () => setScrolled(window.scrollY >= 180);
        window.addEventListener("scroll", scrollLimitChange);
        return () => window.removeEventListener("scroll", scrollLimitChange);
    }, []);

    return (
        <header className={scrolled ? "header mini" : "header img-show"}>
            <div
                className={scrolled ? "header-redline-mini" : "header-redline"}
            />
            <nav className={scrolled ? "nav-mini" : "nav"}>
                {scrolled ? (
                    <div className="minilogo_container">
                        <div className="minilogo-star-row" />
                    </div>
                ) : (
                    <Logo />
                )}
                <div className={scrolled ? "nav_menu-mini" : "nav_menu"}>
                    <a
                        onClick={() => setActive("who")}
                        className={
                            active === "who" ? "menu_item active" : "menu_item"
                        }
                        href="#Who"
                    >
                        who are we?
                    </a>
                    <a
                        onClick={() => setActive("what")}
                        className={
                            active === "what" ? "menu_item active" : "menu_item"
                        }
                        href="#What"
                    >
                        what we do?
                    </a>
                    <a
                        onClick={() => setActive("how")}
                        className={
                            active === "how"
                                ? "menu_item active how-item"
                                : "menu_item how-item"
                        }
                        href="#How"
                    >
                        how to find us?
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Header;
