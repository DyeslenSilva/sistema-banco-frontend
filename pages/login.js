import {React } from "react"
import { Placeholder } from "react-bootstrap";
import {MDBContainer, MDBRow, MDBCol, MDBCard,MDBCardBody,MDBInput,MDBBtn} from "mdb-react-ui-kit"
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Link from "next/link";

export default function Login(){
    
   return (

        <MDBContainer fluid className="bg-primary">
            

            <MDBRow class="d-flex justify-content-center align-items-center h-100">
                <MDBCol col='12'>
                <Link legacyBehavior href="/">
                    <MDBBtn outline className="mx-2 px-5" color="green" size="sm">Pagina Inicial</MDBBtn>
                </Link>
                    <MDBCard className="bg-info text-black my-5 mx-auto" style={{borderRadius: '1rem' , maxWidth: '400px'}}>
                        
                        <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
                            <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                            <p className="text-white-50 mb-5">Entre com  as suas credenciais</p>
                            
                            <MDBInput wrapperClass="mb-4 mx-5 w-100" labelClass="text-white" placeholder="CPF" id="formControlLg" type="text" size="lg"/>
                            <MDBInput wrapperClass="mb-4 mx-5 w-100" labelClass="text-white" placeholder="Senha" id="formControlLg" type="password" size="lg"/>    

                            <MDBBtn outline className="mx-2 px-5" color="white" size="lg">Login</MDBBtn>

                            <div>
                                <a href="">Abra sua conta</a>
                            </div>


                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    ) 
}   

