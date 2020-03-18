import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import WebriqForm from "../components/form/form"
import Support from "../components/home/Support"

const SupportPage = () => (
	<Layout>
		<SEO title="Customer Support" description="" />
		<div class="page-headline">
			<div class="container">
				<div class="section-heading">
					<h1>Customer Support</h1>
				</div>
			</div>
		</div>
		<Support />
		<div className="container py-5">
			<div className="row">
				<div className="col-md-6">
					<h2 className="section-heading">CONTACT US</h2>
					<p>
						Like to know more about American Lighting products? Fill out this
						quick form and a member of our sales team will contact you shortly.
					</p>

					<WebriqForm
						form_id="5e71ceaceca8060a7cbdd0d5"
						name="Customer Support"
					>
						<div className="form-wrap mb-4">
							<label className="d-block mb-0">Name:</label>
							<input className="w-100" type="name" name="Name" required />
						</div>
						<div className="form-wrap mb-4">
							<label className="d-block mb-0">Email:</label>
							<input type="email" className="w-100" name="Email" required />
						</div>
						<div className="form-wrap mb-4">
							<label className="d-block mb-0">Number:</label>
							<input type="phone" className="w-100" name="number" required />
						</div>
						<div className="form-wrap mb-4">
							<label className="d-block mb-0">Company:</label>
							<input className="w-100" type="name" name="Company" required />
						</div>
						<div className="form-wrap mb-4">
							<label className="d-block mb-0">Street Address</label>
							<input className="w-100" type="name" name="Street Address" />
						</div>
						<div className="form-wrap mb-4">
							<label className="d-block mb-0">City</label>
							<input className="w-100" type="name" name="City" />
						</div>
						<div className="form-wrap mb-4">
							<label className="d-block mb-0">Postal Zip</label>
							<input className="w-100" type="name" name="Postal Zip" />
						</div>
						<div className="form-wrap mb-4">
							<label className="d-block mb-0">State / Province / Region</label>
							<input
								className="w-100"
								type="name"
								name="State / Province / Region"
							/>
						</div>
						<div className="form-wrap mb-4">
							<label className="d-block mb-0">Country:</label>
							<select id="country" name="country">
								<option value="" selected="selected" />
								<option value="United States">United States</option>
								<option value="United Kingdom">United Kingdom</option>
								<option value="Australia">Australia</option>
								<option value="Canada">Canada</option>
								<option value="France">France</option>
								<option value="New Zealand">New Zealand</option>
								<option value="India">India</option>
								<option value="Brazil">Brazil</option>
								<option value="----">----</option>
								<option value="Afghanistan">Afghanistan</option>
								<option value="Åland Islands">Åland Islands</option>
								<option value="Albania">Albania</option>
								<option value="Algeria">Algeria</option>
								<option value="American Samoa">American Samoa</option>
								<option value="Andorra">Andorra</option>
								<option value="Angola">Angola</option>
								<option value="Anguilla">Anguilla</option>
								<option value="Antarctica">Antarctica</option>
								<option value="Antigua &amp; Barbuda">
									Antigua &amp; Barbuda
								</option>
								<option value="Argentina">Argentina</option>
								<option value="Armenia">Armenia</option>
								<option value="Aruba">Aruba</option>
								<option value="Austria">Austria</option>
								<option value="Azerbaijan">Azerbaijan</option>
								<option value="Bahamas">Bahamas</option>
								<option value="Bahrain">Bahrain</option>
								<option value="Bangladesh">Bangladesh</option>
								<option value="Barbados">Barbados</option>
								<option value="Belarus">Belarus</option>
								<option value="Belgium">Belgium</option>
								<option value="Belize">Belize</option>
								<option value="Benin">Benin</option>
								<option value="Bermuda">Bermuda</option>
								<option value="Bhutan">Bhutan</option>
								<option value="Bolivia">Bolivia</option>
								<option value="Bosnia &amp; Herzegovina">
									Bosnia &amp; Herzegovina
								</option>
								<option value="Botswana">Botswana</option>
								<option value="Bouvet Island">Bouvet Island</option>
								<option value="British Indian Ocean Territory">
									British Indian Ocean Territory
								</option>
								<option value="British Virgin Islands">
									British Virgin Islands
								</option>
								<option value="Brunei">Brunei</option>
								<option value="Bulgaria">Bulgaria</option>
								<option value="Burkina Faso">Burkina Faso</option>
								<option value="Burundi">Burundi</option>
								<option value="Cambodia">Cambodia</option>
								<option value="Cameroon">Cameroon</option>
								<option value="Cape Verde">Cape Verde</option>
								<option value="Caribbean Netherlands">
									Caribbean Netherlands
								</option>
								<option value="Cayman Islands">Cayman Islands</option>
								<option value="Central African Republic">
									Central African Republic
								</option>
								<option value="Chad">Chad</option>
								<option value="Chile">Chile</option>
								<option value="China">China</option>
								<option value="Christmas Island">Christmas Island</option>
								<option value="Cocos (Keeling) Islands">
									Cocos (Keeling) Islands
								</option>
								<option value="Colombia">Colombia</option>
								<option value="Comoros">Comoros</option>
								<option value="Congo - Brazzaville">Congo - Brazzaville</option>
								<option value="Congo - Kinshasa">Congo - Kinshasa</option>
								<option value="Cook Islands">Cook Islands</option>
								<option value="Costa Rica">Costa Rica</option>
								<option value="Côte d’Ivoire">Côte d’Ivoire</option>
								<option value="Croatia">Croatia</option>
								<option value="Cuba">Cuba</option>
								<option value="Curaçao">Curaçao</option>
								<option value="Cyprus">Cyprus</option>
								<option value="Czechia">Czechia</option>
								<option value="Denmark">Denmark</option>
								<option value="Djibouti">Djibouti</option>
								<option value="Dominica">Dominica</option>
								<option value="Dominican Republic">Dominican Republic</option>
								<option value="Ecuador">Ecuador</option>
								<option value="Egypt">Egypt</option>
								<option value="El Salvador">El Salvador</option>
								<option value="Equatorial Guinea">Equatorial Guinea</option>
								<option value="Eritrea">Eritrea</option>
								<option value="Estonia">Estonia</option>
								<option value="Ethiopia">Ethiopia</option>
								<option value="Falkland Islands">Falkland Islands</option>
								<option value="Faroe Islands">Faroe Islands</option>
								<option value="Fiji">Fiji</option>
								<option value="Finland">Finland</option>
								<option value="French Guiana">French Guiana</option>
								<option value="French Polynesia">French Polynesia</option>
								<option value="French Southern Territories">
									French Southern Territories
								</option>
								<option value="Gabon">Gabon</option>
								<option value="Gambia">Gambia</option>
								<option value="Georgia">Georgia</option>
								<option value="Germany">Germany</option>
								<option value="Ghana">Ghana</option>
								<option value="Gibraltar">Gibraltar</option>
								<option value="Greece">Greece</option>
								<option value="Greenland">Greenland</option>
								<option value="Grenada">Grenada</option>
								<option value="Guadeloupe">Guadeloupe</option>
								<option value="Guam">Guam</option>
								<option value="Guatemala">Guatemala</option>
								<option value="Guernsey">Guernsey</option>
								<option value="Guinea">Guinea</option>
								<option value="Guinea-Bissau">Guinea-Bissau</option>
								<option value="Guyana">Guyana</option>
								<option value="Haiti">Haiti</option>
								<option value="Heard &amp; McDonald Islands">
									Heard &amp; McDonald Islands
								</option>
								<option value="Honduras">Honduras</option>
								<option value="Hong Kong SAR China">Hong Kong SAR China</option>
								<option value="Hungary">Hungary</option>
								<option value="Iceland">Iceland</option>
								<option value="Indonesia">Indonesia</option>
								<option value="Iran">Iran</option>
								<option value="Iraq">Iraq</option>
								<option value="Ireland">Ireland</option>
								<option value="Isle of Man">Isle of Man</option>
								<option value="Israel">Israel</option>
								<option value="Italy">Italy</option>
								<option value="Jamaica">Jamaica</option>
								<option value="Japan">Japan</option>
								<option value="Jersey">Jersey</option>
								<option value="Jordan">Jordan</option>
								<option value="Kazakhstan">Kazakhstan</option>
								<option value="Kenya">Kenya</option>
								<option value="Kiribati">Kiribati</option>
								<option value="Kosovo">Kosovo</option>
								<option value="Kuwait">Kuwait</option>
								<option value="Kyrgyzstan">Kyrgyzstan</option>
								<option value="Laos">Laos</option>
								<option value="Latvia">Latvia</option>
								<option value="Lebanon">Lebanon</option>
								<option value="Lesotho">Lesotho</option>
								<option value="Liberia">Liberia</option>
								<option value="Libya">Libya</option>
								<option value="Liechtenstein">Liechtenstein</option>
								<option value="Lithuania">Lithuania</option>
								<option value="Luxembourg">Luxembourg</option>
								<option value="Macau SAR China">Macau SAR China</option>
								<option value="Republic of North Macedonia">
									Republic of North Macedonia
								</option>
								<option value="Madagascar">Madagascar</option>
								<option value="Malawi">Malawi</option>
								<option value="Malaysia">Malaysia</option>
								<option value="Maldives">Maldives</option>
								<option value="Mali">Mali</option>
								<option value="Malta">Malta</option>
								<option value="Marshall Islands">Marshall Islands</option>
								<option value="Martinique">Martinique</option>
								<option value="Mauritania">Mauritania</option>
								<option value="Mauritius">Mauritius</option>
								<option value="Mayotte">Mayotte</option>
								<option value="Mexico">Mexico</option>
								<option value="Micronesia">Micronesia</option>
								<option value="Moldova">Moldova</option>
								<option value="Monaco">Monaco</option>
								<option value="Mongolia">Mongolia</option>
								<option value="Montenegro">Montenegro</option>
								<option value="Montserrat">Montserrat</option>
								<option value="Morocco">Morocco</option>
								<option value="Mozambique">Mozambique</option>
								<option value="Myanmar (Burma)">Myanmar (Burma)</option>
								<option value="Namibia">Namibia</option>
								<option value="Nauru">Nauru</option>
								<option value="Nepal">Nepal</option>
								<option value="Netherlands">Netherlands</option>
								<option value="New Caledonia">New Caledonia</option>
								<option value="Nicaragua">Nicaragua</option>
								<option value="Niger">Niger</option>
								<option value="Nigeria">Nigeria</option>
								<option value="Niue">Niue</option>
								<option value="Norfolk Island">Norfolk Island</option>
								<option value="North Korea">North Korea</option>
								<option value="Northern Mariana Islands">
									Northern Mariana Islands
								</option>
								<option value="Norway">Norway</option>
								<option value="Oman">Oman</option>
								<option value="Pakistan">Pakistan</option>
								<option value="Palau">Palau</option>
								<option value="Palestinian Territories">
									Palestinian Territories
								</option>
								<option value="Panama">Panama</option>
								<option value="Papua New Guinea">Papua New Guinea</option>
								<option value="Paraguay">Paraguay</option>
								<option value="Peru">Peru</option>
								<option value="Philippines">Philippines</option>
								<option value="Pitcairn Islands">Pitcairn Islands</option>
								<option value="Poland">Poland</option>
								<option value="Portugal">Portugal</option>
								<option value="Puerto Rico">Puerto Rico</option>
								<option value="Qatar">Qatar</option>
								<option value="Réunion">Réunion</option>
								<option value="Romania">Romania</option>
								<option value="Russia">Russia</option>
								<option value="Rwanda">Rwanda</option>
								<option value="Samoa">Samoa</option>
								<option value="San Marino">San Marino</option>
								<option value="São Tomé &amp; Príncipe">
									São Tomé &amp; Príncipe
								</option>
								<option value="Saudi Arabia">Saudi Arabia</option>
								<option value="Senegal">Senegal</option>
								<option value="Serbia">Serbia</option>
								<option value="Seychelles">Seychelles</option>
								<option value="Sierra Leone">Sierra Leone</option>
								<option value="Singapore">Singapore</option>
								<option value="Sint Maarten">Sint Maarten</option>
								<option value="Slovakia">Slovakia</option>
								<option value="Slovenia">Slovenia</option>
								<option value="Solomon Islands">Solomon Islands</option>
								<option value="Somalia">Somalia</option>
								<option value="South Africa">South Africa</option>
								<option value="South Georgia &amp; South Sandwich Islands">
									South Georgia &amp; South Sandwich Islands
								</option>
								<option value="South Korea">South Korea</option>
								<option value="South Sudan">South Sudan</option>
								<option value="Spain">Spain</option>
								<option value="Sri Lanka">Sri Lanka</option>
								<option value="St. Barthélemy">St. Barthélemy</option>
								<option value="St. Helena">St. Helena</option>
								<option value="St. Kitts &amp; Nevis">
									St. Kitts &amp; Nevis
								</option>
								<option value="St. Lucia">St. Lucia</option>
								<option value="St. Martin">St. Martin</option>
								<option value="St. Pierre &amp; Miquelon">
									St. Pierre &amp; Miquelon
								</option>
								<option value="St. Vincent &amp; Grenadines">
									St. Vincent &amp; Grenadines
								</option>
								<option value="Sudan">Sudan</option>
								<option value="Suriname">Suriname</option>
								<option value="Svalbard &amp; Jan Mayen">
									Svalbard &amp; Jan Mayen
								</option>
								<option value="Swaziland">Swaziland</option>
								<option value="Sweden">Sweden</option>
								<option value="Switzerland">Switzerland</option>
								<option value="Syria">Syria</option>
								<option value="Taiwan">Taiwan</option>
								<option value="Tajikistan">Tajikistan</option>
								<option value="Tanzania">Tanzania</option>
								<option value="Thailand">Thailand</option>
								<option value="Timor-Leste">Timor-Leste</option>
								<option value="Togo">Togo</option>
								<option value="Tokelau">Tokelau</option>
								<option value="Tonga">Tonga</option>
								<option value="Trinidad &amp; Tobago">
									Trinidad &amp; Tobago
								</option>
								<option value="Tunisia">Tunisia</option>
								<option value="Turkey">Turkey</option>
								<option value="Turkmenistan">Turkmenistan</option>
								<option value="Turks &amp; Caicos Islands">
									Turks &amp; Caicos Islands
								</option>
								<option value="Tuvalu">Tuvalu</option>
								<option value="U.S. Outlying Islands">
									U.S. Outlying Islands
								</option>
								<option value="U.S. Virgin Islands">U.S. Virgin Islands</option>
								<option value="Uganda">Uganda</option>
								<option value="Ukraine">Ukraine</option>
								<option value="United Arab Emirates">
									United Arab Emirates
								</option>
								<option value="Uruguay">Uruguay</option>
								<option value="Uzbekistan">Uzbekistan</option>
								<option value="Vanuatu">Vanuatu</option>
								<option value="Vatican City">Vatican City</option>
								<option value="Venezuela">Venezuela</option>
								<option value="Vietnam">Vietnam</option>
								<option value="Wallis &amp; Futuna">Wallis &amp; Futuna</option>
								<option value="Western Sahara">Western Sahara</option>
								<option value="Yemen">Yemen</option>
								<option value="Zambia">Zambia</option>
								<option value="Zimbabwe">Zimbabwe</option>
							</select>
						</div>
						<div className="form-wrap mb-4">
							<p className="mb-0">Please tell us how we can assist you</p>
							<div className="d-block">
								<input
									type="radio"
									name="Please tell us how we can assist you"
									value="Technical/product support"
								/>
								<label className="mb-0 ml-1">Technical/product support</label>
							</div>
							<div className="d-block">
								<input
									type="radio"
									name="Please tell us how we can assist you"
									value="Customer service"
								/>
								<label className="mb-0 ml-1">Customer service</label>
							</div>
							<div className="d-block">
								<input
									type="radio"
									name="Please tell us how we can assist you"
									value="Accounts payable or receivable"
								/>
								<label className="mb-0 ml-1">
									Accounts payable or receivable
								</label>
							</div>
							<div className="d-block">
								<input
									type="radio"
									name="Please tell us how we can assist you"
									value="I would like a sales representative to contact me"
								/>
								<label className="mb-0 ml-1">
									I would like a sales representative to contact me
								</label>
							</div>
							<div className="d-block">
								<input
									type="radio"
									name="Please tell us how we can assist you"
									value="Warranty information"
								/>
								<label className="mb-0 ml-1">Warranty information</label>
							</div>
							<div className="d-block">
								<input
									type="radio"
									name="Please tell us how we can assist you"
									value="Interested in becoming a distributor"
								/>
								<label className="mb-0 ml-1">
									Interested in becoming a distributor
								</label>
							</div>
						</div>
						<div className="form-wrap mb-4">
							<label className="d-block mb-0">
								Please enter any other comments or questions in the box below.
							</label>
							<textarea
								type="message"
								rows="4"
								cols="50"
								name="Please enter any other comments or questions in the box below."
							/>
						</div>
						<div className="form-wrap mb-4">
							<div className="webriq-recaptcha" />
						</div>
						<div className="form-wrap mb-4">
							<button type="submit" className="btn btn-secondary btn-sm">
								Submit
							</button>
						</div>
					</WebriqForm>
				</div>
				<div className="col-md-6">
					<h2 className="mb-5 section-heading">HOW ARE WE DOING?</h2>

					<WebriqForm
						form_id="5e71d590bb2ea12c741e822f"
						name="How are you doing?"
					>
						<div className="form-wrap mb-4">
							<label className="d-block mb-0">Name:</label>
							<input className="w-100" type="name" name="Name" required />
						</div>
						<div className="form-wrap mb-4">
							<label className="d-block mb-0">Email:</label>
							<input type="email" className="w-100" name="Email" required />
						</div>
						<div className="form-wrap mb-4">
							<label className="d-block mb-0">Number:</label>
							<input type="phone" className="w-100" name="number" required />
						</div>

						<div className="form-wrap mb-4">
							<p className="mb-0">Please rate your overall experience:</p>
							<div className="d-block">
								<input
									type="radio"
									name="Please rate your overall experience:"
									value="1 - Negative"
									required
								/>
								<label className="mb-0 ml-1">1 - Negative</label>
							</div>
							<div className="d-block">
								<input
									type="radio"
									name="Please rate your overall experience:"
									value="2 - Below average"
									required
								/>
								<label className="mb-0 ml-1">2 - Below average</label>
							</div>
							<div className="d-block">
								<input
									type="radio"
									name="Please rate your overall experience:"
									value="3 - Average"
									required
								/>
								<label className="mb-0 ml-1">3 - Average</label>
							</div>
							<div className="d-block">
								<input
									type="radio"
									name="Please rate your overall experience:"
									value="4 - Good"
									required
								/>
								<label className="mb-0 ml-1">4 - Good</label>
							</div>
							<div className="d-block">
								<input
									type="radio"
									name="Please rate your overall experience:"
									value="5 - Exceptional"
									required
								/>
								<label className="mb-0 ml-1">5 - Exceptional</label>
							</div>
						</div>
						<div className="form-wrap mb-4">
							<label className="d-block mb-0">
								Which American Lighting representative were you working with?
							</label>
							<input
								type="name"
								name="Which American Lighting representative were you working with?"
							/>
						</div>
						<div className="form-wrap mb-4">
							<p className="mb-0">Were they polite and helpful?</p>
							<div className="d-block">
								<input
									type="radio"
									name="Were they polite and helpful?"
									value="No"
									required
								/>
								<label className="mb-0 ml-1">No</label>
							</div>
							<div className="d-block">
								<input
									type="radio"
									name="Were they polite and helpful?"
									value="Yes"
									required
								/>
								<label className="mb-0 ml-1">Yes</label>
							</div>
						</div>
						<div className="form-wrap mb-4">
							<p className="mb-0">
								If placed on hold, did you have a reasonable hold time?
							</p>
							<div className="d-block">
								<input
									type="radio"
									name="If placed on hold, did you have a reasonable hold time?"
									value="No, hold time was excessive"
									required
								/>
								<label className="mb-0 ml-1">No, hold time was excessive</label>
							</div>
							<div className="d-block">
								<input
									type="radio"
									name="If placed on hold, did you have a reasonable hold time?"
									value="Yes, hold time was reasonable"
									required
								/>
								<label className="mb-0 ml-1">
									Yes, hold time was reasonable
								</label>
							</div>
						</div>
						<div className="form-wrap mb-4">
							<p className="mb-0">
								Was your issue resolved or your questions completely answered?
							</p>
							<div className="d-block">
								<input
									type="radio"
									name="Was your issue resolved or your questions completely answered?"
									value="No"
									required
								/>
								<label className="mb-0 ml-1">No</label>
							</div>
							<div className="d-block">
								<input
									type="radio"
									name="Was your issue resolved or your questions completely answered?"
									value="Yes"
									required
								/>
								<label className="mb-0 ml-1">Yes</label>
							</div>
						</div>
						<div className="form-wrap mb-4">
							<p className="mb-0">
								If your issue was unresolved, would you like someone from
								American Lighting to contact you?
							</p>
							<div className="d-block">
								<input
									type="radio"
									name="If your issue was unresolved, would you like someone from American Lighting to contact you?"
									value="No"
									required
								/>
								<label className="mb-0 ml-1">No</label>
							</div>
							<div className="d-block">
								<input
									type="radio"
									name="If your issue was unresolved, would you like someone from American Lighting to contact you?"
									value="Yes"
									required
								/>
								<label className="mb-0 ml-1">Yes</label>
							</div>
						</div>
						<div className="form-wrap mb-4">
							<label className="d-block mb-0">
								Please write additional comments here:
							</label>
							<textarea
								type="message"
								rows="4"
								cols="50"
								name="Please write additional comments here:"
							/>
						</div>
						<div className="form-wrap mb-4">
							<div className="webriq-recaptcha" />
						</div>
						<div className="form-wrap mb-4">
							<button type="submit" className="btn btn-secondary btn-sm">
								Submit
							</button>
						</div>
					</WebriqForm>
				</div>
			</div>
		</div>
	</Layout>
)

export default SupportPage
