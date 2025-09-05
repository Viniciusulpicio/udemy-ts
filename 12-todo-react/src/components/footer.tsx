import * as React from 'react';

import style from "./footer.module.css"

export default function Footer() {
    return (
        <footer className={style.footer}>
            <p>
                <span>React + TS Todo</span> @ 2025
            </p>
        </footer>
    );
}
