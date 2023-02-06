import { MDBCard } from "mdb-react-ui-kit"
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
export default function AbreConta(){
    return(
        <MDBCard >

        <h4>Pesquisa de Conta Por CPF</h4>

            <form>
                <div class="d-flex form-outline mb-4 justify-content-center text-black my-5 mx-auto">
                    <input type="text" id="form" class="form-control justify-content-center"/>
                    <label class="form-label">CPF</label>
                </div> 
                    <button type="submit" class="btn btn-primary btn-block mb-4">Pesquisa Conta</button>

                <div class="d-flex form-outline mb-4 justify-content-center">
                    <input type="text" id="form" class="form-control justify-content-center"/>
                    <label class="form-label">N Conta</label>
                </div>

                <div class="d-flex form-outline mb-4 justify-content-center">
                    <input type="text" id="form" class="form-control justify-content-center"/>
                    <label class="form-label">Agencia</label>
                </div>
            </form>
        </MDBCard>

        

        

    )
}