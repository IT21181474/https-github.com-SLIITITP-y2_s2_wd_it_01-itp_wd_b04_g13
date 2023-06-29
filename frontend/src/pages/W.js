import React from "react";


function why(){

    const tableStyle = {
        border: "1px solid #ddd",
        width: "50%",
        margin: "auto",
        backgroundColor: "#DCE4F7",
    };

    return(
        <div className="home-page">
            <br/><p className='text-4xl' style={{textAlign: "center", color:"#000000"}} >Why to choose us?</p><br/>
            <p className='text-3xl'><center> Here are the reasons why you should choose us</center></p><br/>
            <table style={tableStyle}>
                <tr>
                    <td>
                    <p className='text-2xl font-regular text-black'><center><br/>
                    Easy Sign Up<br/>
                    No membership or monthly fee<br/>
                    Fast and Trustworthy Delivery Methods<br/>
                    Qulity Service</center></p><br/>
                    
                    </td>

                </tr>

               
            </table>

            <div class="container">
	<div class="row">
		<div class="col">
			<div class="weather-card one">
				<div class="top">
					<div class="wrapper">
						<div class="mynav">
							<a href="javascript:;"><span class="lnr lnr-chevron-left"></span></a>
							<a href="javascript:;"><span class="lnr lnr-cog"></span></a>
						</div>
						<h1 class="heading">Clear night</h1>
						<h3 class="location">Dhaka, Bangladesh</h3>
						<p class="temp">
							<span class="temp-value">20</span>
							<span class="deg">0</span>
							<a href="javascript:;"><span class="temp-type">C</span></a>
						</p>
					</div>
				</div>
				<div class="bottom">
					<div class="wrapper">
						<ul class="forecast">
							<a href="javascript:;"><span class="lnr lnr-chevron-up go-up"></span></a>
							<li class="active">
								<span class="date">Yesterday</span>
								<span class="lnr lnr-sun condition">
									<span class="temp">23<span class="deg">0</span><span class="temp-type">C</span></span>
								</span>
							</li>
							<li>
								<span class="date">Tomorrow</span>
								<span class="lnr lnr-cloud condition">
									<span class="temp">21<span class="deg">0</span><span class="temp-type">C</span></span>
								</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<div class="col">
			<div class="weather-card rain">
				<div class="top">
					<div class="wrapper">
						<div class="mynav">
							<a href="javascript:;"><span class="lnr lnr-chevron-left"></span></a>
							<a href="javascript:;"><span class="lnr lnr-cog"></span></a>
						</div>
						<h1 class="heading">Rainy day</h1>
						<h3 class="location">Sylhet, Bangladesh</h3>
						<p class="temp">
							<span class="temp-value">16</span>
							<span class="deg">0</span>
							<a href="javascript:;"><span class="temp-type">C</span></a>
						</p>
					</div>
				</div>
				<div class="bottom">
					<div class="wrapper">
						<ul class="forecast">
							<a href="javascript:;"><span class="lnr lnr-chevron-up go-up"></span></a>
							<li class="active">
								<span class="date">Yesterday</span>
								<span class="lnr lnr-sun condition">
									<span class="temp">22<span class="deg">0</span><span class="temp-type">C</span></span>
								</span>
							</li>
							<li>
								<span class="date">Tomorrow</span>
								<span class="lnr lnr-cloud condition">
									<span class="temp">18<span class="deg">0</span><span class="temp-type">C</span></span>
								</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
            
        </div>

        
    )
}

export default why;