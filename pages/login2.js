import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { MDBCard } from 'mdb-react-ui-kit';
import Link from 'next/link';
export default function Login2(){
    return(
        <div class="container">
        <div><ul class="nav nav-pills nav-justified mb-3" id="log1" role="tablist">
            <li class="nav-item" role="presentation">
                <Link class="nav-link active"
                id="tab-login"
                data-mdb-toggle="pill"
                href="/login2"
                role="tab"
                aria-controls="pills-login"
                aria-selected="true">Login</Link>
            </li>

            <li class="nav-item" role="presentation">
                <Link class="nav-link"
                id="tab-register"
                data-mdb-toggle="pill"
                href="/clienteCadastroPF"
                role="tab"
                aria-controls="pills-register"
                aria-selected="true">Cadastro PF</Link>
            </li>

            <li class="nav-item" role="presentation">
                <Link class="nav-link"
                id="tab-registerpj"
                data-mdb-toggle="pill"
                href="/cadastroClientePJ"
                role="tab"
                aria-controls="pills-register"
                aria-selected="true">Cadastro PJ</Link>
            </li>
        </ul>
        </div>

<MDBCard id="#pills-login"  className="d-flex justify-content-center text-black my-5 mx-auto">
      <form>
                <div class="form-outline mb-4 justify-content-center">
                    <input type="text" id="form" class="form-control justify-content-center" />
                    <label class="form-label" for="for">CPF</label>
                </div>

                <div class="form-outline mb-4 justify-content-center">
                    <input type="password" id="form2" class="form-control justify-content-center" />
                    <label class="form-label" for="form2">Senha</label>
                </div>

                <div class="row mb-4">
                    <div class="col d-flex justify-content-center">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="form21" checked />
                            <label class="form-check-label" for="form21">Lembre-me</label>
                        </div>
                    </div>

                    <div class="col">
                        <a href="#!">Esqueceu sua Senha</a>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary btn-block mb-4">Entrar</button>

                <div class="text-center">
                    <p>Não possui cadastro?  <a href="#tab-register">Cadastre-se</a></p>
                </div>
            </form>
            </MDBCard>
            
          
            </div>
    )
}