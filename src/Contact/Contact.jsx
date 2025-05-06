import './Contact.css'
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const data = {
            name: form.name.value,
            email: form.email.value,
            message: form.message.value,
        };

        await fetch('https://application-90.1tpm5dczf740.us-east.codeengine.appdomain.cloud/contact/contact', 
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        }   );

        // Optionally, show a success message or clear the form
        console.log("success")
        form.reset()
    };

    return (
        <div className='contact-container'>
            <div className='contact'>
                <div className="contact-form">
                    <h1>Get in Touch</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" required></textarea>
                        </div>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
            <div className="footer">
                <h1>eyu.shh</h1>
                <div className="social-links">
                    <a href="https://github.com/aaiushhh"><FaGithubSquare /></a>
                    <a href="https://www.linkedin.com/in/eyushh/"><FaLinkedin /></a>
                    <a href="mailto:eyushhonhisway@gmail.com"><MdEmail /></a>
                </div>

            </div>
        </div>
    )
}

export default Contact
