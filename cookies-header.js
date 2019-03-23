//Headers
//This is how you retrieve a header from the response:

pm.response.headers.get('X-Cache') 

//and in a test:

//Header exists: 

pm.response.to.have.header(X-Cache'); 

//Header has value: 

pm.expect(pm.response.headers.get('X-Cache')).to.eql('HIT'); 

//Cookies

//In a similar fashion you can test cookies as well.

//Cookie exists:

pm.expect(pm.cookies.has('sessionId')).to.be.true; 


//Cookie has value:

pm.expect(pm.cookies.get('sessionId')).to.eql(’ad3se3ss8sg7sg3'); 