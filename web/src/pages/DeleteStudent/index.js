import React, { useState } from "react";
import "./styles.css"
import {FiChevronRight} from 'react-icons/fi'
import {MdSchool} from 'react-icons/md'
import {MdBusiness}from 'react-icons/md'
import {IoIosAdd} from 'react-icons/io'
import {MdCreate} from 'react-icons/md'
import {MdFormatAlignLeft}from 'react-icons/md'
import {MdDelete}from 'react-icons/md'
import {Link} from  'react-router-dom'
import {RiDeleteBin6Line} from 'react-icons/ri'
import Modal from "./ModalConfirm/Modal"

export default function DeleteStudent(){


  const [show, setShow] = useState(false);

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

                                   <Link>
                                   <IoIosAdd className="ic-left" color="#cbcbd6" size={25}/>Adicionar Quarto</Link>

                                    <Link>
                                    <MdDelete className="ic-left" color="#cbcbd6" size={25}/>Deletar Quarto </Link>

                                     <Link>
                                     <MdFormatAlignLeft className="ic-left" color="#cbcbd6" size={25}/>listar Quartos</Link>

                                   <Link>
                                   <IoIosAdd className="ic-left" color="#cbcbd6" size={25}/>Criar País</Link>

                                 <Link>
                                 <MdCreate className="ic-left"color="#cbcbd6" size={25}/>Editar País</Link>

                               <Link>
                               <MdFormatAlignLeft className="ic-left" color="#cbcbd6" size={25}/>Listar País</Link>

                            <Link>
                            <MdDelete  className="ic-left" color="#cbcbd6" size={25}/>Deletar País</Link>

                            
                            </ul>
                        </div>
                        <div id="for-search">
                          <form id="form-input-home-page"action="">
                               <input placeholder="search students"/>
                               <button type="submit">Search</button>

                          </form>


                          <div id="student-table">
                             <div id="students-h">

                                  <span id="borda">2</span>
                                    <span className="sp">Rosada</span>
                                    <div id="univer-home">
                                      <MdSchool color="#cbcbd6"size={20}/>
                                      <span className="sp">UITS</span>
                                    
                                    </div>
                                    <RiDeleteBin6Line 
                                    className="afastar-delete"
                                    color="red"size={20}
                                    onClick={() => setShow(true)}
                                    />
                             </div>
                             <table>
                                    <tr>
                                      <th>Name</th>
                                      <th>Telephone</th>
                                      <th>Rooms</th>
                                      <th>Country</th>
                                    </tr>
                                    <tr>
                                      <td>Luis de Agua</td>
                                      <td>55577854</td>
                                      <td>410</td>
                                      <td>ANGOLA</td>

                                  </tr>
                                    
                             </table>

                          </div>
                          <div id="student-table">
                             <div id="students-h">

                                  <span id="borda">2</span>
                                    <span className="sp">Rosada</span>
                                    <div id="univer-home">
                                      <MdSchool color="#cbcbd6"size={20}/>
                                      <span className="sp">UITS</span>
                                    
                                    </div>
                                    <RiDeleteBin6Line 
                                    onClick={() => setShow(true)}
                                    className="afastar-delete" 
                                    color="red"
                                    size={20}/>
                             </div>
                             <table>
                                    <tr>
                                      <th>Name</th>
                                      <th>Telephone</th>
                                      <th>Rooms</th>
                                      <th>Country</th>
                                    </tr>
                                    <tr>
                                      <td>Luis de Agua</td>
                                      <td>55577854</td>
                                      <td>410</td>
                                      <td>ANGOLA</td>

                                  </tr>
                                    
                             </table>

                          </div>
                          
                        



                        </div>
                       
                        



                      </div>


                   </section>


                   <Modal  onClose={() => setShow(false)} show={show}>
                     <form id="modal-deletar">
                       <div id="title-modal">
                         <h3>Queres Deletar o Estudante ?</h3>
                       </div>
                       <div id="modal-button-confirm">

                         <button 
                         id="confirm"
                         type="submit"
                         >
                           DELETAR
                         </button>
                         <button 
                           type="submit"
                         id="no-confirm">
                           SAIR
                         </button>

                       </div>


                     </form>

                   </Modal>











               </div>
    );
}
