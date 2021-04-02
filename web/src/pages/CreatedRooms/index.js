import './styles.css'
import {useState} from 'react'
import "./styles.css"
import {FiChevronRight} from 'react-icons/fi'
import {MdSchool} from 'react-icons/md'
import {MdBusiness}from 'react-icons/md'
import {IoIosAdd} from 'react-icons/io'
import {MdCreate} from 'react-icons/md'
import {MdFormatAlignLeft}from 'react-icons/md'
import {MdDelete}from 'react-icons/md'
import {Link} from  'react-router-dom'
import api from '../../services/api'
export default function CreateRooms(){

  const [rooms, setRooms] = useState('')
    
  async function CreateNewRooms(e){
    e.preventDefault();
    const data = {numberofRoom:rooms}
   
    console.log(data);

        if(rooms!==''){

            const response = await api.post("/students/rooms",data)
           
            if(response.status!==400){
              alert('Room Criado com sucesso')
            }
            else{
                alert("Rooms already exits")
            }

        } else{
            alert('Error preencha os campos !')
        }
        
        }

    return (
               <div id="home-page">
                   <header id="header-home-page">
                      <div>
                         <span id="das-home-page">Dasboard-hostel 2</span>
                         
                      </div>
                      <div>
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
                            <Link className="sess" to="/home">
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

                                   
                                     <Link to="/allrooms">
                                     <MdFormatAlignLeft className="ic-left" color="#cbcbd6" size={25}/>listar Quartos</Link>

                                   <Link to="/createcountry">
                                   <IoIosAdd className="ic-left" color="#cbcbd6" size={25}/>Criar País</Link>

                                

                               <Link to="/allcountry">
                               <MdFormatAlignLeft className="ic-left" color="#cbcbd6" size={25}/>Listar País</Link>

                            
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
                                         id="input-fullname"
                                         value={rooms}
                                         onChange={e=>setRooms(e.target.value)}
                                         />    
                                    </div>

                                </div>
                                

                                

                              

                                <button 
                                type="submit"
                                id="submit-student"
                                onClick={CreateNewRooms}
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
