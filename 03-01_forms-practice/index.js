function App() {

    const [formData, setFormData] = React.useState(
        {
            email: "",
            password: "",
            confirm: "",
            match: false,
            newsletter: true,
        }
    )

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        if (formData.password === formData.confirm) {
            event.preventDefault()
            console.log("ara")
            setFormData(prevFormData => {
                return {
                    ...prevFormData,
                    match: true,
                }
            })
        }
    }
    
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    name="confirm"
                    value={formData.confirm}
                    onChange={handleChange}
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"  
                        name="newsletter"
                        checked={formData.newsletter}   
                        onChange={handleChange} 
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button
                    className="form--submit"
                >
                    Sign up
                </button>
                {formData.match && <p>Thank you for signing up!</p>}
            </form>
        </div>
    )
}

ReactDOM.render(
	<App />,
	document.getElementById("root")
)