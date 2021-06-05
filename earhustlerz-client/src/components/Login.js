import React from 'react'
import { connect } from 'react-redux'

const Login = () => {
    return(
        <form onSubmit={}>
            <input placeholder="Username" value={} name="username" type="text" onChange={} />
            <input placeholder="Password" value={} name="password" type="text" onChange={} />
            <input type="submit" value="Log In" />
        </form>
    )
}

export default connect()(Login)