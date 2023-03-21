
function Footer() {
    const footerYear = new Date().getFullYear()
    return (
        <footer>
            <div className="container-footer">
                <div className="social-media">
                    <a href="https://www.linkedin.com/in/%C8%99tefan-stanciu-85803a203/"
                    ><img src="/assets/linkedin.svg" alt="facebook"
                        /></a>
                </div>
                <div className="paragraf-footer">

                    <p>Copyright &copy;  Miky's Rush {footerYear}</p>
                </div>


                <span>
                    <a href="https://www.linkedin.com/in/%C8%99tefan-stanciu-85803a203/"
                    >Stefan Stanciu</a>
                </span>
            </div>
        </footer >
    )
}

export default Footer
