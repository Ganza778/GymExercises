import PropTypes from 'prop-types'

function UserGreeting({isLoggedIn = false, username = "Guest"}) {
	const WelcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>
	const promptMessage =  <h2 className="prompt-message">Please Log in</h2>

	return (isLoggedIn ? WelcomeMessage : promptMessage)
}

UserGreeting.PropTypes = {
	isLoggedIn: PropTypes.bool,
	username: PropTypes.string,
}

export default UserGreeting