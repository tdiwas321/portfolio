import resume from "../DIWAS_THAPA_CV.pdf"
export default function Header(){
    return(
        <div className="headerContainer">
            <div className="headerItemsContainer">
                <a href={resume} className="headerItems">RESUME</a>
                <a href="mailto:tdiwas321@gmail.com" className="headerItems">CONTACT</a>
            </div>
        </div>
    )
}