import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import addMember from '../actions/addMember.js'
import { getMembers } from '../axios-requests/Member.js'
import '../css/HomePage.css'

const HomePage = () => {
    const [state, setState] = useState({
        name: "",
        company: "",
        status: "",
        notes: "",
        members: []
    })

    function getMemberData() {
        // console.log('listing all members:', getMembers())
        const members = getMembers()
        // console.log('getting1', members)


        members.then(res => {
            console.log('these are the members :', res)
            setState({ members: res })
        })
        members.catch(err => err)

        // console.log('getting2', state.members)
    }

    useEffect(() => {
        getMemberData()
    }, [])

    const dispatch = useDispatch()
    function openModalContainer() {

        console.log('inside modal')
        const modal = document.getElementsByClassName('modal-container')
        modal[0].style.display = 'block'
    }

    function closeModalContainer() {

        console.log('inside modal')
        const modal = document.getElementsByClassName('modal-container')
        modal[0].style.display = 'none'
    }

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })

        console.log("current state:", state)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('handlesubmit clicked')


        // should use post method to add new member ...
        const data = {
            name: state.name,
            company: state.company,
            status: state.status,
            notes: state.notes,
        }

        console.log("data to post:", data)
        dispatch(addMember(data))
        console.log("dispached")
        // getMembers()

        // axios post request to register user - (change this for post request while signin in for user)
        // makePostRequest({ "email": state.email, "password": state.password })
    }

    return (
        <div>
            <div className='modal-container'>

                <h1>add members</h1>
                <form onSubmit={(e) => { handleSubmit(e) }}>
                    <label htmlFor="name">Name</label><br />
                    <input id="name" name="name" onChange={(e) => handleChange(e)} /><br />

                    <label htmlFor="company">Company</label><br />
                    <input id="company" name="company" onChange={(e) => handleChange(e)} /><br />

                    <label htmlFor="status">Status</label><br />
                    <input id="status" name="status" onChange={(e) => handleChange(e)} /><br />

                    <label htmlFor="notes">notes</label><br />
                    <input id="notes" name="notes" onChange={(e) => handleChange(e)} /><br />

                    <input type="submit" value="save" />
                </form>
                <button onClick={closeModalContainer}>Cancel</button>
            </div>
            <div style={{ display: "flex" }}>
                <h1>Team Members</h1>
                <button onClick={openModalContainer}>Add Team Member</button>
            </div>
            <select>
                <option value="selectAll">select all</option>
                <option value="DCUnited">DC United</option>
                <option value="ManchesterUnited">Manchester United</option>
                <option value="LAGalaxy">LA Galaxy</option>
            </select>

            <select>
                <option value="selectAll">Status</option>
                <option value="DCUnited">DC United</option>
                <option value="ManchesterUnited">Manchester United</option>
                <option value="LAGalaxy">LA Galaxy</option>
            </select>

            <table>
                <thead>
                    <tr>
                        <td></td>
                        <td>Name</td>
                        <td>Company</td>
                        <td>Status</td>
                        <td>Last Updated</td>
                        <td>Notes</td>
                        <td>Delete</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.members.map(member => {
                            return <tr key={member._id}>
                                <td></td>
                                <td>{member.name}</td>
                                <td>{member.company}</td>
                                <td>{member.status}</td>
                                <td>{member.status}</td>
                                <td>{member.notes}</td>
                                <td>Delete</td>
                            </tr>
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}

export default HomePage