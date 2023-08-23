.App {
  text-align: center;
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  color: white;
}
.auth-form-container, .login-form, .register-form{
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(79deg, #7439db, #c66fbc 48%, #f7944d);
  border: 1px solid white;
  border-radius: 10px;
}
.login-form, .register-form{
   padding: 5rem;
   margin: 0.5rem;
}
.auth-form-container{
  margin: 10px 0px;
}

.lbl{
  display: flex;
  text-align: left;
  padding: 0.25rem 0;
  justify-content: left;
}

input{
  margin: 0.5rem 0;
  padding: 1rem ;
  border: none;
  border-radius: 10px;
}

button{
  border: none;
  background-color: white;
  padding: 20px ;
  cursor: pointer;
}

.btn-btn{
  margin-top: 20px;
  width: 13rem;
  border-radius: 10px;
  columns:#7439db ;
  border: 1px solid rgb(13, 33, 212);
}

.link-button{
  background: none;
  color: white;
  text-decoration: underline;
}

@media screen and (min-width:600px)
{
  .auth-form-container{
    padding: 5rem;
    border: 1px solid white;
    border-radius: 10px;
    margin: 0.5rem;
  }
}
