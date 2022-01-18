import React from 'react'

export const Login = () => {
    return (
        <>
     

	
	<section className="page-info-section">
		<div className="container">
			
			<div className="site-beradcamb">
			
			
			</div>
		</div>
	</section>
	


	
	<section className="contact-page spad">
		<div className="container">
			<div className="row">
				<div className="col-lg-7">
					<form className="contact-form">
						<div className="row">
							<div className="col-md-6">
								<div className="form-group">
									<input className="check-form" type="text" placeholder="First Name*:"/>
									<span><i className="ti-check"></i></span>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
									<input className="check-form" type="text" placeholder="Last Name*:"/>
									<span><i className="ti-check"></i></span>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
									<input className="check-form" type="text" placeholder="Email Adress*:"/>
									<span><i className="ti-check"></i></span>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
									<input className="check-form" type="text" placeholder="Phone Number*:"/>
									<span><i className="ti-check"></i></span>
								</div>
							</div>
							<div className="col-md-12">
								<div className="form-group">
									<textarea placeholder="Tell us about your question!"></textarea>
								</div>
								<h5 className="mb-3">Way to Contacts<span>*</span>:</h5>
								<div className="contact-type">
									<label className="ct-label">Phone
										<input type="radio" name="radio"/>
										 <span className="checkmark"></span>
									</label>
									<label className="ct-label">Email
										<input type="radio" name="radio"/>
										 <span className="checkmark"></span>
									</label>
									<label className="ct-label">Other
										<input type="radio" name="radio"/>
										 <span className="checkmark"></span>
									</label>
								</div>

								<button className="site-btn sb-gradients mt-4">Submit form</button>
							</div>
						</div>
					</form>
				</div>
				<div className="col-lg-5 mt-5 mt-lg-0">
					<div className="map" id="map-canvas"></div>
				</div>
			</div>
		</div>
	</section>
	

        </>
        
   
	
       
	
    )
}
