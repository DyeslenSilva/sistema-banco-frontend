import { MDBCard, MDBContainer, MDBNavbarBrand, MDBNavbar } from "mdb-react-ui-kit"
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

export default function CadastroPJ(){
    return(
        <><MDBNavbar light bgColor="light" >
            <MDBContainer fluid>
                <MDBNavbarBrand href="login2.js">Login</MDBNavbarBrand>
            </MDBContainer>
        </MDBNavbar>
        
        <MDBCard class="d-flex justify-content-center text-black my-5 mx-auto">

            <h3>Cadastro de Entidade</h3>

            <div>
                <form>
                    <div class="d-flex form-outline mb-5 justify-content-center text-black my-5 mx-auto">
                        <input type="text" id="form" class="form-control justify-content-center" />
                        <label class="form-label">Razao Social</label>
                    </div>
                    <div class="d-flex form-outline mb-5 justify-content-center text-black my-5 mx-auto">
                        <input type="text" id="form" class="form-control justify-content-center" />
                        <label class="form-label">CNPJ</label>
                    </div>
                    <div class="d-flex form-outline mb-5 justify-content-center text-black my-5 mx-auto">
                        <input type="text" id="form" class="form-control justify-content-center" />
                        <label class="form-label">Endereco</label>
                    </div>
                    <div class="d-flex form-outline mb-5 justify-content-center text-black my-5 mx-auto">
                        <input type="text" id="form" class="form-control justify-content-center" />
                        <label class="form-label">Nº</label>
                    </div>
                    <div class="d-flex form-outline mb-5 justify-content-center text-black my-5 mx-auto">
                        <input type="text" id="form" class="form-control justify-content-center" />
                        <label class="form-label">Municipio</label>
                    </div>
                    <div class="d-flex form-outline mb-5 justify-content-center text-black my-5 mx-auto">
                        <input type="text" id="form" class="form-control justify-control-center" />
                        <label class="form-label">Estado</label>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block mb-4">Cadastrar Entidade</button>
                </form>
            </div>
        </MDBCard></>
    )
}