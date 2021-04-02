import React, { useState,   useEffect } from "react";

import {FiChevronRight} from 'react-icons/fi'
import {MdSchool} from 'react-icons/md'
import {MdBusiness}from 'react-icons/md'
import {IoIosAdd} from 'react-icons/io'
import {MdCreate} from 'react-icons/md'
import {MdFormatAlignLeft}from 'react-icons/md'
import {MdDelete}from 'react-icons/md'
import {Link} from  'react-router-dom'
import Modal from './Modal/Modal'
import api from "../../services/api";


export default function EditStudent(){

   const [ show,setShow] = useState(false);
   const [ modalContant,setModalContant] = useState({}); 
   const [allstudent,setAllStudent] = useState([]);
   const [search, setSearch] = useState("");
   const [filteredStudenty, setFilteredStudenty] = useState([]);
   
   const [ usernameStudent,setUsernameStudent] = useState('');
   const [fullnameStudent,setFullnameStudent] = useState('');
   const [countries,setCountryStudent] = useState('');
   const [phoneStudent,setPhoneStudent] = useState('');
   const [roomStudent,setRoomStudent] = useState('');

   useEffect(() => {
     const fetchData = async () => {
       const result =  await api.get(`/students/`)
  
      setAllStudent(result.data);
      console.log(result.data)
     };
     
     fetchData();
   }, []);

   useEffect(() => {
    setFilteredStudenty(
      allstudent.filter((student) =>
        student.surname.toLowerCase().includes(search.toLowerCase())||  student.full_name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, allstudent]);
 
  async function UpdateStudent(e, studentId){
    e.preventDefault();
    console.log("O ID"+studentId)
    const data = {surname: usernameStudent,full_name:fullnameStudent,number_phone:phoneStudent,/*country:countries,rooms:roomStudent*/}
   
    console.log(data);
   

        if( usernameStudent!== ''&& fullnameStudent!==''&& phoneStudent!==''){

            const response = await api.put(`/students/${studentId}`,data)
           
            if(response.status!==400){
              alert('Estudante update com sucesso')
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
                        <div id="for-search">
                          <form 
                          id="form-input-home-page"
                          action=""
                         
                          >

                               <input 
                               placeholder="search students"
                               onChange={(e) => setSearch(e.target.value)}
                               />
                               <button 
                               type="submit"
                                >
                                 Search</button>

                          </form>

                          

                   
                         
                        
                      {
                      filteredStudenty.map(item =>(
                          <div 
                          id="students"
                          onClick={() =>{
                           setShow(true);
                           
                            setModalContant(item);
                          }}
                          key={item.id}
                          >
                              <span id="borda">2</span>
                              <span className="sp">{item.surname} {item.full_name}</span>
                              <div id="univer-home">
                                <MdSchool color="#cbcbd6"size={20}/>
                                <span className="sp">UITS</span>
                              </div>
                              <FiChevronRight color="#cbcbd6"size={20}/>

                          </div>
                        ))
                      }
                       
                            
                    
                   
                       <>
                              
                     
                        <Modal  
                          onClose={() => setShow(false)} 
                          show={show}
                          >

                        <div 
                          id="for-create-student"
                       
                          >
                         
                                <form  id="form-student">
                               
                          
                                <div  className="name-student">
                                    <div   id="surname">
                                        <strong>Username</strong>
                                        <input 
                                         type="text" 
                                         name="" 
                                         id="input-surname"
                                         placeholder={modalContant?.surname}
                                         value={usernameStudent}
                                         onChange={e=>
                                            setUsernameStudent(e.target.value)
                                         }
                                         
                                         />    
                                    </div>
                                    <div id="fullname">
                                        <strong>Full name</strong>
                                        <input 
                                         placeholder={modalContant?.full_name}
                                         type="text" 
                                         name="" 
                                         id="input-fullname"
                                         value={fullnameStudent }
                                         onChange={ e=>
                                                    setFullnameStudent(e.target.value)
                                 
                                         }
                                         />    
                                    </div>

                                </div>
                                

                                <div className="name-student">
                                         <div id="telefone-student">
                                             <strong>Telefone</strong>
                                          <input 
                                           placeholder={modalContant?.number_phone}
                                            type="text" 
                                            name=""
                                            id="input-telefone"
                                            value={phoneStudent }
                                            onChange={ e=>
   
                                                       
                                                       setPhoneStudent(e.target.value)
                                            
   
                                            }
                                            />    
                                         </div>
                                    <div id="country-student">
                                        <strong>País</strong>
                                        <input 
                                         placeholder={modalContant?.country?.countryStudent}
                                        type="text"
                                        name="" 
                                        id="input-country"

                                        value={countries}
                                        onChange={ e=>

                                                   setCountryStudent(e.target.value)
                            

                                        }
                                        />    
                                    </div>
                                </div>

                                <div  className="name-student">
                                         <div id="room-student" >
                                             <strong>Room</strong>
                                            <input
                                             placeholder={modalContant?.rooms?.numberofRoom} 
                                             type="text" 
                                             name="" 
                                             id="input-room"
                                             value={roomStudent }
                                             onChange={ e=>
     
                                                        setRoomStudent(e.target.value)
                                             
     
                                             }
                                             />    
                                         </div>
                                    <div id="hostel-student">
                                        <strong>Hostel</strong>
                                        <input 
                                         placeholder="hostel for students " 
                                         type="text" 
                                         name="" 
                                         id="input-hostel"/>    
                                    </div>
                                  
                                    
                                </div>

                                {console.log("o valor de id"+ modalContant.id)}
                                <button 
                                type="submit"
                                id="submit-student"
                                onClick={(e)=>UpdateStudent(e, modalContant.id) }

                                >
                                    SALVAR
                                </button>

                               
                              
                            </form>
                           
                        </div>
                        
                        
                       
                    
                        

                       </Modal>
                      
                       </>
                      
                          
                          
                          




                        </div>
                       
                        



                      </div>


                   </section>


               </div>
    );
}

