const Footer = () => {
    return (
        <footer>
            <div id="main">
                <div id="link">
                    <h1 className="text-3xl mb-4">Useful Links</h1>
                    <ul >
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Teachers</a></li>
                        <li><a href="#">Students</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">About Us</a></li>
                    </ul>
                </div>
                <div id="social">
                    <h1 className="text-3xl mb-10">Social Links</h1>
                    <ul>
                        <li><a href="#">
                        <i className="ri-youtube-fill"></i>
                            Youtube</a></li>
                        <li><a href="#">
                        <i className="ri-instagram-line "></i>
                            Instagram</a></li>
                        <li><a href="#">
                        <i className="ri-facebook-fill"></i>
                            Facebook</a></li>
                        <li><a href="#">
                        <i className="ri-twitter-fill"></i>
                            Twitter</a></li>
                    </ul>
                </div>
                <div id="enquiry">
                    <h1 className="text-3xl">Enquiry</h1>
                    <input type="text" placeholder="Fullname" className="bg-white"/>
                    <input type="text" placeholder="example@gmail.com" className="bg-white"/>
                    <input type="text" placeholder="Your Question?"className="bg-white" />
                    <button>Submit</button>
                </div>
                <div id="info">
                    <img src="https://png.pngtree.com/png-clipart/20230409/original/pngtree-school-logo-design-png-image_9037661.png" className="w-[300px]"/>
                    <h1 className="md:text-3xl">Engineering College</h1>
                </div>
            </div>
        </footer>
    )
}
export default Footer