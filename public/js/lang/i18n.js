/* =========================================================
   ATOM — INTERNATIONALIZATION
   ========================================================= */

const I18n = (() => {

    const DEFAULT_LANGUAGE = "pt-BR";

    const STORAGE_KEY = "atom-language";

    const SUPPORTED_LANGUAGES = [
        "pt-BR",
        "en-US",
        "es-ES"
    ];

    let currentLanguage = DEFAULT_LANGUAGE;

    let dictionary = {};


    /* =====================================================
       GET NESTED VALUE
       ===================================================== */

    function getValue(object, path) {

        return path
            .split(".")
            .reduce(
                (current, key) => current?.[key],
                object
            );

    }


    /* =====================================================
       LOAD TRANSLATION
       ===================================================== */

    async function load(language) {

        if (!SUPPORTED_LANGUAGES.includes(language)) {
            language = DEFAULT_LANGUAGE;
        }

        try {

            const response = await fetch(
                `/locales/${language}.json`,
                {
                    headers: {
                        "Accept": "application/json"
                    }
                }
            );

            if (!response.ok) {
                throw new Error(
                    `Falha ao carregar idioma: ${language}`
                );
            }

            const data = await response.json();

            dictionary = data;

            currentLanguage = language;

            localStorage.setItem(
                STORAGE_KEY,
                language
            );

            apply();

            updateLanguageUI();

            document.documentElement.lang = language;

        } catch (error) {

            console.error(
                "[Atom:i18n]",
                error
            );

            /*
             * Se o idioma solicitado falhar,
             * tenta o idioma padrão.
             */

            if (language !== DEFAULT_LANGUAGE) {
                await load(DEFAULT_LANGUAGE);
            }

        }

    }


    /* =====================================================
       APPLY TRANSLATIONS
       ===================================================== */

    function apply() {

        document
            .querySelectorAll("[data-i18n]")
            .forEach(element => {

                const key =
                    element.dataset.i18n;

                const value =
                    getValue(dictionary, key);

                if (typeof value === "string") {
                    element.textContent = value;
                }

            });


        /*
         * ARIA LABEL
         */

        document
            .querySelectorAll("[data-i18n-aria]")
            .forEach(element => {

                const key =
                    element.dataset.i18nAria;

                const value =
                    getValue(dictionary, key);

                if (typeof value === "string") {
                    element.setAttribute(
                        "aria-label",
                        value
                    );
                }

            });


        /*
         * ALT
         */

        document
            .querySelectorAll("[data-i18n-alt]")
            .forEach(element => {

                const key =
                    element.dataset.i18nAlt;

                const value =
                    getValue(dictionary, key);

                if (typeof value === "string") {
                    element.setAttribute(
                        "alt",
                        value
                    );
                }

            });

    }


    /* =====================================================
       LANGUAGE UI
       ===================================================== */

    function updateLanguageUI() {

        const current =
            dictionary.meta?.short;

        const currentElement =
            document.querySelector(
                ".language-current"
            );

        if (currentElement && current) {
            currentElement.textContent = current;
        }


        document
            .querySelectorAll(".language-option")
            .forEach(option => {

                const isActive =
                    option.dataset.language ===
                    currentLanguage;

                option.classList.toggle(
                    "active",
                    isActive
                );

                option.setAttribute(
                    "aria-current",
                    isActive
                        ? "true"
                        : "false"
                );

            });

    }


    /* =====================================================
       INITIALIZE
       ===================================================== */

    async function init() {

        const savedLanguage =
            localStorage.getItem(
                STORAGE_KEY
            );

        const browserLanguage =
            navigator.language;


        let language =
            savedLanguage ||
            browserLanguage;


        /*
         * Se o navegador informar algo como
         * "pt", convertemos para pt-BR.
         */

        if (
            language &&
            language.toLowerCase() === "pt"
        ) {
            language = "pt-BR";
        }

        if (
            language &&
            language.toLowerCase() === "en"
        ) {
            language = "en-US";
        }

        if (
            language &&
            language.toLowerCase() === "es"
        ) {
            language = "es-ES";
        }


        if (
            !SUPPORTED_LANGUAGES.includes(language)
        ) {
            language = DEFAULT_LANGUAGE;
        }


        await load(language);

    }


    /* =====================================================
       PUBLIC API
       ===================================================== */

    return {
        init,
        load,

        get language() {
            return currentLanguage;
        }
    };

})();