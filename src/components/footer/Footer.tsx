import "./footer.scss"
interface AndozalarProps {
    dark: boolean;
    selectLan: string;
}
const Footer: React.FC<AndozalarProps> = (
    {
        dark,
        selectLan
    }
) => {

    return (
        <footer id="contact" style={dark ? { backgroundColor: "#121212" } : {}}>
            <div className="container">
                <div className="footer-grid grid-class">
                    <div className="grid">
                        <h1 style={dark ? { color: "#fff" } : {}}>Online Andoza</h1>
                        <p style={dark ? { color: "#ccc" } : {}}>
                            {selectLan == "uz" ? "Biz bilan bog'lanishingiz uchun pastagi ilovalarning ustiga bosib, contactimizni olishingiz va bizga yozishingiz mumkin." : ""}
                            {selectLan == "en" ? "To contact us, you can click on the application below, get our contact and write to us." : ""}
                            {selectLan == "ru" ? "Чтобы связаться с нами, вы можете нажать на заявку ниже, получить наши контакты и написать нам." : ""}
                        </p>
                        <div className="socialFlex flex-class">
                            <ul className="example-2">
                                <li className="icon-content">
                                    <a
                                        href="https://t.me/adiba_atelier"
                                        aria-label="LinkedIn"
                                        data-social="linkedin"
                                    >
                                        <div className="filled"></div>
                                        <svg fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path d="M16 0.5c-8.563 0-15.5 6.938-15.5 15.5s6.938 15.5 15.5 15.5c8.563 0 15.5-6.938 15.5-15.5s-6.938-15.5-15.5-15.5zM23.613 11.119l-2.544 11.988c-0.188 0.85-0.694 1.056-1.4 0.656l-3.875-2.856-1.869 1.8c-0.206 0.206-0.381 0.381-0.781 0.381l0.275-3.944 7.181-6.488c0.313-0.275-0.069-0.431-0.482-0.156l-8.875 5.587-3.825-1.194c-0.831-0.262-0.85-0.831 0.175-1.231l14.944-5.763c0.694-0.25 1.3 0.169 1.075 1.219z"></path> </g></svg>
                                    </a>
                                    <div className="tooltip">Telegram</div>
                                </li>
                                <li className="icon-content">
                                    <a href="https://github.com/Elbotir2008/ONLINE-ANDOZA" aria-label="GitHub" data-social="github">
                                        <div className="filled"></div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="bi bi-github"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                    </a>
                                    <div className="tooltip">GitHub</div>
                                </li>
                                <li className="icon-content">
                                    <a
                                        href="https://www.instagram.com/adiba_9208?igsh=azRuazgwb3ZzNzR3"
                                        aria-label="Instagram"
                                        data-social="instagram"
                                    >
                                        <div className="filled"></div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="bi bi-instagram"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                    </a>
                                    <div className="tooltip">Instagram</div>
                                </li>
                                <li className="icon-content">
                                    <a href="https://www.youtube.com/@anvariskandarov8627" aria-label="Youtube" data-social="youtube">
                                        <div className="filled"></div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="bi bi-youtube"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                    </a>
                                    <div className="tooltip">Youtube</div>
                                </li>
                            </ul>


                        </div>
                    </div>
                    <div className="grid">
                        <h1 style={dark ? { color: "#fff" } : {}}>
                            {selectLan == "uz" ? "Xizmatlarimiz" : ""}
                            {selectLan == "en" ? "Our services" : ""}
                            {selectLan == "ru" ? "Наши сервисы" : ""}
                        </h1>
                        <ul style={dark ? { color: "#ccc" } : {}}>
                            <li >
                                <a href="#">
                                    {selectLan == "uz" ? "Yordam & Support" : ""}
                                    {selectLan == "en" ? "Help & Support" : ""}
                                    {selectLan == "ru" ? "Помощь и поддержка" : ""}
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    {selectLan == "uz" ? "Andozalar" : ""}
                                    {selectLan == "en" ? "Templates" : ""}
                                    {selectLan == "ru" ? "Шаблоны" : ""}
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    {selectLan == "uz" ? "Narxlar" : ""}
                                    {selectLan == "en" ? "Prices" : ""}
                                    {selectLan == "ru" ? "Цены" : ""}
                                </a>
                            </li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                    <div className="grid">
                        <h1 style={dark ? { color: "#fff" } : {}}>
                            {selectLan == "uz" ? "Andozalar" : ""}
                            {selectLan == "en" ? "Templates" : ""}
                            {selectLan == "ru" ? "Шаблоны" : ""}
                        </h1>
                        <ul style={dark ? { color: "#ccc" } : {}}>
                            <li>
                                <a href="#">
                                    {selectLan == "uz" ? "Erkaklar" : ""}
                                    {selectLan == "en" ? "Men" : ""}
                                    {selectLan == "ru" ? "Люди" : ""}
                                </a>

                            </li>
                            <li>
                                <a href="#">
                                    {selectLan == "uz" ? "Ayollar" : ""}
                                    {selectLan == "en" ? "Women" : ""}
                                    {selectLan == "ru" ? "Женщины" : ""}
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    {selectLan == "uz" ? "Ko’ylaklar" : ""}
                                    {selectLan == "en" ? "Dresses" : ""}
                                    {selectLan == "ru" ? "Платья" : ""}
                                </a>

                            </li>
                            <li>
                                <a href="#">
                                    {selectLan == "uz" ? "Koftalar" : ""}
                                    {selectLan == "en" ? "Blouses" : ""}
                                    {selectLan == "ru" ? "Блузки" : ""}
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    {selectLan == "uz" ? "Shimlar" : ""}
                                    {selectLan == "en" ? "Pants" : ""}
                                    {selectLan == "ru" ? "Брюки" : ""}
                                </a>

                            </li>
                            <li>
                                <a href="#">
                                    {selectLan == "uz" ? "Bolalar" : ""}
                                    {selectLan == "en" ? "Children" : ""}
                                    {selectLan == "ru" ? "Дети" : ""}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="grid">
                        <h1 style={dark ? { color: "#ccc" } : {}}>
                            {selectLan == "uz" ? "Biz Bilan Bog’lanish" : ""}
                            {selectLan == "en" ? "Contact us" : ""}
                            {selectLan == "ru" ? "Связаться с нами" : ""}

                        </h1>
                        <p style={dark ? { color: "#ccc" } : {}}>
                            {selectLan == "uz" ? "Toshkent shahar Yunusobod tuman 4 kvartal 87 yu" : ""}
                            {selectLan == "en" ? "Tashkent city Yunusabad district 4 quarter 87" : ""}
                            {selectLan == "ru" ? "город Ташкент Юнусабадский район 4 квартал 87" : ""}
                            <br />
                            +998 94 364 57 77
                            <br />
                            +998 97 303 19 09
                            a.iskandarov07@gmail.com
                        </p>
                    </div>
                </div>
                <div className="footer-bottom flex-class" style={dark ? { backgroundColor: "#121212" } : {}}>
                    <p>©️ Asadov Elbotir - All rights reserved</p>
                    <ul className="flex-class">
                        <li>Terms & Condition </li>
                        <li>Privacy Police</li>
                        <li>Cookie Police</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer