import "./backdrop.scss"
const Backdrop = ({ dark, handleBackToTopClick }: any) => {
    return (
        <div>
            <button className="Btn" onClick={handleBackToTopClick} style={dark ? { backgroundColor: "#fff" } : {}}>
                <svg height="1.2em" className="arrow" viewBox="0 0 512 512" ><path style={dark ? { fill: "#000" } : {}} d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path></svg>
            </button>


        </div>
    )
}

export default Backdrop