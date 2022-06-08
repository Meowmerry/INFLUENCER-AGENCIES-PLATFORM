import * as React from 'react'
import { useState } from 'react'

// import { LoginForm } from './login-form'
import { bigFolder } from './story/story-folder'

export default { title: `${bigFolder}LoginForm` }

export const notSigningIn = () => {
	const [signingIn, setSigningIn] = useState<boolean>(false)
	//return <LoginForm signingIn={signingIn} onSubmit={() => setSigningIn(true)} issue={null} />
	return <div>Login</div>
}

export const signingIn = () => (
	<div>Login</div>
	// <LoginForm
	// 	onSubmit={() => {
	// 		// do nothing
	// 	}}
	// 	signingIn
	// 	issue={null}
	// />
)

export const withIssue = () => ( 
	<div>Login</div>
	// <LoginForm
	// 	onSubmit={() => {
	// 		// do nothing
	// 	}}
	// 	signingIn={false}
	// 	issue="Wrong username or password!"
	// />
)
