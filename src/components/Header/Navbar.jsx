import {Gauge, SquaresFour, CaretDown ,ArrowSquareIn} from 'phosphor-react'
import {Link} from 'react-router-dom'

export function Navbar(){
    return (
        <nav>
            <div className="container">
                <ul className="nav-links">
                    <li className="nav-item">
                        <Link to="/dashboard">
                            <Gauge size={20} />
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/relatorios">
                            <SquaresFour size={20} />
                            <span>Relatórios</span>
                            {/* <div className="dropdow-icon">
                                <CaretDown className='dropdow-icon' size={20} />
                            </div> */}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/importar">
                            <ArrowSquareIn size={20}/>
                            <span>Importar</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}