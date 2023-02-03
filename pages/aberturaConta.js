import { MDBCard, MDBCardBody, MDBContainer, MDBInput, MDBRow , MDBBtn} from "mdb-react-ui-kit";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

export default function AberturaDeConta(){
    return(
        <MDBContainer breakpoint="lg">
            <MDBRow >
                <MDBCard className="bg-info text-black my-5 mx-auto" style={{borderRadius:"1.5rem" ,maxWidth: "400px"}}>
                    <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
                        <h5 className="fw-bold mb-2 text-uppercase">Abertura de Conta PF</h5>
                        <MDBInput wrapperClass="mb-4 mx-5 w-70" labelClass="text-white" placeholder="CPF"/>
                        <MDBBtn>Pesquisa CPF</MDBBtn>
                        <MDBInput wrapperClass="mb-4 mx-5 w-80" labelClass="text-white" placeholder="N Conta"/>
                        <MDBInput wrapperClass="mb-4 mx-5 w-80" labelClass="text-white" placeholder="Agencia"/>
                        <MDBBtn >Vincular cadastro a Conta Corrente de Pessoa Fisica</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBRow>

            <MDBRow>
                <MDBCard className="bg-info text-black my-5 mx-auto" style={{borderRadius:"1.5rem", maxWidth:"400px"}}>
                    <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
                        <h5 className="fw-bold mb-2 text-uppercase">Abertura de Conta PJ</h5>
                        <MDBInput wrapperClass="mb-4 mx-5 w-70" labelClass="text-white" placeholder="CNPJ"/>
                        <MDBBtn>Pesquisa CNPJ</MDBBtn>
                        <MDBInput wrapperClass="mb-4 mx-5 w-80" labelClass="text-white" placeholder="N Conta"/>
                        <MDBInput wrapperClass="mb-4 mx-5 w-80" labelClass="text-white" placeholder="Agencia"/>
                        <MDBBtn>Vincular cadastro Conta Corrente de Pessoa Juridica</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBRow>
        </MDBContainer>
    )
}