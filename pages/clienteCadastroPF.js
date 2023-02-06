import { MDBCard } from "mdb-react-ui-kit"
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

export default function CadastroCliente (){
    return (
    <MDBCard class="d-flex justify-content-center text-black my-5 mx-auto">
        
        <h4>Cadastro de Cliente Pessoa Fisica</h4>

        <div class="container">
            <form>
                <div class="d-flex form-outline mb-5 justify-content-center text-black my-5 mx-auto">
                    <input type="text" id="form" class="form-control justify-content-center"/>
                    <label class="form-label">Nome</label>
                </div>
                <div class="d-flex form-outline mb-5 justify-content-center text-black my-5 mx-auto">
                        <input type="text" id="form" class="form-control justify-content-center"/>
                        <label class="form-label">RG</label>
                </div>
                <div class="d-flex form-outline mb-5 justify-content-center text-black my-5 mx-auto">
                    <input type="text" id="form" class="form-control justify-content-center" />
                    <label class="form-label">CPF</label>
                </div>
                <div class="d-flex form-outline mb-5 justify-content-center text-black my-5 mx-auto">
                    <input type="text" id="form" class="form-control justify-content-center"/>
                    <label class="form-label">CEP</label>
                </div>
                <div class="d-flex form-outline mb-5 justify-content-center text-black my-5 mx-auto">
                    <input type="text" id="form" class="form-control justify-content-center"/>
                    <label class="form-label">Endereco</label>
                </div>
                <div class="d-flex form-outline mb-5 justify-content-center text-black my-5 mx-auto">
                    <input type="text" id="form" class="form-control justify-content-center"/>
                    <label class="form-label">Nº</label>
                </div>
                <div class="d-flex form-outline mb-5 justify-content-center text-black my-5 mx-auto">
                    <input type="text" id="form" class="form-control justify-content-center"/>
                    <label class="form-label">Cidade</label>
                </div>
                <div class="d-flex form-outline mb-5 justify-content-center text-black my-5 mx-auto">
                    <input text="text" id="form" class="form-control justify-content-center"/>
                    <label class="form-label">Estado</label>
                </div>
                <button type="submit" class="btn btn-primary btn-block mb-4">Cadastrar</button>
            </form>
        </div>

    </MDBCard>)
}