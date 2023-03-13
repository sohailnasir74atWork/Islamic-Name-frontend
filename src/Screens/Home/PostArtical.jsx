import React from 'react'
import "./Style/PostArtical.scss"

const PostArtical = () => {
    return (

        <div className='container post-artical-cont' data-aos="fade-up">
            <div className='row d-flex'>
                <div><h2 className='section-title-main'>WANT TO POST ARTICAL ON NAMES? WE WILL PUBLISH IT</h2></div>
                <form className='post-artical-form'>
                    <div class="row mt-3">
                        <div class="col">
                            <input type="text" class="form-control" placeholder="First name" />
                        </div>
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Last name" />
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col">
                        <textarea class="form-control" 
                        placeholder="Paste your artical"
                        id="exampleFormControlTextarea1" rows="4"></textarea>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default PostArtical