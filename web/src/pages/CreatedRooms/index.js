import './styles.css'

import "./styles.css"
import {FiChevronRight} from 'react-icons/fi'
import {MdSchool} from 'react-icons/md'
import {MdBusiness}from 'react-icons/md'
import {IoIosAdd} from 'react-icons/io'
import {MdCreate} from 'react-icons/md'
import {MdFormatAlignLeft}from 'react-icons/md'
import {MdDelete}from 'react-icons/md'
import {Link} from  'react-router-dom'

export default function CreateStudente(){



    return (
               <div id="home-page">
                   <header id="header-home-page">
                      <div>
                         <span id="das-home-page">Dasboard-hostel 2</span>
                         
                      </div>
                      <div>
                          {/*<input id="input-home-page" placeholder=" search students" type="text"/> */}
                      </div>
                     
                     <div id="avatar-home-page">
                        <div id="icon-univer-page">
                        <MdBusiness size={20}/>
                      <span className="avatar-name-univer">VSUET</span> 
                        </div>
                      <span id="user-page">Luis Água Rosada</span>  
                     </div>

                   </header>

                   <section id="all-student-home-page">
                      <div id="perfil-student-home-page">
                        <div id="option-student-home-page">
                            {/*<span>todos estudantes</span>*/}
                            <ul>
                            <Link className="select" to="/home">
                               Recentes
                            </Link>
                              <Link to="/student">
                               <IoIosAdd className="ic-left" color="#cbcbd6" size={25}/>Adicionar Estudante
                               </Link>

                               <Link to="/editstudent">
                               <MdCreate className="ic-left" color="#cbcbd6" size={25}/>Editar Estudante
                               
                               </Link>
                                
       
                                 <Link to="/allstudent">
                                 <MdFormatAlignLeft className="ic-left" color="#cbcbd6" size={25}/> listar Estudante</Link>

                                  <Link to="/deletstudent">
                                  <MdDelete className="ic-left" color="#cbcbd6" size={25}/> Deletar Estudante</Link>

                                   <Link to="/createrooms">
                                   <IoIosAdd className="ic-left" color="#cbcbd6" size={25}/>Adicionar Quarto</Link>

                                    <Link to="/deleterooms">
                                    <MdDelete className="ic-left" color="#cbcbd6" size={25}/>Deletar Quarto </Link>

                                     <Link to="/allrooms">
                                     <MdFormatAlignLeft className="ic-left" color="#cbcbd6" size={25}/>listar Quartos</Link>

                                   <Link to="/createcountry">
                                   <IoIosAdd className="ic-left" color="#cbcbd6" size={25}/>Criar País</Link>

                                 <Link to="/editercountry">
                                 <MdCreate className="ic-left"color="#cbcbd6" size={25}/>Editar País</Link>

                               <Link to="/allcountry">
                               <MdFormatAlignLeft className="ic-left" color="#cbcbd6" size={25}/>Listar País</Link>

                            <Link to="/deletercountry">
                            <MdDelete  className="ic-left" color="#cbcbd6" size={25}/>Deletar País</Link>

                            
                            </ul>
                        </div>

                        <div id="for-create-student">
                            <form id="form-student">
                                <div className="name-student">
                                   
                                    <div id="fullname">
                                        <strong>Rooms</strong>
                                        <input 
                                         placeholder="Rooms"
                                         type="text" 
                                         name="" 
                                         id="input-fullname"/>    
                                    </div>

                                </div>
                                

                                

                              

                                <button 
                                type="submit"
                                id="submit-student"
                                >
                                    SALVAR
                                </button>


                            </form>






                        </div>
                         

                      </div>


                   </section>














               </div>
    );
}
