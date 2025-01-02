import React, { useEffect, useState } from 'react'

function EditUser({showModal,selectedUser,setShowModal,updateUser}) {
    
    const [formData,setFormData] = useState(selectedUser || {})
    useEffect(() => {
        setFormData(selectedUser);
    }, [selectedUser]);
    
    const handleChange = (e) => {
        const [name,value] = [e.target.name,e.target.value]
        setFormData(prevState => {
            return {
                ...prevState,
                [name]:value
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setShowModal(false)
        updateUser(formData)
    }

  return (
    <div className='overlay' style={{display:showModal?"flex":"none"}}>
        <div className='modal' >
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className='form-elements'>
                <h3>Name</h3>
                <input type="text" name="name" value={formData?.name}  onChange={handleChange}/>
            </div>
            <div className='form-elements'>
                <h3>Email</h3>
                <input type="text" name="email" value={formData?.email}  onChange={handleChange}/>
            </div>
            <div className='form-elements'>
                <h3>Role</h3>
                <input type="text" name="role" value={formData?.role} onChange={handleChange}/>
            </div>
            <div className='btns'>
                <button type='button' onClick={() => setShowModal(false)}>Close</button>
                <button type='submit'>Update</button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default EditUser