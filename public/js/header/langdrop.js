/* =========================================================
   ATOM — LANGUAGE DROPDOWN
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const language =
            document.querySelector(".language");

        if (!language) {
            return;
        }


        const button =
            language.querySelector(
                ".language-button"
            );

        const menu =
            language.querySelector(
                ".language-menu"
            );

        const options =
            language.querySelectorAll(
                ".language-option"
            );


        if (!button || !menu) {
            return;
        }


        /* ================================================
           TOGGLE
           ================================================ */

        function toggleMenu(force) {

            const shouldOpen =
                typeof force === "boolean"
                    ? force
                    : menu.hidden;

            menu.hidden = !shouldOpen;

            button.setAttribute(
                "aria-expanded",
                String(shouldOpen)
            );

            language.classList.toggle(
                "open",
                shouldOpen
            );

        }


        /* ================================================
           BUTTON
           ================================================ */

        button.addEventListener(
            "click",
            event => {

                event.stopPropagation();

                toggleMenu();

            }
        );


        /* ================================================
           LANGUAGE OPTIONS
           ================================================ */

        options.forEach(option => {

            option.addEventListener(
                "click",
                async () => {

                    const selectedLanguage =
                        option.dataset.language;

                    if (!selectedLanguage) {
                        return;
                    }


                    await I18n.load(
                        selectedLanguage
                    );

                    toggleMenu(false);

                }
            );

        });


        /* ================================================
           CLICK OUTSIDE
           ================================================ */

        document.addEventListener(
            "click",
            event => {

                if (
                    !language.contains(
                        event.target
                    )
                ) {
                    toggleMenu(false);
                }

            }
        );


        /* ================================================
           ESC
           ================================================ */

        document.addEventListener(
            "keydown",
            event => {

                if (event.key !== "Escape") {
                    return;
                }

                toggleMenu(false);

                button.focus();

            }
        );


        /* ================================================
           KEYBOARD NAVIGATION
           ================================================ */

        menu.addEventListener(
            "keydown",
            event => {

                const items =
                    [...options];

                const current =
                    document.activeElement;

                const index =
                    items.indexOf(current);


                if (
                    event.key === "ArrowDown"
                ) {

                    event.preventDefault();

                    const next =
                        items[
                            (index + 1) %
                            items.length
                        ];

                    next?.focus();

                }


                if (
                    event.key === "ArrowUp"
                ) {

                    event.preventDefault();

                    const previous =
                        items[
                            (index - 1 +
                                items.length) %
                            items.length
                        ];

                    previous?.focus();

                }


                if (
                    event.key === "Escape"
                ) {

                    event.preventDefault();

                    toggleMenu(false);

                    button.focus();

                }

            }
        );

    }
);