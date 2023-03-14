import React from 'react'
import "./Style/PostArtical.scss"

const PostArtical = () => {
    return (

        <div className='container post-artical-cont' data-aos="fade-up">
            <div className='row d-flex'>
                <div className='section-title-main'>
                    <h2 >WANT TO POST ARTICAL ON NAMES? WE WILL PUBLISH IT</h2>
                    <h3>ناموں پر آرٹیکل پوسٹ کرنا چاہتے ہیں؟ ہم اسے شائع کریں گے</h3>
                </div>
                <form className='post-artical-form'>
                    <div class="row mt-3">
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Name" />
                        </div>
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Email" />
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col">
                        <textarea class="form-control" 
                        placeholder="Paste your artical"
                        id="exampleFormControlTextarea1" rows="4"></textarea>
                        </div>
                    </div>
                    <div className='m-3'>
                    <a href="" className="btn btn-primary">SUBMIT</a>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default PostArtical