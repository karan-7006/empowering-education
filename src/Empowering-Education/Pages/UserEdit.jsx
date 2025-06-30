import React, { useEffect, useState } from 'react'
import Header from '../Common/Header'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';

function UserEdit() {

    const redirect = useNavigate();

    const [user, setuser] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
        status: ""
    });

    useEffect(() => {
        getdata()
    }, [])

    const getdata = async () => {
        const res = await axios.get(`http://localhost:3000/user/${localStorage.getItem("userId")}`)
        console.log(res.data);
        setuser(res.data)
    }

    const getchange = (e) => {
        setuser({
            ...user,
            [e.target.name]: e.target.value
        })
        console.log(user)
    }

    const updatedata = async (e) => {
        e.preventDefault();

        try {

            if (!user.email.trim() || !user.password.trim() || !user.name.trim()) {
                console.log("Please Fill required Details")
                toast.error("Please Fill required Details")
                return false
            }

            const res = await axios.patch(`http://localhost:3000/user/${user.id}`, user)
            console.log(res.data)
                localStorage.setItem("username", res.data.name)
                toast.success("Profile Updated")
                redirect("/")
                setuser({
                    id: "",
                    name: "",
                    email: "",
                    password: "",
                    status: ""
                })

        } catch (error) {

            console.log("Api Data not Found")
            toast.error("Api Data not Found")
            return false

        }
    }

    return (
        <div>
            <Header />
            {/* <NavHeader title="Edit Your Profile" /> */}

            <section class="vh-100 bg-image" style={{
                backgroundImage: "url('https://images.pexels.com/photos/3368816/pexels-photo-3368816.jpeg')",
                backgroundSize: 'cover'
            }}>
                <div className="mask d-flex align-items-center h-100 gradient-custom-3 mt-4">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card" style={{ borderRadius: "50px" }}>
                                    <div className="card-body bg-primary-subtle p-3">
                                        <h1 className='text-center fw-bold text-primary my-5'><u>Edit Your Profile</u></h1>
                                        <form onSubmit={updatedata}>
                                            <div data-mdb-input-init className="form-outline mb-4">
                                                <input type="text" name='name' value={user.name} onChange={getchange} id="form3Example1cg" className="form-control form-control-lg" />
                                                <label className="form-label" htmlFor="form3Example1cg">Your Name</label>
                                            </div>
                                            <div data-mdb-input-init className="form-outline mb-4">
                                                <input type="email" name='email' value={user.email} onChange={getchange} id="form3Example3cg" className="form-control form-control-lg" />
                                                <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                                            </div>
                                            <div data-mdb-input-init className="form-outline mb-4">
                                                <input type="password" name='password' value={user.password} onChange={getchange} id="form3Example4cg" className="form-control form-control-lg" />
                                                <label className="form-label" htmlFor="form3Example4cg">Password</label>
                                            </div>
                                            <div className="form-check d-flex justify-content-center mb-5">
                                                <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example3cg" />
                                                <label className="form-check-label" htmlFor="form2Example3g">
                                                    I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                                                </label>
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block btn-lg gradient-custom-4 text-body-light">Update Profile</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default UserEdit
