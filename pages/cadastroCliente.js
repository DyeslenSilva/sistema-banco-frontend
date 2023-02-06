import { MDBInput,MDBContainer, MDBCard, MDBRow, MDBBtn, MDBCardBody } from "mdb-react-ui-kit";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';


export default function CadastroCliente(){
    return(
        <MDBContainer>
        <div class="container">
    <MDBRow>
        <MDBCard className="bg-info text-black my-5 mx-auto" style={{borderRadius: '2rem' ,maxWidth: '400px'}}>
            <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">

                <h5>Cadatro de Cliente PF</h5>

                <MDBInput wrapperClass="mb-4 mx-5 w-80" placeholder="Nome Completo" id="formControlMd" type="text" size="md"/>
                <MDBInput wrapperClass="mb-4 mx-5 w-80" placeholder="CPF" id="formControlLg" type="text" size="md"/>
                <MDBInput wrapperClass="mb-4 mx-5 w-80" placeholder="RG" id="formControlLg" type="text" size="md"/>
                <MDBInput wrapperClass="mb-4 mx-5 w-80" placeholder="CEP" id="formControlLg" type="text" size="md"/>
                <MDBInput wrapperClass="mb-4 mx-5 w-80" placeholder="Endereço" id="formControlLg" type="text" size="md"/>
                <MDBInput wrapperClass="mb-4 mx-5 w-80" placeholder="Nº" id="formControlLg" type="text" size="md"/>
                <MDBInput wrapperClass="mb-4 mx-5 w-80" placeholder="Municipio" id="formControlLg" type="text" size="md"/>
                <MDBInput wrapperClass="mb-4 mx-5 w-80" placeholder="Estado" id="formControlLg" type="text" size="md"/>

                <MDBBtn>Cadastro</MDBBtn>

            </MDBCardBody>
        </MDBCard>
    </MDBRow>
</div>
    
    <div class="container">
    <MDBRow>
        <MDBCard className="bg-info text-black my-5 mx-auto" style={{borderRadius: '2rem', maxWidth:'350px'}}>
            <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
                <h5>Cadastro de Entidade</h5>

                <MDBInput wrapperClass="mb-4 mx-5 w-80" placeholder="Razão Social" id="formControlMd" type="text" size="md"/>
                <MDBInput wrapperClass="mb-4 mx-5 w-80" placeholder="CNPJ" id="formControlMd" type="text" size="md"/>
                <MDBInput wrapperClass="mb-4 mx-5 w-80" placeholder="CEP" id="formControlMd" type="text" size="md"/>
                <MDBInput wrapperClass="mb-4 mx-5 w-80" placeholder="Endereco" id="formControlMd" type="text" size="md"/>
                <MDBInput wrapperClass="mb-4 mx-5 w-80" placeholder="Nº" id="formControlMd" type="text" size="md"/>
                <MDBInput wrapperClass="mb-4 mx-5 w-80" placeholder="Municipio" id="formControlMd" type="text" size="md"/>
                <MDBInput wrapperClass="mb-4 mx-5 w-80" placeholder="Estado" id="formControlMd" type="text" size="md"/>

                <MDBBtn>Cadastro</MDBBtn>
            </MDBCardBody>
        </MDBCard>
    </MDBRow>
        </div>
    </MDBContainer>
    )

}